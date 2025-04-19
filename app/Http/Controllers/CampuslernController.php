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

    function detailAdmin()
    {
        return Inertia::render('CampusLern/DetailAdmin');
    }

    function dashboard()
    {
        return Inertia::render('CampusLern/Dashboard');
    }

    function create()
    {
        return Inertia::render('CampusLern/Create');
    }

    function edit()
    {
        return Inertia::render("CampusLern/Edit");
    }
}
