<?php

class Entry extends Mapper
{
    public function getAllEntries()
    {
        $statement = $this->db->prepare("SELECT * FROM entries");
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getLatestEntries($number)
    {
        $statement = $this->db->prepare("SELECT title, content FROM entries LIMIT {$number}");
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getAllEntriesByUser($userID)
    {
        $statement = $this->db->prepare("SELECT title, content FROM entries WHERE userID = :userID");
        $statement->execute([
            ':userID' => $userID
        ]);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    // Skapa nytt inlägg
    public function createEntry($title, $content, $userID)
    {
        /* if (isset($_GET['action']) && $_GET['action'] == 'commitEntry') { */
            $statement = $this->db->prepare("INSERT INTO entries(title, content, createdAt, userID) VALUES (:title, :content, NOW(), :userID)");
            $statement->execute([
                'title' => $title,
                'content' => $content,
                'userID' => $userID /* $_SESSION['userID'] */
            ]);
       /*  } */
    }

};

