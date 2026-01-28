// Fade-in animation on load
window.addEventListener("load", () => {
  document.querySelectorAll(".left, .right, .card").forEach(el => {
    el.classList.add("fade");
  });

  setTimeout(() => {
    document.querySelectorAll(".fade").forEach(el => {
      el.classList.add("show");
    });
  }, 200);
});
