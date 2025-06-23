const minusBtn = document.getElementById("trip-minus");
const plusBtn = document.getElementById("trip-plus");
const countEl = document.getElementById("trip-count");
const errorEl = document.getElementById("counter-error");

const MIN_COUNT = 1;
const MAX_COUNT = 10;

function updateCountDisplay(value) {
  countEl.textContent = value;
}

function showError(message) {
  errorEl.textContent = message;
  errorEl.classList.add("visible");

  setTimeout(() => {
    errorEl.classList.remove("visible");
  }, 2000);
}

plusBtn.addEventListener("click", () => {
  const current = parseInt(countEl.textContent);

  if (current < MAX_COUNT) {
    updateCountDisplay(current + 1);
  } else {
    showError("You can't add more than 10 travelers!");
  }
});

minusBtn.addEventListener("click", () => {
  const current = parseInt(countEl.textContent);

  if (current > MIN_COUNT) {
    updateCountDisplay(current - 1);
  } else {
    showError("At least one traveler is required!");
  }
});
