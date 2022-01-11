var openMenu = document.querySelector('.menu-icon');
var mainMenu = document.querySelector('.main-menu');

openMenu.onclick = function() {
    mainMenu.classList.toggle('open-menu');
    mainMenu.fadeIn();
}