<?php

namespace Database\Factories;

use App\Models\University;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Major>
 */
class MajorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'university_id' => University::inRandomOrder()->first()?->id ?? 1,
            "name" => $this->faker->word,
            'description' => $this->faker->paragraph,
            'created_by' => User::inRandomOrder()->first()?->id ?? 1,
            'updated_by' => User::inRandomOrder()->first()?->id ?? 1
        ];
    }
}
