"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
// import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
// import SpaceBackground from "@/components/SpaceBackground";
// import Technologies from "@/components/Technologies";
import Publications from "@/components/Publications";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        {/* <SpaceBackground /> */}
        <div className="relative w-full">
          <NeuralNetworkBackground />
          <Hero />
        </div>
        <div className="relative z-10 w-full">
          <About />
          {/* <Technologies /> */}
          <Experience />
          {/* <Projects /> */}
          <Publications />
          <Education />
          <Footer />
        </div>
    </main>
  );
}
