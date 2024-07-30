document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", () => {
    navbarCollapse.classList.toggle("show");
  });

  const navItems = document.querySelectorAll(".nav-link");
  navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      navbarCollapse.classList.remove("show");
    });
  });

  document.addEventListener("click", (event) => {
    const isClickInsideMenu = navbarCollapse.contains(event.target);
    const isClickOnToggler = navbarToggler.contains(event.target);
    if (
      !isClickInsideMenu &&
      !isClickOnToggler &&
      navbarCollapse.classList.contains("show")
    ) {
      navbarCollapse.classList.remove("show");
    }
  });
});
