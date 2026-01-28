'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiHelpCircle } from 'react-icons/fi';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is Google Developer Groups on Campus Pune's WOW event?",
    answer: "GDGoC WoW is an extraordinary annual celebration that brings together the brightest minds from across the global developer community. It's a unique platform for learning, innovation, and networking.",
  },
  {
    id: 2,
    question: "When and where will the WOW event take place?",
    answer: "The event will be held on March 15-16, 2024 at the Pune Convention Center. Registration starts at 8:00 AM with sessions beginning at 9:00 AM.",
  },
  {
    id: 3,
    question: "How can I register for the event?",
    answer: "You can register for the event by clicking the 'Register Now' button on our website. Registration is free but limited to the first 10,000 participants. Early registration is encouraged.",
  },
  {
    id: 4,
    question: "What topics will be covered at the WOW event?",
    answer: "We'll cover a wide range of topics including Web Development, Mobile Development, Cloud Computing, AI/ML, Flutter, Firebase, Google Cloud, and many more cutting-edge technologies.",
  },
  {
    id: 5,
    question: "Will there be networking opportunities?",
    answer: "Absolutely! We have dedicated networking sessions, lunch breaks, and evening meetups where you can connect with fellow developers, speakers, and industry experts.",
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden">

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm mb-6">
            <FiHelpCircle />
            Everything you need to know
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            FREQUENTLY ASKED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">QUESTIONS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Reach out to our team at support@gdgoc-wow.com
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group rounded-2xl border transition-all duration-300 ${expandedId === faq.id
                  ? 'bg-white border-blue-500 shadow-lg shadow-blue-500/10'
                  : 'bg-white/60 border-gray-200 hover:border-gray-300 hover:bg-white'
                }`}
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-bold transition-colors ${expandedId === faq.id ? 'text-blue-600' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${expandedId === faq.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                  {expandedId === faq.id ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              <AnimatePresence>
                {expandedId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}