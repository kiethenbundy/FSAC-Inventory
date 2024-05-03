<?php

namespace App\Http\Controllers;

use App\Models\Fournisseurs;
use App\Http\Requests\StoreFournisseursRequest;
use App\Http\Requests\UpdateFournisseursRequest;
use App\Http\Resources\BLResource;
use App\Http\Resources\FournisseursResource;
use App\Http\Resources\LivraisonResource;
use App\Http\Resources\MarcheResource;
use App\Models\BL;
use App\Models\Livraison;
use App\Models\Marche;

class FournisseursController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Fournisseurs::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("num")) {
            $query->where("num", request("num"));
        }

        $fournisseurs = $query->orderBy($sortField, $sortDirection)
        ->paginate(10)
        ->onEachSide(1);

        return inertia("Fournisseurs/Index",[
            "fournisseurs" => FournisseursResource::collection($fournisseurs),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $commande = Marche::query()->orderBy('reference', 'asc')->get();
        $livraisons = Livraison::query()->orderBy('name', 'asc')->get();
        $bon_livraisons = BL::query()->orderBy('bl','asc')->get();

        return inertia("Article/Create", [
            'marches' => MarcheResource::collection($commande),
            'livraisons' => LivraisonResource::collection($livraisons),
            'bon_livraisons' => BLResource::collection($bon_livraisons),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFournisseursRequest $request)
    {
        $data = $request->validated();
        
        Fournisseurs::create($data);

        return to_route('fournisseurs.index')
            ->with('success', 'Fournisseur a ete cree');
    }

    /**
     * Display the specified resource.
     */
    public function show(Fournisseurs $fournisseurs)
    {
        return inertia('Fournisseurs/Afficher', [
            'fournisseurs' => new FournisseursResource($fournisseurs),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Fournisseurs $fournisseurs)
    {
        $commande = Marche::query()->orderBy('reference', 'asc')->get();
        $livraisons = Livraison::query()->orderBy('name', 'asc')->get();
        $bon_livraisons = BL::query()->orderBy('bl','asc')->get();

        return inertia("Article/Modifier", [
            'fournisseur' => new FournisseursResource($fournisseurs),
            'marches' => MarcheResource::collection($commande),
            'livraisons' => LivraisonResource::collection($livraisons),
            'bon_livraisons' => BLResource::collection($bon_livraisons),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFournisseursRequest $request, Fournisseurs $fournisseurs)
    {
        $data = $request->validated();

        $fournisseurs->update($data);

        return to_route('fournisseurs.index')
            ->with('success', "Fournisseur \"$fournisseurs->name\" a ete mise a jour");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Fournisseurs $fournisseurs)
    {
        $name = $fournisseurs->name;
        $fournisseurs->delete();
        
        return to_route('fournisseurs.index')
            ->with('success', "Fournisseur \"$name\" a ete supprimee");
    }
}
