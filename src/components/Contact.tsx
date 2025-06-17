'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, UserCheck } from 'lucide-react';
import { socialMediaLinks, profileData } from '@/data/portfolioData';

const socialIconMap: { [key: string]: React.ElementType } = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
};

const openToIconMap: { [key: string]: React.ElementType } = {
  briefcase: UserCheck, // Defaulting to UserCheck, can be customized
  dollarsign: UserCheck,
  messagesquare: UserCheck,
  github: Github,
  code: UserCheck,
  default: UserCheck,
};

const ContactInfoItem: React.FC<{icon: React.ReactNode, text: string, href?: string}> = ({ icon, text, href }) => {
  const content = (
    <div className="flex items-start group text-lg">
      <div className="mr-4 text-cyan-400 mt-1">{icon}</div>
      <div className="text-neutral-300 group-hover:text-white transition-colors">
        {text.split(',').map((item, index) => (
          <span key={index} className="block">{item.trim()}</span>
        ))}
      </div>
    </div>
  );
  return href ? <a href={href} className="transition-transform hover:scale-105 inline-block">{content}</a> : <div className="inline-block">{content}</div>;
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: false, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: '' });
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({ submitting: false, success: true, error: false, message: data.message || 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || 'Something went wrong.');
      }
    } catch (error: any) {
      setStatus({ submitting: false, success: false, error: true, message: error.message || 'Failed to send message.' });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-transparent text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 text-center"
        >
          Get In <span className="text-cyan-400">Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-5 flex flex-col">
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">Contact Information</h3>
              {profileData.email && <ContactInfoItem icon={<Mail size={22} />} text={profileData.email} href={`mailto:${profileData.email}`} />}
              {profileData.phone && <ContactInfoItem icon={<Phone size={22} />} text={profileData.phone} />}
              {profileData.location && <ContactInfoItem icon={<MapPin size={22} />} text={profileData.location} />}
            </div>

            {profileData.openTo && profileData.openTo.length > 0 && (
              <div> 
                <h4 className="text-2xl font-bold text-cyan-400 mb-4">I'm Open To</h4>
                <div className="space-y-3">
                  {profileData.openTo.map((item, index) => {
                    const iconName = (item.icon || 'default').toLowerCase();
                    const Icon = openToIconMap[iconName] || openToIconMap.default;
                    return (
                      <div key={index} className="flex items-center bg-neutral-900/80 p-3 rounded-lg border border-neutral-800/80">
                        <Icon size={20} className="mr-3 text-cyan-400 flex-shrink-0" />
                        <span className="text-neutral-300">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-2xl font-bold text-cyan-400 mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                {socialMediaLinks.map((link) => {
                  const IconComponent = socialIconMap[link.name.toLowerCase()];
                  return IconComponent ? (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}
                       className="p-3 bg-neutral-900/80 hover:bg-cyan-900/50 rounded-full text-neutral-400 hover:text-white transition-all duration-300 transform hover:scale-110 border border-neutral-800/80 hover:border-cyan-400/50">
                      <IconComponent size={24} />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-neutral-900/80 p-8 md:p-10 rounded-xl shadow-2xl border border-neutral-800/80"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name"
                     className="w-full px-4 py-3 bg-neutral-800/70 border-2 border-neutral-700/80 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-300 text-white" />
              <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Your Email"
                     className="w-full px-4 py-3 bg-neutral-800/70 border-2 border-neutral-700/80 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-300 text-white" />
              <input type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder="Subject"
                     className="w-full px-4 py-3 bg-neutral-800/70 border-2 border-neutral-700/80 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-300 text-white" />
              <textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5}
                        className="w-full px-4 py-3 bg-neutral-800/70 border-2 border-neutral-700/80 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-300 text-white resize-none"></textarea>
              <button type="submit" disabled={status.submitting}
                      className="group w-full relative inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-cyan-400 overflow-hidden transition-all duration-300 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed">
                <span className="absolute left-0 top-0 h-full w-0 bg-cyan-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                <span className="relative z-10 flex items-center">
                  {status.submitting ? 'Sending...' : 'Send Message'}
                  <Send size={18} className="ml-2" />
                </span>
              </button>
              {status.message && (
                <p className={`text-sm mt-2 text-center ${status.error ? 'text-red-500' : 'text-green-500'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 