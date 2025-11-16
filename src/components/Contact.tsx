// components/Contact.tsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Mail, Linkedin, Quote } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="contact" className="py-20 px-4 bg-black/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Let&apos;s Connect
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 mb-12 flex-wrap"
        >
          <motion.a
            href="https://github.com/Rubyansh"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all duration-300 border border-gray-600"
          >
            <Github className="w-5 h-5" />
            GitHub
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/rubyansh/"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 border border-blue-400"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </motion.a>
          
          <motion.a
            href="mailto:rc@rubyansh.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 border border-purple-400"
          >
            <Mail className="w-5 h-5" />
            Email
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-effect p-8 rounded-xl border border-purple-500/30 max-w-2xl mx-auto"
        >
          <Quote className="w-8 h-8 text-purple-400 mx-auto mb-4" />
          <blockquote className="text-xl italic text-gray-300 mb-4">
            &ldquo;Simplicity is the ultimate sophistication.&rdquo;
          </blockquote>
          <cite className="text-purple-400">— Leonardo da Vinci</cite>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-gray-400"
        >
          Thanks for stopping by! ⭐ Feel free to check out my work or reach out.
        </motion.p>
      </div>
    </section>
  );
}