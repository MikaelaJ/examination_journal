const bindEvents = () => {
    const loginForm = document.querySelector('#loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const registerForm = document.querySelector('#registerForm');
    const createEntryForm = document.querySelector("#createEntryForm");
    const allUsersBtn = document.getElementById("allUsersBtn");
    const searchValueForm = document.getElementById('searchValueForm');

    const showTwentyEntriesBtn = document.getElementById("showTwentyEntries");
    // const likeBtn = document.getElementById("likeBtnForm");
    const likeBtn = document.querySelector('button').getAttribute('data-entryid');

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

    if (searchValueForm) {
        searchValueForm.addEventListener('submit', event => {
            apiSearch(event);
        })
        }

    if (showTwentyEntriesBtn) {
        showTwentyEntriesBtn.addEventListener('click', event => {
            showTwentyNextEntries(event);
        })
    }
    if (likeBtn) {
        likeBtn.addEventListener('submit', event => {
            console.log(likeBtn);
            // updateLikes(event);
        })
    }
}
