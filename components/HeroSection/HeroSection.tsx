"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white font-extrabold text-4xl lg:text-8xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I am <br />
            </span>
            <TypeAnimation
              sequence={["Dan", 1000, "Front-End Developer"]}
              wrapper="span"
              speed={30}
            />
          </h1>

          <div>
            <Link
              href="/"
              to={"contact"}
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Write me
            </Link>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <a
                href="/Drahin Daniil CV.pdf"
                download
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Download CV
              </a>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={"/images/me.jpg"}
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="heroImage"
              width={350}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
