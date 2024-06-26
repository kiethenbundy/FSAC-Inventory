<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\FournisseursResource;
use App\Http\Resources\MouvementStockResource;
use App\Http\Resources\UserResource;
use App\Models\Fournisseurs;
use App\Models\MouvementStock;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::all();

        return inertia("Article/Index2", compact('articles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $mouvementstocks = MouvementStock::query()->orderBy('type', 'asc')->get();
        $fournisseurs = Fournisseurs::query()->orderBy('name', 'asc')->get();

        return inertia("Article/Creer2", [
            'mouvementstocks' => MouvementStockResource::collection($mouvementstocks),
            'fournisseurs' => FournisseursResource::collection($fournisseurs),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleRequest $request)
    {

        dd($request->all());
        
        $data = $request->validated();

        if( ! $data['prix'] ){

            $data['prix']=0;
        }
        Article::create($data);

        return to_route('/article')
        ->with('success', 'Project was created');
    }


    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        return inertia('Article/Afficher', [
            'article' => new ArticleResource($article),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        $mouvementstock = MouvementStock::query()->orderBy('type', 'asc')->get();
        $fournisseur = Fournisseurs::query()->orderBy('name', 'asc')->get();

        return inertia("Article/Modifier", [
            'article' => new ArticleResource($article),
            'mouvementstock' => MouvementStockResource::collection($mouvementstock),
            'fournisseurs' => FournisseursResource::collection($fournisseur),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticleRequest $request, Article $article)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        if ($image) {
            if ($article->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($article->image_path));
            }
            $data['image_path'] = $image->store('article/' . Str::random(), 'public');
        }
        $article->update($data);

        return to_route('article.index')
            ->with('success', "Article \"$article->name\" a ete mise a jour");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        $name = $article->name;
        $article->delete();
        if ($article->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($article->image_path));
        }
        return to_route('article.index')
            ->with('success', "Article \"$name\" a ete supprimer");
    }

    public function mesArticles()
    {
        $mouvementstock = MouvementStock::query()->orderBy('name', 'asc')->get();
        $user = auth()->user();
        $query = Article::query()->where('mouvementstock', $mouvementstock->id);

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

        return inertia("Article/Index", [
            "articles" => ArticleResource::collection($articles),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }
}
