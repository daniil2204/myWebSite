import React from "react";
import { Link } from "react-scroll";
import { NavLinkType } from "@/types/NavBar";

const NavLink = ({ title, to }: NavLinkType) => {
  const spy = true;
  const smooth = true;
  const offset = -40;
  const duration = 500;
  return (
    <li>
      <Link
        href="/"
        to={to}
        spy={spy}
        smooth={smooth}
        offset={offset}
        duration={duration}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
