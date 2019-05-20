(function () {
  console.log('Hello World!');
})();

const views = { // Ett objekt
  login: ['#loginFormTemplate', '#registerFormTemplate'],
  register: ['#registerFormTemplate']
}
// Nu behöver man en function som renderar ut dessa vyer
function renderView(view) {
  // Definiera ett target där vi vill visa templaten
  const target = document.querySelector('main')

  // Loopa igenom våran view
  view.forEach(template => {
    const templateMarkup = document.querySelector(template).innerHTML;
    console.log(templateMarkup);
    // Skapa en div så att det blir mer strukturerat så att det inte bara blir markup efter varandra.
    const div = document.createElement('div');

    // Fyll den med innehållet
    div.innerHTML = templateMarkup;

    //Lägg in den diven i target (main-elementet)
    target.append(div);
  })
}
renderView(views.login)

const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);

  const formData = new FormData('#loginForm')
  fetch('/api/login', {
    method: 'POST',
    body: formData
  }).then(response => {
    if(!response.ok){
      renderView(view.loginError)
      return Error(response.statusText)
    } else {
      renderView(view.loggedIn)
      return response.json()
    }
  }).catch(error => {
    console.error(error);
  })
})

// fetch
fetch ('/users')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })

/* fetch ('/entries')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  }) */