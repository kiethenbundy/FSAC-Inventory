<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategorieRequest;
use App\Http\Requests\UpdateCategorieRequest;
use App\Http\Resources\CategorieResource;
use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    

    public function index()
    {
        $categories = Categorie::all();


        return inertia("Categorie/Index2", [
            "categories" => CategorieResource::collection($categories),
            'success' => session('success'),
        ]);
    }


    public function create() {

        return inertia("Categorie/Creer2");
    }


    public function store(StoreCategorieRequest $request) {

        $data = $request->validated();

        Categorie::create($data);

        return to_route('/categorie')
        ->with('success', 'Categorie a ete cree');
    }

    public function edit(Categorie $categorie){

        

        return inertia("Categorie/Index3",[
            'categorie' => new CategorieResource($categorie),
    ]);
    }

    public function update(UpdateCategorieRequest $request, Categorie $categorie){
        
        $data = $request->validated();

        $categorie->update($data);

        return to_route('/categorie')
            ->with('success', "Categorie \"$categorie->name\" a ete mise a jour");

    }

    public function destroy(Categorie $categorie)
    {
        $name = $categorie->name;
        $categorie->delete();
        
        return to_route('/categorie')
            ->with('success', "Categorie \"$name\" a ete supprimer");
    }


}
