<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/sign-up', [HomeController::class, 'signUp'])->name('sign_up');
Route::get('/dashboard', [HomeController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/vitalina', [HomeController::class, 'vitalina'])->middleware(['auth', 'verified'])->name('vitalina');
Route::get('/math', [HomeController::class, 'math'])->middleware(['auth', 'verified'])->name('math');
Route::get('/language', [HomeController::class, 'languages'])->middleware(['auth', 'verified'])->name('language');
Route::get('/geo', [HomeController::class, 'languages'])->middleware(['auth', 'verified'])->name('geo');
Route::get('/game/{code}', [HomeController::class, 'game'])->middleware(['auth', 'verified'])->name('game');

require __DIR__.'/auth.php';
