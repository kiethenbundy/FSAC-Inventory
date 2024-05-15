<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateArticleRequest extends FormRequest
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
            "designiation" => ["required","string"],
            "prix" => ["required", "integer"],
            "image_path"=>["string"],
            "seuil"=>["required","integer"],
            "assigned_fournisseur_id" => ["required","exists:fournisseurs,id"],
            "categorie_id" =>["required","exists:categorie,id"],
            "garantie" => ["required","exists:garantie,id"],
            "codebarre" => ["exists:garnatie,id"],
            "mouvementstock_id" => ["required","exists:mouvement_stock,id"],
            "marche_id" => ["required","exists:marche,id"],
            "demande_article_id"=> ["required","exists:demande_article,id"]
        ];
    }
}
