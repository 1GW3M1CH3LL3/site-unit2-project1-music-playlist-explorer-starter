let playlists = [
  {
    "id": 1,
    "playlist_name": "Chill Vibes",
    "playlist_author": "user123",
    "playlist_art": "https://example.com/images/chill-vibes.jpg",
    "songs": [
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
    ],
    "likes": 34
  },
  {
    "id": 2,
    "playlist_name": "Workout Beats",
    "playlist_author": "fitguru88",
    "playlist_art": "https://example.com/images/workout-beats.jpg",
    "songs": [
      {
        "title": "Stronger",
        "artist": "Kanye West",
        "album": "Graduation",
        "cover": "https://example.com/images/stronger.jpg"
      },
      {
        "title": "Till I Collapse",
        "artist": "Eminem",
        "album": "The Eminem Show",
        "cover": "https://example.com/images/till-i-collapse.jpg"
      },
      {
        "title": "Can't Hold Us",
        "artist": "Macklemore",
        "album": "The Heist",
        "cover": "https://example.com/images/cant-hold-us.jpg"
      }
    ],
    "likes": 50
  },
  {
    "id": 3,
    "playlist_name": "Focus Zone",
    "playlist_author": "studybuddy",
    "playlist_art": "https://example.com/images/focus-zone.jpg",
    "songs": [
      {
        "title": "Weightless",
        "artist": "Marconi Union",
        "album": "Weightless (Ambient Transmissions Vol 2)",
        "cover": "https://example.com/images/weightless.jpg"
      },
      {
        "title": "Intro",
        "artist": "The xx",
        "album": "xx",
        "cover": "https://example.com/images/intro.jpg"
      },
      {
        "title": "Experience",
        "artist": "Ludovico Einaudi",
        "album": "In a Time Lapse",
        "cover": "https://example.com/images/experience.jpg"
      }
    ],
    "likes": 42
  },
  {
    "id": 4,
    "playlist_name": "Throwback Jams",
    "playlist_author": "oldschoolfan",
    "playlist_art": "https://example.com/images/throwback-jams.jpg",
    "songs": [
      {
        "title": "No Scrubs",
        "artist": "TLC",
        "album": "FanMail",
        "cover": "https://example.com/images/no-scrubs.jpg"
      },
      {
        "title": "Say My Name",
        "artist": "Destiny's Child",
        "album": "The Writing's on the Wall",
        "cover": "https://example.com/images/say-my-name.jpg"
      },
      {
        "title": "Backstreet's Back",
        "artist": "Backstreet Boys",
        "album": "Backstreet's Back",
        "cover": "https://example.com/images/backstreets-back.jpg"
      }
    ],
    "likes": 28
  },
  {
    "id": 5,
    "playlist_name": "Indie Essentials",
    "playlist_author": "altvibes",
    "playlist_art": "https://example.com/images/indie-essentials.jpg",
    "songs": [
      {
        "title": "Electric Feel",
        "artist": "MGMT",
        "album": "Oracular Spectacular",
        "cover": "https://example.com/images/electric-feel.jpg"
      },
      {
        "title": "Dog Days Are Over",
        "artist": "Florence + The Machine",
        "album": "Lungs",
        "cover": "https://example.com/images/dog-days-are-over.jpg"
      },
      {
        "title": "Take Me Out",
        "artist": "Franz Ferdinand",
        "album": "Franz Ferdinand",
        "cover": "https://example.com/images/take-me-out.jpg"
      }
    ],
    "likes": 36
  },
  {
    "id": 6,
    "playlist_name": "Jazz Classics",
    "playlist_author": "smoothplayer",
    "playlist_art": "https://example.com/images/jazz-classics.jpg",
    "songs": [
      {
        "title": "Take Five",
        "artist": "Dave Brubeck",
        "album": "Time Out",
        "cover": "https://example.com/images/take-five.jpg"
      },
      {
        "title": "So What",
        "artist": "Miles Davis",
        "album": "Kind of Blue",
        "cover": "https://example.com/images/so-what.jpg"
      },
      {
        "title": "My Favorite Things",
        "artist": "John Coltrane",
        "album": "My Favorite Things",
        "cover": "https://example.com/images/my-favorite-things.jpg"
      }
    ],
    "likes": 22
  },
  {
    "id": 7,
    "playlist_name": "Party Hits",
    "playlist_author": "djmax",
    "playlist_art": "https://example.com/images/party-hits.jpg",
    "songs": [
      {
        "title": "Uptown Funk",
        "artist": "Mark Ronson ft. Bruno Mars",
        "album": "Uptown Special",
        "cover": "https://example.com/images/uptown-funk.jpg"
      },
      {
        "title": "Can't Stop The Feeling",
        "artist": "Justin Timberlake",
        "album": "Trolls (Original Motion Picture Soundtrack)",
        "cover": "https://example.com/images/cant-stop-the-feeling.jpg"
      },
      {
        "title": "Shape of You",
        "artist": "Ed Sheeran",
        "album": "Divide",
        "cover": "https://example.com/images/shape-of-you.jpg"
      }
    ],
    "likes": 61
  },
  {
    "id": 8,
    "playlist_name": "Relax & Unwind",
    "playlist_author": "calmwaves",
    "playlist_art": "https://example.com/images/relax-unwind.jpg",
    "songs": [
      {
        "title": "River Flows In You",
        "artist": "Yiruma",
        "album": "First Love",
        "cover": "https://example.com/images/river-flows-in-you.jpg"
      },
      {
        "title": "Someone Like You",
        "artist": "Adele",
        "album": "21",
        "cover": "https://example.com/images/someone-like-you.jpg"
      },
      {
        "title": "Fix You",
        "artist": "Coldplay",
        "album": "X&Y",
        "cover": "https://example.com/images/fix-you.jpg"
      }
    ],
    "likes": 29
  },
  {
    "id": 9,
    "playlist_name": "Classic Rock",
    "playlist_author": "rocker77",
    "playlist_art": "https://example.com/images/classic-rock.jpg",
    "songs": [
      {
        "title": "Bohemian Rhapsody",
        "artist": "Queen",
        "album": "A Night at the Opera",
        "cover": "https://example.com/images/bohemian-rhapsody.jpg"
      },
      {
        "title": "Stairway to Heaven",
        "artist": "Led Zeppelin",
        "album": "Led Zeppelin IV",
        "cover": "https://example.com/images/stairway-to-heaven.jpg"
      },
      {
        "title": "Hotel California",
        "artist": "Eagles",
        "album": "Hotel California",
        "cover": "https://example.com/images/hotel-california.jpg"
      }
    ],
    "likes": 47
  },
  {
    "id": 10,
    "playlist_name": "Hip Hop Vibes",
    "playlist_author": "rapking",
    "playlist_art": "https://example.com/images/hiphop-vibes.jpg",
    "songs": [
      {
        "title": "Sicko Mode",
        "artist": "Travis Scott",
        "album": "Astroworld",
        "cover": "https://example.com/images/sicko-mode.jpg"
      },
      {
        "title": "HUMBLE.",
        "artist": "Kendrick Lamar",
        "album": "DAMN.",
        "cover": "https://example.com/images/humble.jpg"
      },
      {
        "title": "God's Plan",
        "artist": "Drake",
        "album": "Scorpion",
        "cover": "https://example.com/images/gods-plan.jpg"
      }
    ],
    "likes": 55
  },
  {
    "id": 11,
    "playlist_name": "Country Roads",
    "playlist_author": "countryfan",
    "playlist_art": "https://example.com/images/country-roads.jpg",
    "songs": [
      {
        "title": "Take Me Home, Country Roads",
        "artist": "John Denver",
        "album": "Poems, Prayers & Promises",
        "cover": "https://example.com/images/take-me-home-country-roads.jpg"
      },
      {
        "title": "Jolene",
        "artist": "Dolly Parton",
        "album": "Jolene",
        "cover": "https://example.com/images/jolene.jpg"
      },
      {
        "title": "Friends in Low Places",
        "artist": "Garth Brooks",
        "album": "No Fences",
        "cover": "https://example.com/images/friends-in-low-places.jpg"
      }
    ],
    "likes": 31
  },
  {
    "id": 12,
    "playlist_name": "Electronic Energy",
    "playlist_author": "edmlover",
    "playlist_art": "https://example.com/images/electronic-energy.jpg",
    "songs": [
      {
        "title": "Titanium",
        "artist": "David Guetta ft. Sia",
        "album": "Nothing but the Beat",
        "cover": "https://example.com/images/titanium.jpg"
      },
      {
        "title": "Wake Me Up",
        "artist": "Avicii",
        "album": "True",
        "cover": "https://example.com/images/wake-me-up.jpg"
      },
      {
        "title": "Animals",
        "artist": "Martin Garrix",
        "album": "Gold Skies",
        "cover": "https://example.com/images/animals.jpg"
      }
    ],
    "likes": 48
  }
]