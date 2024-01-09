    const botaoMenu = document.querySelector('.botao-menu');
    const iconeMenu = document.querySelector('.icon-menu');
    const body = document.querySelector('body');
    const sidebarAtivo = document.querySelector('.sidebar');

    botaoMenu.addEventListener('click', () => {
      iconeMenu.classList.toggle('ativo');
    });

    botaoMenu.addEventListener('click', () => {
      body.classList.toggle('ativo');
    });

    botaoMenu.addEventListener('click', () => {
      sidebarAtivo.classList.toggle('ativo');
    });



    