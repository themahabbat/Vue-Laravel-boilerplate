<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    protected function authenticate($credentials, callable $success = null, callable $error = null)
    {
        $http = new \GuzzleHttp\Client();

        try {
            $response = $http->post(env('APP_URL') . '/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => 2,
                    'client_secret' => env('CLIENT_SECRET'),
                    'username' => $credentials['email'],
                    'password' => $credentials['password']
                ]
            ]);
            if ($success) return $success($response);
            else return $response->getBody();
        } catch (\GuzzleHttp\Exception\BadResponseException $e) {

            if ($error) return $error($e);
            else {
                if ($e->getCode() === 400)
                    return response()->json(['message' => 'Invalid request. Please enter email or password!'], $e->getCode());

                else if ($e->getCode() === 401)
                    return response()->json(['message' => 'Your credentials are incorrect. Please try again'], $e->getCode());

                return response()->json(['message' => 'Something went wrong on the server.'], $e->getCode());
            }


        }
    }

    public function login(Request $req)
    {
        return $this->authenticate($req->only('email','password'));
    }

    public function register(Request $req)
    {

        $req->validate([
            'name' => 'required|string|max:191',
            'email' => 'required|string|email|max:191|unique:users',
            'password' => 'required|string|min:6|max:191'
        ]);

        User::create([
            'name' => $req->name,
            'email' => $req->email,
            'password' => Hash::make($req->password),
        ]);

        return $this->authenticate($req->only('email', 'password'));

    }

    public function logout()
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json(['message' => 'Logged out successfully.'], 200);
    }

}
                