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
        Schema::create('_marche', function (Blueprint $table) {
            $table->id();
            $table->string('appel_offre');
            $table->string('reference');
            $table->string('titre');
            $table->string('status');
            $table->integer('num_lot');
            $table->integer('quantite');
            $table->timestamp('date');
            $table->foreignId('destination')->constrained('destination');
            $table->foreignId('article')->constrained('articles');
            $table->foreignId('mouvementstock')->constrained('mouvementstock');
            $table->foreignId('bon_livraison')->constrained('bon_livraison');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_marche');
    }
};
