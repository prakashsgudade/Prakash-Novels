function toggleMode() {
  document.body.classList.toggle("dark");
}

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const progress = (scrolled / height) * 100;
  document.querySelector(".progress").style.width = progress + "%";
});
