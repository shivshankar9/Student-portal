const navbar = document.getElementById('navbar')
navbar.innerHTML = `<nav>
<div class="logo">
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
    <li><a href="./index.html">About</a></li>
</ul>
</div>
</nav>`
const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("display");
});
function notempty(elem,mssg)
  {
    if(elem.value.length==0)
    {
      alert(mssg);
      elem.focus();
      return false;
    }
    return true;
  }