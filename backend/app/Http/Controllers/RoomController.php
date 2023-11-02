<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreRoomRequest;
use App\Http\Requests\UpdateRoomRequest;
use App\Models\Room;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Room::all();
    }
    public function show($id)
    {
        try {
            return Room::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Room not found'], 404);
        }
       
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'area' => 'required|string|max:255',
            'price' => 'required|numeric',
            'facility' => 'required|string|max:255',
            'room_types_id' => 'required|exists:room_types,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
        return Room::create($request->all());
    }

    public function update(Request $request, $id)
    { 
        try {
            $room = Room::findOrFail($id);
            $room->update($request->all());
            return $room;
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Room  not found'], 404);
        }
        
    }

    public function destroy($id)
    {
        try {
            $room = Room::findOrFail($id);
            $room->delete();
            return response()->json(['message' => 'Room deleted successfully'], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Room not found'], 404);
        }
    }
}
