<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDestinationRequest;
use App\Http\Requests\UpdateArticleRequest;
use App\Http\Requests\UpdateDestinationRequest;
use App\Http\Resources\DestinationResource;
use App\Http\Resources\UserResource;
use App\Models\Destination;
use App\Models\User;
use Illuminate\Http\Request;

class DestinationController extends Controller
{
    
    
    
    
    public function index()
    {
        $query = Destination::all();


        return inertia("Destination/Index2", [
            "destinations" => DestinationResource::collection($query),
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = User::query()->orderBy('name', 'asc')->get();

        return inertia("Destination/Creer2", [
            'users' => UserResource::collection($user),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDestinationRequest $request)
    {
        $data = $request->validated();

        

    
        Destination::create($data);

        return to_route('/destination')
        ->with('success', 'Destination a ete cree');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Destination $destination)
    {
        $query= $destination->id;

        $user = User::query()->where('destination_id', $query )->get();

        return inertia("Article/Modifier", [
            'users' => new UserResource($user),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDestinationRequest $request, Destination $destination)
    {
        $data = $request->validated();
        
        
        $destination->update($data);

        return to_route('/destination')
            ->with('success', "Article \"$destination->name\" a ete mise a jour");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Destination $destination)
    {
        $name = $destination->name;
        $destination->delete();

        return to_route('/destination')
            ->with('success', "Article \"$name\" a ete supprimer");
    }
}
