export default function inViewport (elem) {
  if(elem)
  {
    // var bounding = elem.getBoundingClientRect();
    // return (
    //   bounding.top >= 0 &&
    //   bounding.left >= 0 &&
    //   bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //   bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );
    const rect = elem.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
  }
};