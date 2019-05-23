const bindEvents = () => {
    const loginForm = document.querySelector('#loginForm');
    const registerForm = document.querySelector('#registerForm')
    const createEntryForm = document.querySelector("#createEntryForm")
    // const createEntryForm =  document.querySelector('#createEntryForm')

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
}