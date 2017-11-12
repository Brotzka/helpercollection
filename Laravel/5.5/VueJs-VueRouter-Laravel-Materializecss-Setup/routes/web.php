<?php

// Catches all routes of an Laravel-application.
// Needed if the user hits reload on the frontend.
// Without this catch all there would be a 404-error
Route::get('/{catchall?}', function () {
	return response()->view('vue-start');
})->where('catchall', '(.*)');
