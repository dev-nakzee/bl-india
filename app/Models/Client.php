<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;

class Client extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'user_type',
        'password',
        'address',
        'city',
        'state',
        'zip',
        'country',
        'organization',
        'industry',
        'position',
        'website',
        'avatar',
        'status',
        'email_verified_at',
        'phone_verified_at',
        'email_verification_token',
        'email_token_validity',
        'otp',
        'otp_validity',
    ];


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'email_verified_at',
        'phone_verified_at',
        'otp',
        'otp_validity',
        'email_verification_token',
        'email_token_validity',
    ];

        /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'phone_verified_at' => 'datetime',
        'last_login_at' => 'datetime',
        'email_token_validity' => 'datetime',
        'otp_validity' => 'datetime',
        'password' => 'hashed',
    ];
}
