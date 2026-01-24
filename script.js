function scrollToNovels() {
  document.getElementById("novels")
    .scrollIntoView({ behavior: "smooth" });
}

function toggleDark() {
  document.body.classList.toggle("dark");
}
