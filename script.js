// script.js (FULL REPLACEMENT)
const btn = document.querySelector(".menuBtn");
const nav = document.querySelector(".nav");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

if (btn && nav) {
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}