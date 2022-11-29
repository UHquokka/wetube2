const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volumnRange = document.getElementById("volumn");

const handlePlayClick = (e) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtn.innerText = video.pause ? "Play" : "Puase";
};

const handleMute = (e) => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  muteBtn.innerText = video.muted ? "UnMute" : "Mute";
  volumnRange.value = video.muted ? 0 : 0.5;
};

play.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
