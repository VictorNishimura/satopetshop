const WA_NUMBER = "5518974003443";
const WA_DEFAULT =
  "Olá! Gostaria de agendar um serviço para meu pet.";

const waLink = (text = WA_DEFAULT) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

const nav = document.querySelector("[data-nav]");
const menuBtn = document.querySelector("[data-menu]");
const year = document.querySelector("[data-year]");

if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll("[data-wa]").forEach((el) => {
  const custom = el.getAttribute("data-wa");
  el.setAttribute("href", waLink(custom || WA_DEFAULT));
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener noreferrer");
});

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const form = document.querySelector("#contato-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const nome = String(data.get("nome") || "").trim();
    const pet = String(data.get("pet") || "").trim();
    const servico = String(data.get("servico") || "").trim();
    const dataInteresse = String(data.get("data") || "").trim();
    const telefone = String(data.get("telefone") || "").trim();

    const mensagem = [
      "Olá! Gostaria de agendar um serviço para meu pet.",
      `Tutor: ${nome}`,
      `Pet: ${pet}`,
      `Serviço: ${servico}`,
      dataInteresse ? `Data de interesse: ${dataInteresse}` : "",
      `Telefone: ${telefone}`,
    ]
      .filter(Boolean)
      .join("\n");

    const ok = form.querySelector(".form-ok");
    if (ok) ok.style.display = "block";
    window.open(waLink(mensagem), "_blank", "noopener,noreferrer");
  });
}
