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
        Schema::create('_mouvement_stock', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('quantite');
            $table->timestamp('date_mouvementstock');
            $table->string('reference');
            $table->integer('total');
            $table->foreignId('article_mouvementstok')->constrained('article');
            $table->foreignId('fournit')->constrained('fournisseurs');
            $table->foreignId('destination')->constrained('destination');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_mouvement_stock');
    }
};
