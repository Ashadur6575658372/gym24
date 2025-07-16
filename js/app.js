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

//Navigation Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", () => {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoVew({
      behavior: "smooth",
    });
  });
});

// Add background color black when scrolling
window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  if (this.window.scrollY > 50) {
    header.style.backgroundColor = "#000000";
    header.style.transition = "background-color 0.3s ease";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
