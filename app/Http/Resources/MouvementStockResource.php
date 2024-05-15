<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class MouvementStockResource extends JsonResource
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
            'type' => $this->type,
            'quantite' => $this->quantite,
            'reference' => $this->reference,
            'total' => $this->total,
            'date' => (new Carbon($this->date))->format('Y-m-d'),
            "article_id" => new ArticleResource($this->article_id),
            "fournit" => new FournisseursResource($this->fourit),
            "destination_id" => new DestinationResource($this->destination_id),
            "bon_livraison_id" => new BLResource($this->bon_livraison_id),
            "bon_sortie_id" => new BonSortieResource($this->bon_sorie_id),
        
        ];    }

}
