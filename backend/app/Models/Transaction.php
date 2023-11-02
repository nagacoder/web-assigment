<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    //TransCode, TransDate, CustName, TotalRoomPrice, TotalExtraCharge, FinalTotal
    protected $fillable = [
        'code',
        'date',
        'user_id',
        'room_id',
        'status',
        'room_price',
        'additional_fee_id',
        'total',
    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function room()
    {
        return $this->belongsTo(Room::class, 'room_id');
    }
    public function additional_fee()
    {
        return $this->belongsTo(AdditionalFee::class, 'additional_fee_id');
    }
}
