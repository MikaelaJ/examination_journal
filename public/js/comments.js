/* ----------- Render comments By entry ------------- */
function renderCommentsByEntry(entryID) {
  fetch(`/comments/all/${entryID}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        console.log("något blev fel");
        return;
      };
    })
    .then(data => {
      console.log("Här kommer data", data); //En array 
      getComment(data, "comment");
    })
}

function getComment(data, comment) {
  for (let i = 0; i < data.length; i++) {
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const span = document.createElement('span');
    h3.textContent = ` ${data[i].username}`;
    p.textContent = ` ${data[i].content}`;
    span.textContent = `${data[i].createdAt}`;

    document.getElementById(comment).append(h3);
    document.getElementById(comment).append(p);
    document.getElementById(comment).append(span);

    let commentID = data[i].commentID
    h3.addEventListener('click', function (e) {
      renderView(views.specificComment);
      console.log("commentID", commentID);

      // let toggle = document.getElementById('toggleComment');
      // console.log(toggle);
      // toggle.classList.add('hide');

      updateComment(commentID);
      deleteComment(commentID);
      // renderCommentsByEntry(commentID);

      const h3 = document.createElement('h2');
      const p = document.createElement('p');
      h3.textContent = data[i].createdAt + " userID: " + data[i].createdBy + " entryID: " + data[i].entryID;
      p.textContent = data[i].content;
      document.getElementById("comment").append(h3);
      document.getElementById("comment").append(p);
    });
  }
}

function updateComment(commentID) {
  const updateBtn = document.querySelector('#updateCommentForm');
  updateBtn.addEventListener('submit', function (e) {
    e.preventDefault();

    putCommentToDb(commentID, updateBtn)
  })
  console.log(commentID);
}

function putCommentToDb(commentID, elementID) {
  const formData = new FormData(elementID)

  fetch(`/api/comment/${commentID}`, {
      method: 'POST',
      body: formData
    }).then(response => {
      console.log("resp1", response);
      return response.json()
    })
    .catch(error => {
      console.error(error);
    })
}

function deleteComment(commentID) {
  const deleteCommentBtn = document.querySelector('#deleteCommentForm');

  deleteCommentBtn.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(deleteCommentForm)

    fetch(`/api/comment/${commentID}`, {
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