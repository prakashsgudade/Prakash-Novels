const pages = document.querySelectorAll(".page");
const counter = document.getElementById("pageCounter");

/* PAGE COUNTER LOGIC */
window.addEventListener("scroll", () => {
  let current = 1;

  pages.forEach((page, i) => {
    const rect = page.getBoundingClientRect();
    if (rect.top < window.innerHeight / 2) {
      current = i + 1;
    }
  });

  counter.innerText = "Page " + current;
});

/* DARK MODE TOGGLE */
function toggleDark() {
  document.body.classList.toggle("dark");
}
