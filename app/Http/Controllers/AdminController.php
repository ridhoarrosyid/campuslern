<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        $courses = Course::with(['major:id,name,university_id', "major.university:id,name"])->paginate(10, ['id', 'name', 'semester', 'major_id']);
        return Inertia::render("CampusLern/Admin/Dashboard", ['courses' => $courses]);
    }

    public function detailCourse(string $courseId)
    {
        $course = Course::where('id', $courseId)->with('links:id,course_id,display,tag,address')->first(["id", 'name', 'content']);
        return Inertia::render("CampusLern/Admin/DetailAdmin", ['course' => $course]);
    }
}
