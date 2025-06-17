'use client';
import React from 'react';
import { achievements } from '@/data/portfolioData';
import { Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AchievementCard = ({ achievement, index }: { achievement: (typeof achievements)[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col h-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-500/20 hover:-translate-y-2"
    >
      <div className="relative w-full h-48">
        <Image 
          src={achievement.imageUrl}
          alt={achievement.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
        <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full border border-cyan-400/50">
           <Award size={24} className="text-yellow-400" />
        </div>
      </div>
      
      <div className="flex-grow p-6 flex flex-col">
        <h3 className="text-xl font-bold text-neutral-100 mb-2">{achievement.title}</h3>
        <p className="text-md font-semibold text-cyan-300 mb-2">{achievement.issuer}</p>
        <p className="text-sm text-neutral-400 mb-4 flex items-center">
            <Calendar size={14} className="mr-2" />
            {achievement.date}
        </p>
        <p className="text-neutral-300 leading-relaxed flex-grow">{achievement.description}</p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  if (!achievements || achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 md:mb-20 text-center text-white"
        >
          Awards & <span className="text-cyan-400">Accolades</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <AchievementCard key={index} achievement={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 