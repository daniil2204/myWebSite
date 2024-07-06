"use client";
import React, { MutableRefObject, useRef, useState } from "react";
import GitHubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import TelegramIcon from "../../public/images/telegram.png";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import { motion, useInView } from "framer-motion";

const EmailSection = () => {
  const [loading, setLoading] = useState(false);
  const emailSectionRef = useRef(null);
  const isInView = useInView(emailSectionRef, { once: true });
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
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 -z-10 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <motion.div
        ref={emailSectionRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : "initial"}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <h5 className="text-xl font-bold text-white my-2">Connect via Email</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Send a message to mail or contact through other networks
        </p>
        <div className="socials flex gap-2">
          <Link href={"/"}>
            <Image src={GitHubIcon} alt="GitHub" />
          </Link>
          <Link href={"/"}>
            <Image src={LinkedinIcon} alt="Linkedin" />
          </Link>
          <Link href={"/"} className="w-12 h-12 relative">
            <Image fill src={TelegramIcon} alt="GitHub" />
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : "initial"}
        transition={{ duration: 0.5 }}
      >
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
              Your email
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
              {`Your Name`}
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
      </motion.div>
    </section>
  );
};

export default EmailSection;
