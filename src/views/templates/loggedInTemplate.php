<template id="loggedInTemplate">
  <h1>Hej
    <?php
    echo $_SESSION['username'];
    ?></h1>
  <h1>Alla mina inlägg</h1>
  <div id="entriesByMe"></div>
  <button type="submit" id="logoutBtn">Log out</button>
</template>
