"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../elements/Projects/ProjectCard";
import { IProjectCard } from "@/types/Projects";
import ProjectTag from "../elements/Projects/ProjectTag";
import { motion, useInView } from "framer-motion";

const projects: IProjectCard[] = [
  {
    id: 1,
    desc: "superTest",
    imgUrl: "/images/1.png",
    tag: ["Web"],
    title: "test1",
    gitUrl: "http",
    previewUrl: "http",
  },
  {
    id: 2,
    desc: "superTest",
    imgUrl: "/images/1.png",
    tag: ["All", "Web"],
    title: "test2",
    gitUrl: "http",
    previewUrl: "http",
  },
  {
    id: 3,
    desc: "superTest",
    imgUrl: "/images/1.png",
    tag: ["All"],
    title: "test3",
    gitUrl: "http",
    previewUrl: "http",
  },
];

const Projects = () => {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true });
  const [selectedBtn, setSelectedBtn] = useState("All");

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={projectsRef}>
      <h1>My Projects</h1>
      <div className=" text-white flex justify-center items-center sm:gap-2 py-6">
        <ProjectTag
          text="All"
          isSelected={selectedBtn === "All"}
          onClickBtn={() => setSelectedBtn("All")}
        />
        <ProjectTag
          text="Web"
          isSelected={selectedBtn === "Web"}
          onClickBtn={() => setSelectedBtn("Web")}
        />
      </div>
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
        {projects
          .filter((item) =>
            selectedBtn === "All" ? item : item.tag.includes(selectedBtn)
          )
          .map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                desc={project.desc}
                imgUrl={project.imgUrl}
                title={project.title}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
      </ul>
    </section>
  );
};

export default Projects;
