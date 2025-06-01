/**
 * Image Gallery functionality for Aryan Gym
 */

export function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (galleryItems.length === 0) return;
  
  const modal = document.querySelector('.gallery-modal');
  const modalImage = document.querySelector('.modal-image');
  const modalClose = document.querySelector('.modal-close');
  const modalPrev = document.querySelector('.modal-prev');
  const modalNext = document.querySelector('.modal-next');
  
  let currentIndex = 0;
  
  // Open modal when gallery item is clicked
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (!modal || !modalImage) return;
      
      currentIndex = index;
      const imgSrc = item.querySelector('img').getAttribute('src');
      const imgAlt = item.querySelector('img').getAttribute('alt') || 'Gallery image';
      
      modalImage.setAttribute('src', imgSrc);
      modalImage.setAttribute('alt', imgAlt);
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
  });
  
  // Close modal when close button is clicked
  modalClose?.addEventListener('click', () => {
    closeModal();
  });
  
  // Close modal when clicking outside the image
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Navigate to previous image
  modalPrev?.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = galleryItems.length - 1;
    }
    updateModalImage();
  });
  
  // Navigate to next image
  modalNext?.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= galleryItems.length) {
      currentIndex = 0;
    }
    updateModalImage();
  });
  
  // Close modal when ESC key is pressed
  document.addEventListener('keydown', (e) => {
    if (!modal?.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      modalPrev?.click();
    } else if (e.key === 'ArrowRight') {
      modalNext?.click();
    }
  });
  
  // Update modal image
  function updateModalImage() {
    if (!modalImage) return;
    
    const imgSrc = galleryItems[currentIndex].querySelector('img').getAttribute('src');
    const imgAlt = galleryItems[currentIndex].querySelector('img').getAttribute('alt') || 'Gallery image';
    
    modalImage.setAttribute('src', imgSrc);
    modalImage.setAttribute('alt', imgAlt);
  }
  
  // Close modal
  function closeModal() {
    modal?.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
}