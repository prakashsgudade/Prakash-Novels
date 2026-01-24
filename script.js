function scrollToNovels() {
  document.getElementById("novels")
    .scrollIntoView({ behavior: "smooth" });
}

function toggleDark() {
  document.body.classList.toggle("dark");
}
// Dark / Light Toggle
function toggleMode() {
  document.body.classList.toggle("light");
}

// Auto Progress (demo)
let progress = 0;
setInterval(() => {
  if (progress < 15) {
    progress++;
    let percent = Math.floor((progress / 15) * 100);
    document.querySelector(".progress-bar").style.width = percent + "%";
    document.querySelector(".progress-text").innerText =
      "Reading Progress: " + percent + "%";
  }
}, 300);
