"use client";

import { useState } from "react";
import RippleButton from "@/components/ripple-button/RippleButton";
import Cursor from "@/components/Cursor";
import Carousel from "@/components/Carousel";
import {
  FiCode,
  FiUserCheck,
  FiLayout,
  FiMusic,
  FiFilm,
  FiCoffee,
  FiMap,
} from "react-icons/fi";

const strengths = [
  {
    title: "Development",
    icon: FiCode,
    description:
      "Clean, scalable code and modern web stacks to build fast, reliable, and maintainable applications.",
  },
  {
    title: "UX Thinking",
    icon: FiUserCheck,
    description:
      "User-first approach with a focus on usability, accessibility, structure, and meaningful interactions.",
  },
  {
    title: "Visual Systems",
    icon: FiLayout,
    description:
      "Consistent layouts, components, typography, and interface patterns that create cohesive digital experiences.",
  },
];

const experience = [
  {
    date: "2025 - Present",
    company: "ICP DAS USA",
    role: "Full Stack Developer / UX Designer",
    description:
      "Developing and maintaining enterprise websites, product pages, and internal systems using PHP, WordPress, JavaScript, and MySQL, while applying UX research and usability testing insights. Conducting UX research and usability testing to drive improvements that enhance user experience and increase conversions.",
  },
  {
    date: "2025",
    company: "World Chamber of Commerce TX",
    role: "Web Developer / Designer",
    description:
      "Contributed to the development of WCCT.org, supported Elementor-based wireframing, optimized legacy SQL tables, and improved site SEO and performance.",
  },
  {
    date: "2017 - 2025",
    company: "Action Rentals",
    role: "Web Developer / Assistant Manager",
    description:
      "Updated, maintained, and improved a legacy WordPress websites for Action Rentals and its sister company, Action Hose & Fittings, improving SEO visibility and ensuring consistent content updates. As Assistant Manager, I also helped oversee day-to-day operations and customer service for the sister company.",
  },
  {
    date: "2023 - 2024",
    company: "ARCHIVE.pdf",
    role: "Full Stack Developer",
    description:
      "Led the development of a custom newsletter system using Strapi CMS, managing components, form handling, and design documentation. Improved the frontend with Next.js and Typescript for improved performance, accessibility, and user engagement.",
  },
  {
    date: "2019 - 2020",
    company: "Arena Theatre",
    role: "Audio Production Assistant",
    description:
      "Supported live event production by setting up audio, lighting, stage, and backline equipment, assisting with rotating stage operations, and monitoring equipment during performances.",
  },
];

const interests = [
  { label: "Music", icon: FiMusic },
  { label: "Movies", icon: FiFilm },
  { label: "Cooking", icon: FiCoffee },
  { label: "Travel", icon: FiMap },
];

export default function About() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex min-h-screen mx-auto flex-col px-6 bg-dark-void">
      {/* Hero */}
      <section className="flex w-full flex-col items-center gap-12 px-10 py-14 lg:flex-row lg:justify-between md:py-16">
        {/* Left Content */}
        <div className="z-10 lg:max-w-md">
          <p className="font-dots text-2xl uppercase tracking-widest text-liquid-lava">
            About:
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl">
            <strong className="font-oswold">
              Bridging code,
              <br />
              design, & experiences.
            </strong>
          </h2>

          <p className="mt-6 text-md leading-relaxed text-dusty-gray">
            I’m Andre Castillon, a full-stack developer with a UX design mindset. 
            I create websites, interfaces, and digital systems that are functional, accessible, and easy to use.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {["Houston, TX", "Full-Stack Developer", "UX/UI"].map((tag) => (
              <span
                key={tag}
                className="font-lora text-sm text-white/80"
              >
                <span className="text-liquid-lava">[</span> {tag}{" "}
                <span className="text-liquid-lava">]</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right Carousel */}
        <div
          className="z-10 w-full max-w-[720px]"
          onMouseOver={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <Carousel
            className="aspect-[16/9] md:aspect-[16/8]"
            imageClassName="rounded-md"
          />
        </div>
      </section>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 z-10">
        {/* My Story */}
        <section className="z-10 px-4">
          <h3 className="mb-6 font-oswold text-xl font-bold text-white">
            My Story
          </h3>

          <div className="rounded-md border border-white/60 bg-slate-gray px-6 py-8 md:px-10">
            <div className="space-y-5 text-sm leading-relaxed text-white/80 md:text-base">
              <p>
                I started building websites out of curiosity, but my interest in
                technology goes back even further. Growing up, I was always
                messing with computers from modding ipods & gaming systems, experimenting with
                programs, and programming audio and music.
              </p>

              <p>
                Development really started for me at Action Rentals, where I
                used WordPress builders to update, maintain, and fix a legacy
                website. In 2023, I joined Austin Coding Academy and gained a
                stronger foundation in full-stack programming — front-end,
                back-end, JavaScript, SQL, and how web applications come
                together.
              </p>

              <p>
                Today, I combine code with UX thinking to create digital
                experiences that look great and work as they should. I care
                about the details — from structure and performance to
                accessibility and user flow.
              </p>
            </div>
          </div>
        </section>

        {/* What I Bring */}
        <section className="z-10 px-4 py-10">
          <h3 className="mb-10 font-oswold text-xl font-bold text-white">
            What I Bring
          </h3>

          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            onMouseOver={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
          >
            {strengths.map(({ title, icon: Icon, description }) => (
              <article
                key={title}
                className="rounded-md border border-white/60 bg-slate-gray px-6 py-8 transition hover:border-liquid-lava"
              >
                <Icon className="h-10 w-10 text-liquid-lava" />

                <h4 className="mt-6 font-oswold text-2xl font-bold uppercase">
                  {title}
                </h4>

                <p className="mt-4 text-sm leading-relaxed text-dusty-gray">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="z-10 px-4">
          <h3 className="mb-10 font-oswold text-xl font-bold text-white">
            Experience
          </h3>

          <div
            className="flex flex-col gap-4"
            onMouseOver={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
          >
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.date}`}
                className="group grid gap-5 rounded-md border border-white/60 bg-slate-gray px-6 py-6 transition hover:border-liquid-lava md:grid-cols-[150px_1fr_1.4fr] md:items-center md:px-10"
              >
                <p className="text-sm text-dusty-gray">{item.date}</p>

                <div>
                  <h4 className="font-oswold text-2xl font-bold">
                    {item.company}
                  </h4>
                  <p className="mt-1 text-sm text-white/60">{item.role}</p>
                </div>

                <p className="text-sm leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Outside of Work */}
<section className="z-10 px-4 py-12 md:py-16">
  <h3 className="mb-10 font-oswold text-xl font-bold text-white">
    Outside of Work
  </h3>

  <div className="border-b border-white/20 pb-12 md:pb-16">
    <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[auto_minmax(0,620px)] md:items-center md:justify-center md:gap-20 lg:gap-28">
      {/* Icons */}
      <div className="flex items-center justify-center md:justify-start">
        {interests.map(({ label, icon: Icon }, index) => (
          <div
            key={label}
            className={`flex items-center ${
              index === 0
                ? "pr-6 md:pr-8 lg:pr-10"
                : "border-l border-white/25 px-6 md:px-8 lg:px-10"
            }`}
          >
            <Icon className="h-10 w-10 shrink-0 text-liquid-lava md:h-12 md:w-12" />
            <span className="sr-only">{label}</span>
          </div>
        ))}
      </div>

      {/* Text */}
      <p className="mx-auto max-w-[620px] text-center text-base leading text-white/80 md:mx-0 md:text-left md:leading-[1.65]">
        Outside of work, I love discovering new music, watching movies, cooking,
        and exploring new places. Whether it’s a local concert, trying out a new
        recipe, or playing Super Smash Bros — I’m always looking for the next
        experience!
      </p>
    </div>
  </div>
</section>

        {/* CTA */}
        <section className="z-10 flex justify-center px-4 pb-16">
          <RippleButton />
        </section>
      </div>

      <Cursor isActive={isActive} />
    </div>
  );
}
