const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const icon = hamburger.querySelector('i');
const links = document.querySelectorAll('.nav-links a');

// Hamburger click – open/close menu + toggle icon
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  if(icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark'); // cross icon
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});

// Close menu when any nav link is clicked
links.forEach(link => {
  link.addEventListener('click', () => {
    if(navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });
});
