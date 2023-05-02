const burger = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".nav-list");

function handleBurgerClick(e){
    console.log(e.target)
    burgerMenu.classList.toggle('nav-list_active')
}
burger.addEventListener('click',handleBurgerClick);