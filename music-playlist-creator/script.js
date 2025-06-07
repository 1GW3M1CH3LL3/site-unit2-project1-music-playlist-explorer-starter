const createPlaylistCard = (playlist) => {
  const playlistCard = document.createElement("section");
  playlistCard.setAttribute("id", playlist.id)
  playlistCard.className = "playlist-card";
  playlistCard.innerHTML = `
    <img id="playlistCover" src="assets/img/playlist.png" alt="" width="180px" >
    <h4 class="playlist-title">${playlist.playlist_name}</h4>
    <p class="creator">${playlist.playlist_author}</p>
    <section class = "playlist-cardfooter">
    <section class="like">
    <i data-isliked = "false"  id="heartIcon" class="fa-solid fa-heart"></i>
    <p id="like-count">${playlist.likes}</p>
    </section>
    <section class="edit"> <i class="fa-solid fa-pen"></i></section>
    <section class="delete"> <i  class="fa-solid fa-trash"></i></section>
    </section>
    `;
  const edit = playlistCard.querySelector(".edit") 
  edit.addEventListener("click", (editButton) =>{
    editButton.stopPropagation()
        document.querySelector("#editform-background").style.display = "flex";


  }) 
  const del = playlistCard.querySelector(".delete") 
  del.addEventListener("click", (delButton) => {
    delButton.stopPropagation()
    playlists = playlists.filter(playlist => playlist.id !== Number(playlistCard.id))
    displayPlaylist()
    })

    
  return playlistCard;
  

  
};


const shuffleSongs = (_array) =>{
    const array = [..._array]
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i] , array[j]] = [array[j] , array[i]];
    }
    
    
    return array;

}
const displayPlaylist = () => {
  const playlistCards = document.querySelector(".playlist-cards");
  playlistCards.innerHTML = ``
    
//   const playlistCard = document.querySelector(".playlist-card");
//   playlistCard.addEventListener("click", () => {
//     console.log(playlistCard)
//     document.querySelector(".modal").style.display = "flex";
//     editModal(playlistCard);
//   });

//   const heart = document.getElementById("heartIcon");
//   const noOfLikes = document.getElementById("like-count");

//   heart.addEventListener("click", (like) => {
//     like.stopPropagation();
//     if (heart.dataset.isliked === "false") {
//       heart.style.color = "red";
//       Number(noOfLikes.textContent++);
//       heart.dataset.isliked = "true";
//     } else {
//       heart.style.color = "white";
//       Number(noOfLikes.textContent--);
//       heart.dataset.isliked = "false";
//     }
//   });
//   const modalBackground = document.querySelector("#playlistDetails");
//   modalBackground.addEventListener("click", () => {
//     document.querySelector(".modal").style.display = "none";
//   });

  for (const playlist of playlists) {
    const el = createPlaylistCard(playlist);
    playlistCards.appendChild(el);
    el.addEventListener("click", () => {
      document.querySelector(".modal").style.display = "flex";
      editModal(playlist);
    });

    const modalBackground = document.querySelector("#playlistDetails");
    modalBackground.addEventListener("click", () => {
      document.querySelector(".modal").style.display = "none";
    });
    
    
    

    const playlist_heart = el.querySelector("#heartIcon");
    const playlist_noOfLikes = el.querySelector("#like-count");
    playlist_heart.addEventListener("click", (like) => {
      like.stopPropagation();
      if (playlist_heart.dataset.isliked === "false") {
        playlist_heart.style.color = "red";
        Number(playlist_noOfLikes.textContent++);
        playlist_heart.dataset.isliked = "true";
      } else {
        playlist_heart.style.color = "white";
        Number(playlist_noOfLikes.textContent--);
        playlist_heart.dataset.isliked = "false";
      }
    });
    
    
    const shuffle_button = document.querySelector("#shuffle-btn")
    shuffle_button.addEventListener("click", (shuffle)=>{
        shuffle.stopPropagation()
        // shuffleSongs(playlist.songs)
        const songList = document.getElementById("songs")
        // const songList = null;
        songList.innerHTML = ""
        console.log(songList);
        for(let song of shuffleSongs(playlist.songs)) { 
            //console.log(song);
            const songElement = document.createElement("li")
            songElement.id = "song"
            songElement.innerHTML = `
        <section class="songCover"><img src="assets/img/song.png" alt="" width="60px" height="50px"></section>
        <section class="songDetails">
                        <p class="songTitle">${song.title}</p>
                        <p class="artistName">${song.artist}</p>
                        <p class="albumName">${song.album}</p>
                    
</section>`
songList.appendChild(songElement)
        }
        

    }

    )
  }
};

document.addEventListener("DOMContentLoaded", displayPlaylist());

const editModal = (playlist) => {
  const section = document.querySelector("#modalTop");
  document.getElementById("playlistImage").src = "assets/img/playlist.png";
  section.querySelector(".playlist-title").textContent = playlist.playlist_name;
  section.querySelector(".creator").textContent = playlist.playlist_author;
  const songList = document.getElementById("songs");
  songList.innerHTML = "";
  for (const song in playlist.songs) {
    const li = document.createElement("li");
    li.id = "song";
    li.innerHTML = `
        <section class="songCover"><img src="assets/img/song.png" alt="" width="60px" height="50px"></section>
        <section class="songDetails">
                        <p class="songTitle">${playlist.songs[song].title}</p>
                        <p class="artistName">${playlist.songs[song].artist}</p>
                        <p class="albumName">${playlist.songs[song].album}</p>
                    
</section>

        
        `;
    songList.appendChild(li);
  }
};
const add = document.querySelector("#add")
  add.addEventListener("click", (addButton) =>{
    addButton.stopPropagation()
    document.querySelector("#form-background").style.display = "flex";
  }) 

const form = document.querySelector("#form-container")
const submitAdd = form.querySelector("#submit-addbtn")
submitAdd.addEventListener("click", (addPlaylist)=>{
addPlaylist.preventDefault()
addPlaylist.stopPropagation()
const playlistCards = document.querySelector(".playlist-cards");
const newPlaylist = fname.value.trim()
const newCreator = fcreator.value.trim() 
const newplaylistCard = {"id": playlists[playlists.length - 1].id + 1,
  "playlist_name" : newPlaylist,
  "playlist_author": newCreator,
  "playlist_art": "https://example.com/images/country-roads.jpg",
  "songs": [{
        "title" : fsongname.value.trim(),
        "artist": fsongartist.value.trim(),
        "album": fsongalbum.value.trim(),
        "cover": "https://example.com/images/take-me-home-country-roads.jpg",
        "time": fsongalbum.value.trim()
      },
    ],
    "likes": 0

};


playlists.push(newplaylistCard)
displayPlaylist()
document.querySelector("#form-background").style.display = "none";

// const newCreator = fname.value.trim()
// playlistCards.innerHTML = ``
// newplaylistCard.innerHTML = `
//     <img id="playlistCover" src="/site-unit2-project1-music-playlist-explorer-starter/music-playlist-creator/assets/img/playlist.png" alt="" width="180px" >
//     <h4 class="playlist-title">${newPlaylist} </h4>
//     <p class="creator">${newCreator}</p>
//     <section class = "playlist-cardfooter">
//     <section class="like">
//     <i data-isliked = "false"  id="heartIcon" class="fa-solid fa-heart"></i>
//     <p id="like-count">0</p>
//     </section>
//     <section class="edit"> <i class="fa-solid fa-pen"></i></section>
//     <section class="delete"> <i  class="fa-solid fa-trash"></i></section>
//     </section>
//     `;
    
    // playlistCards.appendChild(newplaylistCard)
    
    

})  

// const playlistCards = document.getElementsByClassName("playlist-card")
// for(const card of playlistCards){
// const edit = card.querySelector(".edit") 
// const form = document.querySelector("#editform-container")
// const submitEdit = form.querySelector("#submit-editbtn")
// console.log(submitEdit)
// const likes = card.querySelector("#like-count").textContent
// submitEdit.addEventListener("click", (editPlaylist) =>{
//   console.log("firingg")
//   editPlaylist.preventDefault()
//   editPlaylist.stopPropagation()
//   const editCreator = feditcreator.value.trim()
//   const editName = feditname.value.trim()
//   console.log(editCreator)
//   console.log(editName)
//   card.innerHTML = `
//   <img id="playlistCover" src="/site-unit2-project1-music-playlist-explorer-starter/music-playlist-creator/assets/img/playlist.png" alt="" width="180px" >
//     <h4 class="playlist-title">${editName} </h4>
//     <p class="creator">${editCreator}</p>
//     <section class = "playlist-cardfooter">
//     <section class="like">
//     <i data-isliked = "false"  id="heartIcon" class="fa-solid fa-heart"></i>
//     <p id="like-count">${likes}</p>
//     </section>
//     <section class="edit"> <i class="fa-solid fa-pen"></i></section>
//     <section class="delete"> <i  class="fa-solid fa-trash"></i></section>
//     </section>`
// document.querySelector("#editform-background").style.display = "none";
// })

// }

const sort = document.getElementById("sort");
sort.addEventListener("change", ()=>{
  if(sort.value === "AZ"){
    playlists.sort((a,b) => a.playlist_name.localeCompare(b.playlist_name))
    displayPlaylist()
  

}else if(sort.value === "ZA"){
  playlists.sort((a,b) => b.playlist_name.localeCompare(a.playlist_name))
  displayPlaylist()
}
else if(sort.value == "likes"){
  playlists.sort((a,b) => b.likes - a.likes)
  displayPlaylist()
}

})

