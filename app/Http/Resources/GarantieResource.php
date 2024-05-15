<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GarantieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id, 
            'nbr_annee' => $this->nbr_annee, 
            'date_debut' => $this->date_debut,
            "article_id" => new ArticleResource($this->article_id), 
            ];

    }
}
