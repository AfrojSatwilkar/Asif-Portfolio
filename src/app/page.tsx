"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import SpaceBackground from "@/components/SpaceBackground";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <SpaceBackground />
        <Hero />
        <div className="relative z-10 w-full">
          <About />
          <Technologies />
          <Experience />
          <Projects />
          
          <Achievements />
         
          <Education />
          <Contact />
        </div>
    </main>
  );
}
