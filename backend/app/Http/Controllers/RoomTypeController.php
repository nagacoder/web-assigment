<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreRoomTypeRequest;
use App\Http\Requests\UpdateRoomTypeRequest;
use App\Models\RoomType;

class RoomTypeController extends Controller
{

    // public function __construct()
    // {
    //    $this->middleware('permission:create-product|edit-product|delete-product', ['only' => ['index','show']]);
    //    $this->middleware('permission:create-product', ['only' => ['create','store']]);
    //    $this->middleware('permission:edit-product', ['only' => ['edit','update']]);
    //    $this->middleware('permission:delete-product', ['only' => ['destroy']]);
    // }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return RoomType::all();
    }
    public function show($id)
    {
        try {
            return RoomType::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'RoomType not found'], 404);
        }
       
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
        return RoomType::create($request->all());
    }

    public function update(Request $request, $id)
    { 
        try {
            $roomType = RoomType::findOrFail($id);
            $roomType->update($request->all());
            return $roomType;
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Room Type not found'], 404);
        }
        
    }

    public function destroy($id)
    {
        try {
            $roomType = RoomType::findOrFail($id);
            $roomType->delete();
            return response()->json(['message' => 'Room types deleted successfully'], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Room types not found'], 404);
        }
    }
}
