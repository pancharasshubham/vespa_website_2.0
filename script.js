document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Mobile toggle menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });
 
// Close menu when clicking a link
  navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    }); 
  });
});

document.getElementById("customForm").onsubmit = function () {
  setTimeout(function () {
      let popup = document.getElementById("thankYouPopup");
      popup.style.display = "block"; // Show popup

      // Auto-hide popup after 1 minute (60000 ms)
      setTimeout(function () {
          popup.style.display = "none"; // Hide popup
      }, 60000);
  }, 1000); // Delay to match form submission time
};
