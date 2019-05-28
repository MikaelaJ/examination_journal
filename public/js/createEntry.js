function createEntry(event) {
    event.preventDefault();
    const formData = new FormData(createEntryForm);
    fetch('/api/createEntry', {
        method: 'POST',
        body: formData
    }).then(response => {
        console.log(response);
        return response.json() 
    })
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    })
}


