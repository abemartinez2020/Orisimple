const menu = document.querySelector('.hero_menu');
const burger = document.querySelector('.menu_burger');
const elephant = document.querySelector('.hero_elephant');
const heroList = document.querySelector('.list-disp');

burger.addEventListener('click', () => {
    console.log('hello');
    menu.classList.toggle('menu--open');
    elephant.classList.toggle('disp-eleph');
    heroList.classList.toggle('menu--off');
})