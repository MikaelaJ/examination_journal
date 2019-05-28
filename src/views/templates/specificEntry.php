<template id="specificEntry">
  <h1>Inlägg</h1>
  <div id="entry"></div>
  <div id="comment"></div>

  <form method="post" id="deleteEntryForm">
    <button type="submit" id="deleteEntry">Delete entry</button>
  </form>

  <h2>Create Comment</h2>
  <form method="post" id="createCommentForm">
    <label for="content">content:</label>
    <input type="text" name="content" id="content" required>
    <button type="submit">Submit</button>
  </form>

  <h2>Update Entry</h2>
  <form method="post" id="updateEntryForm">
    <label for="title">Title</label>
    <input type="text" name="title" id="title">
    <label for="content">content:</label>
    <input type="text" name="content" id="content">
    <button type="submit" id="updateEntry">Update</button>
  </form>
</template>