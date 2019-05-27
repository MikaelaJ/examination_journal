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

            /* h2.addEventListener('click', function () {
                let entryID = data[i].entryID;
                renderView(views.specificEntry);
                updateEntry(entryID);

                const h2 = document.createElement('h2');
                const p = document.createElement('p');
                h2.textContent = data[i].title + " " + data[i].createdAt + " userID: " + data[i].userID + " entryID: " + data[i].entryID;
                p.textContent = data[i].content;
                document.getElementById("entry").append(h2);
                document.getElementById("entry").append(p); */
            }
        }
    





