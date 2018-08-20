<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title', config('app.name'))</title>

        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
        @stack('head')
    </head>
    <body>
        <div id="-app">
            @yield('content')
        </div>
        
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
        <script src="https://raw.githubusercontent.com/HubSpot/pace/v1.0.0/pace.min.js"></script>
        <script src="{{ asset('js/main.js') }}"></script>
        @stack('foot')
    </body>
</html>
