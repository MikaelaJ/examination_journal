
console.log(views)

const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(loginForm)
  fetch('/api/login', {
    method: 'POST',
    body: formData
  }).then(response => {
    if (!response.ok) {
      renderView(views.loginError)
      return Error(response.statusText)

    } else {
      renderView(views.loggedIn)
    }
  }).catch(error => {
    console.error(error);
  })
})

