import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({
  imageUrl,
  name,
  description,
  projectUrl,
  tags = [],
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="max-w-sm rounded-xl overflow-hidden glass-effect card-hover"
    >
      <Link href={projectUrl} className="block">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={imageUrl}
            alt={`${name} preview`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="font-bold text-xl mb-3 gradient-text">{name}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full bg-blue-600/20 text-blue-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
