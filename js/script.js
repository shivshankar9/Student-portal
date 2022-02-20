
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
<ul>
    <li> <div class="toggle-switch">
      <label class="switch">
        <input id = "lightmode-gen" value="on"  type="checkbox" onclick = "light_mode_activate()">
        <span class="slider round"></span>
    </label>
  </div></li>
    <li><a class="active" href="./index.html#home">Home</a></li>
    <li><a href="./index.html#about-section">About</a></li>
    <li><a href="./index.html#services">Services</a></li>
    <li><a href="./contact.html">Contact</a></li>
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
function validatef() {
  var regex = /^[a-zA-Z]+$/;
  var name = document.getElementById("firstname").value;
  if (!regex.test(name)) {
    // alert("invalid first name");
    document.getElementById("fname").style.color = "red";
    document.getElementById("fname").innerHTML = "invalid";
    return false;
  } else {
    document.getElementById("fname").style.color = "yellow";
    document.getElementById("fname").innerHTML = "valid";
    return true;
  }
}
function validatel() {
  var regex = /^[a-zA-Z]+$/;
  var name = document.getElementById("lastname").value;
  if (!regex.test(name)) {
    //alert("invalid last name");
    document.getElementById("lname").style.color = "red";
    document.getElementById("lname").innerHTML = "invalid";
    return false;
  } else {
    document.getElementById("lname").style.color = "yellow";
    document.getElementById("lname").innerHTML = "valid";
    return true;
  }
}
function validatemail() {
  var regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  var name = document.getElementById("email").value;
  if (!regex.test(name)) {
    // alert("invalid email");
    document.getElementById("mail").style.color = "red";
    document.getElementById("mail").innerHTML = "invalid";
    return false;
  } else {
    document.getElementById("mail").style.color = "yellow";
    document.getElementById("mail").innerHTML = "valid";
    return true;
  }
}
function submit() {
  if (validatef() == false || validatel() == false || validatemail() == false)
    alert("Please enter valid values");
  else alert("Thank you, we will respond to you soon.");
}