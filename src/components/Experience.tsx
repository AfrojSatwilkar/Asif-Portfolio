'use client';

import React, { useState } from 'react';
import { experiences } from '@/data/portfolioData';
import { Briefcase, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const [showAllPoints, setShowAllPoints] = useState(false);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.1 }
    }
  };

  // Show only 2 points on mobile initially, all on desktop
  const initialPointsCount = 2;
  const displayedPoints = showAllPoints ? experience.points : experience.points.slice(0, initialPointsCount);
  const hasMorePoints = experience.points.length > initialPointsCount;

  return (
    <motion.div 
      className="mb-12 relative" 
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Mobile Layout */}
      <div className="flex md:hidden items-start">
        {/* Mobile Timeline - Left side with dot and line */}
        <div className="flex flex-col items-center mr-4 flex-shrink-0">
          <span 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2D3748] group-hover:bg-[#535C91] transition-all duration-300 border-4 border-[#1A1D24] shadow-lg z-10"
            style={{backgroundColor: experience.iconBg || '#2D3748'}}
          >
            {experience.iconUrl ? (
              <Image src={experience.iconUrl} alt={`${experience.companyName} logo`} width={24} height={24} className="rounded-full object-contain p-1" />
            ) : (
              <Briefcase size={20} className="text-neutral-300 group-hover:text-white" />
            )}
          </span>
          {index < experiences.length - 1 && (
            <div className="w-1 h-16 bg-gradient-to-b from-[#535C91] via-[#7E8CE0] to-transparent mt-2"></div>
          )}
        </div>
        
        {/* Mobile Card Content */}
        <div className="bg-[#2D3748]/50 p-4 rounded-lg shadow-xl hover:shadow-[#535C91]/40 transition-all duration-300 flex-1">
          <div className="flex flex-col justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-[#A0AEC0] group-hover:text-[#7E8CE0] transition-colors duration-300 mb-2">
              {experience.title}
            </h3>
            <span className="text-xs text-neutral-400 bg-[#1A1D24]/70 px-2 py-1 rounded-full">
              {experience.date}
            </span>
          </div>
          <div className="flex items-center text-neutral-300 mb-3">
            <MapPin size={14} className="mr-2 text-[#7E8CE0]" />
            <span className="text-sm">{experience.companyName}</span>
          </div>
          
          <ul className="list-disc list-inside text-neutral-200 space-y-1 pl-1">
            {displayedPoints.map((point, i) => (
              <li key={i} className="text-xs leading-relaxed">{point}</li>
            ))}
            
            {/* Show More/Less Button for Mobile */}
            {hasMorePoints && (
              <motion.div 
                className="mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setShowAllPoints(!showAllPoints)}
                  className="flex items-center gap-1 text-[#7E8CE0] hover:text-[#A0AEC0] text-xs font-medium transition-colors duration-200"
                >
                  <span>{showAllPoints ? 'Show Less' : `Show ${experience.points.length - initialPointsCount} More`}</span>
                  <motion.div
                    animate={{ rotate: showAllPoints ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {showAllPoints ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </motion.div>
                </button>
              </motion.div>
            )}
          </ul>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex group">
        {/* Timeline Line & Dot - adjusted for alternating effect */}
        <div className={`flex flex-col items-center mr-6 ${index % 2 === 0 ? 'order-1' : 'order-3 ml-6'}`}>
          <span 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2D3748] group-hover:bg-[#535C91] transition-all duration-300 border-4 border-[#1A1D24] shadow-lg"
            style={{backgroundColor: experience.iconBg || '#2D3748'}}
          >
            {experience.iconUrl ? (
              <Image src={experience.iconUrl} alt={`${experience.companyName} logo`} width={32} height={32} className="rounded-full object-contain p-1" />
            ) : (
              <Briefcase size={24} className="text-neutral-300 group-hover:text-white" />
            )}
          </span>
          <div className="w-1 flex-grow bg-gradient-to-b from-[#535C91] via-[#7E8CE0] to-transparent mt-2"></div>
        </div>

        {/* Desktop Card Content */}
        <div className={`bg-[#2D3748]/50 p-6 rounded-lg shadow-xl hover:shadow-[#535C91]/40 transition-all duration-300 w-full md:w-auto flex-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
            <h3 className="text-2xl font-semibold text-[#A0AEC0] group-hover:text-[#7E8CE0] transition-colors duration-300">
              {experience.title}
            </h3>
            <span className="text-sm text-neutral-400 mt-1 sm:mt-0 bg-[#1A1D24]/70 px-3 py-1 rounded-full">
              {experience.date}
            </span>
          </div>
          <div className="flex items-center text-neutral-300 mb-4">
            <MapPin size={16} className="mr-2 text-[#7E8CE0]" />
            <span>{experience.companyName}</span>
          </div>
          
          <ul className="list-disc list-inside text-neutral-200 space-y-2 pl-1">
            {experience.points.map((point, i) => (
              <li key={i} className="text-sm leading-relaxed">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  if (!experiences || experiences.length === 0) {
    return (
      <section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-100">My Journey</h2>
        <p className="text-neutral-300">Experience details are not available at the moment.</p>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 md:mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0]"
        >
          My Professional Journey
        </motion.h2>
        <div className="relative">
          {/* Desktop central timeline line - removed to fix unwanted vertical line */}
          
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 