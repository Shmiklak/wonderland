<?php

namespace App\Http\Controllers;

use App\Models\GameResult;
use Illuminate\Http\Request;

class GameResultsController extends Controller
{
    public function index(Request $request) {
        $body = json_decode($request->getContent());
        $result = GameResult::create([
           'user_id' => $body->user_id,
           'game_code' => $body->game_code,
           'result' => $body->result
        ]);
        return response()->json([
           'result' => $result
        ]);
    }
}
