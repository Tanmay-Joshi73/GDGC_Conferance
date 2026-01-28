'use client';

import { Github, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' }
  ];

  const quickLinks = ['Home', 'Events', 'Team', 'Projects', 'Contact'];

  return (
    <footer className="relative bg-[#fafafa] overflow-hidden pt-24 pb-12">
      {/* Dynamic Background Mesh (Clean Grid) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main CTA Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-gray-900 mb-6 tracking-tighter"
          >
            READY TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              INNOVATE?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Join the community that's building the future, line by line.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg shadow-xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started Now <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-gray-200 pt-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl" />
              <span className="text-2xl font-bold text-gray-900 tracking-tight">GDGoC</span>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Google Developer Groups on Campus - DYPCOE. Empowering students to build their skills, careers, and network through Google technologies.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <span className="flex items-center gap-2"><MapPin size={16} /> Pune, Maharashtra, India</span>
              <span className="flex items-center gap-2"><Mail size={16} /> contact@gdgoc-dypcoe.in</span>
            </div>
          </div>

          {/* Links Column */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-bold text-gray-900 mb-6">Explore</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-blue-600 transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="font-bold text-gray-900 mb-6">Connect With Us</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md ${color}`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-400">
              © {currentYear} GDGoC DYPCOE. <br />Made with <span className="text-red-500 animate-pulse">❤️</span> by the Team.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}