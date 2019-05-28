<?php

return function ($app) {
  // Add a basic template route
  $app->get('/', function ($request, $response, $args) {
    // Render index view

    $title = $_SESSION['username'];
    return $this->renderer->render($response, 'index.phtml', [
      'title' => "Hej {$title}"
    ]);
  });
};
