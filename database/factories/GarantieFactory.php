<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Garantie>
 */
class GarantieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nbr_annee' => fake()->random_int(1,24),
            'date_debut' => fake()->dateTimeBetween('now', '+1 year'),
        ];
    }
}
