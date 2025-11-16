// components/TechStack.tsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TechItem {
  name: string;
  color: string;
  textColor: string;
}

interface TechCategories {
  [key: string]: TechItem[];
}

const techCategories: TechCategories = {
  "Languages": [
    { name: "JavaScript", color: "bg-yellow-400", textColor: "text-black" },
    { name: "TypeScript", color: "bg-blue-600", textColor: "text-white" },
    { name: "Python", color: "bg-green-500", textColor: "text-white" },
    { name: "C", color: "bg-blue-400", textColor: "text-black" },
    { name: "C++", color: "bg-purple-600", textColor: "text-white" },
    { name: "Node.js", color: "bg-green-600", textColor: "text-white" },
    { name: "HTML/CSS", color: "bg-orange-500", textColor: "text-white" },
    { name: "SQL", color: "bg-blue-500", textColor: "text-white" }
  ],
  "Frontend": [
    { name: "React", color: "bg-cyan-500", textColor: "text-black" },
    { name: "Next.js", color: "bg-black", textColor: "text-white" },
    { name: "Tailwind CSS", color: "bg-teal-400", textColor: "text-black" },
    { name: "HTML", color: "bg-orange-500", textColor: "text-white" },
    { name: "CSS", color: "bg-blue-500", textColor: "text-white" }
  ],
  "Backend & Tools": [
    { name: "Node.js", color: "bg-green-600", textColor: "text-white" },
    { name: "Express.js", color: "bg-gray-600", textColor: "text-white" },
    { name: "Prisma", color: "bg-blue-500", textColor: "text-white" },
    { name: "JavaScript", color: "bg-yellow-400", textColor: "text-black" },
    { name: "Java", color: "bg-red-500", textColor: "text-white" }
  ],
  "Databases": [
    { name: "PostgreSQL", color: "bg-blue-700", textColor: "text-white" },
    { name: "SQLite", color: "bg-gray-500", textColor: "text-white" },
    { name: "MySQL", color: "bg-orange-600", textColor: "text-white" }
  ],
  "DevOps & Systems": [
    { name: "Docker", color: "bg-blue-500", textColor: "text-white" },
    { name: "Git", color: "bg-orange-500", textColor: "text-white" },
    { name: "Networking", color: "bg-cyan-600", textColor: "text-white" },
    { name: "Data Center Management", color: "bg-purple-700", textColor: "text-white" },
    { name: "Wireshark", color: "bg-blue-600", textColor: "text-white" },
    { name: "Postman", color: "bg-orange-500", textColor: "text-white" },
    { name: "VS Code", color: "bg-blue-600", textColor: "text-white" },
    { name: "CyberChef", color: "bg-gray-800", textColor: "text-white" }
  ],
  "Game Dev": [
    { name: "Unreal Engine", color: "bg-gray-800", textColor: "text-white" }
  ]
};

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section ref={ref} id="skills" className="py-16 sm:py-20 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Tech Stack
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:gap-8"
        >
          {Object.entries(techCategories).map(([category, technologies]) => (
            <motion.div key={category} variants={itemVariants} className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-2 sm:mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technologies.map((tech) => (
                  <motion.span
                    key={tech.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 ${tech.color} ${tech.textColor} rounded-lg font-medium border border-white/20 cursor-pointer transition-all duration-300 text-xs sm:text-sm`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}