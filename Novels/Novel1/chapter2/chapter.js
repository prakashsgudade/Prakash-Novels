const content = document.getElementById("chapterContent");
const progressBar = document.getElementById("progressBar");
const bookmarkBtn = document.getElementById("bookmarkBtn");
const soundToggle = document.getElementById("soundToggle");
const pageSound = document.getElementById("pageSound");

// ===== PROGRESS BAR =====
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / height) * 100;
  progressBar.style.width = progress + "%";
});

// ===== BOOKMARK (REAL – localStorage) =====
bookmarkBtn.addEventListener("click", () => {
  localStorage.setItem("chapter2Bookmark", window.scrollY);
  alert("📌 Bookmark saved!");
});

// Load bookmark
window.addEventListener("load", () => {
  const saved = localStorage.getItem("chapter2Bookmark");
  if (saved) {
    window.scrollTo(0, saved);
  }

  // Sound setting
  const soundState = localStorage.getItem("sound");
  if (soundState === "off") {
    soundToggle.innerText = "🔇 Sound OFF";
  }
});

// ===== SOUND ON/OFF =====
soundToggle.addEventListener("click", () => {
  if (soundToggle.innerText.includes("ON")) {
    soundToggle.innerText = "🔇 Sound OFF";
    localStorage.setItem("sound", "off");
  } else {
    soundToggle.innerText = "🔊 Sound ON";
    localStorage.setItem("sound", "on");
  }
});

// Play page flip sound
if (localStorage.getItem("sound") !== "off") {
  pageSound.play().catch(() => {});
}
