const smoothScroll = () => {
  document.querySelectorAll('.scroll').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();

      const whereToGo = anchor.getAttribute('href');
      const elementToGo = document.querySelector(whereToGo || '');
      if (elementToGo) {
        elementToGo.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

export default smoothScroll;
