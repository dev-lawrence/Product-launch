// Navigation menu
const header = document.querySelector('.header');
const toggle = document.querySelector('.toggle-menu');
const logo = document.querySelector('.logo');
const navMenu = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');

// change header background color on scroll
const showBg = () => {
  const scroll = window.scrollY;

  if (scroll > 100) {
    header.classList.add('showBg');
  } else {
    header.classList.remove('showBg');
  }
};

// Function to show navigation menu
const showNavItems = () => {
  navMenu.classList.toggle('showNav');
  toggle.classList.toggle('close');
  body.classList.toggle('hide');
};

// Function to change active link
const changeActiveLink = (link) => {
  link.addEventListener('click', () => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    link.classList.add('active');
    showNavItems();
  });
};

// Event listeners
navLinks.forEach(changeActiveLink);
toggle.addEventListener('click', showNavItems);
window.addEventListener('scroll', showBg);
