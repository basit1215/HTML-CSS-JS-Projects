const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const icon = hamburger.querySelector("i");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
});
