<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fournisseurs extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'coordonnees',
        'num',
        'email',
        'marche',
        'bon_livraison',
        'livraison',
        'date_creation',
    ];

    public function  bonlivraison() {
         return $this->hasMany( BL::class );
    }

    public function livraison()
    {
        return $this->belongsTo(Livraison::class);
    }

    public function marche()
    {
        return $this->belongsTo(BonCom::class);
    }

    
}
