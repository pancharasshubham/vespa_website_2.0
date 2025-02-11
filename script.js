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

 // Select the form
 const form = document.getElementById("bookingForm");

 //listen for form submission
 form.addEventListener("submit", function (e) {
   e.preventDefault(); // Prevent default form submission

   // Create FormData object to capture input values
   let formData = new FormData(form);

  // Send data using fetch() to Google Apps Script
  fetch("https://script.google.com/macros/s/AKfycbwCq3Ql-EXEEewMG0YU0HgDdSH2neWBn9zqUli8KSb8Js4ZCnhVxF0cDYckWjRhmcFI/exec", {
    method: "POST",
    body: formData,
  })
    .then(response => response.text()) // Convert response to text
    .then(data => {
      alert("Form submitted successfully! ✅");
      form.reset(); // Clear the form
    })
    .catch(error => {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later. ❌");
    });
});
});