import { useEffect } from 'react';

const useBodyScroll = (showScroll: boolean) => {
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (showScroll) {
        body.style.overflowY = 'auto';
      } else {
        body.style.overflowY = 'hidden';
      }
    }
  }, [showScroll]);
};

export default useBodyScroll;
