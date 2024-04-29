import React from "react";
import GitHubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import TelegramIcon from "../../public/images/telegram.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-[#33353F] border-transparent text-white flex justify-center">
      <div className="container p-12 flex justify-around">
        <Link href={"/"} className="w-12 h-12 relative">
          <Image fill src={GitHubIcon} alt="GitHub" />
        </Link>
        <Link href={"/"} className="w-12 h-12 relative">
          <Image fill src={LinkedinIcon} alt="GitHub" />
        </Link>
        <Link href={"/"} className="w-12 h-12 relative">
          <Image fill src={TelegramIcon} alt="GitHub" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
