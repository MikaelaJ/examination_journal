<?php

class Entry extends Mapper
{
    private function getUserIdByEntryId($entryID)
    {
        $statement = $this->db->prepare("SELECT userID FROM entries WHERE entryID = :entryID");
        $statement->execute([
            'entryID' => $entryID
        ]);
        return $statement->fetch(PDO::FETCH_COLUMN);
    }

    public function getAllEntries()
    {
        $statement = $this->db->prepare("SELECT entries.*, users.username FROM entries INNER JOIN users ON entries.userID = users.userID;");
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getLatestEntries($number)
    {
        $statement = $this->db->prepare("SELECT entries.*, users.username FROM entries INNER JOIN users ON entries.userID = users.userID LIMIT {$number}");
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getAllEntriesByUser($userID)
    {
        $statement = $this->db->prepare("SELECT entries.*, users.username FROM entries INNER JOIN users ON entries.userID = users.userID WHERE users.userID = :userID");
        $statement->execute([
            ':userID' => $userID
        ]);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getNameByUser($userID)
    {
        $statement = $this->db->prepare("SELECT username FROM users WHERE userID = :userID");
        $statement->execute([
            ':userID' => $userID
        ]);
        return $statement->fetch(PDO::FETCH_ASSOC);
    }

    // Skapa nytt inlägg
    public function createEntry($title, $content, $userID)
    {
        $statement = $this->db->prepare("INSERT INTO entries(title, content, createdAt, userID) VALUES (:title, :content, NOW(), :userID)");
        $statement->execute([
            'title' => $title,
            'content' => $content,
            'userID' => $userID
        ]);
    }
    
    public function deleteEntry($entryID)
    {
        $userID = $this->getUserIdByEntryId($entryID);

        if ($userID === $_SESSION['userID']) {
            $statement = $this->db->prepare("DELETE FROM entries WHERE entryID = :entryID");
            $statement->execute([
                'entryID' => $entryID
            ]);
            return true;
        } else {
            return false;
        }
    }


    public function updateEntry($entryID, $title, $content) // $content $title will come from a variable that comes from JS
    {
        $statement = $this->db->prepare("UPDATE entries SET title=:title, content=:content WHERE entryID = :entryID;");
        $statement->execute([
            'entryID' => $entryID,
            'title' => $title,
            'content' => $content
        ]);
    }
};
