// components/Stats.tsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '2+', label: 'Years Experience' },
  { number: '1000+', label: 'Code Commits' },
  { number: '10+', label: 'Technologies' }
];

const Counter = ({ number, label }: { number: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-2"
        initial={{ number: 0 }}
        animate={isInView ? { number: parseInt(number) } : { number: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {number}
      </motion.div>
      <div className="text-gray-400 text-sm md:text-base">{label}</div>
    </motion.div>
  );
};

export default function Stats() {
  return (
    <section className="py-20 px-4 bg-black/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Counter key={stat.label} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}