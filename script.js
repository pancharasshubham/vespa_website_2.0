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

// thank you popup
document.getElementById("customForm").onsubmit = function (event) {
  event.preventDefault(); // Prevent default submission

  // Submit form using the hidden iframe
  this.submit();

  // Show Thank You popup
  let popup = document.getElementById("thankYouPopup");
  popup.style.display = "block"; 
  popup.style.opacity = "1";

  // Start progress bar animation
  let progressBar = document.querySelector(".progress");
  progressBar.style.width = "100%";

  // Hide popup after 5 seconds
  setTimeout(() => {
    popup.style.opacity = "0"; // Smooth fade-out
    setTimeout(() => {
        popup.style.display = "none"; 
    }, 500); // Wait for fade-out animation
}, 5000); // 5 seconds display time

  // Reset form after a short delay
  setTimeout(() => {
      document.getElementById("customForm").reset();
  }, 1000);

};    
