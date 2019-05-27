function createComment(event, entryID) {
    event.preventDefault();
    console.log(createCommentForm);
    const formData = new FormData(createCommentForm)

//  formData.get('content')
    fetch(`/createComment/${entryID}`, {
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
