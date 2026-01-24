function scrollToNovels() {
  document.getElementById("novels")
    .scrollIntoView({ behavior: "smooth" });
}

function toggleDark() {
  document.body.classList.toggle("dark");
}
/* ================= BIG DARK MODE BUTTON ================= */
.dark-toggle {
  position: fixed;
  top: 15px;
  right: 15px;
  background: #000;
  color: #fff;
  padding: 14px 18px;
  border-radius: 50px;
  font-size: 20px;
  cursor: pointer;
  z-index: 1000;
}

body.dark .dark-toggle {
  background: #fff;
  color: #000;
}

/* ================= BIG FONT CONTROLS ================= */
.font-controls {
  position: fixed;
  top: 15px;
  left: 15px;
  display: flex;
  gap: 10px;
  z-index: 1000;
}

.font-controls button {
  padding: 14px 18px;
  font-size: 18px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background: #000;
  color: #fff;
}

.font-controls button:active {
  transform: scale(0.95);
}

body.dark .font-controls button {
  background: #fff;
  color: #000;
}

/* ================= MOBILE EXTRA COMFORT ================= */
@media (max-width: 600px) {
  .dark-toggle {
    padding: 16px 20px;
    font-size: 22px;
  }

  .font-controls button {
    padding: 16px 20px;
    font-size: 20px;
  }
}
