const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist'); 
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress'); 
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const  playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');


// Music
const songs = [
  {
    audio: '2Baba-Gaaga-Shuffle',
    name: '2baba',
    displayName: 'Gaga Shuffle',
    artist: '2Baba',
  },
  {
    audio: '2Face-Appreciate-It',
    name: '2face',
    displayName: 'Appreciate it',
    artist: '2baba',
  },
  {
    audio: '6LACK-Disconnect',
    name: '6lack ft. khalid',
    displayName: 'Disconnect',
    artist: '6lack',
  },
  {
    audio: '6LACK-ft-Future-East-Atlanta-Love-Letter',
    name: '6lack',
    displayName: 'Love Letter',
    artist: '6lack',
  },
  {
    audio: '6LACK-ft-J-Cole-Pretty-Little-Fears',
    name: '6lack',
    displayName: 'Pretty little fears',
    artist: '6lack',
  },
  {
    audio: '6LACK-ft-Khalid-Seasons',
    name: '6lack',
    displayName: 'seasons',
    artist: '6lack',
  },
  {
    audio: '6LACK-Let-Her-Go',
    name: '6lack',
    displayName: 'let her go',
    artist: '6lack',
  },
  {
    audio: '6LACK-Sorry',
    name: '6lack',
    displayName: 'sorry',
    artist: '6lack',
  },
  {
    audio: 'Nico & Vinz - Am I Wrong',
    name: 'album-art1',
    displayName: 'Am i Wrong',
    artist: 'Nico & Vinz',
  },
  {
    audio: 'Barry-Jhay-Ma-So-Pe',
    name: 'barry-jhay',
    displayName: 'Ma So Pe',
    artist: 'Barry Jhay',
  },
  
];




// Check If Playing
let isPlaying = false;

//  play 
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// pause 
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
} 


// play or pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

 
// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.audio}.mp3`;
  image.src = `image/${song.name}.jpg`;
}

// current song
let songIndex = 0;

// On LOad - Select First Song
loadSong(songs[songIndex]);

// Previous SOng
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length -1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next SOng
function nextSong() {
  songIndex++; 
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// update Progress Bar & time
function updateProgressBar(e) {
  if (isPlaying) {
    const {duration, currentTime} = e.srcElement;
    // update progress Bar width
    const progressPercent = (currentTime / duration ) * 100;
     progress.style.width = `${progressPercent}%`;
    //  calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    console.log('minutes', durationMinutes);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    console.log('seconds', durationSeconds);
    // Delay switching the duration Element to avoid NAN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    //  calculate display for current
    const currentMinutes = Math.floor(currentTime / 60);
    console.log('minutes', currentMinutes);
    let currentSeconds = Math.floor(currentTime %  60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    console.log('seconds', currentSeconds);
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`
  }
}


// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);