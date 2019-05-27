/* -----------Render All Entries (show on first page and when logged in)------------- */
function renderEntries() {
  fetch('/entries')
    .then(response => {
      return response.json()
    })
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
        return response.json()
      } else {
        console.log("något blev fel");
      };
    })
    .then(data => {
      // renderView(views.allEntries)
      console.log("Här kommer data", data); //En array 
      getTitle(data, "entriesByMe");
    })
}

/* -----------Render Entries By User (shown when logged in=------------- */
  function renderEntriesByUser() {
    fetch("/api/getPostsByUser")
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          console.log("något blev fel");
        };
      })
      .then(data => {
        // renderView(views.allEntries)
        getTitle(data, "entriesByMe");
      })
  }
  
  function getTitle(data, elementId) {
    for (let i = 0; i < data.length; i++) {
      const p = document.createElement('p');
      const span = document.createElement('span');
      const h2 = document.createElement('h2');
      
      h2.textContent = ` title: ${data[i].title}`;
      p.textContent = ` ${data[i].username} ${data[i].userID}`;
      span.textContent = `${data[i].createdAt}`;

      document.getElementById(elementId).append(h2);
      document.getElementById(elementId).append(p);
      document.getElementById(elementId).append(span);
  
      /* p.textContent = "title: " + data[i].title + " userid: " + data[i].userID + " createdAt " + data[i].createdAt; */
      document.getElementById(elementId).append(p);

    
      h2.addEventListener('click', function(e){
        let entryID = data[i].entryID;

        renderView(views.specificEntry);
        updateEntry(entryID);
        deleteEntry(entryID)
    
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        h2.textContent = data[i].title + " " + data[i].createdAt + " userID: " + data[i].userID + " entryID: " + data[i].entryID;
        p.textContent = data[i].content;
        document.getElementById("entry").append(h2);
        document.getElementById("entry").append(p);

        const createCommentForm = document.querySelector("#createCommentForm")
        console.log(createCommentForm, entryID)
        createCommentForm.addEventListener('submit', function(event) {
          createComment(event, entryID);
        });
      });
    } 
  }


function updateEntry(entryID) {
  const updateBtn = document.querySelector('#updateEntryForm');
  updateBtn.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(updateBtn);

    putEntryToDb(entryID, updateBtn)
  })
  console.log(entryID);
}

function putEntryToDb(entryID, elementID) {
  const formData = new FormData(elementID)

  fetch(`/api/entry/${entryID}`, {
      method: 'POST',
      body: formData
    }).then(response => {
      console.log("resp1", response);
      return response.json()
    })
    .then(res => {
      console.log("resp2", res);
      return res;
    })
    .catch(error => {
      console.error(error);
    })
}

function deleteEntry(entryID) {
  const deleteBtn = document.querySelector('#deleteEntryForm');
  deleteBtn.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(deleteEntryForm)
    fetch(`/api/entry/${entryID}`, {
        method: 'DELETE',
        body: formData
      }).then(response => {
        console.log("resp1", response);
        return response.json()
      })
      .catch(error => {
        console.error(error);
      })
  })
}
