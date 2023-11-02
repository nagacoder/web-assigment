<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'area',
        'price',
        'facility',
        'room_types_id',
    ];

    public function room_types()
    {
        return $this->belongsTo(RoomType::class, 'room_types_id');
    }
}
