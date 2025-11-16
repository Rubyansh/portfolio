// components/About.tsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const codeBlock = `const rubyansh: Developer = {
  name: "Rubyansh",
  roles: [
    "Full-Stack Web Developer",
    "Software Developer", 
    "Game Developer",
    "CS Student",
    "AI/ML Enthusiast",
    "Open-Source Contributor",
    "Discord Bot Developer"
  ],
  languages: {
    proficient: ["JavaScript", "TypeScript", "Python", "Node.js", "HTML/CSS", "SQL"],
    learning: ["C", "C++"]
  },
  funFact: "I break things so I can learn to fix them. Sometimes uhhh they stay broken.."
};`;

  const currentlyLearning = ["C & C++", "AI/ML", "Unreal Engine", "Networking", "Data Center Management"];

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <pre className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/30 overflow-x-auto">
              <code className="text-sm md:text-base text-green-400">{codeBlock}</code>
            </pre>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300">
              Passionate developer with a love for creating innovative solutions and 
              exploring cutting-edge technologies.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">Currently Learning</h3>
              <div className="flex flex-wrap gap-2">
                {currentlyLearning.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-900/30 border border-purple-500/50 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}