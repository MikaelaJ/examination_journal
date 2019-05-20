<?php

return function ($app) {
    // Register auth middleware
    $auth = require __DIR__ . '/../middlewares/auth.php'; // Kod som körs innan och efter en route-funktion körs.

    // Basic protected GET route 
    $app->get('/entries', function ($request, $response) {
        $entry = new Entry($this->db);

        return $response->withJson($entry->getAllEntries());
    })->add($auth);

    // Hämtar de X senaste inläggen av alla användare
    $app->get('/entries/latest/{nr}', function ($request, $response, $args) {
        $number = $args['nr'];

        $entry = new Entry($this->db);

        return $response->withJson($entry->getLatestEntries($number));
    });

    // Hämtar alla inlägg av en specifik användare
    $app->get('/user/allpostsby/{id}', function ($request, $response, $args) {
        $userID = $args['id'];

        $entry = new Entry($this->db);

        return $response->withJson($entry->getAllEntriesByUser($userID));
    });

    // Lägga in en ny entry
    $app->post('/createEntry', function ($request, $response, $args) {
        $dataBody = $request->getParsedBody();
        $entry = new Entry($this->db);
        $entry->createEntry($dataBody['title'], $dataBody['content'], $dataBody['userID']);
        return $response->withJson([
            'success' => true
        ]);
    })->add($auth);
};
