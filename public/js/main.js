const views = { // Ett objekt
  login: ['#loginFormTemplate', '#registerFormTemplate', '#allEntriesTemplate'],
  loggedIn: ['#loggedInTemplate', '#createEntryTemplate', '#allEntriesTemplate'],
  loginError: ['#loginErrorTemplate'],
  registered: ['#registeredTemplate'],
  specificEntry:['#specificEntry']
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
}


let checkedIfLoggedIn = function () {
  return fetch('/api/ping')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    else{
      console.log("Nope");
      //Error TODO
      return;
    }
  })
  .then(loggedIn =>  { 
    console.log(loggedIn);
    return loggedIn;
  })
}

  checkedIfLoggedIn().then(res => {
    console.log("res", res);
    if (res) {
      console.log("checkedIfLoggedIn");
      renderView(views.loggedIn)
      renderEntriesByUser();
      renderEntries();
      bindEvents()
    } else {
      renderView(views.login)
      renderEntries();
      bindEvents()
    }
  })

// fetch
fetch('/users')
  .then(response => { return response.json() })
  .then(data => {
    console.log(data)
  })

/* fetch ('/entries')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  }) */