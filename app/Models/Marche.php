<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Marche extends Model
{
    use HasFactory;

    protected $table = 'marche';

    protected $fillable = [
        'reference',
        'titre',
        'status',
        'num_lot',
        'quantite',
        'date',
        'destination_id',
        'article_id',
        'mouvementstock_id',
    ];

    public function destination():BelongsTo
    {
        return $this->belongsTo(Destination::class, 'destination_id');
    }

    public function article():HasMany
    {
        return $this->hasMany(Article::class, 'article_id');
    }

    public function mouvementstock()
    {
        return $this->belongsTo(MouvementStock::class, 'mouvementstock_id');
    }

}
