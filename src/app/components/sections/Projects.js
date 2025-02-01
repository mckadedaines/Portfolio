import React from "react";
import ProjectCard from "../ui/ProjectCard";
import professionalProjects from "../../json/professionalProjects.json";
import personalProjects from "../../json/personalProjects.json";

const Projects = () => {
  return (
    <section className="section-padding">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Professional Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionalProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
