const botaoMenu = document.querySelector(".botao-menu");
const iconeMenu = document.querySelector(".icon-menu");
const body = document.querySelector("body");
const sidebarAtivo = document.querySelector(".sidebar");

botaoMenu.addEventListener("click", () => {
  iconeMenu.classList.toggle("ativo");
});

botaoMenu.addEventListener("click", () => {
  body.classList.toggle("ativo");
});

botaoMenu.addEventListener("click", () => {
  sidebarAtivo.classList.toggle("ativo");
});

// toggleFunctions
const toggleFunctions = document.querySelector('.toggle-functions');
const toggleBack = document.querySelector('.toggle-back')
const functions = document.querySelector('.chat-functions');

toggleFunctions.addEventListener('click', () => {
  functions.classList.toggle('ativo');
  toggleBack.classList.toggle('ativo');
})

toggleBack.addEventListener('click', () => {
  functions.classList.remove('ativo');
  toggleBack.classList.remove('ativo');
})