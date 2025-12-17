import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Layers, Layout, Palette, Heart } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background - Subtle for light mode */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 flex items-center justify-center gap-3 text-slate-900">
              <Layers className="text-accent w-10 h-10" />
              Combined Expertise
            </h2>
            <p className="text-slate-600 text-lg font-normal">
                My creative practice spans both physical and digital mediums, allowing me to bring a unique perspective to every project.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Design Skills */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-accent border border-slate-100">
                    <Layout className="w-5 h-5" />
                </div>
                UX/UI Design
            </h3>
            <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.skills.filter(s => s.category === 'design').map(skill => (
                <span key={skill.name} className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-full text-sm font-medium text-slate-700 hover:bg-accent hover:text-white hover:border-accent transition-colors cursor-default">
                    {skill.name}
                </span>
                ))}
            </div>
            </div>

            {/* Art Skills */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-accent border border-slate-100">
                     <Palette className="w-5 h-5" />
                </div>
                Fine Art
            </h3>
                <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.skills.filter(s => s.category === 'art').map(skill => (
                <span key={skill.name} className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-full text-sm font-medium text-slate-700 hover:bg-accent hover:text-white hover:border-accent transition-colors cursor-default">
                    {skill.name}
                </span>
                ))}
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-full text-sm font-medium text-slate-700 hover:bg-accent hover:text-white hover:border-accent transition-colors cursor-default">Charcoal Drawing</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-full text-sm font-medium text-slate-700 hover:bg-accent hover:text-white hover:border-accent transition-colors cursor-default">Oil Painting</span>
            </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-accent border border-slate-100">
                    <Heart className="w-5 h-5" />
                </div>
                Soft Skills
            </h3>
                <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.skills.filter(s => s.category === 'soft').map(skill => (
                <span key={skill.name} className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-full text-sm font-medium text-slate-700 hover:bg-accent hover:text-white hover:border-accent transition-colors cursor-default">
                    {skill.name}
                </span>
                ))}
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-full text-sm font-medium text-slate-700 hover:bg-accent hover:text-white hover:border-accent transition-colors cursor-default">Empathy</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-full text-sm font-medium text-slate-700 hover:bg-accent hover:text-white hover:border-accent transition-colors cursor-default">Mentorship</span>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;