function renderUsersBtn(event) {
    event.preventDefault();
    fetch('/api/users')
        .then(response => {
        if (!response.ok) {
            console.log("Hello, inne i response", response);
            renderView(views.registerError)
            return Error(response.statusText)
        } else {
            /* renderView(views.allUsers); */
            return response.json()
        }
    })
    .then(data => {
        getUsers(data, "users");
        console.log("Hej", data);
    })
        .catch(error => {
            console.error(error);
        })
}

function getUsers(data, users) {
        for (let i = 0; i < data.length; i++) {
            // Create element
            const h6 = document.createElement('h6');
            // Add value
            h6.textContent = `Name: ${data[i].username}`;
            document.getElementById(users).append(h6);
            }
        }
    





