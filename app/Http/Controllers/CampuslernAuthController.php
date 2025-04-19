<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CampuslernAuthController extends Controller
{
    function login()
    {
        return Inertia::render('CampusLern/Login');
    }
}
