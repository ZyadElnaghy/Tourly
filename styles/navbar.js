function nv() {
  var navbar = document.getElementById("navbar");
  if (!navbar) return;
  var scrollvalue = window.scrollY;
  if (scrollvalue < 83) {
    navbar.classList.remove("new-nav");
  } else {
    navbar.classList.add("new-nav");
  }
}

function setupMobileNav() {
  var navbar = document.getElementById("navbar");
  var toggleBtn = document.getElementById("nav-toggle");
  var navMenu = document.getElementById("nav-menu");

  if (!navbar || !toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", function () {
    var isOpen = navbar.classList.toggle("nav-open");
    toggleBtn.setAttribute("aria-expanded", isOpen.toString());
  });

  var navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navbar.classList.remove("nav-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900 && navbar.classList.contains("nav-open")) {
      navbar.classList.remove("nav-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}

window.addEventListener("scroll", nv);
window.addEventListener("DOMContentLoaded", setupMobileNav);
