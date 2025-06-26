'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, UserCheck, Copy, Check, Heart } from 'lucide-react';
import { socialMediaLinks, profileData } from '@/data/portfolioData';

const socialIconMap: { [key: string]: React.ElementType } = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
};

const openToIconMap: { [key: string]: React.ElementType } = {
  briefcase: UserCheck,
  dollarsign: UserCheck,
  messagesquare: UserCheck,
  github: Github,
  code: UserCheck,
  default: UserCheck,
};

const ContactInfoItem: React.FC<{icon: React.ReactNode, text: string, href?: string, isEmail?: boolean}> = ({ icon, text, href, isEmail = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const content = (
    <div className="flex items-start group text-sm md:text-base">
      <div className="mr-3 text-cyan-400 mt-1">{icon}</div>
      <div className="text-neutral-300 group-hover:text-white transition-colors flex-1">
        {text.split(',').map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className={isEmail ? "hover:text-cyan-400 transition-colors duration-200 cursor-pointer" : ""}>{item.trim()}</span>
            {isEmail && (
              <button
                onClick={handleCopy}
                className="p-1 text-neutral-400 hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                title="Copy email"
              >
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className="transition-transform hover:scale-105 inline-block w-full"
        target={isEmail ? undefined : "_blank"}
        rel={isEmail ? undefined : "noopener noreferrer"}
      >
        {content}
      </a>
    );
  }
  
  return <div className="inline-block w-full">{content}</div>;
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0F1419] via-[#1A1D24] to-[#0F1419] text-white border-t border-neutral-800/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Contact</h3>
            <div className="space-y-3">
              {profileData.email && (
                <ContactInfoItem 
                  icon={<Mail size={18} />} 
                  text={profileData.email} 
                  href={`mailto:${profileData.email}`}
                  isEmail={true}
                />
              )}
              {profileData.phone && <ContactInfoItem icon={<Phone size={18} />} text={profileData.phone} />}
              {profileData.location && <ContactInfoItem icon={<MapPin size={18} />} text={profileData.location} />}
            </div>
          </motion.div>

          {/* Open To Section */}
          {profileData.openTo && profileData.openTo.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Open To</h3>
              <div className="space-y-2">
                {profileData.openTo.map((item, index) => {
                  const iconName = (item.icon || 'default').toLowerCase();
                  const Icon = openToIconMap[iconName] || openToIconMap.default;
                  return (
                    <div key={index} className="flex items-center bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800/60">
                      <Icon size={16} className="mr-2.5 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm text-neutral-300">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialMediaLinks.map((link) => {
                const IconComponent = socialIconMap[link.name.toLowerCase()];
                return IconComponent ? (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={link.name}
                    className="p-2.5 bg-neutral-900/60 hover:bg-cyan-900/40 rounded-lg text-neutral-400 hover:text-white transition-all duration-300 transform hover:scale-105 border border-neutral-800/60 hover:border-cyan-400/40"
                  >
                    <IconComponent size={20} />
                  </a>
                ) : null;
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="mt-12 pt-8 border-t border-neutral-800/50 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-400">
              © 2024 Asif Patankar. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 