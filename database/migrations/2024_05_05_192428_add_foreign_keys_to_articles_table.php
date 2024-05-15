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
        Schema::table('articles', function (Blueprint $table) {
            $table->foreignId('assigned_fournisseur_id')->constrained('fournisseurs');
            $table->foreignId('categorie')->constrained('categorie');
            $table->foreignId('garantie')->constrained('garantie');
            $table->foreignId('codebarre')->constrained('codebarre');
            $table->foreignId('mouvementstock')->constrained('mouvementstock');
            $table->foreignId('marche')->constrained('marche');
            $table->foreignId('demande_article')->constrained('demande_article');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('articles', function (Blueprint $table) {
            //
        });
    }
};
