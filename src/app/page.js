"use client";
import Image from "next/image";
import portrait from "/public/images/Portrait-BW.png";
import RotatingText from "@/components/rotating-text/RotatingText";
import Cursor from "@/components/Cursor";
import { useState } from "react";
import RippleButton from "@/components/ripple-button/RippleButton";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <main className="flex min-h-screen mx-8 px-6 items-center flex-col bg-dark-void">
      <div
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className="mt-14 mb-12 relative z-10"
      >
        <Image
          src={portrait}
          width={700}
          height={700}
          alt="Picture of the author"
          quality={100}
          priority={false}
          className="rounded-full"
        />
        <RotatingText />
      </div>

      <div className="z-10">
        <RippleButton />
      </div>

      <section className="py-10 px-4 text-center z-10">
        <p className="text-dusty-gray my-6">About Me</p>
        <p className="mb-6 text-lg">
          👋 Hi — I’m Andre , a 25 y/o Creative Full Stack Developer based in
          Houston, Texas.
        </p>
        <p className="mb-6 text-lg">
          I develop accessible, responsive, interactive, and animated websites
          with a strong focus on creating user-friendly applications that bridge
          the gap between code and design.
        </p>
        <p className="mb-6 text-lg">
          I’ve worked in UI design and front-end development, so I can
          understand designs well and builds effective communication between
          team members.
        </p>
        <p className="text-lg">
          In my personal life, I love to travel, kayak, watch movies, and
          discover new music!
        </p>
      </section>
      <Cursor isActive={isActive} />
    </main>
  );
}
