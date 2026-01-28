'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiCpu, FiGlobe, FiTarget, FiZap, FiActivity } from 'react-icons/fi';

export default function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const stats = [
    { number: '500+', label: 'Participants', color: 'text-blue-600' },
    { number: '35+', label: 'Sessions', color: 'text-purple-600' },
    { number: '25+', label: 'Speakers', color: 'text-pink-600' },
    { number: '3', label: 'Days', color: 'text-yellow-600' },
  ];

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden"
    >
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
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

          {/* Left - Refined Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-12 gap-4 auto-rows-[100px]">

              {/* Feature 1: Code */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="col-span-8 row-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <FiCode className="text-9xl" />
                </div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 text-blue-600">
                    <FiCode className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Build Together</h4>
                    <p className="text-gray-600">Collaborate on real-world projects that matter.</p>
                  </div>
                </div>
              </motion.div>

              {/* Feature 2: Innovation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="col-span-4 row-span-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[2rem] p-6 shadow-lg relative overflow-hidden group hover:shadow-blue-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FiZap className="text-3xl" />
                  </div>
                  <span className="font-bold">Spark Innovation</span>
                </div>
              </motion.div>

              {/* Feature 3: Global */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="col-span-4 row-span-2 bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-4 text-purple-600 group-hover:rotate-12 transition-transform">
                  <FiGlobe className="text-2xl" />
                </div>
                <h4 className="font-bold text-gray-900">Global Network</h4>
              </motion.div>

              {/* Feature 4: Impact */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5 }}
                className="col-span-8 row-span-2 bg-gray-900 text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                    <FiTarget className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Create Impact</h4>
                    <p className="text-gray-400">Solve local problems with global technologies.</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right - Typography & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Currently Active
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                About the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Revolution
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                GDGoC WoW isn't just a conference; it's a movement. We're gathering the most passionate developers, designers, and innovators to shape the future of technology.
              </p>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold shadow-lg hover:bg-gray-800 transition-colors"
                >
                  Our Manifesto
                </motion.button>
              </div>
            </div>

            {/* Glassmorphism Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/50 backdrop-blur-md border border-white/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`text-4xl font-black ${stat.color} mb-1`}>{stat.number}</div>
                  <div className="font-medium text-gray-600 uppercase tracking-wider text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}