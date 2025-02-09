"use client";
import { useState } from "react";
import Cursor from "@/components/Cursor";
import Carousel from "@/components/Carousel";
import Accordian from "@/components/Accordian";

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
          👋 Hi — I&apos;m Andre, a Houston-based tech wizard with a flair for full stack development.
        </p>
        <p className="mb-6 text-lg">
          In my personal life, I love to travel, kayak, watch movies, and
          discover new music!
        </p>

        <div className="my-10">
          <p className="text-dusty-gray m-4 text-xl font-dots">Experience</p>
          <Accordian />
        </div>

        <p className="my-6 text-lg">
          I develop accessible, responsive, interactive, and animated websites
          with a strong focus on creating user-friendly applications that bridge
          the gap between code and design.
        </p>
        <p className="mb-6 text-lg">
          I&apos;ve worked in front-end and back-end development, so I can
          understand designs well and builds effective communication between
          team members.
        </p>
      </section>

      <Cursor isActive={isActive} />
    </div>
  );
}
