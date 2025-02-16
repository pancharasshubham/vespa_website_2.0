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


  // submitting form with google_form
  document.getElementById("customGoogleForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from redirecting

    // Create FormData object from form
    let formData = new FormData(this);

    // Convert FormData to URL-encoded string
    let queryString = new URLSearchParams(formData).toString();

    // Google Form Submit URL (Replace YOUR_FORM_ID)
    let googleFormURL = "https://docs.google.com/forms/d/1STni4B7FSLVgJBAhLxhwABE-eUv2xrKUD6Ey3uh98PQ/formResponse";

    // Submit form data using fetch()
    fetch(googleFormURL, {
      method: "POST",
      body: queryString,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
      .then(() => {
        document.getElementById("successMessage").style.display = "block"; // Show success message
        document.getElementById("customGoogleForm").reset(); // Reset form
      })
      .catch(error => console.error("Error submitting form:", error));
  });
});