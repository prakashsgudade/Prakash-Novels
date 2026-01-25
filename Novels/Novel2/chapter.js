function toggleDark() {
  document.body.classList.toggle("dark");
}

function goHome() {
  window.location.href = "../../index.html";
}

function goNovel() {
  window.location.href = "../index.html";
}

// PAGE COUNT ON SCROLL
const pages = document.querySelectorAll(".page");
const pageNum = document.getElementById("currentPage");

window.addEventListener("scroll", () => {
  let index = 0;
  pages.forEach((page, i) => {
    const rect = page.getBoundingClientRect();
    if (rect.top < window.innerHeight / 2) {
      index = i + 1;
    }
  });
  pageNum.innerText = index || 1;
});
