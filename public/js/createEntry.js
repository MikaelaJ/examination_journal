function createEntry(event) {
    event.preventDefault();
    const formData = new FormData(createEntryForm)
    let test = formData.get('title')
    fetch('/api/createEntry', {
        method: 'POST',
        body: formData
    }).then(response => {
        return response.json() 
    })
    .then( res => {
        // console.log(res);
    })
    .catch(error => {
        console.error(error);
    })
}


