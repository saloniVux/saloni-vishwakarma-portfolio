import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t border-slate-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a 
            href={PORTFOLIO_DATA.socials.github} 
            className="text-slate-400 hover:text-accent transition-colors"
            aria-label="Behance"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={PORTFOLIO_DATA.socials.linkedin} 
            className="text-slate-400 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href={PORTFOLIO_DATA.socials.twitter} 
            className="text-slate-400 hover:text-accent transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;