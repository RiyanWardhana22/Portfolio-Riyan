// Toggle Navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Klik DiLuar Elemen Pada Bagian Navbar
document.addEventListener("click", function (e) {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  }
});

// Ntah
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*='" + id + "']")
        .classList.add("active");
    }
  });

  // Navbar Hilang Ketika Di Scroll
  if (window.scrollY === 0) {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  }
};

// Scroll Reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Type Js
const typed = new Typed(".multiple-text", {
  strings: ["Wardhana"],
  loop: true,
  backSpeed: 100,
  typeSpeed: 90,
  backDelay: 1000,
});

// Notifikasi SweetAlert
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  Swal.fire({
    title: "Pesan Telah Terkirim",
    icon: "success",
  });
});
