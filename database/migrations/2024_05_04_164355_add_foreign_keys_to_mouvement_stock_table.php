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
        Schema::table('mouvement_stock', function (Blueprint $table) {
            $table->foreignId('article_mouvementstok')->constrained('articles');
            $table->foreignId('fournit')->constrained('fournisseurs');
            $table->foreignId('destination')->constrained('destination');
            $table->foreignId('bon_livraison')->constrained('bon_livraison');
            $table->foreignId('bon_sortie')->constrained('bon_sorties');
            $table->foreignId('user')->constrained('users');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('mouvement_stock', function (Blueprint $table) {
            //
        });
    }
};
