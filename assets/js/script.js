// author: Handika Putra
// github account: https://github.com/HanPutra

// hamburger
const hamburger = document.querySelector(".hamburger-icon");
const nav = document.querySelector("nav");
hamburger.addEventListener("click", function () {
  nav.classList.toggle("show");
  hamburger.classList.toggle("active");
});
