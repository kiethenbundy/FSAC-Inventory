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
            "num_lot" => ["required","integer"],
            "quantite" => ["required","integer"],
            "date" => ["required","date"],
            'destination' => ['required', 'exists:destination,id'],
            'article' => ['required', 'exists:article,id'],
            'mouvementstock' => ['required', 'exists:mouvementstock,id'],
        ];
    }
}
