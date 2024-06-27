document.addEventListener("DOMContentLoaded", function() {
    const navTrigger = document.querySelector('.cd-bouncy-nav-trigger');
    const navModal = document.querySelector('.cd-bouncy-nav-modal');
    const closeModal = document.querySelector('.cd-close');
  
    if (navTrigger && navModal && closeModal) {
      navTrigger.addEventListener('click', () => {
        navModal.classList.add('is-visible');
      });
  
      closeModal.addEventListener('click', () => {
        navModal.classList.remove('is-visible');
      });
    }
  });
  