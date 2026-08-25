const button = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
function closeMenu() {
  button.setAttribute("aria-expanded", "false");
  links.classList.remove("open");
  document.body.classList.remove("menu-open");
}
button.addEventListener("click", () => {
  const open = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!open));
  links.classList.toggle("open", !open);
  document.body.classList.toggle("menu-open", !open);
});
links.addEventListener("click", (e) => {
  if (e.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && links.classList.contains("open")) {
    closeMenu();
    button.focus();
  }
});
matchMedia("(min-width:621px)").addEventListener("change", (e) => {
  if (e.matches) closeMenu();
});
document.querySelector("#year").textContent = new Date().getFullYear();
