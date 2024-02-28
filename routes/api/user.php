<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Client routes
Route::get('/me', function(){
    return response()->json(['success'], 200);
});

Route::group(['middleware' => ['auth:user-api', 'user']], function () {
    // Client auth routes
});