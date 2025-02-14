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
   let formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    model: document.getElementById("model").value,
    message: document.getElementById("message").value
  };

  // Convert FormData to JSON
  let jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  // Send data using fetch() to Google Apps Script
  fetch("https://script.google.com/macros/s/AKfycbynKXvl0hEbghh46i_RCj9aNtgotBMuhR3xcwtpa8FF5USL0NubHlxAv65E8AWsjgV9HQ/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // JSON format
    body: JSON.stringify(jsonData),
  })
    .then(response => response.text())
    .then(data => {
      console.log("Response from server:", data);
      if (data.trim() === "Success") {
        alert("Form submitted successfully! ✅");
        form.reset(); // clear the form
      } else {
        alert("Something went wrong ❌: " + data);
      }
    })
    .catch(error => {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later. ❌");
    });
});
});