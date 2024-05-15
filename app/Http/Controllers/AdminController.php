<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Http\Requests\StoreAdminRequest;
use App\Http\Requests\UpdateAdminRequest;
use App\Http\Resources\DestinationResource;
use App\Http\Resources\UserCrudResource;
use App\Models\Article;
use App\Models\Demande;
use App\Models\Destination;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $query = User::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");


        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("email")) {
            $query->where("email", "like", "%" . request("email") . "%");
        }


        $users = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("Admin/Index2", [
            "users" => UserCrudResource::collection($users),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $destinations = Destination::all();

        return inertia("Admin/Creer2", [
            "destinations" => DestinationResource::collection($destinations),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdminRequest $request)
    {
        $data = $request->validated();

        $destinationName = $data['destination'];

        $destination = Destination::where("nom_dept", $destinationName)
            ->first();

        if (!$destination) {
            return back()->withErrors(['destination' => 'Invalid destination']);
        }

        $data['destination'] = $destination->id;

        $data['email_verified_at'] = now();
        $data['password'] = bcrypt($data['password']);

        User::create($data);

        return redirect()->route('/user')
            ->with('success', 'Utilisateur a été créé');
    }


    /**
     * Display the specified resource.
     */
    public function show(Admin $admin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Admin $admin)
    {
        $destinations = Destination::all();

        return inertia('Admin/Index3', [
            'user' => new UserCrudResource($admin),
            "destinations" => DestinationResource::collection($destinations),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAdminRequest $request, User $user)
    {
        $data = $request->validated();
        $password = $data['password'] ?? null;
        if ($password) {
            $data['password'] = bcrypt($password);
        } else {
            unset($data['password']);
        }
        $user->update($data);

        return to_route('/user')
            ->with('success', "Admin\"$user->name\" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $userId)
    {
        $user = DB::table('users')->where('name', $userId)->first();

        if ($user) {

            $name = $user->name;
            
            DB::table('users')->where('name', $userId)->delete();

            return response()->json(['message' => 'avec succes'], 500);
        } else {
            return back()->with('error', "User not found");
        }
    }

    public function markasCompleted(Demande $demande)
    {

        DB::transaction(function () use ($demande) {
            $demande->status = 'completed';
            $demande->save();

            $articles = $demande->articles;

            foreach ($articles as $article) {
                $stock = Article::where('articles', $article->id)->first();
                if ($stock) {
                    $stock->quantite -= $article->pivot->quantite;
                    $stock->save();
                }
            }
        });

        return to_route('demande.index')
            ->with('success', "Demande terminee et stock mise a jour");
    }
}
