const bindEvents = () => {
    const loginForm = document.querySelector('#loginForm');
    const registerForm = document.querySelector('#registerForm')
    // const createEntryForm =  document.querySelector('#createEntryForm')

    if (loginForm) {
        loginForm.addEventListener('submit', event => {
            login()
            // Kod för att logga in
        })
    }
    if (registerForm) {

        registerForm.addEventListener('submit', event => {
            register();
            // Kod för att registrera användare
        })

        // createEntryForm.addEventListener('submit', event => {

        //     // Kod för att skapa en entry
        // })
    }

}