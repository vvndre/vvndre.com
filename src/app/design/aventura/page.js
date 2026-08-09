"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiEdit3,
  FiMap,
  FiPackage,
  FiSearch,
  FiShoppingCart,
  FiTarget,
} from "react-icons/fi";
import Cursor from "@/components/Cursor";
import aventuraShowcase from "/public/images/design/aventura-hero.jpg";
import aventuraMockup from "/public/images/aventura-showcase.png";
import liah from "/public/images/design/persona-liah.png";
import matt from "/public/images/design/persona-matt.png";
import sitemap from "/public/images/design/aventura-sitemap.png";
import wireframes from "/public/images/design/aventura-wireframes.png";
import prototypes from "/public/images/design/aventura-final-screens.png";

const prototypeUrl =
  "https://www.figma.com/design/4u2ymoKpUl5qVaaxmoeZ4U/UX-Project---Aventura?node-id=14-17&t=OyYbBQfRDpr5ptwi-1";

const journeys = [
  {
    name: "Liah",
    type: "Beginner",
    image: liah,
    summary:
      "Needs simple guidance, reassurance, and a clear path from research to purchase.",
    steps: [
      {
        number: "01",
        title: "Research camping gear online",
        findings: ["🤔 Curious", "😵‍💫 Overwhelmed"],
        opportunity: "Beginner gear guide.",
        icon: FiSearch,
      },
      {
        number: "02",
        title: "Browse beginner bundles",
        findings: ["😊 Relieved", "😕 Unsure"],
        opportunity: "Clear starter kits and recommended bundles.",
        icon: FiPackage,
      },
      {
        number: "03",
        title: "Read reviews and product details",
        findings: ["🤩 Reassured", "😵‍💫 Confused by tech terms"],
        opportunity: "Simpler descriptions & reviews.",
        icon: FiEdit3,
      },
      {
        number: "04",
        title: "Add gear to cart",
        findings: ["🧐 Careful", "😎 More confident"],
        opportunity: "Sizing help & comparison charts.",
        icon: FiShoppingCart,
      },
      {
        number: "05",
        title: "Complete purchase",
        findings: ["🥳 Excited", "😊 Relieved"],
        opportunity: "Confirm success and whats next steps.",
        icon: FiCheck,
      },
    ],
  },
  {
    name: "Matt",
    type: "Experienced",
    image: matt,
    summary:
      "Needs speed, technical specifications, advanced filtering, and efficient comparison.",
    steps: [
      {
        number: "01",
        title: "Log in to find specific gear",
        findings: ["🧐 Focused", "🙂 Expectant"],
        opportunity: "Personalized dashboard and quick links.",
        icon: FiSearch,
      },
      {
        number: "02",
        title: "Browse specialized equipment",
        findings: ["💪 Empowered", "🤔 Curious"],
        opportunity: "Provide useful filters.",
        icon: FiPackage,
      },
      {
        number: "03",
        title: "Compare technical details",
        findings: ["😎 Confident", "📈 Analytical"],
        opportunity: "Side-by-side comparison & reviews.",
        icon: FiEdit3,
      },
      {
        number: "04",
        title: "Add selected gear to cart",
        findings: ["🧐 Careful", "🔎 Detail Orientated"],
        opportunity: "Sizing help & comparison charts.",
        icon: FiShoppingCart,
      },
      {
        number: "05",
        title: "Complete purchase confidently",
        findings: ["😊 Satisfied", "😊 Proud"],
        opportunity: "Expedited delivery & tracking.",
        icon: FiCheck,
      },
    ],
  },
];

const iterations = [
  {
    number: "01",
    title: "Clarify the starting point",
    observed:
      "Users needed clearer direction when first entering the shopping experience.",
    iteration:
      "Made shopping by gear and activity more visually distinct and easier to scan.",
  },
  {
    number: "02",
    title: "Simplify product discovery",
    observed: "Browsing products on a smaller screen felt dense and cluttered.",
    iteration:
      "Simplified product cards, improved spacing, and prioritized the most useful information.",
  },
  {
    number: "03",
    title: "Improve product details",
    observed:
      "Product descriptions did not explain the products fully enough for users to make a confident decision.",
    iteration:
      "Added clearer descriptions and a Product Details button for more specific technical specifications.",
  },
  {
    number: "04",
    title: "Confirm successful checkout",
    observed:
      "Users were unsure whether their checkout had been completed successfully.",
    iteration:
      "Created an order confirmation page where users can review details or continue shopping.",
  },
];

const finalBenefits = [
  "Personalized recommendations based on experience level.",
  "Beginner-friendly guidance without slowing down experienced shoppers.",
  "Clear descriptions, technical details, reviews, and comparison support.",
  "Responsive product discovery across mobile and desktop.",
  "A complete checkout flow with a clear order confirmation state.",
];

function SectionShell({ number, title, children }) {
  return (
    <section className="overflow-hidden rounded-md border border-white/60 bg-slate-gray">
      <div className="grid min-w-0 lg:grid-cols-[190px_minmax(0,1fr)]">
        <header className="border-b border-white/30 px-5 py-6 lg:border-b-0 lg:border-r lg:px-6 lg:py-8">
          <p className="font-dots text-2xl uppercase tracking-widest text-liquid-lava">
            {number} /
          </p>
          <h2 className="mt-2 max-w-[11rem] font-oswald text-xl font-bold leading-tight text-white md:text-2xl">
            {title}
          </h2>
        </header>

        <div className="min-w-0 p-5 md:p-6 lg:p-8">{children}</div>
      </div>
    </section>
  );
}

function InsightCard({ icon: Icon, title, children }) {
  return (
    <article className="rounded-md border border-white/60 bg-dark-void/20 p-5 md:p-6">
      <div className="flex items-start gap-4">
        <Icon className="h-9 w-9 shrink-0 text-liquid-lava" />
        <div>
          <h3 className="font-oswald text-lg font-bold text-liquid-lava">
            {title}
          </h3>
          <div className="mt-3 leading-relaxed text-white/80">{children}</div>
        </div>
      </div>
    </article>
  );
}

function PersonaCard({ image, name, type, quote, goals, frustrations }) {
  return (
    <article className="rounded-md border border-white/60 bg-dark-void/20 p-5">
      <div className="grid gap-5 sm:grid-cols-[110px_minmax(0,1fr)]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[180px] overflow-hidden rounded-md border border-white/40 bg-dark-void/30 sm:mx-0 sm:max-w-none">
          <Image
            src={image}
            alt={`${name} persona portrait`}
            fill
            quality={100}
            sizes="(max-width: 640px) 180px, 110px"
            className="object-cover object-top"
          />
        </div>

        <div className="min-w-0">
          <h4 className="font-oswald text-xl font-bold text-white">
            {name} <span className="font-light text-white/80">({type})</span>
          </h4>
          <p className="mt-2 text-sm italic leading-relaxed text-white/80">
            “{quote}”
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <p className="font-oswald text-sm font-bold text-green-500">
                Goals
              </p>
              <ul className="mt-2 font-lora list-disc space-y-1 pl-4 text-sm leading-relaxed text-white/75">
                {goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-oswald text-sm font-bold text-red-500">
                Frustrations
              </p>
              <ul className="mt-2 font-lora list-disc space-y-1 pl-4 text-sm leading-relaxed text-white/75">
                {frustrations.map((frustration) => (
                  <li key={frustration}>{frustration}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function JourneyRow({ journey }) {
  return (
    <article className="overflow-hidden rounded-md border border-white/60 bg-dark-void/30">
      <div className="grid min-w-0 gap-5 p-4 md:p-5 xl:grid-cols-[120px_minmax(0,1fr)]">
        {/* Persona */}
        <div className="flex items-center gap-4 xl:flex-col xl:justify-center xl:gap-2 xl:text-center">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-white sm:h-28 sm:w-28 xl:h-32 xl:w-32">
            <Image
              src={journey.image}
              alt={`${journey.name} persona`}
              fill
              quality={100}
              sizes="128px"
              className="object-cover object-top"
            />
          </div>

          <div>
            <h4 className="font-oswald text-xl font-bold text-white">
              {journey.name}
            </h4>

            <span className="mt-2 inline-block rounded-md border border-liquid-lava px-3 py-1 font-oswald leading-none text-liquid-lava">
              {journey.type}
            </span>
          </div>
        </div>

        {/* Journey Content */}
        <div className="min-w-0">
          <div
            className="
              grid
              grid-cols-1
              gap-3

              md:grid-cols-2

              xl:grid-cols-5
              xl:gap-1.5
            "
          >
            {journey.steps.map(
              ({ number, title, findings, opportunity, icon: Icon }) => (
                <article
                  key={`${journey.name}-${number}`}
                  className="flex min-w-0 flex-col rounded-md border border-white/50 bg-slate-gray px-4 py-4 xl:min-h-[190px] xl:px-3 xl:py-2.5"
                >
                  {/* Step Header */}
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-dots text-2xl text-liquid-lava">
                      {number}
                    </p>

                    <Icon className="h-5 w-5 shrink-0 text-liquid-lava" />
                  </div>

                  {/* Step Title */}
                  <h5 className="mt-2 font-oswald text-lg text-white xl:min-h-[42px]">
                    {title}
                  </h5>

                  {/* Feeling */}
                  <div className="mt-3 border-t border-white/15 pt-3">
                    <p className="font-oswald uppercase tracking-wider text-dusty-gray">
                      Feeling
                    </p>

                    <div className="mt-2 flex flex-wrap gap-1.5 xl:block xl:space-y-1">
                      {findings.map((finding) => (
                        <div
                          key={finding}
                          className="rounded-md border border-white/40 px-2 py-1"
                        >
                          <p className="font-oswald leading-none text-white/85">
                            {finding}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Opportunity */}
                  <div className="mt-3">
                    <p className="font-oswald uppercase tracking-wider text-dusty-gray">
                      Opportunity
                    </p>

                    <p className="mt-1 text-sm leading-snug text-white/85">
                      {opportunity}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function AventuraCaseStudy() {
  const [isActive, setIsActive] = useState(false);

  return (
    <main className="mx-auto flex min-h-screen flex-col bg-dark-void px-6">
      {/* HERO */}
      <section className="z-10 px-4 py-14 md:py-16">
        <div
          className="
      relative
      min-h-[720px]
      overflow-hidden
      rounded-md
      border border-white/60
      bg-slate-gray

      lg:min-h-[500px]
    "
          onMouseOver={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          {/* Background Hero Image */}
          <Image
            src={aventuraShowcase}
            alt="Aventura outdoor commerce experience"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Background Gradient */}
          <div
            className="
        absolute inset-0
        bg-gradient-to-b
        from-dark-void/80
        via-dark-void/55
        to-dark-void/80

        lg:bg-gradient-to-r
        lg:from-dark-void
        lg:via-dark-void/75
        lg:to-transparent
      "
          />

          {/* Hero Foreground Content */}
          <div
            className="
        relative z-10
        flex min-h-[720px]
        flex-col
        justify-between
        gap-10
        p-5

        sm:p-8

        lg:min-h-[500px]
        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:gap-10
        lg:p-10

        xl:gap-14
        xl:p-14
      "
          >
            {/* Left Content */}
            <div
              className="
          w-full
          rounded-md
          border border-white/30
          bg-dark-void/85
          p-6
          backdrop-blur-sm

          md:p-8

          lg:w-[46%]
          lg:max-w-lg
        "
            >
              <p className="font-dots text-2xl uppercase tracking-widest text-liquid-lava">
                UX Case Study
              </p>

              <h1 className="mt-3 font-oswald text-4xl font-bold uppercase md:text-6xl">
                Aventura
              </h1>

              <p className="mt-4 font-oswald text-xl leading-snug md:text-2xl">
                Designing an outdoor commerce 
                experience for every explorer.
              </p>

              <p className="mt-5 leading-relaxed text-white/80">
                Aventura is an e-commerce experience that helps outdoor
                enthusiasts discover the right gear, prepare with confidence,
                and explore more. I led the end-to-end UX process from research
                and strategy through wireframing, prototyping, and testing.
              </p>

              <div className="mt-6 border-t border-white/20 pt-4">
                <p className="text-sm leading-relaxed text-dusty-gray">
                  UX Research · Personas · Journey Mapping · Information
                  Architecture · Wireframing · Prototyping · Usability Testing
                </p>
              </div>
            </div>

            {/* Right / Bottom Mockup */}
            <div
              className="
          flex
          w-full
          justify-center

          lg:w-[50%]
          lg:justify-end
        "
            >
              <Image
                src={aventuraMockup}
                alt="Aventura UX design shown across mobile and desktop screens"
                quality={100}
                priority
                className="
            h-auto
            w-full
            max-w-[720px]
            object-contain
          "
              />
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY CONTENT */}
      <div className="z-10 flex flex-col gap-4 px-4 pb-16">
        <SectionShell number="01" title="Defining The Problem">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div>
              <h2 className="font-oswald text-2xl font-bold leading-tight md:text-3xl">
                Finding the right outdoor gear shouldn’t require being an
                expert.
              </h2>

              <div className="mt-5 space-y-4 leading-relaxed text-white/80">
                <p>
                  Planning an outdoor trip can quickly become overwhelming.
                  Users have to determine what equipment they need, compare
                  unfamiliar products, understand how that equipment is used,
                  and make decisions that can affect both comfort and safety.
                </p>
                <p>
                  For beginners, too many products and unfamiliar terminology
                  can create uncertainty. Experienced outdoor users face a
                  different problem: finding specialized, high-performance gear
                  efficiently without sorting through irrelevant
                  recommendations.
                </p>
                <p>
                  The challenge was to create an experience flexible enough to
                  support both ends of that spectrum.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <InsightCard icon={FiTarget} title="Goal Statement">
                <p>
                  Our outdoor supply store will let users of all experience
                  levels purchase the right gear, which will affect both new
                  campers like Liah and experienced campers like Matt by
                  reducing overwhelm, saving time, and building confidence in
                  their purchases.
                </p>
              </InsightCard>

              <InsightCard icon={FiBarChart2} title="Measuring Success">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Can users find and purchase the right gear?</li>
                  <li>Where do users hesitate or abandon the flow?</li>
                  <li>Can beginners understand product information?</li>
                  <li>Do users feel confident after checkout?</li>
                </ul>
              </InsightCard>
            </div>
          </div>
        </SectionShell>

        <SectionShell number="02" title="Research and Understanding Users">
          <div>
            <h3 className="font-oswald text-xl font-bold text-liquid-lava md:text-2xl">
              Meet Our Users
            </h3>

            <div className="mt-5 grid gap-4 xl:grid-cols-2">
              <PersonaCard
                image={liah}
                name="Liah"
                type="Beginner"
                quote="I just want to feel confident and safe while exploring. I don’t need the fanciest gear, I just want to get started and have fun."
                goals={[
                  "Start exploring local trails and weekend camping",
                  "Improve physical and mental well-being",
                  "Learn the basics of outdoor skills safely",
                ]}
                frustrations={[
                  "Overwhelmed by too many gear options",
                  "Unsure what is essential versus optional",
                  "Worried about purchasing the wrong product",
                ]}
              />

              <PersonaCard
                image={matt}
                name="Matt"
                type="Experienced"
                quote="The right gear can make or break an expedition. I want quality equipment I can trust without wasting time."
                goals={[
                  "Invest in durable, technical equipment",
                  "Research and compare products efficiently",
                  "Spend less time shopping and more time outdoors",
                ]}
                frustrations={[
                  "Generic descriptions and limited specifications",
                  "Unclear compatibility between products",
                  "Difficulty finding specialized equipment",
                ]}
              />
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <article className="rounded-md border border-white/60 bg-dark-void/20 p-5">
                <h4 className="font-oswald font-bold text-liquid-lava">
                  Problem Statements
                </h4>
                <p className="mt-3 leading-relaxed text-white/80">
                  <b>Liah</b> is a first-time camper who needs a guided way to
                  buy beginner-friendly gear because she feels overwhelmed by
                  too many choices and lacks product knowledge.
                </p>
                <p className="mt-3 leading-relaxed text-white/80">
                  <b>Matt</b> is an experienced camper who needs a fast,
                  efficient way to browse and purchase specialized outdoor gear
                  because he values quality, performance, and saving time while
                  shopping.
                </p>
              </article>

              <article className="rounded-md border border-white/60 bg-dark-void/20 p-5">
                <h4 className="font-oswald font-bold text-liquid-lava">
                  If / Then Statements
                </h4>
                <p className="mt-3 leading-relaxed text-white/80">
                  If <b>Liah</b> can use a step-by-step gear selection guide
                  within Aventura, then she will feel more confident purchasing
                  the right items for her first trip.
                </p>
                <p className="mt-3 leading-relaxed text-white/80">
                  If <b>Matt</b> can quickly filter and compare high-performance
                  gear within Aventura, then he can make confident purchases
                  without wasting time searching.
                </p>
              </article>
            </div>
          </div>
        </SectionShell>

        <SectionShell number="03" title="User Journey Maps">
          <div>
            <h3 className="font-oswald text-2xl font-bold md:text-3xl">
              Two journeys, one goal: confident gear purchases.
            </h3>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/80 md:text-base">
              Beginners need guidance and reassurance at every step, while
              experienced explorers prioritize efficiency, technical detail, and
              speed.
            </p>

            <div className="mt-6 grid gap-4">
              {journeys.map((journey) => (
                <JourneyRow key={journey.name} journey={journey} />
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          number="04"
          title="Information Architecture & Wireframing"
        >
          <div className="grid gap-8 xl:grid-cols-2">
            <article>
              <div className="flex items-center gap-3">
                <FiMap className="h-6 w-6 text-liquid-lava" />
                <h3 className="font-oswald text-xl font-bold text-liquid-lava md:text-2xl">
                  Sitemap
                </h3>
              </div>
              <p className="mt-3  leading-relaxed text-white/80">
                The structure organizes product discovery around clear entry
                points, supporting both activity-based exploration and direct
                category browsing.
              </p>
              <div className="mt-5">
                <Image
                  src={sitemap}
                  alt="Aventura sitemap"
                  quality={100}
                  className="h-auto w-full object-contain"
                />
              </div>
            </article>

            <article>
              <div className="flex items-center gap-3">
                <FiEdit3 className="h-6 w-6 text-liquid-lava" />
                <h3 className="font-oswald text-xl font-bold text-liquid-lava md:text-2xl">
                  Early Wireframes
                </h3>
              </div>
              <p className="mt-3 leading-relaxed text-white/80">
                Early layouts focused on hierarchy, product discovery,
                filtering, technical details, and the full checkout journey
                before visual styling was applied.
              </p>
              <div className="mt-10">
                <Image
                  src={wireframes}
                  alt="Aventura wireframes"
                  quality={100}
                  className="h-auto w-full object-contain"
                />
              </div>
            </article>
          </div>
        </SectionShell>

        <SectionShell number="05" title="Testing & Iteration">
          <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
            <div>
              <h3 className="font-oswald text-2xl font-bold">
                Refining the experience.
              </h3>
              <p className="mt-4 leading-relaxed text-white/80">
                Because of the project timeline, I was not able to conduct a
                full moderated usability study. However, I shared the prototype
                with a small number of users and observed how they moved through
                the experience.
              </p>

              <div className="mt-6 border-t border-white/20 pt-5">
                <h4 className="font-oswald text-xl text-liquid-lava">
                  What I Looked For
                </h4>
                <ul className="mt-3 font-lora list-disc space-y-2 pl-5 leading-relaxed text-white/80">
                  <li>Where users understand where to begin?</li>
                  <li>Whether navigation and calls to action were clear?</li>
                  <li>Accessibility and content checks?</li>
                  <li>Confidence throughout product and checkout.</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {iterations.map(({ number, title, observed, iteration }) => (
                <article
                  key={number}
                  className="rounded-md border border-white/60 bg-dark-void/20 p-5"
                >
                  <p className="font-dots text-2xl text-liquid-lava">
                    {number}
                  </p>
                  <h4 className="mt-1 font-oswald text-xl font-bold">
                    {title}
                  </h4>
                  <p className="mt-4 font-loraleading-relaxed text-white/80">
                    <strong className="font-oswald text-liquid-lava">
                      Observed:
                    </strong>{" "}
                    {observed}
                  </p>
                  <p className="mt-3 font-lora leading-relaxed text-white/80">
                    <strong className="font-oswald text-liquid-lava">
                      Iteration:
                    </strong>{" "}
                    {iteration}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell number="06" title="The Final Solution">
          <div className="grid items-center gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h3 className="font-oswald text-2xl font-bold md:text-3xl">
                One experience for different kinds of explorers.
              </h3>
              <p className="mt-4 leading-relaxed text-white/80 md:text-base">
                Aventura brings product discovery, recommendations, education,
                and trip preparation together within one outdoor-commerce
                experience.
              </p>

              <ul className="mt-6 space-y-3">
                {finalBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 leading-relaxed text-white/80"
                  >
                    <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <p>{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Image
              src={prototypes}
              alt="Aventura final prototype screens"
              className="aspect-[16/9]]"
            />
          </div>
        </SectionShell>

        {/* WHAT I LEARNED */}
        <section className="rounded-md border border-white/60 bg-slate-gray">
          <div className="grid items-center gap-6 px-5 py-5 md:px-8 lg:grid-cols-[120px_minmax(0,1fr)_180px] lg:gap-8">
            <div className="flex items-center justify-left lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#f56e0f"
                  d="m14 6l-3.75 5l2.85 3.8l-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22z"
                />
              </svg>
            </div>

            <div className="min-w-0 lg:ml-6">
              <h4 className="font-oswald text-xl font-bold uppercase text-liquid-lava md:text-xl">
                What I Learned
              </h4>

              <p className="mt-2 max-w-4xl leading-relaxed text-white/80">
                Aventura taught me the importance of guiding users without
                overwhelming them. By grounding every design decision in user
                research and validating with real users, I was able to create an
                experience that feels helpful & trustworthy.
              </p>
            </div>

            <div
              className="flex"
              onMouseOver={() => setIsActive(true)}
              onMouseLeave={() => setIsActive(false)}
            >
              <Link
                href={prototypeUrl}
                target="_blank"
                rel="noreferrer"
                className="group font-oswald inline-flex w-fit items-center justify-center gap-3 rounded-md border border-liquid-lava px-4 py-4 text-base uppercase tracking-wider text-white transition hover:bg-liquid-lava hover:text-dark-void"
              >
                View Prototype{" "}
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        <div className="pt-4">
          <Link
            href="/design"
            className="font-dots text-2xl uppercase tracking-wider text-white transition hover:text-liquid-lava"
          >
            [ ← Back to Design ]
          </Link>
        </div>
      </div>

      <Cursor isActive={isActive} />
    </main>
  );
}
