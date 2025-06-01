// Main JavaScript file for Aryan Gym

// Import modules
import { initNavigation } from './modules/navigation.js';
import { initThemeToggle } from './modules/theme.js';
import { initContactForm } from './modules/contact.js';
import { initBmiCalculator } from './modules/bmi.js';
import { initTestimonials } from './modules/testimonials.js';
import { initWorkoutTimer } from './modules/timer.js';
import { initGallery } from './modules/gallery.js';
import { initBackToTop } from './modules/backToTop.js';

// Initialize all modules when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Aryan Gym website initialized');
  
  // Initialize modules
  initNavigation();
  initThemeToggle();
  initContactForm();
  initBmiCalculator();
  initTestimonials();
  initWorkoutTimer();
  initGallery();
  initBackToTop();
});