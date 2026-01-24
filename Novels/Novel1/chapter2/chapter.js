const pages = document.querySelectorAll(".page");
const counter = document.getElementById("pageCounter");
const sound = document.getElementById("flipSound");

window.addEventListener("scroll", () => {
  let current = 1;

  pages.forEach((page, i) => {
    if (page.getBoundingClientRect().top < window.innerHeight / 2) {
      current = i + 1;
    }
  });

  counter.innerText = "Page " + current;
});

/* DARK MODE */
function toggleDark() {
  document.body.classList.toggle("dark");
}

/* BOOKMARK */
function toggleBookmark() {
  alert("🔖 Bookmark saved! (Future update me real save hoga)");
}

/* PAGE FLIP SOUND */
window.addEventListener("scroll", () => {
  sound.currentTime = 0;
  sound.play();
});
