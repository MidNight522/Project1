const inputs = document.querySelectorAll(".hero-form__input");
const images = document.querySelectorAll(".form-img");
const roundTripRadio = document.getElementById("round-trip");
const oneWayRadio = document.getElementById("one-way-trip");
const returnInput = document.getElementById("return-date");
const returnWrapper = returnInput.closest(".form-fields__return");

// Получить ID картинки по input'у
function getTargetImageId(input) {
  const isMobile = window.innerWidth < 576;

  const directImg = input.dataset.img;
  const desktopImg = input.dataset.imgDesktop;
  const mobileImg = input.dataset.imgMobile;

  if (directImg) return directImg;
  if (desktopImg && mobileImg) return isMobile ? mobileImg : desktopImg;

  return null;
}

// Hide img
function hideAllImages() {
  images.forEach((img) => img.classList.remove("visible"));
}

// Show correct img
function showImageForInput(input) {
  hideAllImages();

  const targetId = getTargetImageId(input);
  if (!targetId) return;

  const targetImg = document.getElementById(targetId);
  if (targetImg) targetImg.classList.add("visible");
}

// Input Listener
function setupInputListeners() {
  inputs.forEach((input) => {
    input.addEventListener("focus", () => showImageForInput(input));
  });
}

// Hide img click out of form
function setupClickOutsideToHideImages() {
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".hero-form")) {
      hideAllImages();
    }
  });
}

// Init
function initImageLogic() {
  setupInputListeners();
  setupClickOutsideToHideImages();
}

// Radio button
function updateReturnState() {
  if (oneWayRadio.checked) {
    returnInput.disabled = true;
    returnWrapper.classList.add("disabled");
  } else {
    returnInput.disabled = false;
    returnWrapper.classList.remove("disabled");
  }
}
roundTripRadio.addEventListener("change", updateReturnState);
oneWayRadio.addEventListener("change", updateReturnState);

// Init
initImageLogic();
updateReturnState();
