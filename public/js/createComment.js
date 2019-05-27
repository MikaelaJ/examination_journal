function createComment(event) {
    event.preventDefault();
    console.log(createCommentForm);
    const formData = new FormData(createCommentForm)
    console.log(formData);
    formData.get('content')
    fetch('/createComment', {
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