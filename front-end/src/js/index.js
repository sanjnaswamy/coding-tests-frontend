document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    function addClassBasedOnViewportSize() {
      const viewportWidth = window.innerWidth;
      if (viewportWidth <= 768) {
        buttons.forEach(button => button.classList.add('mobile'));
        buttons.forEach(button => button.classList.remove('tablet'));
      } else if (viewportWidth > 768 && viewportWidth <= 991) { // tablet viewport size considered
        buttons.forEach(button => button.classList.add('tablet'));
        buttons.forEach(button => button.classList.remove('mobile'));
      }
    }

    window.addEventListener('resize', addClassBasedOnViewportSize);
    addClassBasedOnViewportSize();


    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});

