import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface NewProjectCardProps {
  project: Project;
}

const NewProjectCard: React.FC<NewProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      className="group w-full h-full bg-neutral-900/60 backdrop-blur-md rounded-xl overflow-hidden border border-neutral-800/80 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/20"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 md:h-56">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-neutral-100 mb-2 truncate group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-cyan-200 rounded-full bg-cyan-900/50 border border-cyan-800/60"
            >
              {tag.name}
            </span>
          ))}
        </div>
        {(project.liveLink || project.sourceCodeLink) && (
          <div className="mt-4 flex justify-end">
            <Link 
              href={project.liveLink || project.sourceCodeLink || '#'} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm font-semibold text-cyan-400 hover:text-white transition-colors duration-300"
            >
              View Project <ExternalLink size={16} className="ml-1.5" />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NewProjectCard;