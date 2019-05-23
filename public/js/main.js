const views = { // Ett objekt
  login: ['#loginFormTemplate', '#registerFormTemplate'],
  loggedIn: ['#loggedInTemplate'],
  loginError: ['#loginErrorTemplate'],
  registered: ['#registeredTemplate']
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

let test = function () {
  return fetch('/api/ping')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .then(res => console.log(res))
};


let checkedIfLoggedIn = function () {
  return fetch('/api/ping')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    else{
      console.log("Nope");
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
      renderView(views.loggedIn)
      console.log("inloggad");
      bindEvents()
    } else {
      renderView(views.login)
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