<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Destination extends Model
{
    use HasFactory;

    protected $table = 'destination';

    protected $fillable = [
        'chefD',
        'nom_dept',
        'type_service',
        "user_id",
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class);
    }
}
