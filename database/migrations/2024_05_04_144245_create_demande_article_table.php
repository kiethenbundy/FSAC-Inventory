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
        Schema::create('demande_article', function (Blueprint $table) {
            $table->id();
            $table->timestamp('date');
            $table->foreignId('article')->constrained('articles');
            $table->foreignId('bon_livraison')->constrained('bon_livraison');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demande_article');
    }
};
