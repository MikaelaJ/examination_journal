<?php

return function ($app) {
    $auth = require __DIR__ . '/../middlewares/auth.php'; // Kod som körs innan och efter en route-funktion körs.

    // Comment a blog post
    $app->post('/createComment', function ($request, $response, $args) {
        $dataBody = $request->getParsedBody(); // getParsedData() funkar endast på post
        $comment = new Comment($this->db);
        $comment->createComment($dataBody['entryID'], $dataBody['content'], $dataBody['createdBy']);
        return $response->withJson([
            'success' => true
        ]);
    })->add($auth);

    // Delete Comment
    $app->delete('/comment/{id}', function ($request, $response, $args) {
        $commentID = $args['id'];
        $comment = new Comment($this->db);

        $comment->deleteComment($commentID);
        return $response->withJson([
            'success' => true
        ]);
    });

    // Update Comment
    $app->put('/comment/{id}', function ($request, $response, $args) {
        $commentID = $args['id'];
        $comment = new Comment($this->db);

        $comment->updateComment($commentID);
        return $response->withJson([
            'success' => true
        ]);
    });

    //Hämta en kommentarer till varje inlägg
    //När man läser hela inlägget ska man också få en lista på alla kommentarer till inlägget.
    $app->get('/comments/all/{id}', function ($request, $response, $args) {
        $entryID = $args['id'];
        $comment = new Comment($this->db);
        return $response->withJson($comment->getAllComments($entryID));
    });
};
