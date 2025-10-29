// Actualizare automată a anului în footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Buton "Sus" cu scroll lin
const scrollButton = document.createElement("button");
scrollButton.textContent = "↑ Sus";
scrollButton.id = "scrollTopBtn";
document.body.appendChild(scrollButton);

scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollButton.style.display = window.scrollY > 300 ? "block" : "none";
});

// Comutator temă întunecată/luminoasă
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggleTheme.checked);
});

// Carusel interactiv cu butoane
const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let index = 0;

nextBtn.addEventListener("click", () => {
  index = Math.min(index + 1, track.children.length - 1);
  track.style.transform = `translateX(-${index * 100}%)`;
});

prevBtn.addEventListener("click", () => {
  index = Math.max(index - 1, 0);
  track.style.transform = `translateX(-${index * 100}%)`;
});

// Validare formular de contact
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nume = document.getElementById("nume").value.trim();
  const email = document.getElementById("email").value.trim();
  const mesaj = document.getElementById("mesaj").value.trim();

  if (!nume || !email || !mesaj) {
    status.textContent = "Completează toate câmpurile!";
    status.style.color = "red";
  } else {
    status.textContent = "Mesaj trimis cu succes!";
    status.style.color = "green";
    form.reset();
  }
});