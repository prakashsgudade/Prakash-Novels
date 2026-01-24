// PAGE COUNTER
const pages = document.querySelectorAll(".page");
const counter = document.getElementById("pageCounter");
const totalPages = pages.length;

window.addEventListener("scroll", () => {
  pages.forEach((page, index) => {
    const rect = page.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
      counter.innerText = `Page ${index + 1} / ${totalPages}`;
    }
  });
});

window.addEventListener("scroll", () => {
  pages.forEach((page, index) => {
    const rect = page.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
      counter.innerText = "Page " + (index + 1);
    }
  });
});

// DARK MODE
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// BOOKMARK (REAL)
document.getElementById("bookmarkBtn").onclick = () => {
  localStorage.setItem("chapter2Bookmark", window.scrollY);
  alert("🔖 Bookmark saved");
};

window.onload = () => {
  const saved = localStorage.getItem("chapter2Bookmark");
  if (saved) window.scrollTo(0, saved);
};

// SOUND
const sound = document.getElementById("flipSound");
let soundOn = true;

document.getElementById("soundToggle").onclick = () => {
  soundOn = !soundOn;
};

document.addEventListener("scroll", () => {
  if (soundOn) sound.play();
});
