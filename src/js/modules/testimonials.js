/**
 * Testimonials carousel functionality for Aryan Gym
 */

export function initTestimonials() {
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  
  if (testimonialSlides.length === 0) return;
  
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  const dotsContainer = document.querySelector('.testimonial-dots');
  
  let currentSlide = 0;
  let interval;
  
  // Create dots for each slide
  if (dotsContainer) {
    testimonialSlides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      
      dot.addEventListener('click', () => {
        goToSlide(index);
        resetInterval();
      });
      
      dotsContainer.appendChild(dot);
    });
  }
  
  // Set up navigation buttons
  prevBtn?.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
    resetInterval();
  });
  
  nextBtn?.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
    resetInterval();
  });
  
  // Initialize first slide
  showSlide(currentSlide);
  
  // Start automatic sliding
  startInterval();
  
  // Functions
  function showSlide(index) {
    // Handle index wrapping
    if (index < 0) index = testimonialSlides.length - 1;
    if (index >= testimonialSlides.length) index = 0;
    
    // Update current slide index
    currentSlide = index;
    
    // Hide all slides and show current
    testimonialSlides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
    
    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i === index) dot.classList.add('active');
    });
  }
  
  function goToSlide(index) {
    showSlide(index);
  }
  
  function startInterval() {
    interval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000);
  }
  
  function resetInterval() {
    clearInterval(interval);
    startInterval();
  }
  
  // Pause autoplay when user hovers over testimonials
  const testimonialContainer = document.querySelector('.testimonials-container');
  testimonialContainer?.addEventListener('mouseenter', () => {
    clearInterval(interval);
  });
  
  testimonialContainer?.addEventListener('mouseleave', () => {
    startInterval();
  });
}