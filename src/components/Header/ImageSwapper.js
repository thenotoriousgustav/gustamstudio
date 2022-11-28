import { useState, useEffect } from "react";

import header from "../../assets/img/header.jpg";
import abstract from "../../assets/img/abstract.jpg";
import abstract1 from "../../assets/img/abstract-1.jpg";
import abstract2 from "../../assets/img/abstract-2.jpg";
import abstract3 from "../../assets/img/abstract-3.png";

export default function ImageSwapper() {
  const images = [header, abstract, abstract1, abstract2, abstract3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 2500);

    return () => clearInterval(intervalId);
  });

  return (
    <img
      src={images[currentIndex]}
      alt='a web design'
      className='mx-auto mt-8 h-[400px] w-full rounded-lg object-cover md:mt-16 md:h-[580px]'
    ></img>
  );
}
