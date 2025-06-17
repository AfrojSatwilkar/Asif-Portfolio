'use client';

import React from 'react';
import { experiences } from '@/data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.2 } }
  };

  return (
    <motion.div
      className="relative pl-16 py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      {/* Timeline Icon */}
      <motion.div 
        className="absolute left-[-11px] top-[48px] -translate-y-1/2 h-8 w-8 rounded-full bg-neutral-900 flex items-center justify-center border-2 border-cyan-400 overflow-hidden"
        whileInView={{ 
          scale: [1, 1.2, 1],
          boxShadow: ["0 0 0px rgba(5, 150, 105, 0)", "0 0 20px rgba(6, 182, 212, 0.5)", "0 0 0px rgba(5, 150, 105, 0)"],
        }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
      >
        {experience.logoUrl ? (
          <Image src={experience.logoUrl} alt={`${experience.companyName} logo`} width={24} height={24} className="object-contain" />
        ) : (
          <Briefcase size={18} className="text-cyan-400" />
        )}
      </motion.div>

      {/* Glass Card */}
      <div className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-500/10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-100 group-hover:text-cyan-300 transition-colors duration-300">
            {experience.title}
          </h3>
          <div className="flex items-center text-sm text-cyan-400 mt-2 sm:mt-0">
            <Calendar size={14} className="mr-2" />
            <span>{experience.date}</span>
          </div>
        </div>
        <div className="text-md text-neutral-400 mb-4 font-medium">
          {experience.companyName}
        </div>
        
        <ul className="list-disc list-inside text-neutral-300 space-y-2.5 pl-1">
          {experience.points.map((point, i) => (
            <li key={i} className="text-base leading-relaxed">{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  if (!experiences || experiences.length === 0) {
    return (
      <section id="experience" className="py-20 md:py-28 bg-black text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Journey</h2>
        <p className="text-neutral-300">Experience details are not available at the moment.</p>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 md:mb-20 text-center text-white"
        >
          My Professional <span className="text-cyan-400">Journey</span>
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-[3px] top-0 h-full w-1.5 bg-gradient-to-b from-neutral-800 via-cyan-700 to-neutral-800 rounded-full"></div>
          
          <div>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 