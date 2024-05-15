<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMSRequest;
use App\Http\Requests\UpdateMSRequest;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\MSResource;
use App\Models\Article;
use App\Models\BL;
use App\Models\BonSortie;
use App\Models\Fournisseurs;
use App\Models\MS;
use Illuminate\Http\Request;

class MSController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $mouvementstocks = MS::all();

        return inertia("MouvementStock/Index2", [
            "mouvementstocks" => MSResource::collection($mouvementstocks),
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

        return inertia("MouvementStock/Creer2", compact('articles',
        'fournisseurs',
        'bon_livraisons',
        'bon_sorties')
    );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMSRequest $request)
    {
        dd($request->all());
        
        $data = $request->validated();

        
    }

    /**
     * Display the specified resource.
     */
    public function show(MS $id)
    {
        $query = $id->articles();

        return inertia('MouvementStock/Afficher', [
            'mouvementstock' => new MSResource($id),
            "articles" => ArticleResource::collection($query),
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MS $id)
    {
        $Modifier = true;

        return inertia('MouvementStock/Modifier', [
            'mouvementstock' => new MSResource ($id),
            "Modifier",
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMSRequest $request, MS $id)
    {
        $data = $request->validated();

        foreach ($request->articles as $article) {

            $id->articles()->attach($article['id']);
        }

        $id->update($data);

        return to_route('/mouvementstock')
            ->with('success', "MouvementStock \"$id->name\" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MS $id)
    {
        $name = $id->name;
        $id->delete();
        return to_route('/mouvementstock')
            ->with('success', "MouvementStock \"$name\" was deleted");
    }
}
