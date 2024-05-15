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
        'id' => $this->id,
        'reference' => $this->reference,
        'titre' => $this->titre,
        'status' => $this->status,
        'num_lot' => $this->num_lot,
        'quantite' => $this->quantite,
        'destination_id' => new DestinationResource($this->destination_id),
        'article_id' => new ArticleResource($this->article_id),
        'mouvementstock_id' => new MouvementStockResource($this->mouvementstock_id),
        'date' => (new Carbon($this->date))->format('d-m-Y'),
    ];
    
    }
}
