<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('phone')->unique();
            $table->string('phone_verified_at')->nullable();
            $table->string('password');
            $table->enum('user_type', ['User', 'Manager', 'Admin'])->default('user');
            $table->string('avatar')->nullable();
            $table->enum('status', ['Online', 'Offline', 'Away'])->default('Offline');
            $table->string('email_verification_token')->nullable();
            $table->timestamp('email_token_validity')->nullable();
            $table->string('otp')->nullable();
            $table->timestamp('otp_validity')->nullable();
            $table->ipAddress('last_login_ip')->nullable();
            $table->timestamp('last_login_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
