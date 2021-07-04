import { useEffect, useState, useRef, RefObject } from 'react';

const useNearScreen = <T extends HTMLElement>(): [boolean, RefObject<T>] => {
  const element = useRef<T>(null);
  const [show, setShow] = useState(false);

  /* Lazy Loading */
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer'),
    ).then(() => {
      const observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      if (element.current) {
        observer.observe(element.current);
      }
    });
  }, [element]);

  return [show, element];
};

export default useNearScreen;
