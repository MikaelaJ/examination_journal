<template id="toggleComment">
    <h2>Update Comment</h2>
    <form method="post" id="updateCommentForm">
        <label for="content">content:</label>
        <input type="text" name="content" id="content" required>
        <button type="submit">Submit</button>
    </form>

    <form method="post" id="deleteCommentForm">
        <button type="submit" id="deleteComment">Delete comment</button>
    </form>
</template>