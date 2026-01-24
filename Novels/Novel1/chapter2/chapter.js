const body = document.body;
const darkBtn = document.getElementById("darkToggle");
const soundBtn = document.getElementById("soundToggle");
const bookmarkBtn = document.getElementById("bookmarkBtn");
const pageNum = document.getElementById("pageNum");

const flipSound = new Audio("page-flip.mp3");

/* DARK MODE */
if (localStorage.getItem("darkMode") === "on") {
  body.classList.add("dark");
}

darkBtn.onclick = () => {
  body.classList.toggle("dark");
  localStorage.setItem("darkMode",
    body.classList.contains("dark") ? "on" : "off"
  );
};

/* SOUND */
let soundOn = localStorage.getItem("sound") !== "off";

soundBtn.textContent = soundOn ? "🔊" : "🔇";

soundBtn.onclick = () => {
  soundOn = !soundOn;
  localStorage.setItem("sound", soundOn ? "on" : "off");
  soundBtn.textContent = soundOn ? "🔊" : "🔇";
};

/* PAGE COUNT */
window.addEventListener("scroll", () => {
  const pages = document.querySelectorAll(".page");
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
  alert("Bookmark Saved ❤️");
};

window.onload = () => {
  const saved = localStorage.getItem("chapter2Bookmark");
  if (saved) window.scrollTo(0, saved);
};
