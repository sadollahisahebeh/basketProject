function playPause(index) {
    const video = document.getElementById(`videoPlay${index}`);
    const playBtn = document.getElementById("play" + index);
    const pausedBtn = document.getElementById("pause" + index);
    if (video.paused) {
      playBtn.style.display = "none";
      pausedBtn.style.display = "flex";
      video.play();
    } else {
      playBtn.style.display = "flex";
      if (pausedBtn) pausedBtn.style.display = "none";
      video.pause();
    }
  }