<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MouvementStock extends Model
{
    use HasFactory;

    protected $table = 'mouvement_stock';

    protected $fillable = [
        'type', 
        'quantite',
        'date',
        'reference',
        'total',
        "article_id",
        "fournit",
        "destination_id",
        "bon_livraison_id",
        "bon_sortie_id",
        "user_id",
    ];

    public function article(): HasMany
    {
        return $this->hasMany(Article::class);
    }

    public function fournit()
    {
        return $this->belongsTo(Fournisseurs::class, 'fournit');
    }

    public function destination(): HasOne
    {
        return $this->hasOne(Destination::class);
    }

    public function Bl(): HasMany
    {
        return $this->hasMany(BL::class);
    }

    public function sortie(): HasOne
    {
        return $this->hasOne(BonSortie::class);
    }

    public function user(): HasOne
    {
        return $this->hasOne(User::class);
    }

}
