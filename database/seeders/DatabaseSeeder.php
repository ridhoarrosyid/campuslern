<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\KeyTakeaway;
use App\Models\Link;
use App\Models\Major;
use App\Models\University;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        University::factory()->count(8)->create();
        Major::factory()->count(30)->create();
        Course::factory()->count(60)->create();
        KeyTakeaway::factory()->count(60)->create();
        Link::factory()->count(100)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
