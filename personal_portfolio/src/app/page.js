"use client";
import React, { useState } from "react";

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
      <div className="skills-container">
        <img
          src="html-5-icon.png"
          alt="HTML Icon"
          className="image-hover-effect"
        />
      </div>
    </main>
  );
}
