<?php

namespace App\Http\Controllers;

use App\Models\Garantie;
use App\Http\Requests\StoreGarantieRequest;
use App\Http\Requests\UpdateGarantieRequest;
use App\Http\Resources\GarantieResource;
use App\Models\Article;


class GarantieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    
public function index()
{
    $garanties = Garantie::paginate(10); 

    return GarantieResource::collection($garanties); 
}


    /**
     * Show the form for creating a new resource.
     */
    public function create(StoreGarantieRequest $request)
    {
        
        $validatedData = $request->validated();
        $garantie = Garantie::create($validatedData);

        $article = Article::findOrFail($request->article_id);
        $article->garantie()->associate($garantie);
        $article->save();

        
        return response()->json(['message' => 'Garantie créee et associée avec l artcile avec succès']);
    }

  
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGarantieRequest $request)
    {
        $validatedData = $request->validated(); 
        $garantie = Garantie::create($validatedData); 
        return new GarantieResource($garantie);
    }

    /**
     * Display the specified resource.
     */
    public function show(Garantie $garantie)
    {
        return new GarantieResource($garantie); 
    }

    
    
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGarantieRequest $request, Garantie $garantie)
    {
        $validatedData = $request->validated(); 
        $garantie->update($validatedData);

        return new GarantieResource($garantie); 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Garantie $garantie)
    {
        $garantie->delete(); 

        return response(null, 204);
    }
}
