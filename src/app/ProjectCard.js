import React from "react";
import Link from "next/link";

const ProjectCard = ({ imageUrl, name, description, projectUrl }) => {
  return (
    <Link href={projectUrl} passHref>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mt-10 m-4 bg-black5 border border-white transition duration-300 ease-in-out transform hover:scale-105 min-h-[24rem] flex flex-col justify-between">
        <img
          className="w-full object-cover"
          src={imageUrl}
          alt={`Screenshot of ${name}`}
          style={{ maxHeight: "50%" }}
        />
        <div
          className="px-6 py-4 flex flex-col justify-between"
          style={{ flex: 1 }}
        >
          <div className="font-bold text-xl mb-2 text-white">{name}</div>
          <p className="text-gray-400 text-base">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
