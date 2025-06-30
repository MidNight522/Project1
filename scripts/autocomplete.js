const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "London",
  "Paris",
  "Berlin",
  "Tokyo",
  "Moscow",
  "Tallinn",
  "Tartu",
  "Stockholm",
];

function setupAutocomplete(inputId, listId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);

  input.addEventListener("input", () => {
    const value = input.value.trim().toLowerCase();
    list.innerHTML = "";

    if (!value) {
      list.classList.remove("active");
      return;
    }

    const matches = cities.filter((city) =>
      city.toLowerCase().startsWith(value)
    );

    if (matches.length === 0) {
      list.classList.remove("active");
      return;
    }

    matches.forEach((city) => {
      const item = document.createElement("div");
      item.classList.add("autocomplete-item");
      item.textContent = city;

      item.addEventListener("click", () => {
        input.value = city;
        list.innerHTML = "";
        list.classList.remove("active");
      });

      list.appendChild(item);
    });

    list.classList.add("active");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(`#${inputId}`) && !e.target.closest(`#${listId}`)) {
      list.innerHTML = "";
      list.classList.remove("active");
    }
  });
}

// Init
setupAutocomplete("departure", "departure-list");
setupAutocomplete("arrival", "arrival-list");
