const body = document.body;
const darkToggle = document.getElementById("darkToggle");
const soundToggle = document.getElementById("soundToggle");
const bookmarkBtn = document.getElementById("bookmarkBtn");
const pageNum = document.getElementById("pageNum");

const pages = document.querySelectorAll(".page");
const flipSound = new Audio("page-flip.mp3");

/* DARK MODE */
if (localStorage.getItem("darkMode") === "on") {
  body.classList.add("dark");
}

darkToggle.onclick = () => {
  body.classList.toggle("dark");
  localStorage.setItem(
    "darkMode",
    body.classList.contains("dark") ? "on" : "off"
  );
};

/* SOUND */
let soundOn = localStorage.getItem("sound") !== "off";
soundToggle.textContent = soundOn ? "🔊" : "🔇";

soundToggle.onclick = () => {
  soundOn = !soundOn;
  localStorage.setItem("sound", soundOn ? "on" : "off");
  soundToggle.textContent = soundOn ? "🔊" : "🔇";
};

/* PAGE COUNTER + FLIP SOUND */
window.addEventListener("scroll", () => {
  pages.forEach((page, index) => {
    const rect = page.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      pageNum.textContent = index + 1;
      if (soundOn) flipSound.play();
    }
  });
});

/* BOOKMARK */
bookmarkBtn.onclick = () => {
  localStorage.setItem("chapter2Bookmark", window.scrollY);
  alert("Bookmark saved ❤️");
};

window.onload = () => {
  const saved = localStorage.getItem("chapter2Bookmark");
  if (saved) window.scrollTo(0, saved);
};
