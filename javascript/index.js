function fetchingAll() {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=slayer`)
    .then(function (data) {
      console.log(`try1`, data);

      if (data.ok) {
        return data.json();
      }
    })

    .then(function (data) {
      let albums = data.data;
      console.log(albums);
      let alertAlbums = document.getElementById("alert");
      let container = document.getElementById("spazio");
      for (let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * albums.length);
        container.innerHTML += ` <div class="col m-1">
                <div class="card" style="width: 15rem;">
                    <img src="${albums[num].album.cover_big}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title" id="${albums[num].rank}">${albums[num].album.title}</h5>
                       <p class="card-title">${albums[num].title_short}</p>
                        <p class="card-text">${albums[num].artist.name} </p>
                        
                    </div>
                </div>
            </div>`;
        //fare foreach per album che ritornino le canzoni
        for (let i = 0; i < albums.length; i++) {
          alertAlbums.innerHTML += `<p id="${albums[i].rank}">${albums[i].artist.name}: ${albums[i].album.title}</p>`;
        }
      }
    })
    .catch(function (err) {
      console.log(err, `qualcosa è andato storto`);
    });

  fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=nothingelsematter`
  )
    .then(function (data) {
      console.log(`try2`, data);

      if (data.ok) {
        return data.json();
      }
    })

    .then(function (data) {
      const canzonePreferita = data.data;

      let container2 = document.getElementById("spazio2");
      let num2 = 0;
      container2.innerHTML += `<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${canzonePreferita[num2].title_short}</h5>
        <p class="card-text">${canzonePreferita[num2].artist.name} </p>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"></p>
      </div>
    </div>
    <div class="col-md-4">
      <img src="${canzonePreferita[num2].album.cover_big}" class="img-fluid rounded-start" alt="...">
    </div>
  </div>
</div>`;
    })
    .catch(function (err) {
      console.log(err, `qualcosa è andato storto`);
    });
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=meshuggah`)
    .then(function (data) {
      console.log(`try3`, data);

      if (data.ok) {
        return data.json();
      }
    })
    .then(function (data) {
      let container3 = document.getElementById("container3");
      let albumDaCarosello = data.data;
      let alertAlbums2 = document.getElementById("alert");
      let primoNumero = 0;
      let secondoNumero = 1;
      let terzoNumero = 2;
      container3.innerHTML += `
      <div class="carousel-item active">
            <img src="${albumDaCarosello[primoNumero].album.cover_big}" class="d-block " alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5 id="${albumDaCarosello[primoNumero].rank}">${albumDaCarosello[primoNumero].album.title}</h5>    
                            
            </div>
        </div>

        <div class="carousel-item">
            <img src="${albumDaCarosello[secondoNumero].album.cover_big}" class="d-block " alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5 id="${albumDaCarosello[secondoNumero].rank}">${albumDaCarosello[secondoNumero].album.title}</h5>
                </div>
        </div>

        <div class="carousel-item">
            <img src="${albumDaCarosello[terzoNumero].album.cover_big}" class="d-block " alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5 id="${albumDaCarosello[terzoNumero].rank}">${albumDaCarosello[terzoNumero].album.title}</h5>
                </div>
        </div>
    </div>`;

      for (let i = 0; i < albumDaCarosello.length; i++) {
        alertAlbums2.innerHTML += `<p id="${albumDaCarosello[i].rank}">${albumDaCarosello[i].artist.name}: ${albumDaCarosello[i].title_short}</p>`;
      }
    });
}
let alertDiv = document.getElementById("alert");

function toggleDiv() {
  alertDiv.classList.toggle("d-none");
}

window.onload = fetchingAll();
