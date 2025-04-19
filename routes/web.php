<?php

use App\Http\Controllers\CampuslernAuthController;
use App\Http\Controllers\CampuslernController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/campuslern', [CampuslernController::class, 'home']);
Route::get('/campuslern/list', [CampuslernController::class, "list"]);
Route::get('/campuslern/detail', [CampuslernController::class, "detail"]);
Route::get('/campuslern/login', [CampuslernAuthController::class, 'login']);
Route::get('/campuslern/create', [CampuslernController::class, 'create']);
Route::get('/campuslern/edit', [CampuslernController::class, 'edit']);
Route::get('/campuslern/detail-admin', [CampuslernController::class, 'detailAdmin']);
Route::get('/campuslern/dashboard', [CampuslernController::class, 'dashboard']);



require __DIR__ . '/auth.php';
