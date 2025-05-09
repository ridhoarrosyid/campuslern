<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['major_id', 'name', 'content', 'semester',];

    public function major()
    {
        return $this->belongsTo(Major::class);
    }

    public function links()
    {
        return $this->hasMany(Link::class);
    }
}
