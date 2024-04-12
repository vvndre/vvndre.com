"use client";
import HomeLogo from "../HomeLogo";
import Link from "next/link";
import { PiDotsNineBold } from "react-icons/pi";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import "./navbar.css"

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky w-full h-24 border-b border-solid border-snow-white bg-dark-void z-50">
      <div className="flex flex-row justify-between items-center h-full w-full px-6 lg:px-12">
        <HomeLogo />
        <div className="font-dots text-3xl hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="ml-10 link ">[ Home ]</li>
            </Link>
            <Link href="/work">
              <li className="ml-10 link ">[ Work ]</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 link ">[ About ]</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden">
          <PiDotsNineBold
            size={35}
            className="cursor-cell duration-500 hover:text-liquid-lava"
          />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-gluon-gray p-10 ease-in duration-500 z-50"
            : "fixed left-[-100%] top-0 p-10 ease-out duration-500 z-50"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-cell">
            <GiCancel
              size={30}
              className="cursor-cell duration-500 hover:text-liquid-lava"
            />
          </div>
        </div>
        <div className="flex-col py-4 z-50">
          <ul className="font-dots text-5xl">
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="my-12 cursor-cell link"
              >
                Home
              </li>
            </Link>
            <Link href="/work">
              <li
                onClick={() => setMenuOpen(false)}
                className="my-12 cursor-cell link"
              >
                Work
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="my-12 cursor-cell link"
              >
                About
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
