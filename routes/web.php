<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CourseContoller;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });



Route::prefix('/admin')->group(function () {
    Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');
    Route::get('/create', [AdminController::class, 'addCourse'])->name('addCourse');
    Route::get('/{courseId}', [AdminController::class, 'detailCourse'])->name('detailCourse');
    Route::post('/createCourse', [AdminController::class, 'createCourse'])->name('createCourse');
    Route::post('/createUniversity', [AdminController::class, 'createUniversity'])->name('createUniversity');
    Route::post('/createMajor', [AdminController::class, 'createMajor'])->name('createMajor');
});

Route::get("/", [CourseContoller::class, "majors"])->name('home');
Route::get('/{majorId}', [CourseContoller::class, 'courseList'])->name("list");
Route::get('/{majorId}/{courseId}', [CourseContoller::class, 'courseDetail'])->name('detail');



require __DIR__ . '/auth.php';
