"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/Feten815/",
  },
  {
    id: 2,
    title: "E-commerce Application",
    image: "/images/projects/e-commerce-image.png",
    gitUrl: "https://github.com/Feten815/E-commerce",
  },
  {
    id: 3,
    title: "GYM Website",
    image: "/images/projects/gym-image.png",
    gitUrl: "https://github.com/Feten815/Gym-website",
  },
];
const ProjectsSection = () => {
  return (
    <>
    <section
      id="projects"
      className="my-12 md:my-12 py-2 gap-4 relative"
    ></section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              className={project.className}
            />
          ))}
      </div>
    </>
  );
};
export default ProjectsSection;
