const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist'); 
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const  playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');


// Music
const songs = [
  {
    audio: '2Baba-Gaaga-Shuffle',
    image: '2baba',
    displayName: 'Gaga Shuffle',
    artist: '2Baba',
  },
  {
    audio: '2Face-Appreciate-It',
    image: '2face',
    displayName: 'Appreciate it',
    artist: '2baba',
  },
  {
    audio: '6LACK-Disconnect',
    image: '6lack ft. khalid',
    displayName: 'Disconnect',
    artist: '6lack',
  },
  {
    audio: '6LACK-ft-Future-East-Atlanta-Love-Letter',
    image: '6lack',
    displayName: 'Love Letter',
    artist: '6lack',
  },
  {
    audio: '6LACK-ft-J-Cole-Pretty-Little-Fears',
    image: '6lack',
    displayName: 'Pretty little fears',
    artist: '6lack',
  },
  {
    audio: '6LACK-ft-Khalid-Seasons',
    image: '6lack',
    displayName: 'seasons',
    artist: '6lack',
  },
  {
    audio: '6LACK-Let-Her-Go',
    image: '6lack',
    displayName: 'let her go',
    artist: '6lack',
  },
  {
    audio: '6LACK-Sorry',
    image: '6lack',
    displayName: 'sorry',
    artist: '6lack',
  },
  6LACK-Sorry
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
