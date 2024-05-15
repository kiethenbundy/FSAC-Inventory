<?php

namespace App\Http\Controllers;

use App\Models\Demande;
use App\Models\MouvementStock;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {

        $user = auth()->user();

        $nonlivre = Demande::query()
        ->where('status','nonlivre')
        ->where('user_id',$user->id)
        ->count();

        $encours = Demande::query()
        ->where('status','encours')
        ->where('user_id',$user->id)
        ->count();

        $livre = Demande::query()
        ->where('status','livre')
        ->where('user_id',$user->id)
        ->count();

        $mesmouvementstocks = Demande::query()
        ->where('user_id',$user->id)
        ->where('type','sortie');

        $query = Demande::query()
        ->where('status','livre')
        ->where('user_id',$user->id)
        ->where('type','sortie');


        $sortField = request("sort_field", 'quantite');
        $sortDirection = request("sort_direction", "desc");

        $plusgrand = $query
        ->orderBy($sortField, $sortDirection)
        ->orderBy('date', 'desc')
        ->get();
        

        return inertia("Dashboard", compact('nonlivre','encours','livre','mesmouvementstocks','plusgrand'));
    }
}
