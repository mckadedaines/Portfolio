import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "../ui/ContactModal";

export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="section-padding min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="font-bold text-6xl md:text-8xl mb-4 gradient-text">
          Mckade Daines
        </h1>
        <h2 className="text-2xl md:text-4xl mb-8 text-gray-400">
          Full Stack Developer & Software Engineer
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          I craft exceptional digital experiences through innovative full-stack
          solutions. Specializing in React ecosystems and cloud architecture, I
          bridge the gap between elegant front-end interfaces and robust backend
          systems. With expertise in React, Next.js, and cloud technologies, I
          transform complex challenges into seamless, user-centric applications.
        </p>

        <div className="mt-12 flex gap-6 justify-center">
          <a
            href="https://github.com/mckadedaines"
            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View GitHub
          </a>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="px-8 py-3 rounded-full border border-blue-600 hover:bg-blue-600/10 transition-colors"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
}
