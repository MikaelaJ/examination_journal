
/* -----------Render All Entries (show on first page and when logged in)------------- */
function renderEntries() {
  fetch('/entries')
    .then(response => { return response.json() })
    .then(data => {
      // renderView(views.allEntries)
      console.log("Här kommer data", data); //En array 
      getTitle(data, "entries");
    })
}


/* -----------Render Entries By User (shown when logged in=------------- */
function renderEntriesByUser() {
  fetch("/api/getPostsByUser")
    .then(response => {
      if (response.ok) {
        console.log(response)
        return response.json()
      } else {
        console.log("något blev fel");
      }
      ;
    })
    .then(data => {
      // renderView(views.allEntries)
      console.log("Här kommer data", data); //En array 

      getTitle(data, "entriesByMe");
    })
}

function getTitle(data, elementId) {
  // let title ="";
  for (let i = 0; i < data.length; i++) {
    const p = document.createElement('p');
    p.textContent = data[i].title + " " + data[i].userID + " " + data[i].createdAt;
    document.getElementById(elementId).append(p);
        p.addEventListener('click', function() {
            console.log(data[i]);
            renderView(views.specificEntry)

            //Skickar in entryID informationen till createComment
            const entryIDInput = document.createElement('input');
            entryIDInput.type = 'hidden';
            entryIDInput.name= 'entryID';
            entryIDInput.value = data[i].entryID;
            createCommentForm.append(entryIDInput);

            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            h2.textContent = data[i].title +  " "  + data[i].createdAt + " " + data[i].userID;
            p.textContent =  data[i].content;
            document.getElementById("entry").append(h2);
            document.getElementById("entry").append(p);
          
        })

    p.addEventListener('click', function () {
      console.log(data[i]);

    })
  }
}


