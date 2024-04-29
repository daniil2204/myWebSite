import { NavLinkType } from "@/types/NavBar";
import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }: { links: NavLinkType[] }) => {
  return (
    <ul className="flex flex-col py-4 items-center z-30">
      {links.map((linkItem) => (
        <NavLink key={linkItem.title} to={linkItem.to} title={linkItem.title} />
      ))}
    </ul>
  );
};

export default MenuOverlay;
