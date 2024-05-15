<?php

namespace App\Http\Resources;

use App\Models\Fournisseurs;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LivraisonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "retard" => $this->retard,
            "article_id" => new User($this->user_id),
            "fournisseur_id" => new Fournisseurs($this->fournisseur_id),
        ];
    }
}
