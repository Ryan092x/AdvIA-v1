    const botaoMenu = document.querySelector('.botao-menu');
    const iconeMenu = document.querySelector('.icon-menu');

    botaoMenu.addEventListener('click', () => {
      iconeMenu.classList.toggle('ativo');
    });