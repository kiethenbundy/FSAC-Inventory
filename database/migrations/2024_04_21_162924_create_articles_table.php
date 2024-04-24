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
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('designiation')->nullable();
            $table->integer('prix');
            $table->string('image_path')->nullable();
            $table->string('seuil');
            $table->foreignId('assigned_fournisseur_id')->constrained('fournisseurs');
            $table->foreignId('categorie')->constrained('categorie');
            $table->foreignId('garantie')->constrained('garantie');
            $table->foreignId('codebarre')->constrained('codebarre');
            $table->foreignId('mouvementstock')->constrained('mouvementstock');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
