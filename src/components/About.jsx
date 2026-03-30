import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Framer Motion', category: 'Library' },
  ];

  const features = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, accessible, and highly interactive user interfaces using modern tooling.',
      icon: <Layout className="w-6 h-6 text-sky-400" />,
    },
    {
      title: 'Backend Engineering',
      description: 'Designing robust API architectures and database schemas for scalable applications.',
      icon: <Database className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: 'Clean Code',
      description: 'Writing maintainable, strongly-typed code with a focus on best practices and design patterns.',
      icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: 'Responsive Design',
      description: 'Ensuring seamless experiences across all devices and screen sizes from mobile to desktop.',
      icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-50">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-lg text-slate-400 leading-relaxed"
          >
            <p>
              Hello! My name is Lakshay and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-md glass border-white/5 text-slate-300 text-sm font-medium hover:text-sky-400 hover:border-sky-500/30 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl glass hover:bg-slate-800/80 transition-all duration-300 border border-transparent hover:border-slate-700"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
