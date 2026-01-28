window.addEventListener("load", () => {
  document.querySelectorAll(".fade").forEach(el => {
    setTimeout(() => {
      el.classList.add("show");
    }, 200);
  });
});
