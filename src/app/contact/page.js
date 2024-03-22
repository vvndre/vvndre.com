"use client";
import { useState } from "react";
import Cursor from "@/components/Cursor";

export default function Contact() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex min-h-screen mx-8 flex-col px-6 bg-dark-void">
      <div
        className="py-8 container-xl text-center z-10"
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
      >
        <p className="text-dusty-gray mb-6">Contact</p>
        <h2 className="text-6xl mb-8">Connect with me!</h2>
      </div>
      <Cursor isActive={isActive} />
    </div>
  );
}
