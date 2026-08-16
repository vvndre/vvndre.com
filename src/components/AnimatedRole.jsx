"use client";

import { useEffect, useState } from "react";

const roles = [
  "Front-end Engineer",
  "Full Stack Developer",
  "UX/UI Designer",
];

export default function AnimatedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  useEffect(() => {
    let swapTimeout;

    const interval = setInterval(() => {
      setRoleVisible(false);

      swapTimeout = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setRoleVisible(true);
      }, 200);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(swapTimeout);
    };
  }, []);

  return (
    <>
      {/* Animated visual text */}
      <span
        aria-hidden="true"
        className="block overflow-hidden pb-[0.15em] -mb-[0.15em]"
      >
        <span
          className={`
            block
            transition-all
            duration-500
            ease-out
            motion-reduce:transform-none
            motion-reduce:transition-none
            ${
              roleVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }
          `}
        >
          {roles[roleIndex]}
        </span>
      </span>

      {/* Stable text for screen readers */}
      <span className="sr-only">
        Front-end Engineer, Full Stack Developer, and UX/UI Designer
      </span>
    </>
  );
}