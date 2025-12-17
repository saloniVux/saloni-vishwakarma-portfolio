import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
             <span className="text-accent font-bold tracking-widest text-xs uppercase mb-2 block">Selected Works</span>
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-slate-900">Case Studies</h2>
             <p className="text-slate-600 max-w-xl text-lg font-normal">
               A curation of my best work in product design, focusing on solving user problems and delivering business value.
             </p>
          </div>
          <a href="#" className="group text-slate-900 hover:text-accent transition-colors font-bold flex items-center gap-2 border-b-2 border-transparent hover:border-accent pb-0.5">
            View Behance Profile <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Image or Color Container */}
              <div className="rounded-2xl overflow-hidden relative aspect-[4/3] mb-6 shadow-sm border border-slate-100 group-hover:shadow-xl transition-shadow duration-300 bg-slate-100">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10 pointer-events-none"></div>
                
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className={`w-full h-full transform group-hover:scale-105 transition-transform duration-700 ${project.color || 'bg-slate-200'} flex items-center justify-center p-8`}>
                     <div className="text-white/20 font-serif text-5xl font-bold italic mix-blend-overlay opacity-50">
                        {project.title.substring(0, 1)}
                     </div>
                  </div>
                )}
                
                {/* Overlay Button */}
                <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <span className="bg-white text-slate-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-white transition-colors">
                        <ArrowUpRight className="w-6 h-6" />
                    </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 group-hover:border-accent/30 group-hover:text-accent transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-slate-600 line-clamp-2 font-normal text-base">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;