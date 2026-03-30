import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-16 text-center shadow-2xl border border-white/5"
        >
          <span className="text-sky-400 font-mono text-sm tracking-widest uppercase mb-4 block">
            What's Next?
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-50 mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-slate-300">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-sky-400" />
              <span>hello@lakshay.dev</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-700" />
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-indigo-400" />
              <span>New Delhi, India</span>
            </div>
          </div>

          <a
            href="mailto:hello@lakshay.dev"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-slate-900 bg-sky-400 hover:bg-sky-300 transition-colors duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
