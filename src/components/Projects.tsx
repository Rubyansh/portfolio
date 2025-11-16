// components/Projects.tsx
'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: "Blind Vision Assistant",
    description: "AI-powered image description service for visually impaired users. Combines computer vision and text-to-speech to describe images and convert descriptions to audio.",
    technologies: ["Python", "Flask", "LLaVA", "Edge-TTS", "Computer Vision", "AI"],
    github: "https://github.com/Rubyansh/blindsight_capstone",
    live: "#",
    features: ["Web Interface", "CLI Tool", "RESTful API", "Accessibility Focused"],
  },
  {
    title: "AI Telegram Bot",
    description: "Multi-modal AI Telegram bot that integrates multiple AI services including text conversations, voice processing, and image generation.",
    technologies: ["Python", "Telegram Bot API", "Whisper", "Edge-TTS", "Stable Diffusion", "OpenAI API"],
    github: "https://github.com/Rubyansh/aitgbotdemo_ts",
    live: "#",
    features: ["Voice Processing", "Image Generation", "Text-to-Speech", "Multi-modal AI"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={0.2}>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-center text-lg sm:text-xl mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
            Building innovative solutions with AI and modern technologies
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={0.3 + index * 0.2}>
              <motion.div
                className="glass-effect rounded-xl overflow-hidden group cursor-pointer h-full"
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-40 sm:h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="relative z-10 text-center p-4">
                    <Eye className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1.5 sm:p-2 bg-black/50 rounded-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.a>
                    {project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1.5 sm:p-2 bg-black/50 rounded-full"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                  
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-purple-400 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Key Features:</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-xs text-purple-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}