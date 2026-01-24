// DARK MODE
const darkBtn = document.getElementById("darkToggle");
darkBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

// BOOKMARK (REAL)
const bookmarkBtn = document.getElementById("bookmarkBtn");
bookmarkBtn.onclick = () => {
  localStorage.setItem("chapter2Scroll", window.scrollY);
  alert("🔖 Bookmark Saved");
};

window.onload = () => {
  const saved = localStorage.getItem("chapter2Scroll");
  if (saved) {
    window.scrollTo(0, saved);
  }
};

// SOUND ON/OFF
const soundBtn = document.getElementById("soundToggle");
const sound = document.getElementById("flipSound");
let soundOn = true;

soundBtn.onclick = () => {
  soundOn = !soundOn;
  soundBtn.textContent = soundOn ? "🔊" : "🔇";
};

document.addEventListener("click", () => {
  if (soundOn) sound.play();
});
