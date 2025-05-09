<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Factory>
 */
class LinkFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "course_id" => Course::inRandomOrder()->first()?->id ?? 1,
            'tag' => $this->faker->randomElement(["pdf", 'video', "image", "voice"]),
            'display' => $this->faker->sentence(3),
            "address" => $this->faker->url,
            'created_by' => User::inRandomOrder()->first()?->id ?? 1,
            'updated_by' => User::inRandomOrder()->first()?->id ?? 1
        ];
    }
}
