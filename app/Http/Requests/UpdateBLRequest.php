<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBLRequest extends FormRequest
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
            "bl" => ["required","string"],
            "quantite" => ["required","integer"],
            "marche_id" => ["required","exists:marche,id"],
            "mouvement_stock_id" => ["required","exists:mouvement_stock,id"],
            "fournit_par" => ["required","exists:fournisseurs,id"],
            "livraison_id" => ["required","exists:livraison,id"],
        ];
    }
}
