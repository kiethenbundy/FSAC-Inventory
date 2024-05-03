<?php

namespace App\Http\Resources;

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
            'id' => $this->id(),
            'name' => $this->name,
            'coordonnees' => $this->coordonnees,
            'num' => $this->num,
            'email' => $this->email,
            'marche' => new MarcheResource($this->marche),
            'bon_livraison' => new BLResource($this->bon_livraison),
            'livraison' => new LivraisonResource($this->livraison),
            'date_creation' => (new Carbon($this->date_creation))->format('d-m-Y'),
        ];
    }
}
