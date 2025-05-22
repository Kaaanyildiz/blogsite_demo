'use client';

import { motion } from 'framer-motion';

interface Skill {
  category: string;
  items: string[];
}

interface Experience {
  company: string;
  position: string; 
  period: string;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

interface AboutContentClientProps {
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
}

export function AboutContentClient({ skills, experiences, education }: AboutContentClientProps) {
  return (
    <>
      {/* Yetenekler Bölümü */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 relative">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Yeteneklerim
          </span>
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="card p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Deneyim Bölümü */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 relative">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projelerim
          </span>
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary"></span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="card p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{experience.company}</h3>
                  <p className="text-lg font-medium">{experience.position}</p>
                </div>
                <span className="text-foreground/60 mt-2 md:mt-0">{experience.period}</span>
              </div>
              <p className="text-foreground/80">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Eğitim Bölümü */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 relative">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Eğitim
          </span>
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary"></span>
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="card p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{edu.institution}</h3>
                  <p className="text-lg font-medium">{edu.degree}</p>
                </div>
                <span className="text-foreground/60 mt-2 md:mt-0">{edu.period}</span>
              </div>
              <p className="text-foreground/80">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
