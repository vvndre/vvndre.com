"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiEdit3, FiArrowRight } from "react-icons/fi";
import { LuFlaskConical } from "react-icons/lu";
import Cursor from "@/components/Cursor";
import RippleButton from "@/components/ripple-button/RippleButton";
import aventuraShowcase from "/public/images/aventura-showcase.png";
import aventura from "/public/images/aventura-showcase.png";
import icpdasusa from "/public/images/websites/ICPDASUSA.png";

const designProcess = [
  {
    title: "Research",
    icon: FiSearch,
    description:
      "Understand users, behaviors, pain points, business goals, and the context surrounding a problem.",
    items: [
      "User Interviews",
      "Surveys & Analysis",
      "Empathy Mapping",
      "Journey Mapping",
    ],
  },
  {
    title: "Design",
    icon: FiEdit3,
    description:
      "Translate insights into clear structure, user flows, wireframes, and interactive prototypes.",
    items: [
      "Information Architecture",
      "Wireframing",
      "UI Design",
      "Prototyping (Figma)",
    ],
  },
  {
    title: "Validate",
    icon: LuFlaskConical,
    description:
      "Test ideas with users, iterate on feedback, and create accessible, inclusive experiences.",
    items: [
      "Usability Testing",
      "Feedback & Iteration",
      "Accessibility Checks",
      "Design Systems",
    ],
  },
];

export default function Design() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mx-auto flex min-h-screen flex-col bg-dark-void px-6">
      {/* HERO */}
      <section className="flex w-full flex-col items-center gap-12 px-4 py-14 md:px-10 md:py-16 lg:flex-row lg:justify-between">
        {/* Left Content */}
        <div className="z-10 lg:max-w-md">
          <p className="font-dots text-2xl uppercase tracking-widest text-liquid-lava">
            Design:
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl">
            <strong className="font-oswold">
              Designing thoughtful,
              <br />
              intuitive experiences.
            </strong>
          </h1>

          <p className="mt-6 leading-relaxed text-white/80">
            I approach UX through research, usability, accessibility, and
            thoughtful interface design, turning user needs into clear digital
            experiences from early concepts to polished prototypes.
          </p>
        </div>

        {/* Right Image */}
        <div
          className="z-10 w-full max-w-[720px]"
          onMouseOver={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <Image
            src={aventuraShowcase}
            alt="Aventura UX design shown across mobile and desktop screens"
            quality={100}
            priority
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* FEATURED UX CASE STUDY */}
      <section
        className="z-10 px-4 pb-14"
        onMouseOver={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <h2 className="mb-10 font-oswold text-xl font-bold text-white">
          Featured UX Case Study
        </h2>

        <Link
          href="/design/aventura"
          className="group flex flex-col gap-8 rounded-md border border-white/60 bg-slate-gray px-6 py-8 transition hover:border-liquid-lava md:flex-row md:items-center md:px-10 lg:px-20"
        >
          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-md md:w-[42%]">
            <Image
              src={aventura}
              alt="Aventura outdoor e-commerce website"
              quality={100}
              className="h-auto w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="w-full md:ml-auto md:w-[48%]">
            <p className="font-oswald text-md uppercase text-liquid-lava">
              Featured
            </p>

            <h3 className="mt-2 font-oswold text-3xl font-bold uppercase">
              Aventura
            </h3>

            <p className="mt-3 font-oswold text-lg">
              UX/UI Designer - Google UX Design Project
            </p>

            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Designing an outdoor commerce experience for every explorer.
              Aventura reimagines how users discover and shop for outdoor gear
              through an intuitive, accessible experience built for both
              first-time buyers and seasoned adventurers.
            </p>

            {/* Keywords */}
            <div className="mt-6 border-t border-white/20 pt-4">
              <p className="text-xs leading-relaxed text-dusty-gray md:text-sm">
                UX Research · Wireframing · Prototyping · Usability Testing
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <span className="font-dots text-2xl uppercase tracking-wider text-snow-white transition group-hover:text-liquid-lava">
                [ View Case Study <span className="ml-1">→</span> ]
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* SELECTED UX WORK */}
      <section
        className="z-10 px-4 pb-14"
        onMouseOver={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <h2 className="mb-10 font-oswold text-xl font-bold text-white">
          Selected UX Work
        </h2>

        <Link
          href="https://icpdasusa.com/"
          target="_blank"
          className="group flex flex-col gap-8 rounded-md border border-white/60 bg-slate-gray px-6 py-8 transition hover:border-liquid-lava md:flex-row md:items-center md:px-10 lg:px-20"
        >
          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-md md:w-[42%]">
            <Image
              src={icpdasusa}
              alt="ICP DAS USA website UX design"
              quality={100}
              className="h-auto w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="w-full md:ml-auto md:w-[48%]">
            <h3 className="font-oswold text-3xl font-bold uppercase">
              ICP DAS USA
            </h3>

            <p className="mt-3 font-oswold text-lg">
              UX Research - Product Design
            </p>

            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Conducted a cross-department usability study to uncover friction
              across product discovery, comparison, and checkout. Translated
              research findings into prioritized UX improvements while designing
              and prototyping new pages and interface solutions for the ICP DAS
              USA website.
            </p>

            {/* Keywords */}
            <div className="mt-6 border-t border-white/20 pt-4">
              <p className="text-xs leading-relaxed text-dusty-gray md:text-sm">
                Usability Testing · UX Research · Prototyping · UI Design
              </p>
            </div>

          </div>
        </Link>
      </section>

      {/* DESIGN PROCESS */}
      <section className="z-10 px-4 pb-16">
        <h2 className="mb-10 font-oswold text-xl font-bold text-white">
          Design Process
        </h2>

        <div
          className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:justify-between"
          onMouseOver={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          {designProcess.map(
            ({ title, icon: Icon, description, items }, index) => (
              <div key={title} className="contents">
                {/* Process Card */}
                <article className="flex-1 rounded-md border border-white/60 bg-slate-gray px-6 py-8 transition hover:border-liquid-lava lg:min-h-[290px]">
                  <div className="flex items-start gap-5">
                    <Icon className="h-10 w-10 shrink-0 text-liquid-lava" />

                    <div>
                      <h3 className="font-oswold text-xl font-bold uppercase">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-dusty-gray">
                        {description}
                      </p>

                      <ul className="mt-5 list-disc space-y-1 pl-5 text-sm text-white/80">
                        {items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>

                {/* Arrow between cards */}
                {index < designProcess.length - 1 && (
                  <div className="hidden shrink-0 items-center justify-center px-1 lg:flex">
                    <FiArrowRight className="h-8 w-8 text-white" />
                  </div>
                )}
              </div>
            ),
          )}
        </div>
      </section>

      {/* Resume CTA */}
      <section className="z-10 flex justify-center px-4 pb-16">
        <RippleButton />
      </section>

      <Cursor isActive={isActive} />
    </div>
  );
}
