<?php

return function ($app) {
  // Register auth middleware
  $auth = require __DIR__ . '/../middlewares/auth.php'; // Kod som körs innan och efter en route-funktion körs.

  // Basic protected GET route 
  // Hämtar en specifik användare
  $app->get('/user/{id}', function ($request, $response, $args) {
    $userID = $args['id'];
    $user = new User($this->db);

    return $response->withJson($user->getUserByID($userID));
  })->add($auth);

  // Hämtar alla användare
  $app->get('/users', function ($request, $response) {
    $user = new User($this->db);
  
    return $response->withJson($user->getAllUsers());
  });
  
  $app->post('/api/newuser', function ($request, $response, $args) {
    $dataBody = $request->getParsedBody();
    $user = new User($this->db); // Den vet vad det är för att den autoladdas i
    $user->registerNewUser($dataBody['username'], $dataBody['password']); 
    return $response->withJson([ 
    'success' => true
    ]);
  });


  
  $app->get('api/search/{searchText}', function ($request, $response, $args) {
    $userID = $args['searchText'];
    $search = new User($this->db);

    return $response->withJson($search->searchDb());
  });
};