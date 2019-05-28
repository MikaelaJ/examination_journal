const views = { // Ett objekt
  login: ['#loginFormTemplate', '#registerFormTemplate', '#allEntriesTemplate', '#allUsersBtnTemplate', '#allUsersTemplate'],
  loggedIn: ['#loggedInTemplate', '#createEntryTemplate', '#allEntriesTemplate', '#allUsersBtnTemplate', '#allUsersTemplate'],
  loginError: ['#loginErrorTemplate'],
  registered: ['#registeredTemplate'],
  specificEntry:['#specificEntry'],
  specificComment:['#specificComment']
}
// Nu behöver man en function som renderar ut dessa vyer
function renderView(view) {
  // Definiera ett target där vi vill visa templaten
  const target = document.querySelector('main')
  target.innerHTML = "";

  // Loopa igenom våran view
  view.forEach(template => {
    const templateMarkup = document.querySelector(template).innerHTML;
    // Skapa en div så att det blir mer strukturerat så att det inte bara blir markup efter varandra.
    const div = document.createElement('div');

    // Fyll den med innehållet
    div.innerHTML = templateMarkup;
    //Lägg in den diven i target (main-elementet)
    target.append(div);

  })
  bindEvents()
}


let checkedIfLoggedIn = function () {
  return fetch('/api/ping')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    else{
      console.log("Något gick fel");
      //Error TODO
      return;
    }
  })
  .then(loggedIn =>  { 
    return loggedIn;
  })
}

  checkedIfLoggedIn().then(res => {
    if (res) {
      renderView(views.loggedIn);
      renderEntriesByUser();
      // renderCommentsByEntry();
      renderEntries();
      // bindEvents();

    } else {
      renderView(views.login);
      renderEntries();
      // renderCommentsByEntry();
      // bindEvents();
    }
  })

// fetch
fetch('/api/users')
  .then(response => { return response.json() })
  .then(data => {
  })
