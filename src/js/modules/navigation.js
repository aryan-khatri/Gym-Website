/**
 * Navigation functionality for Aryan Gym
 * Handles mobile menu toggle and smooth scrolling
 */

export function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navMenu?.classList.remove('active');
    });
  });

  // Highlight active nav item based on scroll position
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavItem() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.add('active');
      } else {
        document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.remove('active');
      }
    });
  }

  // Add header background on scroll
  const header = document.querySelector('.header');
  
  function toggleHeaderBackground() {
    if (window.scrollY > 100) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }

  // Register scroll events
  if (sections.length > 0) {
    window.addEventListener('scroll', highlightNavItem);
  }
  
  if (header) {
    window.addEventListener('scroll', toggleHeaderBackground);
    // Initial check for header background
    toggleHeaderBackground();
  }
}