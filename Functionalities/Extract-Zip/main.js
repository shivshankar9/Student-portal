const navbar = document.getElementById("navbar");
const page = document.getElementById("allContent");
const loader = document.getElementById("loader");

navbar.innerHTML = `<nav>
<div class="logo">
<img src="../../images/logo.png" id="navlogo" alt="">
    <h6 id="logo">Student Portal</h6>
</div>
<div class="toggle-btn">
<span class="bar"></span>
<span class="bar"></span>
<span class="bar"></span>
</div>
<div class="nav-links">
<ul class="myDIV">
    <li><a class="btn active" href="../../index.html">Home</a></li>
    <li><a class="btn" href="../../index.html#about-section">About</a></li>
    <li><a class="btn" href="../../index.html">Services</a></li>
    <li><a class="btn" href="../../contact.html">Contact</a></li>
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
