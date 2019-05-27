<template id="specificEntry">
<h1>Inlägg</h1>
<div id="entry"></div>

<h2>Create Comment</h2>
    <form method="post" id="createCommentForm">
      <label for="content" >content:</label>
      <input type="text" name="content" id="content" required>
      <button type="submit" onClick="window.location.reload()" >Submit</button>
    </form>
    
</template>
