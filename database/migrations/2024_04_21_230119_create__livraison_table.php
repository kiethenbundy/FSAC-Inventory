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
        Schema::create('_livraison', function (Blueprint $table) {
            $table->id();
            $table->integer('quantite');
            $table->integer('retard');
            $table->foreignId('commande')->constrained('marche');
            $table->foreignId('garantie')->constrained('garantie');
            $table->foreignId('fournisseur')->constrained('fournisseur');
            $table->foreignId('article')->constrained('articles');
            $table->foreignId('bon_livraison')->constrained('bon_livraison');
            $table->timestamp('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_livraison');
    }
};
