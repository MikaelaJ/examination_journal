function createEntry(event) {
    event.preventDefault();
    const formData = new FormData(createEntryForm)
    console.log(formData);
    let test = formData.get('title')
    console.log(test);
    fetch('/api/createEntry', {
        method: 'POST',
        body: formData
    }).then(response => {
        console.log(response);
        return response.json() 
    })
    .then( res => {
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    })
}