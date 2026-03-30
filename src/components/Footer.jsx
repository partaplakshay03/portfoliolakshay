import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-white/5 text-center px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-2">
        <p className="text-slate-500 font-mono text-sm">
          Designed & Built by <span className="text-sky-400">Lakshay</span>
        </p>
        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
