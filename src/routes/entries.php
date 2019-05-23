<?php

return function ($app) {
    // Register auth middleware
    $auth = require __DIR__ . '/../middlewares/auth.php'; // Kod som körs innan och efter en route-funktion körs.

    // Basic protected GET route 
    $app->get('/entries', function ($request, $response) {
        $entry = new Entry($this->db);

        return $response->withJson($entry->getAllEntries());
    });

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
        $dataBody = $request->getParsedBody(); // getParsedData() funkar endast på post
        $entry = new Entry($this->db);
        $entry->createEntry($dataBody['title'], $dataBody['content'], $dataBody['userID']);
        return $response->withJson([
            'success' => true
        ]);
    })->add($auth);

    // Delete Entry
    $app->delete('/entry/{id}', function ($request, $response, $args) {
        $entryID = $args['id'];
        $entry = new Entry($this->db);

        $entry->deleteEntry($entryID);
        return $response->withJson([
            'success' => true
        ]);
    }) ;

    // Update Entry
    $app->put('/entry/{id}', function ($request, $response, $args) {
        $entryID = $args['id'];
        $entry = new Entry($this->db);

        $entry->updateEntry($entryID);
        return $response->withJson([
            'success' => true
        ]);
    });
};
