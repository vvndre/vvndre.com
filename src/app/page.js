"use client";
import Image from "next/image";
import portrait from "/public/images/Portrait-BW.png";
import RotatingText from "@/components/rotating-text/RotatingText";
import Cursor from "@/components/Cursor";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <main className="flex min-h-screen mx-8 px-6 items-center flex-col bg-dark-void">
      <div className="py-12 container-xl text-center"></div>
      <div
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className="relative z-10"
      >
        <Image
          src={portrait}
          width={700}
          height={700}
          alt="Picture of the author"
          quality={100}
          className="rounded-full"
        />
        <RotatingText />
      </div>
      <Cursor isActive={isActive} />
    </main>
  );
}
