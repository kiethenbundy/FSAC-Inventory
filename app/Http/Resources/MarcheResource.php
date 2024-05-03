<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MarcheResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
        'id' => $this->id(),
        'reference' => $this->reference,
        'titre' => $this->titre,
        'status' => $this->status,
        'num_lot' => $this->num_lot,
        'quantite' => $this->quantite,
        'destination' => new DestinationResource($this->destination),
        'article' => new ArticleResource($this->article),
        'mouvementstock' => new MouvementStockResource($this->mouvementstock),
        'date' => (new Carbon($this->date))->format('d-m-Y'),
    ];
    
    }
}
