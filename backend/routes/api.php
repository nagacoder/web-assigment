<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoomTypeController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdditionalFeeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
// Auth Type CRUD
Route::post('/login', [AuthController::class, 'loginUser']);
Route::post('/register', [AuthController::class, 'createUser']);

// Room Type CRUD
Route::apiResource('room_types', RoomTypeController::class)->middleware(['auth:sanctum']);
// Room CRUD
Route::apiResource('room', RoomController::class)->middleware('auth:sanctum');
// User CRUD
Route::apiResource('users', UserController::class)->middleware('auth:sanctum');
// User AdditionalFee
Route::apiResource('additional-fee', AdditionalFeeController::class)->middleware('auth:sanctum');

// TransactionController
Route::post('/trx/checkout', [TransactionController::class, 'store'])->middleware('auth:sanctum');
Route::get('/admin/transactions', [TransactionController::class, 'getAllTransaction'])->middleware('auth:sanctum');
Route::get('/admin/dasboard', [Controller::class, 'getDashboard'])->middleware('auth:sanctum');
Route::get('/admin/report/{id}', [TransactionController::class, 'reportByProductID'])->middleware('auth:sanctum');

// Not Found Resource
Route::any('{path}', function() {
    return response()->json([
        'message' => 'Route not found'
    ], 404);
})->where('path', '.*');