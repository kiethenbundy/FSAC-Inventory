<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DestinationResource extends JsonResource
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
            'chefD' => $this->chefD,
            'nom_dept' => $this->nom_dept,
            'type_service' => $this->type_service,
            "user_id" => new UserResource($this->user_id),
        ];
    }
}
