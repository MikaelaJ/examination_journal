function createComment(event, entryID) {
    event.preventDefault();
    const formData = new FormData(createCommentForm)

//  formData.get('content')
    fetch(`/createComment/${entryID}`, {
        method: 'POST',
        body: formData
    }).then(response => {
        return response.json() 
    })
    .then( res => {
        location.reload();
    })
    .catch(error => {
        console.error(error);
    })
}
