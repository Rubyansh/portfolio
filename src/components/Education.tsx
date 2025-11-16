// components/Education.tsx
'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const education = [
  {
    icon: GraduationCap,
    institution: "Amity University, Noida",
    degree: "BTech, Computer Science",
    period: "Aug 2025 – Present",
    description: "UG student at Amity University Noida"
  },
  {
    icon: BookOpen,
    institution: "Amity International School",
    degree: "High School Education",
    period: "2011 – 2025",
    description: "Pushp Vihar"
  }
];

const certifications = [
  {
    icon: Award,
    title: "Eureka! Jr. '24 Finalist",
    issuer: "E-Cell, IIT Bombay",
    period: "Feb 2024",
    skills: ["Entrepreneurship", "Innovation"]
  },
  {
    icon: Award,
    title: "AART Certified Specialist",
    issuer: "American Association of Robotics",
    period: "Oct 2023",
    skills: ["Arduino", "Arduino IDE"]
  },
  {
    icon: Award,
    title: "Robotics Certification",
    issuer: "Cyborg Cyber Forensics",
    period: "",
    skills: ["AI", "IoT", "Robotics"]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 px-4 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={0.2}>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Education & Achievements
            </span>
          </h2>
          <p className="text-gray-400 text-center text-lg sm:text-xl mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
            My academic journey and professional certifications
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Education */}
          <AnimatedSection delay={0.3}>
            <div className="flex items-center mb-6 sm:mb-8">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  className="glass-effect p-4 sm:p-6 rounded-xl border border-purple-400/20"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">{edu.institution}</h4>
                      <p className="text-purple-400 font-medium text-sm sm:text-base">{edu.degree}</p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400 bg-gray-800 px-2 sm:px-3 py-1 rounded-full self-start">
                      {edu.period}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-gray-300 text-sm mt-2">{edu.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.4}>
            <div className="flex items-center mb-6 sm:mb-8">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  className="glass-effect p-4 sm:p-6 rounded-xl border border-purple-400/20"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">{cert.title}</h4>
                      <p className="text-purple-400 font-medium text-sm sm:text-base">{cert.issuer}</p>
                    </div>
                    {cert.period && (
                      <span className="text-xs sm:text-sm text-gray-400 bg-gray-800 px-2 sm:px-3 py-1 rounded-full self-start">
                        {cert.period}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-xs text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}