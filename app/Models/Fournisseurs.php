<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fournisseurs extends Model
{
    use HasFactory;

    public function  BL() {
         return $this->hasMany( BL::class );
    }
}
