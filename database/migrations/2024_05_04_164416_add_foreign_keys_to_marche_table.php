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
        Schema::table('marche', function (Blueprint $table) {
            $table->foreignId('article')->constrained('articles');
            $table->foreignId('mouvementstock')->constrained('mouvement_stock');
            $table->foreignId('bon_livraison')->constrained('bon_livraison');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('marche', function (Blueprint $table) {
            //
        });
    }
};
