// components/About.tsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

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
  technologies: {
    frontend: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    backend: ["Node.js", "Express.js", "Prisma", "JavaScript", "Java"],
    databases: ["PostgreSQL", "SQLite", "MySQL"],
    tools: ["Git", "Docker", "VS Code", "Postman", "Wireshark", "CyberChef"],
    gameDev: ["Unreal Engine (learning)"]
  },
  currentlyLearning: [
    "C & C++",
    "AI/ML",
    "Unreal Engine",
    "Networking",
    "Data Center Management"
  ],
  funFact: "I break things so I can learn to fix them. Sometimes uhhh they stay broken.."
};`;

  const currentlyLearning = ["C & C++", "AI/ML", "Unreal Engine", "Networking", "Data Center Management"];

  return (
    <section ref={ref} id="about" className="py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </span>
        </motion.h2>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-purple-500/30 overflow-x-auto max-h-[500px]">
              <code className="text-xs sm:text-sm md:text-base text-green-400 whitespace-pre">{codeBlock}</code>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 sm:space-y-6 w-full"
          >
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Passionate developer with a love for creating innovative solutions and 
              exploring cutting-edge technologies. I enjoy building projects that combine
              AI/ML with practical applications.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-400">Currently Working On</h3>
              <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
                <li>• Full-stack web applications</li>
                <li>• Backend & distributed systems</li>
                <li>• AI/ML fundamentals and applications</li>
                <li>• DevOps & Data Center concepts</li>
                <li>• System-level programming (C/C++)</li>
                <li>• Open-source contributions</li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-400">Currently Learning</h3>
              <div className="flex flex-wrap gap-2">
                {currentlyLearning.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 bg-purple-900/30 border border-purple-500/50 rounded-full text-xs sm:text-sm"
                  >
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