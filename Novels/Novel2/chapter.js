function toggleDark() {
  document.body.classList.toggle("dark");
}

const pages = document.querySelectorAll(".page");
const pageNo = document.getElementById("pageNo");

window.addEventListener("scroll", () => {
  let current = 1;
  pages.forEach((p, i) => {
    if (p.getBoundingClientRect().top < window.innerHeight / 2) {
      current = i + 1;
    }
  });
  pageNo.innerText = current;
});
