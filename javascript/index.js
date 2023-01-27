fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=slayer`)
  .then(function (data) {
    console.log(`try`, data);

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
      container.innerHTML += ` <div class="col 1 col-md-3">
                <div class="card" style="width: 18rem;">
                    <img src="${albums[num].album.cover_big}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${albums[num].album.title}</h5>
                        <p class="card-text">${albums[num].artist.name} </p>
                        
                    </div>
                </div>
            </div>`;
    }

    let container2 = document.getElementById("spazio2");
    let num2 = 15;
    container2.innerHTML += ` <div class="col 1 col-md-3">
                <div class="card" style="width: 18rem;">
                    <img src="${albums[num2].album.cover_big}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${albums[num2].album.title}</h5>
                        <p class="card-text">${albums[num2].artist.name} </p>

                    </div>
                </div>
            </div>`;

    // albums.forEach((canzone) => {

    // });
  })
  .catch(function (data) {
    console.log("ce qualcosa che non va");
  });
