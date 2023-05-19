const burger = document.querySelector(".header__button");
const burgerMenu = document.querySelector(".navigation__list");
const body = document.querySelector("body");

function handleBurgerClick(e) {
  if (!burgerMenu.classList.contains("navigation__list_active")) {
    openBurgerMenu();
    return;
  }
  closeBurgerMenu();
}

function openBurgerMenu() {
  body.classList.add("lock");
  burgerMenu.classList.add("navigation__list_active");
  burger.classList.add("header__burger_active");
}
function closeBurgerMenu(e) {
  body.classList.remove("lock");
  burgerMenu.classList.remove("navigation__list_active");
  burger.classList.remove("header__burger_active");
}
burger.addEventListener("click", handleBurgerClick);
burgerMenu.addEventListener("click", closeBurgerMenu);
// Задача 1
const ingredients = {
  bread: 9,
  cheese: 5,
};

function countSandwiches(ingredients) {
  cntBreads = Math.floor(ingredients.bread / 2);
  cntCheese = ingredients.cheese;
  return Math.min(cntBreads, cntCheese);
}

console.log(countSandwiches(ingredients));

// Задача 2

function generateMultiplicationTable(n) {
  for (let i = 1; i <= n; i++) {
    curStr = "";
    for (let j = 1; j <= n; j++) {
      curNum = i * j;
      curStr += curNum + " ";
    }
    console.log(curStr);
  }
}
generateMultiplicationTable(5);

// Задача 3

const words = ["Hello", "World", "In", "JS"];

function showQuote(wordsArr, symbol) {
  const space = " ";
  const sortedWordsArr = wordsArr.sort((a, b) => {
    return b.length - a.length;
  });
  const longestWord = sortedWordsArr[0];
  console.log(symbol.repeat(longestWord.length + 4));
  wordsArr.forEach((word) => {
    let cntSpaces = longestWord.length - word.length;

    console.log("* " + word + space.repeat(cntSpaces) + " *");
  });
  console.log(symbol.repeat(longestWord.length + 4));
}
showQuote(words, "*");

// Задача 4

function combineArrays(firstArr, secondArr) {
  let newArr = [];
  const maxLenght = Math.max(firstArr.length, secondArr.length);
  let maxArr = [];
  let minArr = [];
  if (firstArr.length === maxLenght) {
    maxArr = firstArr;
    minArr = secondArr;
  } else {
    maxArr = secondArr;
    minArr = firstArr;
  }
  for (let i = 0; i < maxArr.length; i++) {
    if (i < minArr.length) {
      newArr.push(minArr[i]);
    }
    newArr.push(maxArr[i]);
  }
  return newArr;
}
console.log(combineArrays([1, 2, 3], ["a", "b", "c", "d"]));

// Задача 5
function countUniqueValues(arr) {
  let uniqValues = {};
  for (let i = 0; i < arr.length; i++) {
    if (`${arr[i]}` in uniqValues) {
      uniqValues[`${arr[i]}`] += 1;
    } else {
      uniqValues[`${arr[i]}`] = 1;
    }
  }
  return uniqValues;
}

console.table(countUniqueValues([1, 2, 1, 2, 3, 4, 2, 5]));

// Задача 7
const toats = document.querySelector(".toats");
const toatsClose = document.querySelector(".toats__close");
const message = {
  name: "Andrew",
  message: "Hello, brow",
};
function showToats() {
  setTimeout(() => {
    toats.classList.remove("toats_hidden");
    toats.classList.add("toats_active");
  }, 2000);
  const spanItem = document.createElement("span");
  spanItem.innerHTML = `<p class="toats__title" >${message.name} </p> <p class="toats__desc">${message.message} </p>`;
  toats.appendChild(spanItem);
}
function hideToats(e) {
  if (e.target.closest(".toats__close")) {
    toats.classList.remove("toats_active");
    toats.classList.add("toats_hidden");
  }
}
document.addEventListener("DOMContentLoaded", showToats);
toats.addEventListener("click", hideToats);
