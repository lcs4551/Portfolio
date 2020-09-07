'use strict';

// Make navbar transparent when it is not the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--black');
  } else {
    navbar.classList.remove('navbar--black');
  }
});
