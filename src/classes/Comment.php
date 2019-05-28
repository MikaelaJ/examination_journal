<?php

class Comment extends Mapper
{
    public function createComment($entryID, $content)
    {
        $statement = $this->db->prepare("INSERT INTO comments(entryID, content, createdBy, createdAt) VALUES (:entryID, :content, :createdBy, NOW())");
        $statement->execute([
            'content' => $content,
            'createdBy' =>  $_SESSION['userID'],
            'entryID' => $entryID /* $_SESSION['entryID'] */
        ]);
    }

    public function deleteComment($commentID)
    {
        $statement = $this->db->prepare("DELETE FROM comments WHERE commentID = :commentID");
        $statement->execute([
            'commentID' => $commentID
        ]);
        
    }
    public function updateComment($commentID, $content) // $content will come from a variable that comes from JS
    {
        $statement = $this->db->prepare("UPDATE comments SET content=:content WHERE commentID = $commentID;");
        $statement->execute([
            'content' => $content
        ]);
    }
    
    public function getAllComments($entryID)
    {
        $statement = $this->db->prepare("SELECT comments.*, users.username FROM comments INNER JOIN users ON comments.createdBy = users.userID WHERE comments.entryID = :entryID;");
        $statement->execute([
            ':entryID' => $entryID
        ]);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }
}
