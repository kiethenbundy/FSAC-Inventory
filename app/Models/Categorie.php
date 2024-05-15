<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Categorie extends Model
{
    use HasFactory;

    protected $table = 'categorie';

    protected $fillable = [
        'name',
    ];

    public function article(): HasMany
    {
        return $this->hasMany(Article::class);
    }
}
