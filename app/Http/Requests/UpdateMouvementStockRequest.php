<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMouvementStockRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "type" => ["required","string","max:10"],
            "quantite" => ["required","integer"],
            "date"=> ["required","date"],
            "reference" => ["required","string","max:255"],
            "total" => ["required","integer"],
            "article_id" => ["required","exists:articles,id"],
            "fournit" => ["required","exists:destination,id"],
            "destination_id" => ["required","exists:destination,id"],
            "bon_livraison_id" => ["required","exists:bon_livraison,id"],
            "bon_sortie_id" => ["required","exists:bon_sortie,id"],
            "user_id" => ["required","exists:users,id"],
        ];
    }
}
