const navbar = document.getElementById('navbar')
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
<ul>
    <li><a class="active" href="./index.html">Home</a></li>
    <li><a href="./index.html">Services</a></li>
    <li><a href="./contact.html">Contact</a></li>
    <li><a href="#about-section">About</a></li>
</ul>
</div>
</nav>`
const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("display");
});
