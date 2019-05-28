/* -----------Render All Entries (show on first page and when logged in)------------- */
function renderEntries() {
  fetch('/entries')
    .then(response => {
      return response.json()
    })
    .then(data => {
      // renderView(views.allEntries)
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


    h2.addEventListener('click', function (e) {
      let entryID = data[i].entryID;

      // createdBy = userID Man ska bara kunna ändra comment när desssa är lika. 
      checkedIfLoggedIn().then(isLoggedin => {
        if (isLoggedin) {
          renderView(views.specificEntry);
          updateEntry(entryID);
          deleteEntry(entryID);
          renderCommentsByEntry(entryID);

          const createCommentForm = document.querySelector("#createCommentForm")
          createCommentForm.addEventListener('submit', function (event) {
            event.preventDefault();
            createComment(event, entryID);
          });

          /* ---------------- SHOW COMMENTS ----------------- */
          const h2 = document.createElement('h2');
          const p = document.createElement('p');
          const span = document.createElement('span');

          h2.textContent = `Title: ${data[i].title}`;
          span.textContent = `Content: ${data[i].content}`;
          p.textContent = `Comment created: ${data[i].createdAt} User ID: ${data[i].userID} Entry ID: ${data[i].entryID}`;

          document.getElementById("entry").append(h2);
          document.getElementById("entry").append(span);
          document.getElementById("entry").append(p);
        } else {
          renderView(views.specificEntry);
          const h2 = document.createElement('h2');
          const p = document.createElement('p');
          const span = document.createElement('span');

          h2.textContent = `Title: ${data[i].title}`;
          span.textContent = `Content: ${data[i].content}`;
          p.textContent = `Comment created: ${data[i].createdAt} User ID: ${data[i].userID} Entry ID: ${data[i].entryID}`;

          document.getElementById("entry").append(h2);
          document.getElementById("entry").append(span);
          document.getElementById("entry").append(p);
        }
      })
    });
  }
}

function updateEntry(entryID) {
  const updateBtn = document.querySelector('#updateEntryForm');
  updateBtn.addEventListener('submit', function (e) {
    e.preventDefault();

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
