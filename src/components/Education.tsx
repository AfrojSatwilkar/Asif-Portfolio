'use client';

import React from 'react';
import { education } from '@/data/portfolioData';
import { BookOpen, GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EducationCard = ({ entry, index }: { entry: typeof education[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.2 } 
      }}
      className="group relative bg-gradient-to-br from-neutral-900/90 to-neutral-800/90 p-4 md:p-8 rounded-2xl shadow-2xl border border-neutral-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-cyan-400/20 backdrop-blur-sm"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top section with icon and degree */}
      <div className="relative z-10">
        <div className="flex items-start space-x-4 md:space-x-6 mb-4 md:mb-6">
          <div className="flex-shrink-0 relative">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center border-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300">
              {entry.iconUrl ? (
                <Image 
                  src={entry.iconUrl} 
                  alt={`${entry.collegeName} logo`} 
                  width={48} 
                  height={48} 
                  className="object-contain p-2 rounded-xl w-10 h-10 md:w-12 md:h-12" 
                />
              ) : (
                <GraduationCap size={28} className="text-cyan-400 md:w-10 md:h-10" />
              )}
            </div>
            {/* Glow effect behind icon */}
            <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="flex-grow">
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
              {entry.title}
            </h3>
            <p className="text-base md:text-lg font-semibold text-neutral-300 mb-1">{entry.collegeName}</p>
            
            {/* Date and location info */}
            <div className="flex items-center space-x-4 text-xs md:text-sm text-neutral-400">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1 text-cyan-400 md:w-4 md:h-4" />
                <span>{entry.date}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Branch/Field of study */}
        {entry.branch && (
          <div className="bg-neutral-800/50 rounded-xl p-3 md:p-4 border border-neutral-700/50 group-hover:border-cyan-400/30 transition-all duration-300">
            <div className="flex items-center">
              <BookOpen size={18} className="mr-2 md:mr-3 text-cyan-400 md:w-5 md:h-5" />
              <div>
                <p className="text-xs md:text-sm font-medium text-neutral-400 mb-1">Field of Study</p>
                <p className="text-base md:text-lg font-semibold text-white">{entry.branch}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const Education = () => {
  if (!education || education.length === 0) {
    return (
      <section id="education" className="py-20 md:py-28 bg-gradient-to-b from-[#1A1D24] via-[#212530] to-[#1A1D24] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Education</h2>
        <p className="text-neutral-300">Education details are not available at the moment.</p>
      </section>
    );
  }

  return (
    <section id="education" className="py-16 md:py-32 bg-gradient-to-b from-[#1A1D24] via-[#212530] to-[#1A1D24] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-purple-400">
            Academic <span className="text-cyan-400">Background</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            My educational journey that has shaped my expertise in technology and innovation.
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {education.map((edu, index) => (
              <EducationCard key={index} entry={edu} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 