<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marche extends Model
{
    use HasFactory;

    protected $fillable = [
        'reference',
        'titre',
        'status',
        'num_lot',
        'quantite',
        'date',
        'destination',
        'article',
        'mouvementstock',
    ];

    public function destination()
    {
        return $this->belongsTo(Destination::class, 'destination');
    }

    public function article()
    {
        return $this->hasMany(Article::class, 'article');
    }

    public function mouvementstock()
    {
        return $this->belongsTo(MouvementStock::class, 'mouvementstock');
    }

}
