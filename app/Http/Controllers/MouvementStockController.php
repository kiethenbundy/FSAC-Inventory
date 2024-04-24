<?php

namespace App\Http\Controllers;

use App\Models\MouvementStock;
use App\Http\Requests\StoreMouvementStockRequest;
use App\Http\Requests\UpdateMouvementStockRequest;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\MouvementStockResource;

class MouvementStockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = MouvementStock::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        $mouvementstocks = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("MouvementStock/Index", [
            "projects" => MouvementStockResource::collection($mouvementstocks),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("MouvementStock/Creer");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMouvementStockRequest $request)
    {
        
        
        $data = $request->validated();
        
        MouvementStock::create($data);

        return to_route('mouvementstock.index')
            ->with('success', 'MouvementStock was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(MouvementStock $mouvementstock)
    {
        $query = $mouvementstock->articles();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        $articles = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);
        return inertia('MouvementStock/Show', [
            'mouvementstock' => new MouvementStockResource($mouvementstock),
            "articles$articles" => ArticleResource::collection($articles),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MouvementStock $mouvementstock)
    {
        return inertia('MouvementStock/Modifier', [
            'mouvementstock' => new MouvementStockResource ($mouvementstock),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMouvementStockRequest $request, MouvementStock $mouvementstock)
    {
        $data = $request->validated();
        $mouvementstock->update($data);
        return to_route('mouvementstock.index')
            ->with('success', "MouvementStock \"$mouvementstock->name\" was updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MouvementStock $mouvementstock)
    {
        $name = $mouvementstock->name;
        $mouvementstock->delete();
        return to_route('mouvementstock.index')
            ->with('success', "MouvementStock \"$name\" was deleted");
    }
}
