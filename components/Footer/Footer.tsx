import React from "react";
import GitHubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import TelegramIcon from "../../public/images/telegram.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer fixed bottom-0 w-full z-30 h-20 bg-[#121212] text-white ">
      <div className="container pt-6 px-12 flex justify-around">
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
