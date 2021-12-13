const toogleBtn = document.getElementsByClassName("toogle-btn")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

toogleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("display");
});
