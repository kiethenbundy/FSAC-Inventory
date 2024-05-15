<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Fournisseurs>
 */
class FournisseursFactory extends Factory
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
            'coordonnees' => fake()->realText(),
            'num' => fake()->numberBetween(0,99999999),
            'email' => fake()->sentence(),
            'commande' => fake()->random_int(1,50),
            'bon_livraison' => fake()->random_int(1,50),
            'livraison' => fake()->random_int(1,50),
            'date_creation' => fake()->dateTimeBetween('now', '+1 year'),
        ];
    }
}
