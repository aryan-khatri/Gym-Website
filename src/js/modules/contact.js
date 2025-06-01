/**
 * Contact form validation and submission for Aryan Gym
 */

export function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (!contactForm) return;
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  const submitButton = contactForm.querySelector('input[type="submit"]');
  
  // Add input event listeners for real-time validation
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      validateField(nameInput, value => {
        return value.trim().length >= 2;
      }, 'Name must be at least 2 characters');
    });
  }
  
  if (emailInput) {
    emailInput.addEventListener('input', () => {
      validateField(emailInput, value => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      }, 'Please enter a valid email address');
    });
  }
  
  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      validateField(phoneInput, value => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(value.replace(/\D/g, ''));
      }, 'Please enter a valid 10-digit phone number');
    });
  }
  
  if (messageInput) {
    messageInput.addEventListener('input', () => {
      validateField(messageInput, value => {
        return value.trim().length >= 10;
      }, 'Message must be at least 10 characters');
    });
  }
  
  // Form submission handler
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    let isValid = true;
    
    if (nameInput) {
      isValid = validateField(nameInput, value => value.trim().length >= 2, 
                             'Name must be at least 2 characters') && isValid;
    }
    
    if (emailInput) {
      isValid = validateField(emailInput, value => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      }, 'Please enter a valid email address') && isValid;
    }
    
    if (phoneInput) {
      isValid = validateField(phoneInput, value => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(value.replace(/\D/g, ''));
      }, 'Please enter a valid 10-digit phone number') && isValid;
    }
    
    if (messageInput) {
      isValid = validateField(messageInput, value => value.trim().length >= 10, 
                              'Message must be at least 10 characters') && isValid;
    }
    
    if (isValid) {
      // Show loading state on button
      if (submitButton) {
        submitButton.value = 'Sending...';
        submitButton.disabled = true;
      }
      
      // Simulate form submission (in a real app, this would be an API call)
      setTimeout(() => {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
          <i class="fa fa-check-circle"></i>
          <p>Thank you for your message! We'll contact you soon.</p>
        `;
        
        // Replace form with success message
        contactForm.innerHTML = '';
        contactForm.appendChild(successMessage);
        
        // Style success message
        successMessage.style.textAlign = 'center';
        successMessage.style.padding = '2rem';
        successMessage.style.color = 'var(--success-color)';
        successMessage.querySelector('i').style.fontSize = '3rem';
        
      }, 1500);
    }
  });
  
  // Helper function to validate a field
  function validateField(inputElement, validationFn, errorMessage) {
    const formGroup = inputElement.closest('.form-group');
    const errorElement = formGroup?.querySelector('.form-error');
    
    if (!formGroup || !errorElement) return true;
    
    const isValid = validationFn(inputElement.value);
    
    if (isValid) {
      formGroup.classList.remove('error');
      formGroup.classList.add('success');
      errorElement.textContent = '';
    } else {
      formGroup.classList.add('error');
      formGroup.classList.remove('success');
      errorElement.textContent = errorMessage;
    }
    
    return isValid;
  }
}