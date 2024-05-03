<?php

namespace App\Http\Controllers;

use App\Models\MouvementStock;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {

        $user = auth()->user();

        $nonlivre = MouvementStock::query()
        ->where('status','non_livre')
        ->where('assigned_user_id',$user->id)
        ->count();

        $encours = MouvementStock::query()
        ->where('status','en_cours')
        ->where('assigned_user_id',$user->id)
        ->count();

        $livre = MouvementStock::query()
        ->where('status','livre')
        ->where('assigned_user_id',$user->id)
        ->count();

        $mesmouvementstocks = MouvementStock::query()
        ->where('status','livre')
        ->where('assigned_user_id',$user->id)
        ->where('type','sortie');

        $query = MouvementStock::query()
        ->where('status','livre')
        ->where('assigned_user_id',$user->id)
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
