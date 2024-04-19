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
        Schema::create('b_l_s', function (Blueprint $table) {
            $table->id();
            $table->string('bl');
            $table->foreignId('mbc')->constrained('mbc');
            $table->foreignId('mvs')->constrained('mouvement-stock');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('b_l_s');
    }
};
