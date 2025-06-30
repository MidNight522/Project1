// Variables
const inputs = document.querySelectorAll(".hero-form__input");
const roundTripRadio = document.getElementById("round-trip");
const oneWayRadio = document.getElementById("one-way-trip");
const returnInput = document.getElementById("return-date");
const returnWrapper = returnInput.closest(".form-fields__return");

let calendarInstance = null;
// Correct Date
function formatDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
// Starting on Monday
flatpickr.localize({
  ...flatpickr.l10ns.default,
  firstDayOfWeek: 1,
});

// Calendar destroy
function initFlatpickr(mode = "range") {
  if (calendarInstance) {
    calendarInstance.destroy();
  }
  // One calendar on mobile
  const isMobile = window.innerWidth < 576;

  calendarInstance = flatpickr("#depart-date", {
    // Settings
    mode: mode,
    closeOnSelect: false,
    dateFormat: "Y-m-d",
    disableMobile: true,
    minDate: "today",
    showMonths: isMobile ? 1 : 2,
    defaultDate: [null, null],
    prevArrow: "<img src='/images/calendar/arrow-left.svg' />",
    nextArrow: "<img src='/images/calendar/arrow-right.svg' />",
    onReady: function (selectedDates, dateStr, instance) {
      const oldFooter = instance.calendarContainer.querySelector(
        ".flatpickr-custom-footer"
      );
      if (oldFooter) oldFooter.remove();
      // Create container
      const footer = document.createElement("div");
      footer.className = "flatpickr-custom-footer";

      // Reset buttom
      const resetBtn = document.createElement("button");
      resetBtn.textContent = "Reset";
      resetBtn.className = "flatpickr-btn flatpickr-reset";
      resetBtn.addEventListener("click", () => {
        instance.clear();
        document.getElementById("depart-date").value = "";
        document.getElementById("depart-date").value = "";
      });

      // Apply button
      const applyBtn = document.createElement("button");
      applyBtn.textContent = "Apply";
      applyBtn.className = "flatpickr-btn flatpickr-apply";
      applyBtn.addEventListener("click", () => {
        instance.close();
      });

      // SetTimeout
      setTimeout(() => {
        const weekdayShort = ["M", "T", "W", "T", "F", "S", "S"];
        const headers = instance.calendarContainer.querySelectorAll(
          ".flatpickr-weekdays .flatpickr-weekday"
        );
        headers.forEach((el, i) => {
          el.textContent = weekdayShort[i % 7];
        });
      }, 0);

      footer.appendChild(resetBtn);
      footer.appendChild(applyBtn);
      instance.calendarContainer.appendChild(footer);
    },
    onChange: function (selectedDates) {
      const [start, end] = selectedDates;

      const options = { day: "numeric", month: "long", year: "numeric" };

      const departInput = document.getElementById("depart-date");
      const returnInput = document.getElementById("return-date");

      departInput.value = start ? formatDate(start) : "";

      // One way
      if (mode === "range") {
        returnInput.value = end ? formatDate(end) : "";
      } else {
        returnInput.value = "";
      }
    },
  });
}

// Radiobutton swicher
function updateReturnState() {
  const returnInput = document.getElementById("return-date");
  const returnWrapper = returnInput.closest(".form-fields__return");

  if (oneWayRadio.checked) {
    returnInput.disabled = true;
    returnInput.value = "";
    returnWrapper.classList.add("disabled");
    initFlatpickr("single"); // Single date
  } else {
    returnInput.disabled = false;
    returnWrapper.classList.remove("disabled");
    initFlatpickr("range"); // Two date
  }
}
// One click tow calendars
returnInput.addEventListener("focus", () => {
  const departInput = document.getElementById("depart-date");
  if (calendarInstance) {
    departInput.focus();
    calendarInstance.open();
  }
});

// Initialization
roundTripRadio.addEventListener("change", updateReturnState);
oneWayRadio.addEventListener("change", updateReturnState);
updateReturnState();
