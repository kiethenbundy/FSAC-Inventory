<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Fournisseurs;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Ihab',
            'email' => 'IHAB@example.com',
            'usertype' => 'admin',
            'password' => bcrypt('12345678'),
            'email_verified_at' => time(),
            'destination' => 0
        ]);

        /*Fournisseurs::factory()->count(30)
        ->hasBL(30)
        ->create();*/
    }
}
