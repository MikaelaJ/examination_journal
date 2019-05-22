<?php
  // Start a session here
  session_start();
  // Load everything needed
  require __DIR__ . '/../vendor/autoload.php';

  // Get settings and instantiate the app
  $settings = require __DIR__ . '/../src/settings.php';
  $app = new \Slim\App($settings);

  // Register our dependencies through our container
  $dependencies = require __DIR__ . '/../src/container.php';
  $dependencies($app);

  // Register all our routes
  $login = require __DIR__ . '/../src/routes/login.php';
  $login($app);

  $view = require __DIR__ . '/../src/routes/view.php';
  $view($app);

  $user = require __DIR__ . '/../src/routes/user.php';
  $user($app);
  
  $entry = require __DIR__ . '/../src/routes/entries.php';
  $entry($app);

  $comment = require __DIR__ . '/../src/routes/comments.php';
  $comment($app);
  // Run app
  $app->run();
