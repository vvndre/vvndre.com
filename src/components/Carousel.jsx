"use client";
import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import image3 from "/public/images/IMG_2824.JPG";
import image2 from "/public/images/IMG_3742.jpg";
import image1 from "/public/images/IMG_3445.JPG";

export default function Carousel() {
  const slides = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4200);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="max-w-[1200px] h-[68vh] w-full pb-12 px-4 relative group z-10">
      <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative">
        <Image
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          quality={100}
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-snow-white hover:text-liquid-lava cursor-cell">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-snow-white hover:text-liquid-lava cursor-cell">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl hover:cursor-cell ${
              slideIndex === currentIndex
                ? "text-snow-white"
                : "text-dusty-gray"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
