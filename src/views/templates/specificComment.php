<template id="specificComment">
  <h1>Inlägg</h1>
  <div id="entry"></div>
  <div id="comment"></div>

  <h2>Update Comment</h2>
  <form method="post" id="updateCommentForm">
    <label for="content">content:</label>
    <input type="text" name="content" id="content" required>
    <button type="submit"class="btn waves-effect waves-light">Submit</button>
  </form>

  <form method="post" id="deleteCommentForm" class="py-2">
    <button type="submit" id="deleteComment" class="btn waves-effect waves-light gray" >Delete comment</button>
  </form>

</template>