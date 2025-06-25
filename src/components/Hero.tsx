'use client';

import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowDown, Linkedin, Link as LinkIcon, Instagram } from 'lucide-react';
import { profileData, socialMediaLinks } from '@/data/portfolioData';
import Link from 'next/link';

const Hero = () => {
  const nameParts = profileData.name.replace(",", "").split(" ");
  const firstName = nameParts.slice(1, nameParts.length - 1).join(" ");
  const lastName = nameParts[nameParts.length - 1];

  const titleWords = (profileData.title1 + ' ' + profileData.title2).split(' ');

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const textX = useTransform(x, (latest) => latest * 0.1);
  const textY = useTransform(y, (latest) => latest * 0.1);
  const iconsX = useTransform(x, (latest) => latest * 0.05);
  const iconsY = useTransform(y, (latest) => latest * 0.05);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 50); // Adjust multiplier for sensitivity
    y.set(yPct * 50);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const socialIcons = {
    linkedin: <Linkedin size={28} />,
    github: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
    instagram: <Instagram size={28} />,
  };

  return (
    <motion.section 
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      <motion.div 
        className="relative z-10 text-center text-white p-4"
        style={{ x: textX, y: textY }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
          <span className="block mb-2">
            {firstName.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.05 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <span className="text-cyan-400">
              {lastName.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20, delay: (firstName.length + index) * 0.05 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </span>
        </h1>

        <motion.p 
          className="mt-4 text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {titleWords.map((word, index) => (
            <span key={index} className="inline-block mr-2.5">
              {word}
            </span>
          ))}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-12"
        >
          <Link
            href="#projects"
            className="group relative inline-block text-lg font-semibold"
          >
            <span className="relative z-10 px-8 py-3 text-white bg-black/50 border border-cyan-400/50 rounded-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-cyan-400/20 group-hover:border-cyan-400/80 group-hover:shadow-cyan-500/50 group-hover:shadow-lg">
              View My Work
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div 
          className="flex space-x-5 text-white" 
          style={{ x: iconsX, y: iconsY }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          {socialMediaLinks.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-300">
              {socialIcons[social.name.toLowerCase() as keyof typeof socialIcons] || <LinkIcon size={28} />}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      >
        <ArrowDown className="text-neutral-400" />
      </motion.div>
    </motion.section>
  );
};

export default Hero; 