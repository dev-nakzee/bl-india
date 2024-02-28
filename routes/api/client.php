<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\v1\Clients\Auth\RegisterController;

// Client routes
Route::controller(RegisterController::class)->group( function () {
    Route::get('/reload-captcha', 'reloadCaptcha')->name('client.captcha');
    Route::post('/register', 'register')->name('client.register');
});
Route::group(['middleware' => ['auth:user-api', 'client']], function () {
    // Client auth routes
});