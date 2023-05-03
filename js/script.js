const burger = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".nav__list");
const body = document.querySelector("body");

function handleBurgerClick() {
  body.classList.toggle("lock");
  burgerMenu.classList.toggle("nav__list_active");
}
burger.addEventListener("click", handleBurgerClick);
