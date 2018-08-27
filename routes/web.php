<?php

// SEND ALL REQUESTS TO FRONTEND (VUE ROUTER)
Route::get('/{all}', function () {
    return view('pages.index');
})->where('all', '.*');
