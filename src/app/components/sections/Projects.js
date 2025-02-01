import React from "react";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const projectList = [
    {
      imageUrl: "SLP.png",
      name: "SLP Toolkit",
      description:
        "Led development initiatives for a comprehensive Speech-Language Pathology platform, implementing critical features and optimizing performance through modern React patterns and cloud architecture.",
      projectUrl: "https://kit-git-master-slptk.vercel.app/auth/login",
      tags: ["React", "Next.js", "Firebase", "Cloud Architecture"],
    },
    {
      imageUrl: "Ama-Employee-Login.png",
      name: "American Medical Associates Portal",
      description:
        "Engineered a HIPAA-compliant digital transformation solution, enabling secure virtual healthcare operations and streamlining internal processes for medical staff.",
      projectUrl: "https://ama-employee-website-official.vercel.app/Login",
      tags: ["Healthcare Tech", "Security", "React", "Cloud Infrastructure"],
    },
    {
      imageUrl: "SleepOutside.png",
      name: "SleepOutside E-Commerce",
      description:
        "Developed a full-stack e-commerce platform with robust backend architecture, implementing secure payment processing and inventory management systems.",
      projectUrl: "https://rainbow-daifuku-3cbcdd.netlify.app/",
      tags: ["E-Commerce", "Full Stack", "Payment Integration"],
    },
    {
      imageUrl: "Local-Event-Finder.png",
      name: "Event Discovery Platform",
      description:
        "Created an intuitive event discovery application integrating the TicketMaster API, featuring real-time updates and interactive mapping capabilities.",
      projectUrl: "https://mckadedaines.github.io/Local_Event_Finder/",
      tags: ["API Integration", "React", "Geolocation", "Real-time Data"],
    },
  ];

  return (
    <section className="section-padding">
      <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
