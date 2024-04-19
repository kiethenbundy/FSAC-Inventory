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
            'Boncomm' => fake()->realText(),
            'MouvementStock' => fake()->randomElement(['sortie']),
            'dateLivraison' => fake()->dateTimeBetween('now', '+1 year'),
        ];
    }
}
