const toggle = document.getElementById("darkToggle");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

function setTheme(mode) {
  if (mode === "light") {
    document.body.classList.add("light");
    toggle.textContent = "☀️";
  } else {
    document.body.classList.remove("light");
    toggle.textContent = "🌙";
  }
  localStorage.setItem("theme", mode);
}

toggle?.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});

menuBtn?.addEventListener("click", () => {
  mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
});

mobileMenu?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => (mobileMenu.style.display = "none"));
});

// Load saved theme
const saved = localStorage.getItem("theme");
setTheme(saved === "light" ? "light" : "dark");
