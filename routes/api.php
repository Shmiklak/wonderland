<?php

use App\Http\Controllers\GameResultsController;
use App\Http\Controllers\VitalinaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/vitalina', [VitalinaController::class, 'index'])->name('chat_gpt');
Route::post('/save-game-result', [GameResultsController::class, 'index'])->name('game_results');
