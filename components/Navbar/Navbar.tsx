"use client";
import Link from "next/link";
import React from "react";
import NavLink from "../elements/Navbar/NavLink";
import { navLinkLists } from "@/additionalLists/NavLinkLists";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "../elements/Navbar/MenuOverlay";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] opacity-100 z-20">
      <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-2">
        <Link
          href={"https://github.com/daniil2204"}
          target="_blank"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          GitHub
        </Link>
        <div className="mobile-menu block md:hidden">
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinkLists.map((link) => (
              <NavLink key={link.title} title={link.title} to={link.to} />
            ))}
          </ul>
        </div>
      </div>
      {isOpen && <MenuOverlay links={navLinkLists} />}
    </nav>
  );
};

export default Navbar;
