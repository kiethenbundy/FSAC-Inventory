<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $table = 'articles';
    
    protected $fillable = [
        'name',
        'designiation',
        'image_path',
        'prix',
        'seuil',
        "mouvementstock_id",
        "assigned_fournisseur_id"
    ];

    public function mouvementstock()
    {
        return $this->hasMany(MouvementStock::class);
    }

    public function assignedFournisseurs()
    {
        return $this->belongsTo(Fournisseurs::class, 'assigned_fournisseur_id');
    }

}
