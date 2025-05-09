<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\KeyTakeaway;
use App\Models\Link;
use App\Models\Major;
use App\Models\University;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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

    public function addCourse()
    {
        $universities = University::get(['id', 'name'])->toArray();
        $majors = Major::get(['id', 'name', 'university_id'])->toArray();
        $dataSelects = ['universities' => $universities, 'majors' => $majors];
        return Inertia::render('CampusLern/Admin/Create', ['dataSelects' => $dataSelects]);
    }

    public function createCourse(Request $request)
    {
        $validate = $request->validate([
            'course_name' => 'required|string|max:40',
            'course_content' => 'required|string|max:255',
            'university_id' => 'required|integer',
            'major_id' => 'required|integer',
            'course_semester' => 'required|integer',
            'links' => 'array|in_array:address,display,tag',
            'links.*.address' => 'string|max:255',
            'links.*.display' => 'string|max:255',
            'links.*.tag' => 'string|max:255'
        ]);
        $course = Course::create([
            'major_id' => $validate['major_id'],
            'name' => $validate['course_name'],
            'content' => $validate['course_content'],
            'semester' => $validate['course_semester']
        ]);
        if (!empty($validate['links'])) {
            foreach ($validate['links'] as $link) {
                $course->links()->create([
                    'address' => $link['address'],
                    'display' => $link['display'],
                    'tag' => $link['tag']
                ]);
            }
        }
        return redirect()->back()->with('success', 'Course berhasil ditambahkan.');
    }

    public function createUniversity(Request $request)
    {
        $validate = $request->validate(['university_name' => 'required|string|max:50']);
        University::create([
            'name' => $validate['university_name']
        ]);
        return redirect()->route('addCourse')->with('success', 'Universitas berhasil ditambahkan');
    }

    public function createMajor(Request $request)
    {
        $validate = $request->validate([
            'major_name' => 'required|string|max:255',
            'major_university_id' => 'required|integer',
            'major_description' => 'required|string|max:255',
            'major_keyTakeaways' => 'array',
            'major_keyTakeaways.*' => "string|max:50"
        ]);
        $major = new Major([
            'name' => $validate['major_name'],
            'university_id' => $validate['major_university_id'],
            'description' => $validate['major_description']
        ]);
        $major->created_by = 1;
        $major->updated_by = 1;
        $major->save();

        if (!empty($validate['major_keyTakeaways'])) {
            foreach ($validate['major_keyTakeaways'] as $key) {
                $keyTakeaway = new KeyTakeaway([
                    'name' => $key,
                    'major_id' => $major->id
                ]);
                $keyTakeaway->created_by = 1;
                $keyTakeaway->updated_by = 1;
                $keyTakeaway->save();
            }
        }
        return redirect()->route('addCourse')->with('success', 'Major berhasil ditambahkan');
    }
}
