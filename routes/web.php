<?php

// FOR THOSE WHICH DON'T HAVE PARAMS
Route::get('/{path?}', function () {
    return view('pages.index');
});

// WHICH HAVE PARAMS
Route::get('/user/{id?}', function () {
    return view('pages.index');
});

