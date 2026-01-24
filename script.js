function scrollToNovels() {
  document.getElementById("novels")
    .scrollIntoView({ behavior: "smooth" });
}

function toggleDark() {
  document.body.classList.toggle("dark");
}
/* ================= FONT SIZE CONTROLS ================= */
.font-controls {
  position: fixed;
  top: 15px;
  left: 15px;
  display: flex;
  gap: 6px;
  z-index: 999;
}

.font-controls button {
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  background: #000;
  color: #fff;
}

body.dark .font-controls button {
  background: #fff;
  color: #000;
    }
let currentFontSize = 18; // default font size

function increaseFont() {
  if (currentFontSize < 24) {
    currentFontSize += 2;
    document.body.style.fontSize = currentFontSize + "px";
  }
}

function decreaseFont() {
  if (currentFontSize > 14) {
    currentFontSize -= 2;
    document.body.style.fontSize = currentFontSize + "px";
  }
}

function resetFont() {
  currentFontSize = 18;
  document.body.style.fontSize = "18px";
}
