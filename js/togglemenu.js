const botaoMenu = document.querySelector(".botao-menu");
const iconeMenu = document.querySelector(".icon-menu");
const body = document.querySelector("body");
const sidebarAtivo = document.querySelector(".sidebar");

botaoMenu.addEventListener("click", () => {
  iconeMenu.classList.toggle("ativo");
  body.classList.toggle("ativo");
  sidebarAtivo.classList.toggle("ativo");
});

// toggleFunctions
const toggleFunctions = document.querySelector(".toggle-functions");
const toggleBack = document.querySelector(".toggle-back");
const functions = document.querySelector(".chat-functions");
let larguraDaTela = window.innerWidth;

toggleFunctions.addEventListener("click", () => {
  if (larguraDaTela < 1200) {
    functions.classList.toggle("ativo");
    toggleBack.classList.toggle("ativo");
  }
  if (larguraDaTela > 1200) {
    functions.classList.toggle("ativo");
    toggleBack.classList.toggle("ativo");
  }
});

toggleBack.addEventListener("click", () => {
  if (larguraDaTela < 1200) {
    functions.classList.toggle("ativo");
    toggleBack.classList.toggle("ativo");
  } else {
    functions.classList.toggle("ativo");
    toggleBack.classList.toggle("ativo");
  }
});
