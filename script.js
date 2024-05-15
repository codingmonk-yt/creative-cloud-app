document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", function () {
      document
        .querySelectorAll(".menu-link")
        .forEach((link) => link.classList.remove("is-active"));
      this.classList.add("is-active");
    });
  });

  document.querySelectorAll(".main-header-link").forEach((link) => {
    link.addEventListener("click", function () {
      document
        .querySelectorAll(".main-header-link")
        .forEach((link) => link.classList.remove("is-active"));
      this.classList.add("is-active");
    });
  });

  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdowns.forEach((c) => c.classList.remove("is-active"));
      this.classList.add("is-active");
    });
  });

  document
    .querySelector(".search-bar input")
    .addEventListener("focus", function () {
      document.querySelector(".header").classList.add("wide");
    });

  document
    .querySelector(".search-bar input")
    .addEventListener("blur", function () {
      document.querySelector(".header").classList.remove("wide");
    });

  document.addEventListener("click", function (e) {
    const container = document.querySelector(".status-button");
    const dd = document.querySelectorAll(".dropdown");
    if (!container.contains(e.target)) {
      dd.forEach((dropdown) => dropdown.classList.remove("is-active"));
    }
  });

  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      document.querySelector(".content-wrapper").classList.add("overlay");
      e.stopPropagation();
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      document.querySelector(".content-wrapper").classList.remove("overlay");
    }
  });

  document.querySelectorAll(".status-button:not(.open)").forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".overlay-app").classList.add("is-active");
    });
  });

  document
    .querySelector(".pop-up .close")
    .addEventListener("click", function () {
      document.querySelector(".overlay-app").classList.remove("is-active");
    });

  document.querySelectorAll(".status-button:not(.open)").forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".pop-up").classList.add("visible");
    });
  });

  document
    .querySelector(".pop-up .close")
    .addEventListener("click", function () {
      document.querySelector(".pop-up").classList.remove("visible");
    });

  const toggleButton = document.querySelector(".dark-light");
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
  });
});
