"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../elements/Projects/ProjectCard";
import { projects } from "@/additionalLists/ProjectList";
import ProjectTag from "../elements/Projects/ProjectTag";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true });
  const [selectedBtn, setSelectedBtn] = useState("FrontEnd");

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={projectsRef} id="projects">
      <h1 className="text-center text-xl md:text-2xl xl:text-4xl">
        My Projects
      </h1>
      <h2 className="text-center text-xs md:text-xl">
        Due to the fact that I use free web hosting, need to wait for a while
        the backend server will be enabled
      </h2>
      <div className=" text-white flex justify-center items-center sm:gap-2 py-6">
        <ProjectTag
          text="FrontEnd"
          isSelected={selectedBtn === "FrontEnd"}
          onClickBtn={() => setSelectedBtn("FrontEnd")}
        />
        <ProjectTag
          text="BackEnd"
          isSelected={selectedBtn === "BackEnd"}
          onClickBtn={() => setSelectedBtn("BackEnd")}
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
