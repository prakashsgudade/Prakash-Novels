const pages = document.querySelectorAll(".page");
const counter = document.getElementById("pageCounter");

window.addEventListener("scroll", () => {
  let current = 1;
  pages.forEach((page, i) => {
    if (page.getBoundingClientRect().top < window.innerHeight / 2) {
      current = i + 1;
    }
  });
  counter.innerText = "Page " + current;
});

/* DARK MODE FUNCTION */
function toggleDark() {
  document.body.classList.toggle("dark");
}
