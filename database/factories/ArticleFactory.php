<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(),
            'description' => fake()->realText(),
            'image_path' => fake()->imageUrl(),
            'prix' => fake()->random_int(3000,20000),
            'seuil' => fake()->random_int(1,500),
            'assigned_fournisseur_id' => fake()->random_int(1,50),
            'created_at' => time(),
            'updated_at' => time(),
        ];
    }
}
