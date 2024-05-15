<?php

namespace App\Http\Controllers;

use App\Models\Demande;
use App\Http\Resources\DemandeResource;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\UserCrudResource;
use App\Models\User;
use App\Http\Requests\StoreDemandeRequest;
use App\Http\Requests\UpdateDemandeRequest;
use App\Models\Article;
use Illuminate\Support\Facades\DB;




class DemandeController extends Controller
{
    public function index()
    {

        $query = Demande::all();



        return inertia("Demande/Index2", [
            "demandes" => DemandeResource::collection($query),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }
    public function create()
    {

        $users = User::query()->orderBy('name', 'asc')->get();


        return inertia("Demande/Creer2", [
            'users' => UserCrudResource::collection($users),
        ]);
    }
    public function edit(Demande $demande)
    {
        return inertia('Demande/Index3', [
            'demande' => new DemandeResource($demande),
        ]);
    }
    public function store(StoreDemandeRequest $request)
    {
        $data = $request->validated();

        $demande = Demande::create($data);

        if ($data['status'] == 'complet') {

            $this->markAsCompleted($demande);
        }

        return to_route('/demande')
            ->with('success', 'Demande créée avec succès');
    }
    public function show(Demande $demande)
    {
        return inertia('Demande/Afficher', [
            'demande' => new ArticleResource($demande),

        ]);
    }
    public function update(UpdateDemandeRequest $request, Demande $demande)
    {
        $data = $request->validated();
        dd($request->all());
        
        $demande->update($data);
        if ($demande->status === 'complet') {
            $this->markAsCompleted($demande);
        }


        return to_route('/demande')
            ->with('success', 'Demande mise à jour avec succès');
    }
    public function destroy(Demande $demande)
    {
        $name = $demande->name;
        $demande->delete();

        return to_route('/demande')
            ->with('success', "Demande \"$name\" supprimée avec succès");
    }
    public function markasCompleted(Demande $demande)
    {

        DB::transaction(function () use ($demande) {
            $demande->status = 'complet';
            $demande->save();

            $articles = $demande->articles;

            foreach ($articles as $article) {
                $stock = Article::query()->where('articles', $article->id)->first();
                if ($stock) {
                    $stock->quantite -= $article->pivot->quantite;
                    $stock->save();
                }
            }
        });

        return to_route('/demande')
            ->with('success', "Demande terminee et stock mise a jour");
    }
}
