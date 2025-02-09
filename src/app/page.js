"use client";
import Image from "next/image";
import headshot from "/public/images/Headshot.png";
import RotatingText from "@/components/rotating-text/RotatingText";
import Cursor from "@/components/Cursor";
import { useState } from "react";
import RippleButton from "@/components/ripple-button/RippleButton";
import Contact from "@/components/contact/Contact";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <main className="flex min-h-screen mx-auto px-6 items-center flex-col bg-dark-void">
      <div
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className="my-14 relative z-10"
      >
        <Image
          src={headshot}
          width={700}
          height={700}
          alt="Picture of the author"
          quality={100}
          priority={true}
          className="rounded-full"
        />
        <RotatingText />
      </div>

      <div className="z-10">
        <RippleButton />
      </div>

      <div className="z-10">
        <Contact />
      </div>

      <Cursor isActive={isActive} />
    </main>
  );
}
