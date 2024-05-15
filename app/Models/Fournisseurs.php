<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Fournisseurs extends Model
{
    use HasFactory;

    protected $table = 'fournisseurs';

    protected $fillable = [
        'name',
        'coordonnees',
        'num',
        'email',
        'marche_id',
        'bon_livraison_id',
        'livraison_id',
        'date_creation',
    ];

    public function  bonlivraison(): HasMany
     {
         return $this->hasMany( BL::class );
    }

    public function livraison(): HasMany
    {
        return $this->hasMany(Livraison::class);
    }

    public function marche(): HasOne
    {
        return $this->hasOne(Marche::class);
    }

    
}
