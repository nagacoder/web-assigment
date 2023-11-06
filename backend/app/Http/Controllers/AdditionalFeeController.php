<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAdditionalFeeRequest;
use App\Http\Requests\UpdateAdditionalFeeRequest;
use App\Models\AdditionalFee;

class AdditionalFeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return AdditionalFee::all();
    }
    public function show($id)
    {
        try {
            return AdditionalFee::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'AdditionalFee not found'], 404);
        }
       
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
        return AdditionalFee::create($request->all());
    }

    public function update(Request $request, $id)
    { 
        try {
            $item = AdditionalFee::findOrFail($id);
            $item->update($request->all());
            return $item;
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'AdditionalFee  not found'], 404);
        }
        
    }

    public function destroy($id)
    {
        try {
            $item = AdditionalFee::findOrFail($id);
            $item->delete();
            return response()->json(['message' => 'AdditionalFee deleted successfully'], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'AdditionalFee not found'], 404);
        }
    }
}
