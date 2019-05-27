<template id="specificEntry">
<<<<<<< HEAD
  <h1>Inlägg</h1>
  <div id="entry"></div>
=======
<h1>Inlägg</h1>
<div id="entry"></div>
<div id="comment"></div>
>>>>>>> ea805899a839d42bec6f609c1a13a2f840338df0

  <form method="post" id="deleteEntryForm">
    <button type="submit" id="deleteEntry">Delete entry</button>
  </form>

  <h2>Create Comment</h2>
  <form method="post" id="createCommentForm">
    <label for="content">content:</label>
    <input type="text" name="content" id="content" required>
    <button type="submit">Submit</button>
  </form>
  
  <h2>Update Comment</h2>
    <form method="post" id="updateCommentForm">
    <label for="content">content:</label>
    <input type="text" name="newContent" id="newContent" required>
    <button type="submit">Update comment</button>
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