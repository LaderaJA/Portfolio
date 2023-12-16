



// JavaScript to toggle the navigation menu on smaller screens


function toggleMenu() {
  var navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

var currentUrl = window.location.href;
var navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(function(link) {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});


