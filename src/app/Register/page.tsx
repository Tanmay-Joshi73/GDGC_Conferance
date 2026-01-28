'use client';

import { useEffect, useState, useRef } from 'react';
import { FiClock, FiChevronRight, FiCalendar, FiMapPin, FiArrowRight, FiActivity, FiZap } from 'react-icons/fi';
import { motion, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';

export default function Register() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  const registerRef = useRef(null);
  const isInView = useInView(registerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      // Set target date to March 15, 2025 (matching Hero)
      const targetDate = new Date('March 15, 2025 09:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => String(value).padStart(2, '0');

  // Magnetic Button Logic
  const buttonRef = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - left - width / 2;
    const yPos = e.clientY - top - height / 2;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
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
      ref={registerRef}
      id="register"
      className="relative bg-[#fafafa] py-20 md:py-32 overflow-hidden"
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
        />

        {/* Floating Particles */}
        {isMounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${['bg-blue-400', 'bg-red-400', 'bg-yellow-400', 'bg-green-400'][i % 4]}`}
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-5 py-2 mb-6"
          >
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">Last Few Spots Remaining</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900"
          >
            SECURE YOUR <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-lg rounded-xl transform -rotate-2"></span>
              <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FUTURE</span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Don't miss out on Pune's most anticipated tech gathering. Join the community of innovators.
          </motion.p>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto mb-20">
          {[
            { value: timeLeft.days, label: 'DAYS', color: 'blue' },
            { value: timeLeft.hours, label: 'HOURS', color: 'red' },
            { value: timeLeft.minutes, label: 'MINUTES', color: 'yellow' },
            { value: timeLeft.seconds, label: 'SECONDS', color: 'green' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group perspective"
            >
              <div className={`absolute inset-0 bg-${item.color}-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-6 md:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className={`text-5xl md:text-7xl font-black bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2 font-mono`}>
                  {formatTime(item.value)}
                </div>
                <div className={`text-xs md:text-sm font-bold tracking-[0.2em] text-${item.color}-600 uppercase`}>
                  {item.label}
                </div>
                {/* Progress bar accent */}
                <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-${item.color}-500/20`}>
                  <motion.div
                    className={`h-full bg-${item.color}-500`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ duration: 1, delay: 1 + index * 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Register CTA Section */}
        <div className="relative max-w-4xl mx-auto text-center">

          {/* Main Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1, type: "spring" }}
            className="relative z-20"
          >
            <motion.button
              ref={buttonRef}
              className="relative group bg-[#0F9D58] text-white font-bold text-2xl md:text-3xl py-8 px-12 md:px-20 rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-[#0F9D58]/40 transition-shadow duration-300"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                x: mouseXSpring,
                y: mouseYSpring,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                <span>Get Your Ticket</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FiArrowRight size={32} />
                </motion.div>
              </span>

              {/* Button Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F9D58] to-[#12c46f]" />

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-100%] group-hover:animate-shine" />

              {/* Circle Pulse */}
              <div className="absolute inset-0 rounded-[2rem] border-2 border-white/20 scale-95 group-hover:scale-100 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Floating Elements around button */}
          <motion.div
            className="absolute -top-12 -left-4 md:-left-12 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 z-10 hidden md:flex"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1, y: [0, -10, 0] } : {}}
            transition={{
              delay: 1.2,
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="bg-blue-100 p-2 rounded-lg">
              <FiMapPin className="text-blue-600 text-xl" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 font-medium">Venue</p>
              <p className="font-bold text-gray-800">DYPCOE Pune</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-8 -right-4 md:-right-12 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 z-10 hidden md:flex"
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1, y: [0, 10, 0] } : {}}
            transition={{
              delay: 1.4,
              y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="bg-yellow-100 p-2 rounded-lg">
              <FiZap className="text-yellow-600 text-xl" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 font-medium">Limited</p>
              <p className="font-bold text-gray-800">Fast Filling!</p>
            </div>
          </motion.div>

        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 font-medium">Group discounts available for teams of 5+</p>
        </motion.div>

      </div>

      <style jsx global>{`
        @keyframes shine {
            from { transform: translateX(-100%) skewX(-12deg); }
            to { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shine {
            animation: shine 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}