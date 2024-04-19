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
            'nom' => fake()->sentence(),
            'coordonnees' => fake()->realText(),
            'num' => fake()->numberBetween(0,99999999),
            'email' => fake()->sentence(),
            'date_creation' => fake()->dateTimeBetween('now', '+1 year'),
        ];
    }
}
