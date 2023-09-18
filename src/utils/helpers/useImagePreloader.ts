import {useEffect, useState} from 'react';

function preloadImage (src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      reject(src);
    };
  });
}

export function useImagePreloader(imageList: string[], timer?: number) {
  const [isPreloaded, setIsPreloaded] = useState<boolean>(false);

  useEffect(() => {
    let isCancelled = false;

    async function effect() {
      if (isCancelled) {
        return;
      }

      const imagesPromiseList: Promise<any>[] = [];
      for (const i of imageList) {
        imagesPromiseList.push(preloadImage(i));
      }
      await Promise.all(imagesPromiseList);

      if (isCancelled) {
        return;
      }
      if(timer) {
        setTimeout(() => setIsPreloaded(true), timer);
        return;

      }
      setIsPreloaded(true);
    }

    effect();

    return () => {
      isCancelled = true;
    };
  }, [imageList]);

  return {isPreloaded};
}
