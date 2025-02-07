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

  menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });

  // Form submission handling
  const form = document.getElementById("bookingForm")
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const model = document.getElementById("model").value
    const message = document.getElementById("message").value

    // Here you would typically send the data to your backend
    console.log("Form submitted:", { name, email, phone, model, message })

    // Show a success message
    alert("Thank you for your test drive request. We will contact you soon to confirm your appointment!")

    // Reset the form
    form.reset()


  })
})

