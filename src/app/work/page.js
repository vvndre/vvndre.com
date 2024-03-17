"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import apdf from "/public/images/websites/MacBook Pro Mockups.png";

export default function Work() {
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 996);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen mx-12 flex-col px-6 bg-dark-void">
      <div className="py-8 container-xl text-center">
        <p className="text-dusty-gray mb-6">Work</p>
        <h2 className="text-6xl mb-8">A small selection of recent projects</h2>
      </div>

      <div
        className={`container-xl pb-8 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 ${
          isSmallViewport ? "hidden" : "block"
        }`}
      >
        <div className="md:col-span-2 bg-slate-gray rounded-md relative h-[65vh]">
          <Link
            href="https://beta.archivepdf.net/"
            className="block h-full w-full relative"
          >
            <Image
              src={apdf}
              alt="archive.PDF"
              layout="fill"
              objectFit="cover"
              className="w-full h-full rounded-md"
            />
          </Link>
        </div>
      </div>
      <div
        className={`container-l pb-8 grid grid-cols-1 gap-x-4 gap-y-4 ${
          isSmallViewport ? "grid-rows-5" : "md:grid-cols-2"
        }`}
      >
        {isSmallViewport && (
          <div className="bg-slate-gray h-[40vh] rounded-md">
            <Link
              href="https://beta.archivepdf.net/"
              className="block h-full w-full relative"
            >
              <Image
                src={apdf}
                alt="archive.PDF"
                layout="fill"
                objectFit="cover"
                className="w-full h-full rounded-md"
              />
            </Link>
          </div>
        )}
        <div className="bg-slate-gray h-[40vh] rounded-md"></div>
        <div className="bg-slate-gray h-[40vh] rounded-md"></div>
        <div className="bg-slate-gray h-[40vh] rounded-md"></div>
        <div className="bg-slate-gray h-[40vh] rounded-md"></div>
      </div>
    </div>
  );
}
