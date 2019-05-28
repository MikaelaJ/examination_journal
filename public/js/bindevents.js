const bindEvents = () => {
    const loginForm = document.querySelector('#loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const registerForm = document.querySelector('#registerForm')
    const createEntryForm = document.querySelector("#createEntryForm")
    const updateEntryForm = document.getElementById("#updateEntry")
    const allUsersBtn = document.getElementById("allUsersBtn")
    // const createEntryForm =  document.querySelector('#createEntryForm')

    if (logoutBtn) {
        logoutBtn.addEventListener("click", event => {
            logout(event)
            // Kod för att logga ut
        })
    }
    if (loginForm) {
        loginForm.addEventListener('submit', event => {
            login(event)
            // Kod för att logga in
        })
    }

    if (registerForm) {
        registerForm.addEventListener('submit', event => {
            register(event);
            // Kod för att registrera användare
        })
    }

    if (createEntryForm) {
        console.log(createEntryForm);
        createEntryForm.addEventListener('submit', event => {
            event.preventDefault();
            console.log("Hej");
            createEntry(event);
        })
    }

    if (allUsersBtn) {
        allUsersBtn.addEventListener('click', event => {
            renderUsersBtn(event);
        })
    }

}