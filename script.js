const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const quoteForm = document.getElementById("quoteForm");
const toast = document.getElementById("toast");
const year = document.getElementById("year");

// WICHTIG: Hier die echte Ziel-E-Mail-Adresse eintragen.
const CONTACT_EMAIL = "info@gpr-reinigung.de";

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3500);
}

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!quoteForm.checkValidity()) {
    quoteForm.reportValidity();
    return;
  }

  const data = new FormData(quoteForm);

  const subject = `Reinigungsanfrage – ${data.get("service")}`;
  const body = [
    `Name: ${data.get("name")}`,
    `Firma: ${data.get("company") || "-"}`,
    `E-Mail: ${data.get("email")}`,
    `Telefon: ${data.get("phone") || "-"}`,
    `Leistung: ${data.get("service")}`,
    "",
    "Nachricht:",
    data.get("message"),
  ].join("\n");

  const mailto = `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  showToast("Ihr E-Mail-Programm wird geöffnet.");
  window.location.href = mailto;
});
