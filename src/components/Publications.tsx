'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, Calendar, Users, BookOpen, Globe } from 'lucide-react';
import Link from 'next/link';

interface Publication {
  id: number;
  title: string;
  description: string;
  authors: string[];
  journal: string;
  year: number;
  link: string;
  type: 'journal' | 'conference' | 'preprint' | 'book';
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Medium Articles on AI & Deep Learning",
    description: "Automating SoftEther VPN Client Connections on Linux: A Complete Guide (2025)",
    authors: ["Asif Ashraf Patankar"],
    journal: "Medium",
    year: 2025,
    link: "https://example.com/paper1",
    type: "journal"
  },
  {
    id: 2,
    title: "Research Publications",
    description: "Automatic radish wilt detection using image processing based techniques and machine learning algorithm.",
    authors: ["Asif Ashraf Patankar"],
    journal: "International Conference on Web Technologies",
    year: 2020,
    link: "https://example.com/paper2",
    type: "conference"
  },
];

const Publications = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'journal':
        return <FileText size={20} className="text-indigo-400" />;
      case 'conference':
        return <Users size={20} className="text-emerald-400" />;
      case 'book':
        return <BookOpen size={20} className="text-violet-400" />;
      case 'preprint':
        return <Globe size={20} className="text-amber-400" />;
      default:
        return <FileText size={20} className="text-indigo-400" />;
    }
  };

  const getTypeBadge = (type: string) => {
    const colors = {
      journal: 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30',
      conference: 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30',
      book: 'bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/30',
      preprint: 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30'
    };
    
    return (
      <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${colors[type as keyof typeof colors]}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    );
  };

  return (
    <section id="publications" className="py-20 md:py-32 bg-gradient-to-br from-[#0F0F23] via-[#1A1A2E] to-[#16213E] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-200">
              Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Publications</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Explore my research contributions and published works in web development, 
              machine learning, and software engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {publications.map((publication) => (
              <motion.div
                key={publication.id}
                variants={fadeIn}
                className="group relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 hover:border-indigo-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                {/* Card background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="relative w-full h-32 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-purple-400/20 to-emerald-400/20 flex items-center justify-center">
                      {getTypeIcon(publication.type)}
                      <span className="ml-2 text-sm font-medium text-neutral-200">Publication</span>
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    {getTypeBadge(publication.type)}
                    <div className="flex items-center text-sm text-neutral-400">
                      <Calendar size={16} className="mr-1 text-emerald-400" />
                      {publication.year}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                    {publication.title}
                  </h3>

                  <p className="text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {publication.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs text-neutral-400 mb-1">Authors:</p>
                    <p className="text-sm text-neutral-300">
                      {publication.authors.join(', ')}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs text-neutral-400 mb-1">Published in:</p>
                    <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                      {publication.journal}
                    </p>
                  </div>

                  <Link
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-white hover:to-indigo-200 transition-all duration-300 group/link"
                  >
                    <span>Read Publication</span>
                    <ExternalLink size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeIn} className="text-center mt-12">
            <Link
              href="/publications"
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-xl border-2 border-transparent overflow-hidden transition-all duration-300 hover:text-white hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center">
                <FileText size={20} className="mr-2" />
                View All Publications
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications; 