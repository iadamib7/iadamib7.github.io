const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const contactForm = document.getElementById("contact-form");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  const mailtoLink =
    `mailto:iadam@caltech.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
});
