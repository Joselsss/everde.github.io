(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.menu__links');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    


})();