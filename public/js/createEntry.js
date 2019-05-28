function createEntry(event) {
    event.preventDefault();
    const formData = new FormData(createEntryForm);
    fetch('/api/createEntry', {
        method: 'POST',
        body: formData
    }).then(response => {
        return response.json() 
    })
    .then(res => {
        location.reload();
    })
    .catch(error => {
        console.error(error);
    })
}


