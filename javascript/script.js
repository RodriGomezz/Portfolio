const hiddenElements = document.querySelectorAll(".hidden");
const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const navbar = document.querySelector(".navbar");
const menuOption = document.querySelectorAll(".menuOption");

const observer = new IntersectionObserver((e) => {
  e.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("show");
    // else e.target.classList.remove("show");
  });
});

hiddenElements.forEach((e) => observer.observe(e));

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("hamburgerMenu");
  cross.classList.toggle("show");
});

menuOption.forEach((element) => {
  element.addEventListener("click", () => {
    navbar.classList.remove("hamburgerMenu");
    cross.classList.remove("show");
  });
});

window.addEventListener("resize", (e) => {
  if (window.matchMedia(`(min-width: 600px)`).matches) {
    navbar.classList.remove("hamburgerMenu");
    cross.classList.remove("show");
  }
});
