import { useEffect, useRef, useState } from 'react';

interface Props {
  images: string[];
  pos: number;
}

export const ImageCarrousel = (props: Props) => {
  const [images, setImages] = useState(props.images.reverse());

  function nextImage() {
    //quitando la ultima imagen que es la visible
    const lastImage = document.querySelector(`.images img:last-child`) as HTMLImageElement;
    console.log(lastImage);
    lastImage.style.transition = 'opacity .5s ease-in-out';
    lastImage.style.opacity = '0';

    setTimeout(() => {
      lastImage.style.opacity = '1';
      lastImage.style.transition = 'none';
      //pasar la ultima imagen al inicio
      const newImages = [...images];
      newImages.unshift(newImages.pop() as string);
      setImages(newImages);
    }, 500);
  }

  const isFirstTime = useRef(true);
  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }
    nextImage();
    return () => {};
  }, [props.pos]);

  return (
    <>
      <div className="w-[400px] h-[400px] relative images">
        {images.map((image) => {
          return (
            <img
              src={image}
              alt=""
              key={image}
              id={image}
              className="w-full h-full object-cover transition-opacity image-animation absolute"
            />
          );
        })}
      </div>
    </>
  );
};
