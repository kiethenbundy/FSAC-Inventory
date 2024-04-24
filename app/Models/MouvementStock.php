<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MouvementStock extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'description', 'status', 'due_date'];

    public function mesArticles()
    {
        return $this->hasMany(Article::class);
    }

    public function deleviredBy()
    {
        return $this->belongsTo(Fournisseurs::class, 'delivered_by');
    }

}
