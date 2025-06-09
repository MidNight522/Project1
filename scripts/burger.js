const burgerOpenerButton = document.querySelector("#burger-opener");
const burgerIcon = document.querySelector("#burger-icon");
const burger = document.querySelector("#burger");
const linksWrapperInBurger = document.querySelector("#burger ul");

let opened = false;

function openBurgerMenu() {
  burgerIcon.setAttribute("src", "/images/Nav/Menu-close.png");
  burger.classList.remove("burger__closed");
  burger.classList.add("burger__opened");
}

function closeBurgerMenu() {
  burgerIcon.setAttribute("src", "/images/Nav/Menu-open.png");
  burger.classList.remove("burger__opened");
  burger.classList.add("burger__closed");
}

burgerOpenerButton.addEventListener("click", function (event) {
  opened = !opened;

  if (opened) openBurgerMenu();
  else closeBurgerMenu();
});

linksWrapperInBurger.addEventListener("click", function (event) {
  if (event.srcElement.className === "burger__link") {
    closeBurgerMenu();
  }
  //   console.log(
  //     "EVENT:",
  //     event,
  //     "SRC ELEMENT: ",
  //     event.srcElement,
  //     "HAS CLASS BURGER LINK: ",
  //     event.srcElement.className
  //   );
});
