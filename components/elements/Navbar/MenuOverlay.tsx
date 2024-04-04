import { NavLinkType } from "@/types/NavBar";
import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }: { links: NavLinkType[] }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((linkItem) => (
        <NavLink
          key={linkItem.title}
          href={linkItem.href}
          title={linkItem.title}
        />
      ))}
    </ul>
  );
};

export default MenuOverlay;
