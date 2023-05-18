function AnimationTarget(el, randomX, randomY) {
  this.el = el;
  console.log(randomX, randomY);
  this.animate = function () {
    anime({
      targets: this.el,
      translateX: randomX,
      translateY: randomY,
      scale: (150 +randomY) / 80,
      rotate: "1turn",
      borderRadius: randomY / 10,
      duration: 1000,
      easing: "easeInOutSine",
      complete: function (anim) {
        console.log(el);
      },
    });
  };
}

const buttonAnimate = document.querySelector(".animate__button");
const animate = document.querySelector(".animate");

function createElem(parrent) {
  elem = document.createElement("div");
  elem.className = "animate__block";
  parrent.append(elem);
  return elem;
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
buttonAnimate.addEventListener("click", () => {
  const elem = createElem(animate);
  let elemAnim = new AnimationTarget(
    elem,
    getRandomArbitrary(-210, 210),
    getRandomArbitrary(-150, 210)
  );
  elemAnim.animate();
});
