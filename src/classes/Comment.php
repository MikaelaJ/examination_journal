<?php

class Comment extends Mapper
{
    public function createComment($entryID, $content, $createdBy)
    {
        $statement = $this->db->prepare("INSERT INTO comments(entryID, content, createdBy, createdAt) VALUES (:entryID, :content, :createdBy, NOW())");
        $statement->execute([
            'content' => $content,
            'createdBy' => $createdBy,
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
}
