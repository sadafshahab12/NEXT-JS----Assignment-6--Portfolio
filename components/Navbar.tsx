"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenu = () => {
    setToggle((prev) => !prev);
  };

  const handleLinkClick = () => {
    setToggle(false);
  };

  return (
    <>
      <nav className="w-full bg-white z-[1000] shadow-lg sticky top-0 lg:px-[4.5rem] px-[1.5rem] h-16">
        <div className="flex items-center justify-between py-1">
          <div>
            <Link href="/">
              <h1 className="text-[2rem] font-black">
                Sa<span className="text-red">daf</span>
                <span className="text-[3rem] leading-none">.</span>
              </h1>
            </Link>
          </div>
          <div className="text-gray lg:space-x-10 space-x-7 text-[0.9rem] items-center md:flex hidden">
            <Link href="/" className="hover:text-slate-700 duration-500">
              Home
            </Link>
            <Link href="/about" className="hover:text-slate-700 duration-500">
              About
            </Link>
            <Link href="/skill" className="hover:text-slate-700 duration-500">
              Skills
            </Link>
            <Link
              href="/projects"
              className="hover:text-slate-700 duration-500"
            >
              Projects
            </Link>
            <Link href="/service" className="hover:text-slate-700 duration-500">
              Service
            </Link>
            <Link
              href="/getintouch"
              className="bg-[#ED4848] text-black text-[0.75rem] py-2 px-6 font-semibold rounded-2xl shadow-inner shadow-slate-600"
            >
              Get in touch
            </Link>
          </div>
          <div className="md:hidden block cursor-pointer" onClick={handleMenu}>
            <FontAwesomeIcon icon={faBars} width={20} height={20} />
          </div>
        </div>

        {toggle && (
          <div
            id="mobile-menu"
            className="md:hidden block bg-white w-full absolute left-0 top-16"
          >
            <div className="px-2 pt-2 pb-3 space-y-3 flex flex-col justify-center items-center w-full">
              <Link
                href="/"
                className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => handleLinkClick()}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => handleLinkClick()}
              >
                About
              </Link>
              <Link
                href="/skill"
                className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => handleLinkClick()}
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => handleLinkClick()}
              >
                Projects
              </Link>
              <Link
                href="/service"
                className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => handleLinkClick()}
              >
                Services
              </Link>
              <Link
                href="/getintouch"
                className="block text-base bg-[#ED4848] text-black text-[0.75rem] py-2 px-6 font-semibold rounded-2xl shadow-inner shadow-slate-600"
                onClick={() => handleLinkClick()}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
