<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    
    public function login(Request $req)
    {
        
        $http = new \GuzzleHttp\Client();
        
        try {
            $reponse = $http->post(env('APP_URL') . '/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => 2,
                    'client_secret' => env('CLIENT_SECRET'),
                    'username' => $req->email,
                    'password' => $req->password
                    ]
                    ]);
                    return $reponse->getBody();
                } catch (\GuzzleHttp\Exception\BadResponseException $e) {
                    
                    if ($e->getCode() === 400)
                    return response()->json(['message' => 'Invalid request. Please enter email or password!'], $e->getCode());
                    
                    else if ($e->getCode() === 401)
                    return response()->json(['message' => 'Your credentials are incorrect. Please try again'], $e->getCode());
                    
                    return response()->json(['message' => 'Something went wrong on the server.'], $e->getCode());
                }
                
                
            }
            
            public function register(Request $req)
            {
                
                $req->validate([
                    'name' => 'required|string|max:191',
                    'email' => 'required|string|email|max:191|unique:users',
                    'password' => 'required|string|min:6|max:191'
                    ]);
                    
                    return User::create([
                        'name' => $req->name,
                        'email' => $req->email,
                        'password' => Hash::make($req->password),
                        ]);
                        
                    }
                    
                    public function logout()
                    {
                        auth()->user()->tokens->each(function ($token, $key) {
                            $token->delete();
                        });
                        
                        return response()->json(['message' => 'Logged out successfully.'], 200);
                    }
                    
                }
                