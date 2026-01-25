function toggleDark() {
  document.body.classList.toggle("dark");
}

const pages = document.querySelectorAll(".page");
const currentPage = document.getElementById("currentPage");

window.addEventListener("scroll", () => {
  let page = 1;
  pages.forEach((p, i) => {
    if (p.getBoundingClientRect().top < window.innerHeight / 2) {
      page = i + 1;
    }
  });
  currentPage.innerText = page;
});
