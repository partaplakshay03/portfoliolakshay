import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured digital storefront with shopping cart functionality, user authentication, and secure payment processing integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2689&auto=format&fit=crop',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative productivity tool featuring real-time updates, drag-and-drop kanban boards, and team role management.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2689&auto=format&fit=crop',
    },
    {
      title: 'Portfolio Website V1',
      description: 'A personal portfolio built with a focus on performance, accessibility and beautiful typography to elegantly showcase previous work.',
      tech: ['React', 'Framer Motion', 'Vite', 'Tailwind CSS'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2689&auto=format&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-50">Featured Projects</h2>
            <div className="h-px bg-slate-800 flex-1 ml-4" />
          </div>
          <p className="text-slate-400 max-w-2xl text-lg">
            A selection of projects that showcase my ability to solve complex problems and build scalable web applications.
          </p>
        </motion.div>

        <div className="space-y-24 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`relative flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-3/5 group relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Project Content */}
              <div className={`w-full lg:w-2/5 flex flex-col justify-center ${index % 2 === 1 ? 'lg:items-start' : 'lg:items-end text-left lg:text-right'}`}>
                <p className="text-sky-400 font-mono text-sm mb-2 tracking-wide uppercase">
                  Featured Project
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                  {project.title}
                </h3>
                
                <div className={`glass p-6 md:p-8 rounded-xl w-full text-slate-300 leading-relaxed relative z-20 shadow-xl lg:-ml-12 ${index % 2 === 1 ? 'lg:ml-0 lg:-mr-12' : ''}`}>
                  {project.description}
                </div>

                <ul className={`flex flex-wrap gap-4 mt-6 mb-8 text-sm font-semibold text-slate-400 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>

                <div className={`flex items-center gap-6 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                  <a href={project.github} className="text-slate-400 hover:text-sky-400 transition-colors" target="_blank" rel="noreferrer">
                    <Globe size={22} />
                  </a>
                  <a href={project.live} className="text-slate-400 hover:text-sky-400 transition-colors" target="_blank" rel="noreferrer">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
