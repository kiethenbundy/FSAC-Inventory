<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MouvementStockController;
use App\Http\Controllers\FournisseursController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\DemandeController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\MarcheController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard', 301)
    ->name('/dashboard');


Route::middleware(['auth', 'verified', 'admin'])->prefix('/admin')->namespace('App\Http\Controllers\Admin')->group(function () {



    Route::group(['prefix' => 'user'], function () {

        Route::get('/', [AdminController::class, 'index'])
            ->name('/user');

        Route::get('/create', [AdminController::class, 'create'])
            ->name('/createuser');

        Route::post('/store', [AdminController::class, 'store'])
            ->name('/storeuser');

        Route::get('/show', [AdminController::class, 'show'])
            ->name('/showuser');

        Route::get('/edit', [AdminController::class, 'edit'])
            ->name('/edituser');

        Route::put('/update', [AdminController::class, 'update'])
            ->name('/updateuser');

        Route::delete('/destroy', [AdminController::class, 'destroy'])
            ->name('/destroyuser');
    });

    Route::post('/mouvementstock/store', [MouvementStockController::class, 'store'])
        ->name('/store');

    Route::group(['prefix' => 'mouvementstock'], function () {

    Route::get('/', [MouvementStockController::class, 'index'])
        ->name('/mouvementstock');

    Route::get('/create', [MouvementStockController::class, 'create'])
        ->name('/createmouvementstock');


    Route::get('/show', [MouvementStockController::class, 'show'])
        ->name('/showmouvementstock');

    Route::get('/edit', [MouvementStockController::class, 'edit'])
        ->name('/editmouvementstock');

    Route::put('/update', [MouvementStockController::class, 'update'])
        ->name('/updatemouvementstock');

    Route::delete('/destroy', [MouvementStockController::class, 'destroy'])
        ->name('/destroymouvementstock');
});





    Route::group(['prefix' => 'article'], function () {
        Route::get('/', [ArticleController::class, 'index'])
            ->name('/article');

        Route::get('/create', [ArticleController::class, 'create'])
            ->name('article.create');

        Route::post('/store', [ArticleController::class, 'store'])
            ->name('article.store');

        Route::get('/show', [ArticleController::class, 'show'])
            ->name('article.show');

        Route::get('/edit', [ArticleController::class, 'edit'])
            ->name('article.edit');

        Route::put('/update', [ArticleController::class, 'update'])
            ->name('article.update');

        Route::delete('/destroy', [ArticleController::class, 'destroy'])
            ->name('article.destroy');
    });





    Route::group(['prefix' => 'fournisseurs'], function () {
        Route::get('/', [FournisseursController::class, 'index'])
            ->name('/fournisseurs');

        Route::get('/create', [FournisseursController::class, 'create'])
            ->name('createfournisseurs');

        Route::post('/store', [FournisseursController::class, 'store'])
            ->name('storefournisseurs');

        Route::get('/show', [FournisseursController::class, 'show'])
            ->name('showfournisseurs');

        Route::get('/edit', [FournisseursController::class, 'edit'])
            ->name('editfournisseurs');

        Route::put('/update', [FournisseursController::class, 'update'])
            ->name('updatefournisseurs');

        Route::delete('/destroy', [FournisseursController::class, 'destroy'])
            ->name('destroyfournisseurs');
    });









    Route::group(['prefix' => 'marche'], function () {
        Route::get('/', [MarcheController::class, 'index'])
            ->name('/marche');

        Route::get('/create', [MarcheController::class, 'create'])
            ->name('/creermarche');

        Route::post('/store', [MarcheController::class, 'store'])
            ->name('storemarche');

        Route::get('/show', [MarcheController::class, 'show'])
            ->name('showmarche');

        Route::get('/edit', [MarcheController::class, 'edit'])
            ->name('/editmarche');

        Route::put('/update', [MarcheController::class, 'update'])
            ->name('/updatemarche');

        Route::delete('/destroy', [MarcheController::class, 'destroy'])
            ->name('/destroymarche');
    });

    Route::group(['prefix' => 'categorie'], function () {
        Route::get('/', [CategorieController::class, 'index'])
            ->name('/categorie');

        Route::get('/create', [CategorieController::class, 'create'])
            ->name('/creercategorie');

        Route::post('/store', [CategorieController::class, 'store'])
            ->name('/storecategorie');

        Route::get('/show', [CategorieController::class, 'show'])
            ->name('showcategorie');

        Route::get('/edit', [CategorieController::class, 'edit'])
            ->name('/editcategorie');

        Route::put('/update', [CategorieController::class, 'update'])
            ->name('/updatecategorie');

        Route::delete('/destroy', [CategorieController::class, 'destroy'])
            ->name('/destroycategorie');
    });

    Route::group(['prefix' => 'demande'], function () {
        Route::get('/', [DemandeController::class, 'index'])
            ->name('/demande');

        Route::get('/create', [DemandeController::class, 'create'])
            ->name('/creerdemande');

        Route::post('/store', [DemandeController::class, 'store'])
            ->name('/storedemande');

        Route::get('/show', [DemandeController::class, 'show'])
            ->name('/showdemande');

        Route::get('/edit', [DemandeController::class, 'edit'])
            ->name('/editdemande');

        Route::put('/update', [DemandeController::class, 'update'])
            ->name('/updatedemande');

        Route::delete('/destroy', [DemandeController::class, 'destroy'])
            ->name('/destroydemande');
    });

    Route::group(['prefix' => 'destination'], function () {
        Route::get('/', [DestinationController::class, 'index'])
            ->name('/destination');

        Route::get('/create', [DestinationController::class, 'create'])
            ->name('/creerdestination');

        Route::post('/store', [DestinationController::class, 'store'])
            ->name('/storedestination');

        Route::get('/edit', [DestinationController::class, 'edit'])
            ->name('/editdestination');

        Route::put('/update', [DestinationController::class, 'update'])
            ->name('/updatedestination');

        Route::delete('/destroy', [DestinationController::class, 'destroy'])
            ->name('/destroydestination');
    });
});

Route::middleware(['auth', 'verified'])->group(function () {

    /*  Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('/dashboard');
    */

    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))
        ->name('dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
