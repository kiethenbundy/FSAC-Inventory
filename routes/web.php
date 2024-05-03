<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use app\Http\Controllers\FournisseursController;
use app\Http\Controllers\BLController;
use app\Http\Controllers\BonComController;
use App\Http\Controllers\MarcheController;
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


Route::middleware(['auth','verified','admin'])->prefix('/admin')->namespace('App\Http\Controllers\Admin')->group(function(){


    Route::group(['middleware' => ['admin']] , function () {

       Route::get('dashboard',[AdminController::class,'index']);
    
        
       Route::resource('mouvementstock', MouvementStockController::class);
       
       Route::get('/article/mesArticles', [ArticleController::class, 'mesArticles'])
          ->name('article.mesArticles');
       
       Route::resource('article', ArticleController::class);
       
       Route::resource('user', UserController::class);   
       
       Route::resource('fournisseurs', FournisseursController::class);
       
       Route::resource('BL', BLController::class);
       
       Route::resource('Marche', MarcheController::class);
    });
});

Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/dashboard', fn () => Inertia::render('Dashboard')) 
        ->name('dashboard');
     

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
