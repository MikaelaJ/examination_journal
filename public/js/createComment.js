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
    const formData = new FormData(createCommentForm)

//  formData.get('content')
    fetch(`/createComment/${entryID}`, {
        method: 'POST',
        body: formData
    }).then(response => {
        return response.json() 
    })
    .then( res => {
        return res;
    })
    .catch(error => {
        console.error(error);
    })
}

