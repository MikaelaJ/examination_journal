<?php
   class Comment extends Mapper {

    // Skapa ny kommentar
    public function createComment($content, $createdBy, $entryID)
    {
        $statement = $this->db->prepare("INSERT INTO comments(content, createdBy, createdAt, entryID) VALUES (:content, :createdBy, NOW(), :entryID)");
        $statement->execute([
            'content' => $content,
            'createdBy' => $createdBy,
            'entryID' => $entryID /* $_SESSION['entryID'] */
        ]);
    }

   //Delete Comment
    public function deleteComment($commentID) {
            $statement = $this->db->prepare("DELETE FROM comments WHERE commentID = :commentID");
            $statement->execute([
                'commentID' => $commentID
            ]);
    }

   }


?>
