import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { PenTool } from 'lucide-react';

const Sketches: React.FC = () => {
  return (
    <section id="sketches" className="py-24 bg-slate-50 relative">
       {/* Decorative Background */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"></div>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-accent font-bold tracking-widest text-xs uppercase mb-3">Fine Art Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-slate-900 flex items-center gap-3">
             <PenTool className="w-8 h-8 text-slate-400" />
             Sketches & Paintings
          </h2>
          <p className="text-slate-600 max-w-2xl text-lg font-normal leading-relaxed">
            Drawing is where my journey began. These sketches represent my study of anatomy, 
            lighting, and emotion—fundamentals that directly influence my digital design work.
          </p>
        </div>

        {/* Masonry Grid Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {PORTFOLIO_DATA.sketches.map((sketch) => (
            <div 
              key={sketch.id} 
              className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white border border-slate-200"
            >
              <div className="relative overflow-hidden">
                  <img 
                    src={sketch.imageUrl.startsWith('http') ? sketch.imageUrl : "./art-piece.jpg"}
                    alt={sketch.title} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300"></div>
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 uppercase tracking-wider shadow-sm">
                      {sketch.category}
                    </span>
                  </div>
              </div>

              <div className="p-4 bg-white relative z-20">
                <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-accent transition-colors">{sketch.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sketches;