// components/CurrentWork.tsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Brain, Container, Cpu, LucideIcon } from 'lucide-react';

interface Project {
  icon: LucideIcon;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    icon: Code2,
    title: "Full-stack web apps",
    description: "Building scalable and modern web applications"
  },
  {
    icon: Server,
    title: "Backend & distributed systems",
    description: "Developing robust backend architectures"
  },
  {
    icon: Brain,
    title: "AI/ML fundamentals",
    description: "Exploring machine learning and artificial intelligence"
  },
  {
    icon: Container,
    title: "DevOps & Data Center concepts",
    description: "Learning infrastructure and deployment strategies"
  },
  {
    icon: Cpu,
    title: "System-level programming",
    description: "Mastering C/C++ for low-level development"
  },
  {
    icon: Code2,
    title: "Open-source contributions",
    description: "Contributing to open-source projects"
  }
];

export default function CurrentWork() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Current Focus
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900/50 p-4 sm:p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 group h-full"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <project.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg sm:text-xl font-semibold text-white">{project.title}</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}