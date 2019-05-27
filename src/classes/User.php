<?php

class User extends Mapper
{
  // Hämtar en specifik användare
  public function getUserByID($userID)
  {
    $statement = $this->db->prepare("SELECT * FROM users WHERE userID = :userID");
    $statement->execute([
      ':userID' => $userID
    ]);
    return $statement->fetch(PDO::FETCH_ASSOC);
  }


  public function getUserIDFromUsername () 
  {
      $statement = $this->db->prepare("SELECT userID FROM users WHERE username = :username");
        $statement->execute([
          'username' =>  $_SESSION['username']
        ]);     
        
        return $statement->fetch(PDO::FETCH_ASSOC);   
  } 

  // Hämtar alla användare
  public function getAllUsers()
  {
    $statement = $this->db->prepare("SELECT username FROM users;");
    $statement->execute();
    return $statement->fetchAll(PDO::FETCH_ASSOC);
  }

  public function registerNewUser($username, $password)
  {
    
    $statement = $this->db->prepare("INSERT INTO users (username, password) VALUES (:username, :password)"); // Using named placeholders here, easier to read

      $statement->execute([
        ":username" => $username, // Use username as a regular string
        ":password" => password_hash($password, PASSWORD_BCRYPT) // Make a hashed password
      ]);
  }
};
