document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".hero-form__input");
  const images = document.querySelectorAll(".form-img");

  function showImage(input) {
    const isMobile = window.innerWidth < 576;

    // скрываем все картинки
    images.forEach((img) => img.classList.remove("visible"));

    // выбираем нужную по data-атрибутам
    const directImg = input.dataset.img;
    const desktopImg = input.dataset.imgDesktop;
    const mobileImg = input.dataset.imgMobile;

    let targetId = null;

    if (directImg) {
      targetId = directImg;
    } else if (desktopImg && mobileImg) {
      targetId = isMobile ? mobileImg : desktopImg;
    }

    if (targetId) {
      const target = document.getElementById(targetId);
      if (target) target.classList.add("visible");
    }
  }

  function hideAllImages() {
    images.forEach((img) => img.classList.remove("visible"));
  }

  // при фокусе — показываем нужную картинку
  inputs.forEach((input) => {
    input.addEventListener("focus", () => showImage(input));
  });

  // при клике вне формы — скрываем всё
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".hero-form")) {
      hideAllImages();
    }
  });
});
