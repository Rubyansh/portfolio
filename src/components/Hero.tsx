// components/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail, Linkedin } from 'lucide-react';

export default function Hero() {
  const roles = [
    "Full-Stack Developer",
    "AI/ML Enthusiast", 
    "Game Developer",
    "CS Student",
    "Open-Source Contributor",
    "Discord Bot Developer"
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4 max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="w-32 h-32 mx-auto mb-8 rounded-full glass-effect border-2 border-purple-400/30 overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">R</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-8xl font-bold mb-6 typewriter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              Rubyansh
            </span>
          </motion.h1>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {roles.map((role, index) => (
              <motion.span
                key={role}
                className="px-4 py-2 glass-effect rounded-full text-sm md:text-base border border-purple-400/30 glow-text"
                style={{ animationDelay: `${index * 0.5}s` }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(110, 64, 201, 0.2)'
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {role}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold flex items-center justify-center gap-2 group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Open to Freelance</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-16">
          <motion.a
            href="https://github.com/Rubyansh"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass-effect rounded-full border border-purple-400/30"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rubyansh/"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass-effect rounded-full border border-purple-400/30"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="mailto:rc@rubyansh.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass-effect rounded-full border border-purple-400/30"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}