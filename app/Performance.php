<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Performance extends Model
{
    /**
     * The name of the underlying table.
     *
     * @var string
     */
    protected $table = 'performance_stats';

    public function scopeSpanningDays($query, $days)
    {
        return $query->oldest()->whereDate(
            'created_at', '>=', Carbon::now()->subDays($days)
        );
    }
}
