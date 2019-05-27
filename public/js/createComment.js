/*function checkEntryID( entryID){
    e.preventDefault();
    //Skickar in entryID informationen till createComment
    //const createCommentForm = document.querySelector('#createCommentForm')
    const entryIDInput = document.createElement('input');
    entryIDInput.type = 'hidden';
    entryIDInput.name= 'entryID';
    entryIDInput.value = entryID;
    console.log(createCommentForm);
    createCommentForm.append(entryIDInput);
  }*/


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

