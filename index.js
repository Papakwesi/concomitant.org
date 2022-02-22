const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hamburgerBtn2 = document.querySelector(".hamburger-btn2");


hamburgerBtn.addEventListener("click", () => {
  container.classList.toggle("active");

});

hamburgerBtn2.addEventListener("click", () => {
  container.classList.toggle("active");

});