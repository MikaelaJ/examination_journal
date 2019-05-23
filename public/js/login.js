function login(event) {
    console.log("hej");
    event.preventDefault();
    const formData = new FormData(loginForm)
    fetch('/api/login', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (!response.ok) {
            renderView(views.loginError)
            return Error(response.statusText)
        }
    }).catch(error => {
        console.error(error);
    })
}