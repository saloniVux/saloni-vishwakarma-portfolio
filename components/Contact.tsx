import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="md:w-2/5 bg-slate-50 p-10 flex flex-col justify-between border-r border-slate-200">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-slate-900">Let's Talk</h3>
              <p className="text-slate-600 mb-8 font-medium">
                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.
                <br /><br />
                You can also ask my <span className="text-accent font-bold">AI Assistant</span> for instant answers about my work!
              </p>
              
              <div className="space-y-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-accent shadow-sm">
                        <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email me at</span>
                  </div>
                  <a 
                    href={`mailto:${PORTFOLIO_DATA.email}`} 
                    className="text-lg md:text-xl font-bold text-slate-900 hover:text-accent transition-colors break-words leading-tight block"
                  >
                    {PORTFOLIO_DATA.email}
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-accent shadow-sm">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Based in</span>
                  </div>
                  <span className="text-lg font-bold text-slate-900 block">
                    {PORTFOLIO_DATA.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-0 pt-6 border-t border-slate-200">
               <p className="text-sm text-slate-500 font-medium">© {new Date().getFullYear()} {PORTFOLIO_DATA.name}</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-3/5 p-10 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-400"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-400"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder:text-slate-400"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-accent text-white font-bold py-3.5 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-accent/20"
              >
                Send Message
                <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;