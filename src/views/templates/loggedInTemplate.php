<template id="loggedInTemplate">
  <h1>Hej
    <?php
    echo $_SESSION['username'];
    ?></h1>
  <button type="submit" id="logoutBtn">Log out</button>
</template>