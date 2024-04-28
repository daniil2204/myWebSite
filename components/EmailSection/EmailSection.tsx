"use client";
import React, { MutableRefObject, useRef, useState } from "react";
import GitHubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";

const EmailSection = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_tqq46na",
        "template_4li059v",
        formRef.current,
        "1ry3WQyHrIeAxXWfF"
      )
      .then(
        (result) => {
          toast(`Message was sended!`);
        },
        (error) => {
          toast.error(`
          Sorry, there was an error(`);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };
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
        <form
          className="flex flex-col gap-4"
          onSubmit={sendEmail}
          ref={formRef}
        >
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
              name="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="text-white mb-2 block text-sm font-medium"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              required
              name="fullName"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
              placeholder="Full Name"
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
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg w-full h-12 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <PropagateLoader className="mb-3" color="#fff" />
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
