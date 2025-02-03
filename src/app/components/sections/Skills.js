import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", icon: "images/React-icon.svg.png" },
      { name: "React Native", icon: "images/React-icon.svg.png" },
      { name: "Vercel", icon: "images/Vercel_favicon.png" },
      { name: "Typescript", icon: "images/Typescript.png" },
      { name: "Next.js", icon: "images/next-js-icon.png" },
      { name: "JavaScript", icon: "images/javascript-icon.png" },
      { name: "HTML5", icon: "images/html-5-icon.png" },
      { name: "CSS3", icon: "images/css-3-icon.png" },
      { name: "Expo", icon: "images/expo_icon.png" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "images/nodejs.png" },
      { name: "Python", icon: "images/python.png" },
      { name: "Firebase", icon: "images/Firebase_icon.svg.png" },
      { name: "MongoDB", icon: "images/mongo.png" },
      { name: "Hasura", icon: "images/Hasura-icon.png" },
      { name: "Bitbucket", icon: "images/bitbucket.webp" },
    ],
  },
  {
    category: "Development Tools",
    skills: [
      { name: "Git", icon: "images/git.png" },
      { name: "GitHub", icon: "images/github.png" },
      { name: "Windows CLI", icon: "images/windowsCLI.png" },
      { name: "Linux CLI", icon: "images/Tux.svg.png" },
      { name: "Storybook", icon: "images/storybook-icon.svg" },
      { name: "Cypress", icon: "images/cypress.webp" },
    ],
  },

  {
    category: "Professional Skills",
    skills: [
      { name: "Problem Solving", icon: "images/brain.webp" },
      { name: "Communication", icon: "images/talking.png" },
      { name: "Critical Thinking", icon: "images/critical-thinking.png" },
      { name: "Agile Development", icon: "images/agile-dev.png" },
    ],
  },
];

const SkillCard = ({ name, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
      <div className="relative glass-effect rounded-lg p-4 flex flex-col items-center transform transition duration-500 group-hover:translate-y-[-4px] group-hover:scale-[1.02]">
        <div className="w-12 h-12 mb-3 relative">
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            style={{
              filter:
                icon.includes("next-js-icon") ||
                icon.includes("Vercel_favicon") ||
                icon.includes("expo_icon")
                  ? "invert(1)"
                  : "none",
            }}
          />
        </div>
        <h4 className="text-sm font-medium text-gray-200 transition-colors duration-500 group-hover:text-white">
          {name}
        </h4>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="section-padding">
      <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
        Technical Skills
      </h2>
      <div className="space-y-16">
        {skillsData.map((category) => (
          <div key={category.category}>
            <h3 className="text-2xl font-semibold mb-8 text-gray-200 gradient-text">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
