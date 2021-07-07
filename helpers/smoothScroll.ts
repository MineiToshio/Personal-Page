const smoothScroll = (elementId: string) => {
  if (typeof window !== 'undefined') {
    const elementToGo = document.querySelector(`#${elementId}`);
    if (elementToGo) {
      elementToGo.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
};

export default smoothScroll;
