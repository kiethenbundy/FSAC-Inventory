<?php

namespace App\Http\Controllers;

use App\Models\MouvementStock;
use App\Http\Requests\StoreMouvementStockRequest;
use App\Http\Requests\UpdateMouvementStockRequest;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\BLResource;
use App\Http\Resources\BonSortieResource;
use App\Http\Resources\FournisseursResource;
use App\Http\Resources\MouvementStockResource;
use App\Models\Article;
use App\Models\BL;
use App\Models\BonSortie;
use App\Models\Fournisseurs;

class MouvementStockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        

        $mouvementstocks = MouvementStock::all();

        return inertia("MouvementStock/Index2", [
            "mouvementstocks" => MouvementStockResource::collection($mouvementstocks),
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $articles= Article::all();
        $fournisseurs = Fournisseurs::all();
        $bon_livraisons = BL::all();
        $bon_sorties= BonSortie::all();

        return inertia("MouvementStock/Creer3", compact('articles',
        'fournisseurs',
        'bon_livraisons',
        'bon_sorties')
    );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMouvementStockRequest $request)
    {
        //dd($request->all());

        $data = $request->validated();

        $mouvementstock = MouvementStock::create($data);

        foreach ($request->article as $art) {

            $mouvementstock->articles()->attach($art['id']);
        }

        return to_route('/mouvementstock')
            ->with('success', "MouvementStock a ete cree");
        
    }

    /**
     * Display the specified resource.
     */
    public function show(MouvementStock $mouvementstock)
    {
        $query = $mouvementstock->articles();

        return inertia('MouvementStock/Afficher', [
            'mouvementstock' => new MouvementStockResource($mouvementstock),
            "articles" => ArticleResource::collection($query),
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MouvementStock $mouvementstock)
    {
        $Modifier = true;

        return inertia('MouvementStock/Modifier', [
            'mouvementstock' => new MouvementStockResource ($mouvementstock),
            "Modifier",
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMouvementStockRequest $request, MouvementStock $mouvementstock)
    {
        $data = $request->validated();

        foreach ($request->articles as $article) {

            $mouvementstock->articles()->attach($article['id']);
        }

        $mouvementstock->update($data);

        return to_route('/ms')
            ->with('success', "MouvementStock \"$mouvementstock->name\" was updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MouvementStock $mouvementstock)
    {
        $name = $mouvementstock->name;
        $mouvementstock->delete();
        return to_route('/ms')
            ->with('success', "MouvementStock \"$name\" was deleted");
    }
}
