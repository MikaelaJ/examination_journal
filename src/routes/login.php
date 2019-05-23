<?php


return function ($app) {
  // Register auth middleware
  $auth = require __DIR__ . '/../middlewares/auth.php';

  // Add a login route
  $app->post('/api/login', function ($request, $response) {
    $data = $request->getParsedBody(); // får ut en acc array med data som skickats in
    if ($data['username'] && $data['password']) { // om det finns gör man en databaskoll (på riktigt, inte här)
      // In a real example, do database checks here
      $_SESSION['loggedIn'] = true;
      $_SESSION['username'] = $data['username'];

      $statement = $this->db->prepare("SELECT userID FROM users WHERE username = :username");
      $statement->execute([
        'username' =>  $data['username']
      ]);     
      
      $userData = $statement->fetch(PDO::FETCH_ASSOC);  
      $_SESSION['userID'] = $userData[userID];

      return $response->withJson($data);

    } else {
      return $response->withStatus(401);
    }
  });

  // Add a ping route
  $app->get('/api/ping', function ($request, $response, $args) {
    return $response->withJson(['loggedIn' => true]);
  })->add($auth);
};
