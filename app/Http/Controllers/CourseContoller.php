<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Major;
use App\Models\University;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseContoller extends Controller
{
    public function majors(Request $request)
    {
        $search = $request->query('search');
        $univ = $request->query('univ');

        $majors = Major::select('id', 'name', 'description', 'university_id')->when($search, function ($query, $search) {
            $query->where('name', 'LIKE', "%$search%");
        })->when($univ, function ($query, $univ) {
            $query->where('university_id', "=", "$univ");
        })->with([
            'university:id,name',
            'keyTakeaways:id,major_id,name'
        ])->paginate(6);

        $selectedUniv = ['id' => 0, 'name' => "Semua"];
        if ($univ !== 0 && $univ !== null) {
            $selectedUniv = University::where('id', "=", "$univ")->first(['id', 'name']);
        }

        $universities = University::get(['id', 'name'])->toArray();
        $universities = array_merge([['id' => 0, 'name' => "Semua"]], $universities);

        return Inertia::render('CampusLern/Home', ['majors' => $majors, 'initialSearch' => $search, 'univData' => $universities, "firstUnivSelect" => $selectedUniv]);
    }

    public function courseList(string $majorId, Request $request)
    {
        $semester = $request->query('semester');
        if (!$semester) $semester = 1;

        $courses = Course::select('id', 'major_id', 'name', 'access', 'created_at', 'updated_at')->where('major_id', $majorId)->where('semester', $semester)->paginate(10);
        $major = Major::select('id', 'university_id', 'name')->where('id', $majorId)->with('university:id,name')->first();
        if (!$major) return "notfound";

        return Inertia::render('CampusLern/List', ['courses' => $courses, 'major' => $major, 'semester' => $semester]);
    }

    public function courseDetail(string $majorId, string $courseId)
    {
        $course = Course::where('id', $courseId)->where('major_id', $majorId)->with(['links:id,course_id,tag,display,address'])->first(["id", 'name', 'content',]);
        if (!$course) return "not found";


        return Inertia::render('CampusLern/Detail', ['course' => $course]);
    }
}
