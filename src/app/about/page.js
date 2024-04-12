"use client";
import { useState } from "react";
import Cursor from "@/components/Cursor";
import Carousel from "@/components/Carousel";

export default function About() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex min-h-screen mx-auto flex-col px-6 bg-dark-void">
      <div className="py-8 container-xl text-center z-10">
        <p className="text-dusty-gray mb-4 text-xl font-dots">About</p>
        <h6 className="text-6xl max-lg:text-5xl max-sm:text-4xl">
          A little <br /> about me
        </h6>
      </div>

      <div
        className=" flex justify-center z-10"
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
      >
        <Carousel />
      </div>

      <section className="py-6 prose xl:prose-md max-w-3xl mx-auto text-center z-10">
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
    </div>
  );
}
