<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFournisseursRequest extends FormRequest
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
            "coordonnees" => ['nullable', 'string'],
            "num" => ["required","string","max:255","unique:fournisseurs,num"],
            "email" => ["required","string","email","unique:fournisseurs,email"],
            'marche' => ['required', 'exists:marche,reference'],
            'livraison' => ['required'],
            'bon_livraison' => ['required', 'exists:bon_livraison,bl'],
        ];
    }
}
