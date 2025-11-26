import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../constants';
import Section from './ui/Section';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Professional <span className="text-gradient">Journey</span></h2>
        </Section>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0 space-y-12">
            {EXPERIENCE.map((item, index) => (
              <Section key={item.id} delay={index * 100}>
                <div className="relative pl-8 md:pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-slate-950 shadow-lg shadow-primary-500/50"></div>
                  
                  <div className="glass-card p-6 rounded-xl hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h3>
                        <div className="text-primary-600 dark:text-primary-400 font-medium flex items-center gap-2">
                          <Briefcase size={16} />
                          {item.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full w-fit">
                        <Calendar size={14} />
                        {item.period}
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500/50 flex-shrink-0"></span>
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      {item.skills.map(skill => (
                        <span key={skill} className="text-xs font-mono text-slate-500 dark:text-slate-500">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;