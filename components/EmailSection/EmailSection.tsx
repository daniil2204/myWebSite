import React from "react";
import GitHubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Connect via Email</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum,
          magnam odit delectus perferendis tempore minima dolorem. Eaque omnis,
          eum iure beatae suscipit esse ad excepturi, nostrum voluptatibus
          magnam tenetur!
        </p>
        <div className="socials flex gap-2">
          <Link href={"/"}>
            <Image src={GitHubIcon} alt="GitHub" />
          </Link>
          <Link href={"/"}>
            <Image src={LinkedinIcon} alt="Linkedin" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4">
          <div className="mb-6">
            <label
              className="text-white mb-2 block text-sm font-medium"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
              placeholder="test@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="text-white mb-2 block text-sm font-medium"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
              placeholder="Subject"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 rounded-lg w-full"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
