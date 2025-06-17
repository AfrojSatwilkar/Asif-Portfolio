'use client';
import React from 'react';
import { profileData } from '@/data/portfolioData';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="about" className="relative text-white py-20 md:py-28 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Left Column: Image */}
          <motion.div 
            className="lg:col-span-2 flex justify-center items-center"
            variants={fadeIn}
          >
            <motion.div 
              className="relative w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-4 border-cyan-400/50"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.4)",
                  "0 0 35px rgba(6, 182, 212, 0.2)",
                  "0 0 20px rgba(6, 182, 212, 0.4)",
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/placeholder-avatar.jpg" // Placeholder image
                alt="Afroj Satwilkar"
                layout="fill"
                objectFit="cover"
                className="scale-105"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            className="lg:col-span-3 flex flex-col space-y-8"
            variants={staggerContainer}
          >
            <motion.div 
              className="p-8 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl"
              variants={fadeIn}
            >
              <h2 className="text-4xl lg:text-5xl font-extrabold text-cyan-400 mb-6">About Me</h2>
              <p className="text-lg text-neutral-300 leading-relaxed">
                {profileData.about}
              </p>
            </motion.div>
            
            {/* <motion.div 
              className="p-8 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl"
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">My Skillset</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {profileData.skillSet?.map((skill, index) => (
                  <div 
                    key={index}
                    className="group flex flex-col items-center justify-center p-3 bg-neutral-800/70 border border-neutral-700 rounded-lg transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400/50"
                  >
                    <div className="mb-1.5">
                      {skillIconMap[skill.name.toLowerCase().replace(/\s/g, '')] || skillIconMap.default}
                    </div>
                    <p className="text-xs text-center font-semibold text-neutral-300 transition-colors duration-300">{skill.name}</p>
                  </div>
                ))}
              </div>
            </motion.div> */}

             <motion.div variants={fadeIn}>
                <a
                  href="/AFROJSATWILKAR_CV.pdf"
                  download="Afroj_Satwilkar_CV.pdf"
                  className="group mt-2 relative inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-cyan-400 overflow-hidden transition-all duration-300 hover:text-black hover:shadow-cyan-400/50 hover:shadow-lg"
                >
                  <span className="absolute left-0 top-0 h-full w-0 bg-cyan-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  <span className="relative z-10 flex items-center">
                    <Download size={20} className="mr-2" />
                    Download Resume
                  </span>
                </a>
             </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 