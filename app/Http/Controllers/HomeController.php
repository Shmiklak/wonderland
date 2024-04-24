<?php

namespace App\Http\Controllers;

use App\Models\GameResult;
use App\Models\Questions;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
        return Inertia::render('Home');
    }

    public function signUp() {
        return Inertia::render('SignUp');
    }

    public function dashboard() {
        return Inertia::render('Dashboard');
    }

    public function vitalina() {
        return Inertia::render('Vitalina');
    }

    public function math() {
        $leaderboard = GameResult::where('game_code', 'math')->with('user')->orderBy('result', 'DESC')->get();
        return Inertia::render('Math', [
            'leaderboard' => $leaderboard
        ]);
    }

    public function languages() {
        return Inertia::render('UnderConstruction');
    }

    public function game($code) {
        $questions = Questions::where('game_code', $code)->inRandomOrder()->limit(10)->get();
        return Inertia::render('Game', [
            'code' => $code,
            'questions' => $questions
        ]);
    }
}
