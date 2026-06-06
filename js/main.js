console.log("WeatherLab site loaded");

const menuBtn = document.getElementById("menuBtn");
const siteNav = document.getElementById("siteNav");

if (menuBtn && siteNav) {
  menuBtn.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  const navLinks = siteNav.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
    });
  });
}