'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, MouseEvent } from 'react';
import { FiLinkedin, FiTwitter, FiGithub, FiGlobe } from 'react-icons/fi';

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const speakers: Speaker[] = [
  { id: 1, name: 'Aanchal Mishra', title: 'Developer Advocate', company: 'POSTMAN', image: '/images/speaker1.jpg', socials: { twitter: '#', linkedin: '#' } },
  { id: 2, name: 'Megha Arora', title: 'DevRel Strategist', company: 'DevRelSquad', image: '/images/speaker2.jpg', socials: { twitter: '#', linkedin: '#' } },
  { id: 3, name: 'Saurav Jain', title: 'Community Manager', company: 'Apify', image: '/images/speaker3.jpg', socials: { twitter: '#', linkedin: '#' } },
  { id: 4, name: 'Bhawna Chauhan', title: 'DevRel Engineer', company: 'QuillAI Network', image: '/images/speaker4.jpg', socials: { twitter: '#', linkedin: '#' } },
  { id: 5, name: 'Shagufta Bangi', title: 'Customer Engineer', company: 'Google Cloud', image: '/images/speaker5.jpg', socials: { twitter: '#', linkedin: '#' } },
  { id: 6, name: 'Savinder Puri', title: 'DevOps Evangelist', company: 'CloudOps', image: '/images/speaker6.jpg', socials: { twitter: '#', linkedin: '#' } },
  { id: 7, name: 'Mahaveer Muttha', title: 'Co-founder', company: 'Tech Startup', image: '/images/speaker7.jpg', socials: { twitter: '#', linkedin: '#' } },
  { id: 8, name: 'Pranoti Nandurkar', title: 'Technical Architect', company: 'Enterprise Solutions', image: '/images/speaker8.jpg', socials: { twitter: '#', linkedin: '#' } },
];

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group perspective-1000"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform-gpu h-full flex flex-col items-center text-center group-hover:bg-white/90"
      >
        {/* Holographic Border Gradient */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />

        {/* Image Container */}
        <div className="relative w-32 h-32 mb-6 pointer-events-none transform-gpu" style={{ transform: "translateZ(30px)" }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={speaker.image}
              alt={speaker.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Floating Badge */}
          <motion.div
            className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg text-blue-600"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
          >
            <FiGlobe />
          </motion.div>
        </div>

        {/* Content */}
        <div className="transform-gpu" style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-xl font-black text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-colors">
            {speaker.name}
          </h3>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">{speaker.company}</p>
          <p className="text-gray-600 font-medium mb-4 line-clamp-2">{speaker.title}</p>
        </div>

        {/* Socials Link (Slide Up Effect) */}
        <div className="mt-auto flex gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" style={{ transform: "translateZ(40px)" }}>
          <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
            <FiTwitter />
          </button>
          <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
            <FiLinkedin />
          </button>
        </div>

      </motion.div>
    </motion.div>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden">

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">MIND</span>SHAPERS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visionaries, creators, and leaders who are redefining the boundaries of technology.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
          ))}
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-lg font-medium text-gray-400">
            + 20 more speakers to be announced soon
          </p>
        </motion.div>

      </div>
    </section>
  );
}