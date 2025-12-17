import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Briefcase, Calendar, GraduationCap, Award, X, Trophy, Gift } from 'lucide-react';

const About: React.FC = () => {
  // State now holds both url and title for the modal
  const [modalContent, setModalContent] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="about" className="py-24 bg-surface relative">
      <div className="container mx-auto px-6">
        
        {/* New Centered Header Section matching screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Beyond UX</h2>
            <div className="w-24 h-1 bg-accent/30 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 leading-relaxed font-normal">
                My background in traditional art enhances my design practice. It shapes how I see the world—teaching me patience, observation, and the importance of human connection.
            </p>
        </div>

        {/* Beyond UX / Journey Section - Photo Layout */}
        <div className="mb-24">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
             
             <div className="flex flex-col lg:flex-row items-center gap-12">
               
               {/* Photo Section - Moved to Left to match screenshot */}
               <div className="lg:w-1/2 relative w-full order-2 lg:order-1">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                    <img 
                      src="./adarsh-school.jpg" 
                      alt="Adarsh English Medium School Staff" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                       <p className="font-serif italic text-xl font-medium">"Teaching implies learning."</p>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
               </div>

               {/* Text Content - Moved to Right */}
               <div className="lg:w-1/2 relative z-10 order-1 lg:order-2">
                 <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">
                   MY JOURNEY
                 </span>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-slate-900">{PORTFOLIO_DATA.journey.title}</h2>
                 <p className="text-slate-700 leading-relaxed mb-8 text-lg font-normal">
                   {PORTFOLIO_DATA.journey.description}
                 </p>
                 
                 <div className="space-y-4">
                   {PORTFOLIO_DATA.journey.learnings.map((item, idx) => (
                     <div key={idx} className="flex gap-4 items-start">
                       <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-900 shrink-0 font-serif font-bold text-lg">
                         {idx + 1}
                       </div>
                       <div>
                         <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                         <p className="text-slate-600 font-medium">{item.desc}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>

             </div>
          </div>
        </div>

        {/* Experience & Education Grid */}
        <div id="experience" className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* My Journey (Experience) */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
               <div className="p-2 bg-slate-200 rounded-lg">
                 <Briefcase className="w-5 h-5 text-slate-600" />
               </div>
               My Journey
            </h3>
            
            <div className="relative border-l-2 border-slate-200 ml-4 space-y-8 pb-2">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 group">
                  {/* Timeline Dot */}
                  <span className={`absolute -left-[9px] top-6 w-5 h-5 rounded-full border-4 transition-colors duration-300 ${exp.awardUrl || exp.giftUrl ? 'bg-accent border-purple-200' : 'bg-white border-slate-200 group-hover:border-accent'}`}></span>
                  
                  {/* Card */}
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <h4 className="text-lg font-bold text-slate-900">{exp.role}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-accent font-bold text-sm mb-3">{exp.company}</div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    {/* Action Buttons */}
                    {(exp.certificateUrl || exp.awardUrl || exp.giftUrl) && (
                      <div className="flex flex-wrap gap-6 pt-2 mt-2">
                        {exp.certificateUrl && (
                          <button 
                            onClick={() => setModalContent({ url: exp.certificateUrl!, title: "Experience Certificate" })}
                            className="flex items-center gap-2 text-xs font-bold text-accent hover:text-purple-800 transition-colors group/link"
                          >
                            <Award className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                            View Experience Certificate
                          </button>
                        )}
                        {exp.awardUrl && (
                          <button 
                            onClick={() => setModalContent({ url: exp.awardUrl!, title: "Excellence Award" })}
                            className="flex items-center gap-2 text-xs font-bold text-accent hover:text-purple-800 transition-colors group/link"
                          >
                            <Trophy className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                            View Excellence Award
                          </button>
                        )}
                        {exp.giftUrl && (
                          <button 
                            onClick={() => setModalContent({ url: exp.giftUrl!, title: "Gifting Moments" })}
                            className="flex items-center gap-2 text-xs font-bold text-accent hover:text-purple-800 transition-colors group/link"
                          >
                            <Gift className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                            View Gifting Moments
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
               <div className="p-2 bg-slate-200 rounded-lg">
                 <GraduationCap className="w-5 h-5 text-slate-600" />
               </div>
               Education
            </h3>
             <div className="space-y-4">
               {PORTFOLIO_DATA.education.map((edu, idx) => (
                 <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl hover:border-accent/30 hover:shadow-lg transition-all group">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                       <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded">{edu.period}</span>
                    </div>
                    <p className="text-slate-600 text-sm font-medium mb-1">{edu.institution}</p>
                    {edu.score && (
                      <p className="text-accent text-xs font-bold mt-1">
                        {edu.score}
                      </p>
                    )}
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>

      {/* Document Modal */}
      {modalContent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalContent(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent z-10">
               <span className="text-white font-bold shadow-black drop-shadow-md">{modalContent.title}</span>
               <button 
                  className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors backdrop-blur-md" 
                  onClick={() => setModalContent(null)}
               >
                 <X className="w-6 h-6" />
               </button>
            </div>
            <img src={modalContent.url} alt={modalContent.title} className="w-full h-auto max-h-[80vh] object-contain bg-slate-100" />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;