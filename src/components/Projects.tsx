'use client';
import React from 'react';
import NewProjectCard from './ui/NewProjectCard';
import { projects as projectsData } from '@/data/portfolioData';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  if (!projectsData || projectsData.length === 0) {
    return (
      <section id="projects" className="py-20 md:py-28 bg-black text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Creative Portfolio</h2>
        <p className="text-neutral-300">No projects to display at the moment.</p>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15
      },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-gradient-to-b from-[#1A1D24] via-[#212530] to-[#1A1D24]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 md:mb-20 text-center text-white"
        >
          My Creative <span className="text-cyan-400">Portfolio</span>
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project, index) => (
            <motion.div key={project.id || index} variants={itemVariants}>
              <NewProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;