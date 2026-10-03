const soundtrack = document.querySelector("#soundtrack");
const audioToggle = document.querySelector(".audio-toggle");
const toggleIcon = audioToggle.querySelector("span");

function updateAudioToggle(isPlaying) {
  audioToggle.setAttribute("aria-pressed", String(isPlaying));
  audioToggle.setAttribute("aria-label", isPlaying ? "Pause soundtrack" : "Play soundtrack");
  audioToggle.title = isPlaying ? "Pause soundtrack" : "Play soundtrack";
  toggleIcon.innerHTML = isPlaying ? "&#10074;&#10074;" : "&#9654;";
}

audioToggle.addEventListener("click", async () => {
  if (soundtrack.paused) {
    soundtrack.play().catch(() => updateAudioToggle(false));
    return;
  }

  soundtrack.pause();
});

soundtrack.addEventListener("play", () => updateAudioToggle(true));
soundtrack.addEventListener("pause", () => updateAudioToggle(false));
soundtrack.addEventListener("ended", () => updateAudioToggle(false));