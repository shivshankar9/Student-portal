
const navbar = document.getElementById("navbar");
const page = document.getElementById("allContent");
const loader = document.getElementById("loader");
navbar.innerHTML = `<nav>
<div class="logo">
<img src="./images/logo.png" id="navlogo" alt="">
    <h6 id="logo">Student Portal</h6>
</div>
<div class="toggle-btn">
<span class="bar"></span>
<span class="bar"></span>
<span class="bar"></span>
</div>
<div class="nav-links">
<ul id="myDIV">
    <li> <div class="toggle-switch">
      <label class="switch">
        <input id = "lightmode-gen" value="on"  type="checkbox" onclick = "light_mode_activate()">
        <span class="slider round"></span>
    </label>
  </div></li>
    <li><a class="btn active" href="./index.html#home">Home</a></li>
    <li><a class="btn"  href="./index.html#about-section">About</a></li>
    <li><a class="btn" href="./index.html#services">Services</a></li>
    <li><a class="btn" href="./contact.html">Contact</a></li>
</ul>
</div>
</nav>`;
const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];
toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("display");
});
window.onload = function () {
  loader.style.display = "none";
  page.style.display = "";
};
// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}