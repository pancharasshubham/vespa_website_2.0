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

  // form fetch() method
  document.getElementById("customForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

     // Create FormData object
     let formData = new FormData(this);

     // Submit form using fetch
     fetch("https://docs.google.com/forms/d/e/1FAIpQLSfHax2b0lhxDf53_O0_0rzSDd6LJNuQxW3n61KwrBq97zBHvQ/formResponse", {
         method: "POST",
         body: formData,
         mode: "no-cors" // Prevent CORS issues
    }).then(() => {
         showPopup(); // Show custom popup on successful submission  

         this.reset(); // Clear the form
     }).catch(error => {
         console.error("Submission failed:", error);
     });
    });

// Function to Show Popup       
function showPopup() {
  let popup = document.getElementById("popup");
  popup.classList.remove("hidden");

  // Hide popup after 5 seconds
  setTimeout(() => {
      popup.classList.add("hidden");
  }, 5000);
}
