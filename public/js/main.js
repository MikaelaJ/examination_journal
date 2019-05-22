const views = { // Ett objekt
<<<<<<< HEAD:public/main.js
  login: ['#loginFormTemplate', '#registerFormTemplate']
=======
  login: ['#loginFormTemplate', '#registerFormTemplate'],
  loggedIn: ['#loggedInTemplate'],
  loginError: ['#loginErrorTemplate'],
  registered: ['#registeredTemplate']
>>>>>>> ellinor:public/js/main.js
}
// Nu behöver man en function som renderar ut dessa vyer
function renderView(view) {
  // Definiera ett target där vi vill visa templaten
  const target = document.querySelector('main')
  console.log("hejsan");

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

renderView(views.login)

// fetch
fetch('/users')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })

/* fetch ('/entries')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  }) */