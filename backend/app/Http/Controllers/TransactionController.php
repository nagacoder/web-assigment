<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use App\Models\Transaction;

class TransactionController extends Controller
{
    public function getAllTransaction(Request $request)
    {
        $status = $request->input('status');

        $query = Transaction::with('user', 'room');
    
        if ($status) {
            $query->where('status', $status);
        }
    
        $transactions = $query->get();
    
        return response()->json($transactions);
    }
    
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'code' => 'required',
            'date' => 'required',
            'status' => 'required',
            'user_id' => 'required|exists:users,id',
            'room_id' => 'required|exists:rooms,id',
            'additional_fee_id' => 'required|exists:additional_fees,id',
            'room_price' => 'required|numeric',
        ]);

        // Create a new transaction
        $transaction = Transaction::create([
            'code' => $request->input('code'),
            'date' => $request->input('date'),
            'additional_fee_id' => $request->input('additional_fee_id'),
            'room_id' => $request->input('room_id'),
            'user_id' => $request->input('user_id'),
            'status' => 'pending',
            'room_price' => $request->input('room_price'),
        ]);

        // Return a response, e.g., a success message or the created transaction
        return response()->json(['message' => 'Transaction created successfully', 'transaction' => $transaction], 201);
    }

    public function reportByProductID(Request $request, $id){
        $transactions = Transaction::where('product_id', $id)->where('status', 'success')->get();
        if (!$transactions) {
            // Handle the case where the transaction doesn't exist
            return response()->json(['message' => 'Transaction not found'], 404);
        }

        return [
            'total_sales' => 12,
            'total_profit' => 2300000,
        ];

        return response()->json($productSales, 200);
    }
}
