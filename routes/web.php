<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use app\Http\Controllers\FournisseursController;
use app\Http\Controllers\BLController;
use app\Http\Controllers\BonComController;
use app\Http\Controllers\MouvementStockController;

/*Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
*/
Route::redirect('/', '/dashboard', 301);


Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/dashboard', fn () => Inertia::render('Dashboard')) 
        ->name('dashboard');
     
    Route::resource('user', UserController::class);    
    Route::resource('fournisseurs', FournisseursController::class);
    Route::resource('BL', BLController::class);
    Route::resource('BonCom', BonComController::class);
    Route::resource('MouvementStock', MouvementStockController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
