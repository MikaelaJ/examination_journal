const bindEvents = () => {
    const loginForm = document.querySelector('#loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const registerForm = document.querySelector('#registerForm')
    const createEntryForm = document.querySelector("#createEntryForm")
    const createCommentForm = document.querySelector("#createCommentForm")
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
if(createEntryForm) {
        createEntryForm.addEventListener('submit', event => {
            createEntry(event);
        })
    }
    if(createCommentForm) {
        createCommentForm.addEventListener('submit', event => {
            createComment(event);
        })
    }
}