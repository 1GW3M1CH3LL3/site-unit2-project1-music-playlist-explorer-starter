const generateRandomPlaylist = () =>{
    let num = Math.floor(Math.random() * (playlists.length + 1))
    
    const playlist = document.querySelector(".featured-playlist")
    playlist.innerHTML = `<section>
                    <img src="assets/img/song.png" width="450px" height="450px" class="featured-cover"> </img>
                    <h4 class="featured-playlistname">${playlists[num].playlist_name}</h4>
                </section>
                <section class = "featured-songs"></section>`
    const container = document.querySelector(".featured-songs")
    // container.class = "featured-songs" 
    playlist.appendChild(container)
    const songcontainer = document.createElement("ul")
    songcontainer.class  = "featured-songslist"  
    container.appendChild(songcontainer) 
    const songList = playlists[num].songs
    for(let song of songList){
        const songTile = document.createElement("li");
        songTile.innerHTML = `<li id="featured-song">
                    <section class="featured-songcover"><img src="assets/img/song.png" alt="" width="70px" height="70px"></section>
                    <section class="featured-songdetails">
                        <b> <p class="featured-title">${song.title}</p></b>
                        <p class="featured-artist">${song.artist}</p>
                        <p class="featured-album">${song.album}</p>
                        <p class="featured-album">${song.time}</p>
                    </section>
                </li>`
        songcontainer.appendChild(songTile)        
    }
    container.appendChild(songcontainer)   
    playlist.appendChild(container)         

}  


document.addEventListener("DOMContentLoaded", generateRandomPlaylist())
