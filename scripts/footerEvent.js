document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
  });
});
