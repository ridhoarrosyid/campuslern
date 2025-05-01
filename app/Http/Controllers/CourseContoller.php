<?php

namespace App\Http\Controllers;

use App\Models\Major;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseContoller extends Controller
{
    public function majors()
    {
        $majors = Major::with(['university', 'keyTakeways']);
        return $majors;
        // return Inertia::render("CampusLern.Home");
    }
}
