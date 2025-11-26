import React from 'react';
import { Layout, Server, Database, Terminal, Code2 } from 'lucide-react';
import { SKILLS } from '../constants';
import Section from './ui/Section';

const getCategoryIcon = (categoryName: string) => {
  switch (categoryName) {
    case "Frontend": return Layout;
    case "Backend": return Server;
    case "Database & Cloud": return Database;
    case "Tools & DevOps": return Terminal;
    default: return Code2;
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              A curated set of technologies I use to build robust, scalable, and high-performing web applications.
            </p>
          </div>
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, index) => {
            const Icon = getCategoryIcon(category.name);
            return (
              <Section key={category.name} delay={index * 100}>
                <div className="glass-card h-full p-6 rounded-2xl hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary-500/10 text-primary-500 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary-500 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 
                        hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/30 hover:scale-105
                        transition-all duration-300 cursor-default select-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;