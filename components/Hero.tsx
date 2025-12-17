import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      {/* Background Decor - Light Mode */}
      <div className="absolute top-[-10%] right-[-5%] -z-10 opacity-40">
        <div className="w-[800px] h-[800px] bg-gradient-to-br from-accent/20 to-purple-200 rounded-full blur-[140px] animate-pulse"></div>
      </div>
      <div className="absolute bottom-[-10%] left-[-10%] -z-10 opacity-30">
        <div className="w-[600px] h-[600px] bg-fuchsia-200 rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-300 text-accent text-sm font-bold shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Seeking Internship Opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-[1.1] text-slate-900">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-800">
              {PORTFOLIO_DATA.name}.
            </span>
          </h1>
          <h2 className="text-3xl text-slate-700 font-serif italic font-medium">
             {PORTFOLIO_DATA.title}
          </h2>
          
          <p className="text-xl text-slate-700 max-w-lg leading-relaxed font-normal">
            {PORTFOLIO_DATA.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="#projects" 
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all transform hover:-translate-y-1 shadow-lg shadow-accent/25 cursor-pointer"
            >
              My Design Work
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-800 font-bold rounded-full border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="order-1 md:order-2 relative flex justify-center">
            <div className="relative z-10 w-[70%] md:w-[80%] aspect-[4/5] rounded-full overflow-hidden border-8 border-white shadow-2xl transform hover:scale-[1.02] transition-duration-700 transition-transform bg-slate-100">
               {/* Placeholder for Profile Image */}
               <img 
                 src="./profile.jpg"   
                 alt="Saloni Vishwakarma" 
                 className="w-full h-full object-cover" 
               />
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-purple-300/50 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-purple-300/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;