<?php

use App\Performance;

// Simulate a logged in user.
Auth::loginUsingId(1);


Route::get('/', function () {
    return view('welcome', compact('revenue'));
});

Route::group(['middleware' => 'admin'], function () {

    Route::get('api/revenue', function () {
        $range = request('range', 30);

        return Performance::spanningDays($range)
            ->pluck('revenue', 'created_at');
    });

});
