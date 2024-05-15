<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Marche>
 */
class MarcheFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'appel_offre'=> fake()->sentence(),
            'reference'=> fake()->sentence(),
            'titre'	=> fake()->sentence(),
            'status'=> fake()->randomElement(['en_cours','livre','non_livre']),
        	'num_lot'=> fake()->numberBetween(1,20),	
            'quantite'=> fake()->numberBetween(1,500),
            'date'	=> fake()->dateTimeBetween('now', '+1 year'),
            'article'=> fake()->random_int(1,50),
            'mouvementstock'=> fake()->random_int(1,50),
            'bon_livraison'=> fake()->random_int(1,50),	

        ];
    }
}
