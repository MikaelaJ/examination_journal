let page = 1;
let offsetNr = 0;

function showTwentyNextEntries() {
  page++;
  offsetNr = (page - 1) * 20;
  renderEntries();
}

/* -----------Render All Entries (show on first page and when logged in)------------- */
function renderEntries() {
  fetch(`/api/entries/${offsetNr}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
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
      getTitle(data, "entriesByMe");
    })
}

function getTitle(data, elementId) {
  for (let i = 0; i < data.length; i++) {
    // let like = `
    //   <button type="submit" data-entryID='${data[i].entryID} class="btn">Like</button>
    // `
    // let likeDiv = document.createElement('div');
    // likeDiv.id = "test";
    // console.log(likeDiv);
    // likeDiv.innerHTML = like;



    const createdBySpan = document.createElement('span');
    const span = document.createElement('span');
    const h2 = document.createElement('h2');
    const hr = document.createElement('hr');

    h2.textContent = data[i].title;
    createdBySpan.textContent = `Made by: ${data[i].username}`;
    span.textContent = `Posted: ${data[i].createdAt}`;

    document.getElementById(elementId).append(h2);
    document.getElementById(elementId).append(span);
    document.getElementById(elementId).append(createdBySpan);
    // document.getElementById(elementId).append(likeDiv);
    document.getElementById(elementId).append(hr);


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

          h2.textContent = data[i].title;
          span.textContent = data[i].content;

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
}

function putEntryToDb(entryID, elementID) {
  const formData = new FormData(elementID)

  fetch(`/api/entry/${entryID}`, {
      method: 'POST',
      body: formData
    }).then(response => {
      return response.json()
    })
    .then(res => {
      location.reload();
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
        return response.json()
      })
      .then(res => {
        location.reload();
      })
      .catch(error => {
        console.error(error);
      })
  })
}