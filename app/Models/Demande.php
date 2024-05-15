<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demande extends Model
{
    use HasFactory;

    protected $table = 'demandes';

    protected $fillable = [
        'user_id',
        'name',
        'description',
        'status',
        'demande_article_id',
        "user_id"
    ];
     
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function demande_article()
    {
        return $this->hasOne(DemandeArticle::class);
    }

}
