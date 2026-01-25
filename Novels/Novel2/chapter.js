// DARK MODE TOGGLE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// READING PROGRESS BAR
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.querySelector(".progress-bar").style.width = progress + "%";
});
