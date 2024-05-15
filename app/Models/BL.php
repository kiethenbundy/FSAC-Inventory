<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BL extends Model
{
    use HasFactory;

    protected $table = 'bon_livraison';

    protected $fillable = [
        "id",
        "bl",
        "quantitelivre",
        "marche_id",
        "mouvementstock_id",
        "fournit_par",
        "livraison_id"
    ];

    public function marche()
    {
        return $this->hasOne(Marche::class);
    }

    public function fournisseur()
    {
        return $this->hasOne(Fournisseurs::class);
    }

    public function livraison()
    {
        return $this->hasMany(Livraison::class);
    }

}
