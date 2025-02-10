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
 form.addEventListener("submit", async (e) => {
   e.preventDefault(); // Prevent default form submission

   // Create FormData object to capture input values
   const formData = new FormData(form);

   // Replace with your deployed Google Apps Script URL
   const scriptURL = "https://script.google.com/macros/s/AKfycbyCRk-xoeQtDJ_WDPcp479M3axlM4GFqofJQawRnOOPbgcChimU9hsMqEpiW3qxm_UY/exec";

   try {
     const response = await fetch(scriptURL, {
       method: "POST",
       body: formData,
     });

     const result = await response.text();

     if (result === "Success") {
       alert("Thank you for your test drive request. We will contact you soon!");
       form.reset();
     } else {
       alert("Form submission failed. Please try again.");
     }
   } catch (error) {
     console.error("Error submitting form:", error);
     alert("Network error. Please try again.");
   }
 });
});