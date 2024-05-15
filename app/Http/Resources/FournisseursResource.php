<?php

namespace App\Http\Resources;

use App\Models\Marche;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FournisseursResource extends JsonResource
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
            'coordonnees' => $this->coordonnees,
            'num' => $this->num,
            'email' => $this->email,
            "marche_id" => new MarcheResource($this->marche_id),
            "livraison_id" => new LivraisonResource($this->livraison_id),
            "bon_livraison_id" => new BLResource($this->bon_livraison_id),
        ];
    }
}
