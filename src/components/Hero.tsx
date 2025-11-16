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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-8">
      {/* Animated Background - Reduced intensity for mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-purple-600/20 rounded-full blur-2xl sm:blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-pink-600/10 rounded-full blur-2xl sm:blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-48 sm:h-48 bg-blue-600/10 rounded-full blur-2xl sm:blur-3xl float-animation" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4 sm:px-6 max-w-6xl mx-auto w-full"
      >
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <motion.div
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full glass-effect border-2 border-purple-400/30 overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-bold text-white">R</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 block">
              Rubyansh
            </span>
          </motion.h1>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
            {roles.map((role, index) => (
              <motion.span
                key={role}
                className="px-3 py-1.5 sm:px-4 sm:py-2 glass-effect rounded-full text-xs sm:text-sm md:text-base border border-purple-400/30 glow-text"
                style={{ animationDelay: `${index * 0.3}s` }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(110, 64, 201, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {role}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
          <motion.button 
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold flex items-center justify-center gap-2 group relative overflow-hidden text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Open to Freelance</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <motion.a
            href="https://github.com/Rubyansh"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 sm:p-3 glass-effect rounded-full border border-purple-400/30"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rubyansh/"
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 sm:p-3 glass-effect rounded-full border border-purple-400/30"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a
            href="mailto:rc@rubyansh.com"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 sm:p-3 glass-effect rounded-full border border-purple-400/30"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}