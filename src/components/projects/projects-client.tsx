'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string | null;
  githubUrl: string | null;
}

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-32 relative overflow-hidden">
        {/* Dekoratif arka plan elementleri */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-24 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-10 -left-24 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>
        
        <div className="container relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center"
          >
            Projelerim
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-foreground/70 text-center max-w-3xl mx-auto mb-12"
          >
            Flutter, C# ve web teknolojileri ile geliştirdiğim çeşitli projelerimin detaylarını inceleyebilirsiniz.
          </motion.p>
        </div>
      </section>
      
      <div className="container py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="h-full overflow-hidden rounded-2xl border border-border/40 bg-card/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="aspect-video w-full relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          quality={85}
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors"
                aria-label={`${project.title} GitHub bağlantısı`}
              >
                <FaGithub className="h-5 w-5 text-black" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-primary/90 p-3 rounded-full hover:bg-primary transition-colors"
                aria-label={`${project.title} demo bağlantısı`}
              >
                <FaExternalLinkAlt className="h-5 w-5 text-white" />
              </a>
            )}            <Link
              href={`/projeler/${project.id}`}
              className="bg-secondary/90 p-3 rounded-full hover:bg-secondary transition-colors"
              aria-label={`${project.title} hakkında daha fazla bilgi`}
            >
              <FaInfoCircle className="h-5 w-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3">{project.title}</h2>
        <p className="text-foreground/70 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
