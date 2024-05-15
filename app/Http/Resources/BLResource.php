<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BLResource extends JsonResource
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
            "bl" => $this->bl,
            "quantitelivre" => $this->quantitelivre,
            "marche_id" => new MarcheResource($this->marche_id),
            "mouvementstock_id" => new MouvementStockResource($this->mouvementstock_id),
            "fournit_par" => new FournisseursResource($this->fournit_par),
            "livraison_id" => new LivraisonResource($this->livraison_id),
        ];
    }
}
