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

  /* script is being removed
 // Select the form
  const form = document.getElementById("bookingForm");

 //listen for form submission
  form.addEventListener("submit", function (e) {
   e.preventDefault(); // Prevent default form submission
   alert("Submitting form..."); //Debugging alert

   // Capture form values using FormData
   let formData = new FormData(form);
   let jsonData = Object.fromEntries(formData.entries()); // Convert FormData to JSON object
 
   //alert("Sending data: " + JSON.stringify(jsonData)); // Debugging alert

  // Send data using fetch() to Google Apps Script
  fetch("https://script.google.com/macros/s/AKfycbyRzpHkkE9q1akb71lpjQ8S3tAfv5wDx47sc6s16GD2IxQFiyTf-gFPrScsKTNc_PLy2Q/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // JSON format
    body: JSON.stringify(jsonData),
  })
    .then(response => response.text())
    .then(data => {
      alert("Response: " + data); // Debugging alert
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
*/

});