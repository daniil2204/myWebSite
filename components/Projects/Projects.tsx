"use client";
import React, { useState } from "react";
import ProjectCard from "../elements/Projects/ProjectCard";
import { IProjectCard } from "@/types/Projects";
import ProjectTag from "../elements/Projects/ProjectTag";

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
  const [selectedBtn, setSelectedBtn] = useState("All");
  return (
    <section>
      <h1>My Projects</h1>
      <div className="text-white flex justify-center items-center gap-2 py-6">
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
      <div>
        {projects
          .filter((item) =>
            selectedBtn === "All" ? item : item.tag.includes(selectedBtn)
          )
          .map((project) => (
            <ProjectCard
              key={project.id}
              desc={project.desc}
              imgUrl={project.imgUrl}
              title={project.title}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
      </div>
    </section>
  );
};

export default Projects;
