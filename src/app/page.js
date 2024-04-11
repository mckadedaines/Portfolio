"use client";
import React, { useState } from "react";
import Projects from "./Projects";

export default function Home() {
  return (
    <main
      className="bg-black text-white min-h-screen w-full relative animate-breathe"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0) 70%, black 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontFamily: "'Open Sans', sans-serif", // Default font for the body
      }}
    >
      <div className="text-center pt-8">
        <h1
          className="font-bold text-8xl"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Mckade Daines
        </h1>
        <h2
          className="italic font-thin text-4xl"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Software Engineer
        </h2>
        <p className="mt-4 mx-auto max-w-4xl px-4">
          As a versatile software engineer, I excel in front-end development
          with React.js and mobile applications via React Native, underpinned by
          a strong command of Python, JavaScript, Next.js, Expo, Vercel, and
          Firebase. Eager to broaden my technical horizons, I am now delving
          into backend development and embedded systems programming. This
          expansion reflects my commitment to mastering a comprehensive suite of
          technologies to innovate and implement solutions across the full
          spectrum of software development, from user interfaces to the
          underlying hardware interactions.
        </p>
      </div>
      <div className="text-center mt-12 mb-6">
        <h3
          className="text-4xl font-bold text-white tracking-wider"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Skills
        </h3>
      </div>
      <div className="skills-container flex flex-wrap justify-center items-center mt-8">
        <img
          src="javascript-icon.png"
          alt="Javascript Icon"
          className="image-hover-effect w-24 h-24 mx-2 my-2"
        />
        <img
          src="html-5-icon.png"
          alt="HTML Icon"
          className="image-hover-effect w-24 h-24 mx-2 my-2"
        />
        <img
          src="css-3-icon.png"
          alt="CSS Icon"
          className="image-hover-effect w-24 h-24 mx-2 my-2"
        />
        <img
          src="expo_icon.png"
          alt="EXPO Icon"
          className="image-hover-effect w-24 h-24 mx-2 my-2 filter invert brightness-100 contrast-100"
        />
        <img
          src="Firebase_icon.svg.png"
          alt="Firebase Icon"
          className="image-hover-effect w-24 h-24 mx-2 my-2"
        />
        <img
          src="next-js-icon.png"
          alt="Next.js Icon"
          className="image-hover-effect w-24 h-24 mx-2 my-2 filter invert brightness-100 contrast-100"
        />
        <img
          src="python.png"
          alt="Python Icon"
          className="image-hover-effect w-24 h-24 mx-2 my-2"
        />
        <img
          src="React-icon.svg.png"
          alt="React.js Icon"
          className="image-hover-effect w-24 h-24 mx-2 my-2"
        />
        <img
          src="Vercel_favicon.svg"
          alt="Vercel Icon"
          className="image-hover-effect w-24 h-24 mx-2 my-2 filter invert brightness-100 contrast-100"
        />
      </div>
      <Projects />
    </main>
  );
}
