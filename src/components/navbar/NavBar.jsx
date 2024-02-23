"use client";
import HomeLogo from "../HomeLogo";
import Link from "next/link";
import { PiDotsNineBold } from "react-icons/pi";
import { useState } from "react";
import { DisplayDotsProvider, DisplayDotsAnime } from "display-dots-anime";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky w-full h-24 border-b border-solid border-snow-white bg-dark-void">
      <div className="flex flex-row justify-between items-center h-full w-full px-4 2xl:px-12">
        <HomeLogo />
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="ml-10 text xl hover:font-bold flex-shrink-0 w-[50px]">
                [Home]
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text xl hover:font-bold flex-shrink-0 w-[50px]">
                [About]
              </li>
            </Link>
            <Link href="/work">
              <li className="ml-10 text xl hover:font-bold flex-shrink-0 w-[50px]">
                [Work]
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden pl-24">
          <PiDotsNineBold size={35} className="cursor-cell" />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-gluon-gray p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-cell">
            <DisplayDotsProvider>
              <div size={25}>
                <DisplayDotsAnime text="x" />
              </div>
            </DisplayDotsProvider>
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-6 cursor-cell hover:font-bold"
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-6 cursor-cell hover:font-bold"
              >
                About
              </li>
            </Link>
            <Link href="/work">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-6 cursor-cell hover:font-bold"
              >
                Work
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
