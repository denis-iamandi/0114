// ✅ Actualizare automată a anului în footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// 🚀 Buton "Sus" cu animație rachetă
const scrollButton = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

scrollButton.addEventListener("click", () => {
  scrollButton.classList.add("launch");
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    scrollButton.classList.remove("launch");
  }, 400); // sincronizat cu animația CSS
});

// ✅ Validare formular de contact
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

if (form) {
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
}