<?php

namespace Database\Factories;

use App\Models\Major;
use App\Models\University;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'major_id' => Major::inRandomOrder()->first()?->id ?? 1,
            "name" => $this->faker->word,
            "content" => $this->faker->paragraph,
            'access' => $this->faker->numberBetween(0, 100),
            'semester' => $this->faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8]),
            'created_by' => User::inRandomOrder()->first()?->id ?? 1,
            'updated_by' => User::inRandomOrder()->first()?->id ?? 1
        ];
    }
}
