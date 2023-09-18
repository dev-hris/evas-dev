import {useState, useEffect} from 'react';

export function UseMouseOutside(ref: any) {
  const [isOutside, setIsOutside] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOutside(true);
      }
    }

    document.addEventListener('click', handleClickOutside, true);
    return () => document.removeEventListener('click', handleClickOutside, true);
  }, [ref]);

  return isOutside;
}
