function login(event) {
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
            console.log("inloggad");
        }
    }).catch(error => {
        console.error(error);
    })
}