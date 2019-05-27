<?php

return function ($app) {
    // Register auth middleware
    $auth = require __DIR__ . '/../middlewares/auth.php';

    // Add a logout route
    $app->get('/api/logout', function ($request, $response) {

        session_unset();
        session_destroy();

        return $response->withJson(['loggedIn' => false]);
    });
};
