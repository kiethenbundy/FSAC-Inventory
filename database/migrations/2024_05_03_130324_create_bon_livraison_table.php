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
        Schema::create('bon_livraison', function (Blueprint $table) {
            $table->id();
            $table->string('bl');
            $table->integer('quantitelivre');
            $table->foreignId('commande')->constrained('marche');
            $table->foreignId('mouvementstock')->constrained('mouvement_stock');
            $table->foreignId('fournit_par')->constrained('fournisseurs');
            $table->foreignId('livraison')->constrained('livraison');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bon_livraison');
    }
};
