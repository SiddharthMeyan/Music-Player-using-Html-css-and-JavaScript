music_list = [
  "/music/starboy.mp3",
  "/music/good_song.mp3",
  "/music/old_lofi.mp3",
];
songname = document.getElementById("songname");
imgg = document.getElementById("imgg");
playorpause = document.getElementById("playorpause");

let musicShuffle = false;

const shuffle = () => {
  randomInt = Math.ceil(Math.random() * music_list.length + -1);
  rand = music_list[randomInt];
  const audio = new Audio(rand);
  audio.play();
  musicShuffle = true;
  myaud(audio);
};
const shuffleImg = () => {
  randomInt = Math.ceil(Math.random() * music_list.length + -1);
};

const myaud = (audio) => {
  maudio = audio;
  return maudio;
};

imgg.src = "https://source.unsplash.com/300x300/?lofi";

// const audio = new Audio('/music/starboy.mp3')

playMusic = (myfiledes) => {
  amIcliked = document.getElementById("play");
  amIcliked.addEventListener("click", () => (musicShuffle = false));
  audio = new Audio(myfiledes);
  audio.play();
  pauseBtn();
};
maudio = myaud();
stopMusic = () => {
  if (musicShuffle) {
    audio = maudio;
  }
  audio.pause();
  audio.currentTime = 0;
};

pauseMusic = () => {
  if (musicShuffle) {
    audio = maudio;
  }
  audio.pause();
  playBtn();
};

pauseBtn = () => {
  if (!audio.paused) {
    playorpause.innerHTML = `<i
      id="pause"
      onclick="pauseMusic()"
      class="fa fa-pause"
      style="font-size: 36px; margin-left: 20px"
      aria-hidden="true"
    ></i>`;
  }
};
playBtn = () => {
  playorpause.innerHTML = `<i
    id="play"
    onclick="playMusic('/music/starboy.mp3')"
    class="fa fa-play"
    style="font-size: 36px; margin-left: 20px"
    aria-hidden="true"
  ></i
  >`;
};
