<?php
return function ($app) {

    // Register auth middleware
    $auth = require __DIR__ . '/../middlewares/auth.php'; // Kod som körs innan och efter en route-funktion körs.

     // Skapa ny kommentar
    $app->post('/createComment', function ($request, $response, $args) {
        
        $dataBody = $request->getParsedBody(); // getParsedData() funkar endast på post
        $comment = new Comment($this->db);
        $comment->createComment($dataBody['content'], $dataBody['createdBy'], $dataBody['entryID']);
        return $response->withJson([
            'success' => true
        ]);
    })/*->add($auth)*/;


// Delete comment
    $app->delete('/comment/{id}', function ($request, $response, $args) {
        $commentID = $args['id'];
        $comment = new Comment($this->db);
        $comment->deleteComment($commentID);
        return $response->withJson([
            'success' => true
        ]);
    })/* ->add($auth); */;
}
?>
