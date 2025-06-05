const createPlaylistCard = (playlist) => {
  const playlistCard = document.createElement("section");
  playlistCard.className = "playlist-card";
  playlistCard.innerHTML = `
    <img id="playlistCover" src="/site-unit2-project1-music-playlist-explorer-starter/music-playlist-creator/assets/img/playlist.png" alt="" width="180px" >
    <h4 class="playlist-title">${playlist.playlist_name} Mix</h4>
    <p class="creator">${playlist.playlist_author}</p>
    <section class="like">
    <i data-isliked = "false"  id="heartIcon" class="fa-solid fa-heart"></i>
    <p id="like-count">${playlist.likes}</p>
    </section>
    `;
  return playlistCard;
};

const displayPlaylist = () => {
  const playlistCards = document.querySelector(".playlist-cards");
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

const shuffleSongs = (array) =>{
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i] , array[j]] = [array[j] , array[i]];
        console.log(array[i]);
        console.log[array[j]];
    }
    
    
    return [...array];

}
const arr = [
      {
        "title": "Ocean Eyes",
        "artist": "Billie Eilish",
        "album": "Don't Smile at Me",
        "cover": "https://example.com/images/ocean-eyes.jpg"
      },
      {
        "title": "Sunflower",
        "artist": "Post Malone",
        "album": "Spider-Man: Into the Spider-Verse",
        "cover": "https://example.com/images/sunflower.jpg"
      },
      {
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "album": "After Hours",
        "cover": "https://example.com/images/blinding-lights.jpg"
      }
    ]


console.log('1.' ,arr);
console.log('2. ', shuffleSongs(arr));