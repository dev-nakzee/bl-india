<?php

namespace App\Http\Controllers\Api\v1\Clients\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\JsonResponse;
use Mews\Captcha\Captcha;
use App\Models\Client;


class RegisterController extends Controller
{
    //
    public function register(Request $request)
    {
        //

    }

    public function reloadCaptcha(Request $request)
    {
        return response()->json(['captcha' => captcha_img()]);
    }
}
