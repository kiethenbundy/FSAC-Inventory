<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BL>
 */
class BLFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'bl' => fake()->sentence(),
            'quantitelivre' => fake()->random_int(20,500),
            'MouvementStock' => fake()->randomElement(['sortie','entree']),
            'commande' => fake()->random_int(1,50),
            'fournit_par' => fake()->random_int(1,50),
            'commande' => fake()->random_int(1,50),
            'livraison' => fake()->random_int(1,50),
        ];
    }
}
