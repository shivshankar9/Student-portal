const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("display");
  toggleBtn.classList.toggle("btn-transform");
});
