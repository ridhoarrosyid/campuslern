<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CampuslernController extends Controller
{
    function home()
    {
        return Inertia::render('CampusLern/Home');
    }

    function list()
    {
        return Inertia::render('CampusLern/List');
    }

    function detail()
    {
        return Inertia::render('CampusLern/Detail');
    }
}
