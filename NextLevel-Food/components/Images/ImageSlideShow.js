'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import classes from './ImageSlideShow.module.css';

import curryImg from '@/assets/curry.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import burgerImg from '@/assets/burger.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';

const images = [
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
      // if it's less than the last index, increments the index by 1
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
