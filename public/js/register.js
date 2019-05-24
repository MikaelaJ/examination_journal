function register(event) {
    event.preventDefault();
    const registerFormData = new FormData(registerForm);
    fetch('/api/newuser', {
        method: 'POST',
        body: registerFormData
    }).then(response => {
        if (!response.ok) {
            renderView(views.registerError)
            return Error(response.statusText)

        } else {
            console.log("response", response);
            renderView(views.registered);
        }
    })
    .catch(error => {
        console.error(error);
    })
}
