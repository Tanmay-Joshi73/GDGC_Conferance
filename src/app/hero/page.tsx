'use client';

import { useEffect, useState, useRef } from 'react';
import { FiCalendar, FiMapPin, FiUsers, FiClock, FiChevronRight, FiMic, FiAward, FiArrowRight } from 'react-icons/fi';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Mouse interaction state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax transformations
  const moveX = useTransform(springX, [-0.5, 0.5], [-50, 50]);
  const moveY = useTransform(springY, [-0.5, 0.5], [-50, 50]);
  const reverseMoveX = useTransform(springX, [-0.5, 0.5], [50, -50]);
  const reverseMoveY = useTransform(springY, [-0.5, 0.5], [50, -50]);

  // Floating animation variants
  const floatingVariant = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const orbVariant = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#fafafa] flex items-center justify-center pt-20 pb-10"
    >
      {/* Dynamic Background Mesh */}
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content - Typography & CTA */}
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex -space-x-2">
                {['bg-blue-500', 'bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full ${color} ring-2 ring-white`} />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-600 tracking-wide">GDGC DYPCOE Present</span>
            </motion.div>

            {/* Main Title with Glitch/Reveal Effect */}
            <div className="space-y-2 relative">
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                FUTURE
                <br />
                <span className="text-stroke-2 text-stroke-gray-900 text-transparent relative">
                  TECH
                  <motion.span
                    className="absolute inset-0 text-blue-600 opacity-20 blur-sm"
                    animate={{ x: [0, -2, 2, 0], y: [0, 2, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 3 }}
                  >TECH</motion.span>
                </span>
              </motion.h1>

              <motion.div
                className="text-3xl md:text-5xl font-bold flex gap-3 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-[#4285F4]">20</span>
                <span className="text-[#EA4335]">25</span>
                <span className="text-gray-400 text-xl md:text-2xl font-normal ml-2 tracking-widest uppercase">Conference</span>
              </motion.div>
            </div>

            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Join the largest <span className="font-bold text-gray-900">developer gathering</span> in Pune.
              Explore AI, Cloud, and Web with <span className="text-red-500 font-bold">25+ experts</span>.
              Unlock your potential at DYPCOE.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-[#0F9D58] rounded-xl overflow-hidden shadow-lg shadow-green-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative font-bold text-white flex items-center gap-2">
                  Get Tickets Now <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-white border-2 border-gray-200 rounded-xl font-bold text-gray-800 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Agenda
              </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-[-80px] left-0 hidden lg:flex items-center gap-2 text-sm font-medium text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="w-8 h-[2px] bg-gray-300 overflow-hidden">
                <motion.div
                  className="w-full h-full bg-gray-800"
                  animate={{ x: [-32, 32] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </div>
              SCROLL TO EXPLORE
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Interactive Hero Object */}
          <motion.div
            className="relative lg:h-[600px] flex items-center justify-center order-1 lg:order-2"
            style={{ x: reverseMoveX, y: reverseMoveY }}
          >
            {/* Central Rotating Core */}
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              {/* Orbital Rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className={`absolute inset-0 border-[20px] rounded-full mix-blend-multiply opacity-80
                      ${i === 0 ? 'border-blue-400/30' : i === 1 ? 'border-red-400/30' : 'border-yellow-400/30'}
                    `}
                  style={{
                    rotateX: i * 45,
                    rotateY: i * 30,
                  }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 10 + i * 5, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: i }
                  }}
                />
              ))}

              {/* Center Gem */}
              <motion.div
                className="absolute inset-0 m-auto w-32 h-32 bg-white rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.1)] flex items-center justify-center z-10 backdrop-blur-xl border border-white/50"
                animate={{
                  rotate: -360,
                  borderRadius: ["20%", "50%", "20%"]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="grid grid-cols-2 gap-2">
                  <motion.div className="w-3 h-3 bg-blue-500 rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  <motion.div className="w-3 h-3 bg-red-500 rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                  <motion.div className="w-3 h-3 bg-yellow-500 rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                  <motion.div className="w-3 h-3 bg-green-500 rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} />
                </div>
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                className="absolute -top-10 -right-10 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl flex gap-3 items-center z-20"
                variants={floatingVariant}
                animate="animate"
              >
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600"><FiUsers className="text-xl" /></div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">500+</div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Attendees</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-5 -left-5 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl flex gap-3 items-center z-20"
                variants={floatingVariant}
                animate="animate"
                style={{ animationDelay: "1s" }}
              >
                <div className="p-3 bg-red-100 rounded-lg text-red-600"><FiMic className="text-xl" /></div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">25+</div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Speakers</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-[40%] -right-[20%] bg-white/90 backdrop-blur p-3 rounded-2xl shadow-xl z-10"
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-black text-white text-[10px] flex items-center justify-center font-bold">+400</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Info Bar */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            { icon: FiCalendar, label: 'March 15-16, 2025', sub: 'Save the date' },
            { icon: FiMapPin, label: 'DYPCOE Campus', sub: 'Pune, India' },
            { icon: FiClock, label: '09:00 AM IST', sub: 'Doors Open' },
            { icon: FiAward, label: 'Certifications', sub: 'For all attendees' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 flex items-center justify-center text-xl text-gray-600">
                <item.icon />
              </div>
              <div>
                <div className="font-bold text-gray-900">{item.label}</div>
                <div className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors">{item.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

