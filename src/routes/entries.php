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
    $app->get('/api/entries/{nr}', function ($request, $response, $args) {
        $number = $args['nr'];

        $entry = new Entry($this->db);

        return $response->withJson($entry->getLatestEntries($number));
    });

    // Get all posts by UserId
    $app->get('/api/getPostsByUser', function ($request, $response) {
        $userID = $_SESSION['userID'];

        $entry = new Entry($this->db);

        return $response->withJson($entry->getAllEntriesByUser($userID));
    });

    // Get username by userID
    $app->get('/api/getNameByUser', function ($request, $response) {
        $userID = $_SESSION['userID'];

        $entry = new Entry($this->db);

        return $response->withJson($entry->getNameByUser($userID));
    });

    // Lägga in en ny entry
    $app->post('/api/createEntry', function ($request, $response, $args) {
        $dataBody = $request->getParsedBody(); // getParsedData() funkar endast på post
        $entry = new Entry($this->db);
        $userID = $_SESSION['userID'];

        $entry->createEntry($dataBody['title'], $dataBody['content'], $userID);

        return $response->withJson([
            'success' => true
        ]);
    })->add($auth);

    // Delete Entry
    $app->delete('/api/entry/{id}', function ($request, $response, $args) {
        $entryID = $args['id'];
        $entry = new Entry($this->db);

        if ($entry->deleteEntry($entryID)) {
            return $response->withJson([
                'success' => true
            ]);
        } else {
            return $response->withStatus(401);
        }
    });

    // Update Entry
    $app->post('/api/entry/{id}', function ($request, $response, $args) {
        $entryID = $args['id'];
        $dataBody = $request->getParsedBody();
        $newEntry = new Entry($this->db);

        if ($newEntry->updateEntry($entryID, $dataBody['title'], $dataBody['content'])) {
            return $response->withJson([
                'success' => true
            ]);
        } else {
            return $response->withStatus(401);
        }
    });

    // Search function
    $app->get('/api/entry/search/{value}', function ($request, $response, $args) {
        $searchValue = $args['value'];
        $findValue = new Entry($this->db);
        return $response->withJson($findValue->searchEntries($searchValue));
    });

    // LIKE
    $app->post('/api/entry/newLike/{id}', function ($request, $response, $args) {
        $entryID = $args['id'];

        $newLike = new Entry($this->db);
        $newLike->updateLike($entryID);
        return $response->withJson([
            'success' => true
        ]);
    });

    $app->post('/api/entry/showLikes/{id}', function ($request, $response, $args) {
        $entryID = $args['id'];

        $newLike = new Entry($this->db);
        $newLike->showLikes($entryID);
        return $response->withJson([
            'success' => true
        ]);
    });
};
