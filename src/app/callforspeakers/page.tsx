'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { FiMic, FiAward, FiUsers, FiGlobe, FiArrowRight, FiCpu, FiCode, FiSmartphone, FiCloud } from 'react-icons/fi';

export default function CallForSpeakers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const benefits = [
    { icon: FiUsers, title: "Global Reach", desc: "Connect with 500+ developers from around the world." },
    { icon: FiAward, title: "Recognition", desc: "Establish yourself as a thought leader in the tech community." },
    { icon: FiGlobe, title: "Networking", desc: "Access exclusive speakers dinner and VIP networking events." },
  ];

  const tracks = [
    { icon: FiCpu, title: "AI & ML", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: FiCode, title: "Web", color: "text-red-500", bg: "bg-red-50" },
    { icon: FiSmartphone, title: "Mobile", color: "text-yellow-500", bg: "bg-yellow-50" },
    { icon: FiCloud, title: "Cloud", color: "text-green-500", bg: "bg-green-50" },
  ];

  return (
    <section ref={containerRef} id="call-for-speakers" className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden">

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
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="animate-pulse w-2 h-2 bg-purple-600 rounded-full"></span>
                <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">Call for Proposals Open</span>
              </motion.div>

              <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
                YOUR VOICE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  MATTERS
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Share your extraordinary journey. We are looking for passionate speakers to inspire the next generation of innovators.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-3">
                    <item.icon className="text-xl text-gray-700" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  {/* <p className="text-xs text-gray-500">{item.desc}</p> */}
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-gray-900 text-white text-lg font-bold py-5 px-10 rounded-full overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                Submit Your Proposal
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>

          {/* Right Column: 3D Visual */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Rotating Rings Background */}
            {/* @ts-ignore */}
            <motion.div
              className="absolute inset-0 border-[1px] border-gray-200 rounded-full"
              style={{ rotate: y, scale: 0.8 }}
            />
            {/* @ts-ignore */}
            <motion.div
              className="absolute inset-0 border-[1px] border-gray-200 rounded-full m-12"
              style={{ rotate: y, scale: 0.6 }}
            />

            {/* Floating Cards (Orbiting) */}
            {tracks.map((track, i) => (
              <motion.div
                key={i}
                className={`absolute bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100 z-20`}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
                style={{
                  top: `${20 + i * 15}%`,
                  left: i % 2 === 0 ? '-10%' : '60%',
                }}
              >
                <div className={`p-2 rounded-lg ${track.bg}`}>
                  <track.icon className={`text-xl ${track.color}`} />
                </div>
                <span className="font-bold text-gray-800">{track.title}</span>
              </motion.div>
            ))}

            {/* Central 3D Mic Element */}
            <motion.div
              className="relative z-10 w-64 h-64 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] flex items-center justify-center shadow-2xl"
              animate={{
                y: [0, -30, 0],
                rotateY: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                perspective: 1000,
                transformStyle: "preserve-3d"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl -z-10" />

              {/* Mic Icon */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiMic className="text-8xl text-white/90 drop-shadow-lg" />
              </motion.div>

              {/* Sound Waves */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-white/10 rounded-[3rem]"
                  animate={{
                    scale: [1, 1.5],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
