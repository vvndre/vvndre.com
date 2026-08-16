"use client";

import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";

import image3 from "/public/images/comicsandmanga.jpg";
import image2 from "/public/images/gamesandpizza.jpg";
import image1 from "/public/images/matchalover.JPG";

const slides = [image1, image2, image3];
const AUTOPLAY_DELAY = 4200;

export default function Carousel({
  className = "h-[68vh] max-w-[1200px]",
  imageClassName = "rounded-2xl",
  showArrows = true,
  showDots = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className={`relative z-10 w-full overflow-hidden group ${className}`}>
      <div
        className={`relative h-full w-full overflow-hidden bg-black ${imageClassName}`}
      >
        {slides.map((slide, slideIndex) => (
          <Image
            key={slideIndex}
            src={slide}
            alt={`Personal photo ${slideIndex + 1}`}
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, 720px"
            priority={slideIndex === 0}
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              slideIndex === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {showArrows && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prevSlide}
            className="absolute left-5 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/30 p-2 text-snow-white transition hover:text-liquid-lava group-hover:flex"
          >
            <BsChevronCompactLeft size={30} />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={nextSlide}
            className="absolute right-5 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/30 p-2 text-snow-white transition hover:text-liquid-lava group-hover:flex"
          >
            <BsChevronCompactRight size={30} />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center">
          {slides.map((slide, slideIndex) => (
            <button
              key={slideIndex}
              type="button"
              aria-label={`Go to slide ${slideIndex + 1}`}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl transition hover:cursor-cell ${
                slideIndex === currentIndex
                  ? "text-liquid-lava"
                  : "text-dusty-gray"
              }`}
            >
              <RxDotFilled />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}