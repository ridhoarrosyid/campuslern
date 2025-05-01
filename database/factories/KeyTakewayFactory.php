<?php

namespace Database\Factories;

use App\Models\Major;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KeyTakeway>
 */
class KeyTakewayFactory extends Factory
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
            'name' => $this->faker->sentence(3),
            'created_by' => User::inRandomOrder()->first()?->id ?? 1,
            'updated_by' => User::inRandomOrder()->first()?->id ?? 1
        ];
    }
}
