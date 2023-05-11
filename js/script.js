const burger = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".navigation__list");
const body = document.querySelector("body");

function handleBurgerClick(e) {
  body.classList.toggle("lock");
  burgerMenu.classList.toggle("navigation__list_active");
}
burger.addEventListener("click", handleBurgerClick);
