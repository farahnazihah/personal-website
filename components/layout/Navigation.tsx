"use client";

import IconLogo from "@/public/IconLogo";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

const navList = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  { name: "Projects", href: "/projects" },
  { name: "Anime Zone", href: "/random/animes" },
  { name: "World Map", href: "/random/countries" }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full bg-background z-10">
      {/* Menu button */}
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center px-8 py-4 bg-background">
          <Link
            href="/"
            className="font-bold text-lg flex flex-row items-center gap-2"
          >
            <IconLogo size={32} />
            Home
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-tosca text-3xl hover:text-dark-tosca"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Collapsible menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-tosca backdrop-blur-sm z-50">
          <div className="max-w-screen-lg mx-auto pt-4 pb-16 px-8">
            <div
              onClick={() => setIsOpen(false)}
              className="text-dark-tosca text-3xl flex justify-end cursor-pointer"
            >
              <IoClose />
            </div>
            <div className="flex flex-col mt-4">
              {navList.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white p-2 border-b-2 border-gray-300 w-full hover:bg-gray-300/10 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row my-4 gap-8 items-center px-4 md:px-16 max-w-screen-lg icon-buttons text-5xl">
          <a href="https://www.linkedin.com/in/farahnazihah/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com/frhnzh_" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://medium.com/@farahnazihah" target="_blank">
            <FaMediumM />
          </a>
          <a href="https://github.com/farahnazihah" target="_blank">
            <FaGithub />
          </a>
        </div>
        <p className="text-tosca my-1 md:my-4">
          🎨 and <span className="text-orange-400 font-bold">{"</>"}</span> with
          ❤️ by farah
        </p>
      </div>
    </footer>
  );
};
