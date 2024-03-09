"use client";
import React from "react";

export default function Home() {
  return (
    <main
      className="bg-black text-white"
      style={{
        color: "white",
        backgroundImage:
          "radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0) 70%, black 100%)",
        minHeight: "100vh", // Ensure body takes at least full viewport height
        width: "100%", // Ensure body takes full viewport width
        position: "relative", // To help with full coverage and positioning
      }}
    >
      <div className="text-center pt-8">
        <h1 className="font-bold text-8xl">Mckade Daines</h1>
        <h2 className="font-style: italic font-thin text-4xl">
          Software Engineer
        </h2>
      </div>
    </main>
  );
}
