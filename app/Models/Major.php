<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Major extends Model
{
    use HasFactory, SoftDeletes;
    public function university(): BelongsTo
    {
        return $this->belongsTo(University::class);
    }

    public function keyTakeaways(): HasMany
    {
        return $this->hasMany(KeyTakeaway::class);
    }

    public function courses(): HasMany
    {
        return $this->hasMany(Course::class);
    }
}
