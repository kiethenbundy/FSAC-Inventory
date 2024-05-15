<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class UpdateAdminRequest extends FormRequest
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
        $user = $this->route("user");
        return [
            "name" => ["required", "string", "max:255"],
            "usertype" => ["required", "string", "max:255"],
            "email" => [
                "required",
                "email",
                Rule::unique('users')->ignore($user->id),
            ],
            'password' => [
                'required',
                'string', 
                'min:8', 
                'regex:/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]+$/'],
                "destination"=> ["required","exists:destination,nom_dept"],
        ];
    }
}
