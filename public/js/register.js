
const registerForm = document.querySelector('#registerForm');

registerForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(registerForm)
  fetch('/newuser', {
    method: 'POST',
    body: formData
  }).then(response => {
    if (!response.ok) {
      renderView(views.registerError)
      return Error(response.statusText)
    // console.log("har ej skapats")
    
} else {
      renderView(views.registered)
    }
  }).catch(error => {
    console.error(error);
  })
})

