"use client";
import React from "react";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabBtn from "../elements/About/TabBtn";
import { tabs } from "@/additionalLists/AboutTabsContent";
import { motion } from "framer-motion";

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setTab(tab);
    });
  };
  return (
    <motion.section
      className="text-white"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      id="about"
    >
      <div className="hidden sm:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="AboutPage"
          src={"/images/about-image.png"}
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            doloribus voluptate est, corporis, aspernatur aliquam laboriosam
            pariatur nisi obcaecati eum, assumenda quidem molestias illo
            blanditiis asperiores fuga modi amet at.
          </p>
          <div className="flex flex-row mt-8">
            <TabBtn
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabBtn>
            <TabBtn
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabBtn>
            <TabBtn
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabBtn>
          </div>
          <div className="mt-8">
            {tabs.find((tabItem) => tabItem.id === tab)?.htmlContent}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
