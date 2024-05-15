<?php

namespace App\Http\Resources;

use App\Models\Article;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DemandeResource extends JsonResource
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
            'name' => $this->name,
            'description' => $this->description,
            'status' => $this->status,
            'user_id' => new UserResource($this->user_id), 
            "demande_article_id" => new DemandeArticleResource($this->demande_article_id),
            'created_at' => (new Carbon($this->date_creation))->format('d-m-Y'),
        ];

    }
}
