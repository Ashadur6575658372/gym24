const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");


// Toggle Navigation
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});


// close navitems When clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});


//TODO: Scroll to the specific section