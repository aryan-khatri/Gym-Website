/**
 * Theme toggle functionality for Aryan Gym
 * Handles light/dark mode switching
 */

export function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme preference or use the system preference
  const currentTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');
  
  // Set initial theme
  if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    updateThemeIcon(true);
  }
  
  // Toggle theme when button is clicked
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      
      // Update localStorage with new preference
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      
      // Update the theme toggle icon
      updateThemeIcon(isLight);
    });
  }
  
  // Update the theme toggle icon based on current theme
  function updateThemeIcon(isLight) {
    if (!themeToggle) return;
    
    if (isLight) {
      themeToggle.innerHTML = '<i class="fa fa-moon-o"></i>';
      themeToggle.setAttribute('title', 'Switch to dark mode');
    } else {
      themeToggle.innerHTML = '<i class="fa fa-sun-o"></i>';
      themeToggle.setAttribute('title', 'Switch to light mode');
    }
  }
}