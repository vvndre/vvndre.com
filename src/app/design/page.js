"use client";
import { useState } from "react";
import Cursor from "@/components/Cursor";

export default function Design() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex min-h-screen mx-auto flex-col px-6 bg-dark-void">
      <div className="py-8 container-xl text-center z-10">
        <p className="text-dusty-gray mb-4 text-xl font-dots">Design</p>
        <h6 className="text-6xl max-lg:text-5xl max-sm:text-4xl">
          Work in progress
        </h6>
      </div>

      <Cursor isActive={isActive} />
    </div>
  );
}
