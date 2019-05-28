/* ----------- Render comments By entry ------------- */
function renderCommentsByEntry(entryID) {
  console.log("hej", entryID);
    fetch(`/comments/all/${entryID}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          console.log("något blev fel");
        };
      })
      .then(data => {
        console.log("Här kommer data", data); //En array 
        getComment(data, "commentsByEntry");
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

      document.getElementById("comment").append(h3);
      document.getElementById("comment").append(p);
      document.getElementById("comment").append(span);

      let commentID = data[i].commentID
      h3.addEventListener('click', function(e){
        renderView(views.specificComment);
        updateEntry(commentID);
        renderCommentsByEntry(commentID);
     
         const h3 = document.createElement('h2');
         const p = document.createElement('p');
         h3.textContent = data[i].createdAt + " userID: " + data[i].createdBy + " entryID: " + data[i].entryID;
         p.textContent = data[i].content;
         document.getElementById("comment").append(h3);
         document.getElementById("comment").append(p);


    });


    }
    
  }

  
