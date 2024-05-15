<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreMarcheRequest extends FormRequest
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
            "name" => ["required","string","max:255"],
            "reference" => ["required","string"],
            'status' => ['required', Rule::in(['en_cours', 'non_livre', 'livre'])],
            "num_lot" => ["integer"],
            "quantite" => ["required","integer"],
            "date" => ["date"],
            'destination_id' => ['required',"exists:destination,id"],
            'article_id' => ['required',"exists:articles,id"],
            'mouvementstock_id' => ['required',"exists:mouvement_stock,id"],
        ];
    }
}
