<?php

return function ($app) {
    $auth = require __DIR__ . '/../middlewares/auth.php'; // Kod som körs innan och efter en route-funktion körs.

    // Comment a blog post
    $app->post('/createComment/{id}', function ($request, $response, $args) {
        $entryID = $args['id'];
        $dataBody = $request->getParsedBody(); // getParsedData() funkar endast på post
        $comment = new Comment($this->db);
        $comment->createComment($entryID, $dataBody['content']);
        return $response->withJson([
            'success' => true
        ]);
    })->add($auth);

    // Delete Comment
    $app->delete('/api/comment/{id}', function ($request, $response, $args) {
        $commentID = $args['id'];
        $comment = new Comment($this->db);

        // $a = $comment->deleteComment($commentID);
        // var_dump($a);
        // exit;

        if ($comment->deleteComment($commentID)) {
            return $response->withJson([
                'success' => true
            ]);
        } else {
            return $response->withStatus(401);
        }
    });

    // Update Comment
    $app->post('/api/comment/{id}', function ($request, $response, $args) {
        $commentID = $args['id'];
        $dataBody = $request->getParsedBody();
        $comment = new Comment($this->db);


     //   $comment->updateComment($commentID, $dataBody['content']);
        if ($comment->updateComment($commentID, $dataBody['content'])) {
            return $response->withJson([
                'success' => true
            ]);
        } else {
            return $response->withStatus(401);
        }
    });

    //Hämta en kommentarer till varje inlägg
    //När man läser hela inlägget ska man också få en lista på alla kommentarer till inlägget.
    $app->get('/comments/all/{id}', function ($request, $response, $args) {
        $entryID = $args['id'];
        $comment = new Comment($this->db);
        return $response->withJson($comment->getAllComments($entryID));
    });
};
