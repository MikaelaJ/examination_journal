
  function renderEntries(){
    fetch('/entries')
    .then(response => { return response.json() })
    .then(data => {
   // renderView(views.allEntries)
    console.log("Här kommer data", data); //En array 
    getTitle(data);
    })
  }

  function getTitle(data){

   // let title ="";
    for (let i = 0; i < data.length; i++) { 

        const p = document.createElement('p');
        p.textContent = data[i].title + " " + data[i].userID + " " + data[i].createdAt;
        document.getElementById("entries").append(p);

        p.addEventListener('click', function() {
            console.log(data[i]);

        })

        /*
       console.log(data[i].title); 
       title += data[i].title + "<br>";

       document.getElementById("entries").addEventListener("click", function(){
           if(this.click){
            alert(data[i].title);
           }
       })
       document.getElementById("entries").innerHTML = title;
       */
       
      } 
  }
  

