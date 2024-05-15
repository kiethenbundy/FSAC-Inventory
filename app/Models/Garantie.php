<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Garantie extends Model
{
    use HasFactory;

    protected $table = 'garantie';

    protected $fillable = [
        'nbr_annee',
        'date_debut',
        "article_id",
    ];
    
    public function article()
    {
        return $this->hasOne(Article::class);
    }

}
