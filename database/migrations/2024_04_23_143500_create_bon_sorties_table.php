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
        Schema::create('bon_sorties', function (Blueprint $table) {
            $table->id();
            $table->string('num_inventaire');
            $table->string('num_lot');
            $table->integer('quantite');
            $table->foreignId('destination')->constrained('destination');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bon_sorties');
    }
};
