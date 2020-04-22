export default function smoothScroll() {
  document.querySelectorAll('.scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(anchor.getAttribute('href') as string)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
    });
  });
}