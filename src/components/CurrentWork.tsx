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
  }
];

export default function CurrentWork() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <project.icon className="w-8 h-8 text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
              <p className="text-gray-300">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}