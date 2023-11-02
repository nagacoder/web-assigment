<?php

namespace App\Http\Controllers;
use Laravel\Sanctum\HasApiTokens;

use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    use HasApiTokens;
    public function index()
    {
        return User::all();
    }

    public function show($id)
    {
        return response()->json(['message' => 'User not found'], 404);
        // try {
        //     return User::findOrFail($id);
        // } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
        //     return response()->json(['message' => 'User not found'], 404);
        // }
       
    }

    public function store(Request $request)
    {
        return User::create($request->all());
    }

    public function update(Request $request, $id)
    {

        try {
            $user = User::findOrFail($id);
            $user->update($request->all());
            return $user;
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'User not found'], 404);
        }
        
    }

    public function destroy($id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();
            return response()->json(['message' => 'User deleted successfully'], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'User not found'], 404);
        }
        
    }
}
