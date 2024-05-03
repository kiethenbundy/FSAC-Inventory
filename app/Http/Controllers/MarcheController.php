<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMarcheRequest;
use App\Http\Requests\UpdateMarcheRequest;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\DestinationResource;
use App\Http\Resources\MarcheResource;
use App\Http\Resources\MouvementStockResource;
use App\Models\Article;
use App\Models\Destination;
use App\Models\Marche;
use App\Models\MouvementStock;

class MarcheController extends Controller
{
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Marche::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("reference")) {
            $query->where("reference", "like", "%" . request("reference") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        $marches = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("Marche/Index", [
            "marches" => MarcheResource::collection($marches),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $mouvementstocks = MouvementStock::query()->orderBy('name', 'asc')->get();
        $articles = Article::query()->orderBy('name', 'asc')->get();
        $destination = Destination::query()->orderBy('name', 'asc')->get();


        return inertia("Marche/Creer", [
            'mouvementstocks' => MouvementStockResource::collection($mouvementstocks),
            'articles' => ArticleResource::collection($articles),
            'destinations' => DestinationResource::collection($destination),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMarcheRequest $request)
    {
        $data = $request->validated();

        
        Marche::create($data);

        return to_route('marche.index')
            ->with('success', 'Marche a ete Cree');
    }

    /**
     * Display the specified resource.
     */
    public function show(Marche $marche)
    {
        return inertia('Marche/Afficher', [
            'marche' => new MarcheResource($marche),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Marche $marche)
    {
        $mouvementstock = MouvementStock::query()->orderBy('name', 'asc')->get();
        $fournisseur = Article::query()->orderBy('name', 'asc')->get();
        $destination = Destination::query()->orderBy('name', 'asc')->get();

        return inertia("Marche/Modifier", [
            'marche' => new MarcheResource($marche),
            'mouvementstocks' => MouvementStockResource::collection($mouvementstock),
            'articles' => ArticleResource::collection($fournisseur),
            'destinations' => DestinationResource::collection($destination),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMarcheRequest $request, Marche $marche)
    {
        $data = $request->validated();
        
        $marche->update($data);

        return to_route('marche.index')
            ->with('success', "Marche \"$marche->name\" a ete mise a jour");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Marche $marche)
    {
        $name = $marche->name;
        $marche->delete();
       
        return to_route('marche.index')
            ->with('success', "Marche \"$name\" a ete supprimer");
    }
}
