// components/Education.tsx
'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const education = [
  {
    icon: GraduationCap,
    institution: "Amity University, Noida",
    degree: "Bachelor of Technology - BTech, Computer Science",
    period: "Aug 2025 – Present",
    description: "UG student at Amity University Noida"
  },
  {
    icon: BookOpen,
    institution: "Amity International School, Pushp Vihar",
    degree: "High School Education",
    period: "2011 – 2025",
    description: ""
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
    title: "AART Certified Specialist R2 High School 10",
    issuer: "American Association of Robotics and Technology",
    period: "Oct 2023",
    skills: ["Arduino", "Arduino IDE"]
  },
  {
    icon: Award,
    title: "Robotics Certification",
    issuer: "Cyborg Cyber Forensics and Information Security",
    period: "",
    skills: ["Artificial Intelligence (AI)", "Internet of Things (IoT)", "Robotics"]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={0.2}>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Education & Achievements
            </span>
          </h2>
          <p className="text-gray-400 text-center text-xl mb-16 max-w-2xl mx-auto">
            My academic journey and professional certifications
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <AnimatedSection delay={0.3}>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  className="glass-effect p-6 rounded-xl border border-purple-400/20"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">{edu.institution}</h4>
                      <p className="text-purple-400 font-medium">{edu.degree}</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.4}>
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Certifications & Achievements</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  className="glass-effect p-6 rounded-xl border border-purple-400/20"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">{cert.title}</h4>
                      <p className="text-purple-400 font-medium">{cert.issuer}</p>
                    </div>
                    {cert.period && (
                      <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                        {cert.period}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-xs text-purple-300"
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