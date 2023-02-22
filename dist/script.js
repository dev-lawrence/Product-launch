// Navigation menu
const header = document.querySelector('.header');
const toggle = document.querySelector('.toggle-menu');
const logo = document.querySelector('.logo');
const navMenu = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');
const templateLists = document.querySelector('.templates__list');
const templatesCards = document.querySelectorAll('.templates__cards .card');

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

// Function to show templates
const filterTemplates = (e) => {
  const active = templateLists.querySelector('.active');
  if (e.target.classList.contains('list')) {
    active.classList.remove('active');

    e.target.classList.add('active');

    const filterValue = e.target.getAttribute('data-filter');

    templatesCards.forEach((card) => {
      if (card.classList.contains(filterValue) || filterValue === 'all') {
        card.classList.add('show');
        card.classList.remove('hide');
      } else {
        card.classList.remove('show');
        card.classList.add('hide');
      }
    });
  }
};

// Event listeners
navLinks.forEach(changeActiveLink);
toggle.addEventListener('click', showNavItems);
window.addEventListener('scroll', showBg);
templateLists.addEventListener('click', filterTemplates);
