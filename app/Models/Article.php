<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'description',
        'image_path',
        'status',
        'priority',
        'due_date',
        'assigned_fournisseur_id',
        'mouvementstock_id',
    ];

    public function mouvementstock()
    {
        return $this->belongsTo(MouvementStock::class);
    }

    public function assignedFournisseurs()
    {
        return $this->belongsTo(Fournisseurs::class, 'assigned_fournisseur_id');
    }

}
