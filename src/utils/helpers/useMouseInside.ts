import {useState, useEffect} from 'react';

export function UseMouseInside(ref: any) {
  const [isInside, setIsInside] = useState(false);
  useEffect(() => {
    function handleClickInside(event: MouseEvent) {
      if (ref.current && ref.current.contains(event.target)) {
        setIsInside(true);
      }
    }

    document.addEventListener('click', handleClickInside);
    return () => document.removeEventListener('click', handleClickInside);
  }, [ref]);

  return isInside;
}
