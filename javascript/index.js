let ammassoDiAlbum = [];

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

    let container = document.getElementById("spazio");
    for (let i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * albums.length);
      container.innerHTML += ` <div class="col m-1">
                <div class="card" style="width: 15rem;">
                    <img src="${albums[num].album.cover_big}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${albums[num].album.title}</h5>
                       <p class="card-title">${albums[num].title_short}</p>
                        <p class="card-text">${albums[num].artist.name} </p>
                        
                    </div>
                </div>
            </div>`;
    }
    ammassoDiAlbum.push(albums);
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
    let canzonePreferita = data.data;
    console.log(canzonePreferita);
    let container2 = document.getElementById("spazio2");
    let num2 = 0;
    container2.innerHTML += `<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${canzonePreferita[num2].title_short}</h5>
        <p class="card-text">${canzonePreferita[num2].artist.name} </p>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
console.log("Prova", ammassoDiAlbum);
//   .then(function (data) {
//     let albumPreferiti = data.data;
//     console.log(albumPreferiti);
//   });

//   .catch(function (data) {
//     console.log(err);
//   });
