import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectList = [
    {
      imageUrl: "Ama-Employee-Login.png",
      name: "American Medical Associates",
      description:
        "American Medical Associates employeed me to create an emplyoee website, and to transform their business into 90% virtual. (Due to HIPPA regulations, I cannot show more than this.)",
      projectUrl: "https://ama-employee-website-official.vercel.app/Login",
    },
    {
      imageUrl: "SleepOutside.png",
      name: "SleepOutside",
      description:
        "SleepOutside was a project my team and I completed in my College course. We learned how to work mainly on the backend of web apps, and it taught me proper structure.",
      projectUrl: "https://rainbow-daifuku-3cbcdd.netlify.app/",
    },
    {
      imageUrl: "Local-Event-Finder.png",
      name: "Local Event Finder",
      description:
        "This application allows you to see events coming up accross the United States. I display all these events using the TicketMaster Discover API key.",
      projectUrl: "https://mckadedaines.github.io/Local_Event_Finder/",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {projectList.map((project, index) => (
        <ProjectCard
          key={index}
          imageUrl={project.imageUrl}
          name={project.name}
          description={project.description}
          projectUrl={project.projectUrl}
        />
      ))}
    </div>
  );
};

export default Projects;
