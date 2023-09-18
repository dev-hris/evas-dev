import {useEffect, useState} from 'react';
import Debounce from 'lodash/debounce';

export const useResize = (): number => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e: UIEvent) => {
      if (e.target) {
        const win = e.target as Window;

        setCurrentWidth(win.innerWidth);
      }
    };

    window.addEventListener('resize', Debounce(handleResize, 20));

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return currentWidth;
};
