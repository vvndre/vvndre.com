"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import apdfmock from "/public/images/websites/MacBook Pro Mockups.png";
import apdf from "/public/images/websites/archivePDF.png";
import gamejot from "/public/images/websites/Gamejot.jpeg";
import actionhosesupply from "/public/images/websites/actionhosesupply.png";
import barbershop from "/public/images/websites/Hair Salon.jpeg";

export default function Work() {
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 999);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen mx-8 flex-col px-6 bg-dark-void">
      <div className="py-8 container-xl text-center">
        <p className="text-dusty-gray mb-6">Work</p>
        <h2 className="text-6xl mb-8">
          A small selection <br /> of recent projects
        </h2>
      </div>

      <div
        className={`container-xl pb-8 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 ${
          isSmallViewport ? "hidden" : "block"
        }`}
      >
        <div className="group md:col-span-2 bg-slate-gray rounded-md relative h-[80vh] overflow-hidden">
          <Link
            href="https://beta.archivepdf.net/"
            className="block h-full w-full relative"
          >
            <Image
              src={apdfmock}
              alt="archive.PDF"
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 ease-out-in transform group-hover:scale-110 group-hover:blur-sm"
            />
          </Link>
        </div>
      </div>
      <div
        className={`container-l pb-8 grid grid-cols-1 gap-x-4 gap-y-4 ${
          isSmallViewport ? "grid-rows-5" : "sm:grid-cols-2"
        }`}
      >
        {isSmallViewport && (
          <div className="group bg-slate-gray h-[45vh] rounded-md overflow-hidden">
            <Link
              href="https://beta.archivepdf.net/"
              className="block h-full w-full relative"
            >
              <Image
                src={apdf}
                alt="archive.PDF Website"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 ease-out-in transform group-hover:scale-110 group-hover:blur-sm"
              />
            </Link>
          </div>
        )}
        <div className="group bg-slate-gray h-[45vh] rounded-md overflow-hidden">
          <Link
            href="https://gamejot-front-end.onrender.com/"
            className="block h-full w-full relative"
          >
            <Image
              src={gamejot}
              alt="Gamejot Web app"
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 ease-out-in transform group-hover:scale-110 group-hover:blur-sm"
            />
          </Link>
        </div>
        <div className="group bg-slate-gray h-[45vh] rounded-md overflow-hidden">
          <Link
            href="https://www.actionhosesupply.com/"
            className="block h-full w-full relative"
          >
            <Image
              src={actionhosesupply}
              alt="Action Hose & Fittings Website"
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 ease-out-in transform group-hover:scale-110 group-hover:blur-sm"
            />
          </Link>
        </div>
        <div className="group bg-slate-gray h-[45vh] rounded-md overflow-hidden">
          <Link
            href="https://vvndre.github.io/hairSalonWebsite/"
            className="block h-full w-full relative"
          >
            <Image
              src={barbershop}
              alt="Barbershop Website"
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 ease-out-in transform group-hover:scale-110 group-hover:blur-sm"
            />
          </Link>
        </div>
        <div className="bg-slate-gray h-[45vh] rounded-md"></div>
      </div>
    </div>
  );
}
