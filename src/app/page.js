"use client";
import React from "react";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen w-full relative overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.15)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 -left-1/3 w-[45rem] h-[45rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 -right-1/3 w-[45rem] h-[45rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
