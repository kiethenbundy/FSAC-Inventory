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
        Schema::create('fournisseurs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('coordonnees');
            $table->string('num')->unique();
            $table->string('email')->unique()->nullable();
            $table->foreignId('marche')->constrained('marche');
            $table->foreignId('bon_livraison')->constrained('bon_livraison');
            $table->foreignId('livraison')->constrained('livraison');
            $table->timestamp('date_creation')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fournisseurs');
    }
};
