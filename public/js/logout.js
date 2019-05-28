function logout(event) {
    event.preventDefault();
    fetch('/api/logout')
        .then(response => {return response.json()})
        .then(data => {
            if (!data.ok) {
                renderView(views.login)
                return Error(data.statusText)
            } else {
                location.reload();
            }
        })
}