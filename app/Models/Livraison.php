<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Livraison extends Model
{
    use HasFactory;

    protected $table = 'livraison';

    protected $fillable = [
        "article_id",
        "fournisseur_id",
        "retard",
    ];

    public function article(): HasMany
    {
        return $this->hasMany(Article::class);
    }

    public function fournisseur(): HasOne
    {
        return $this->hasOne(Fournisseurs::class);
    }
}
