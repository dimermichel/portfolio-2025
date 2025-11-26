import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../constants";
import Section from "./ui/Section";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-50/50 dark:bg-slate-900/50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl">
                Showcase of my latest work, side projects, and open source
                contributions.
              </p>
            </div>
            <a
              href="https://github.com/dimermichel"
              className="text-primary-500 hover:text-primary-600 font-medium flex items-center gap-1 group"
            >
              View Github{" "}
              <ExternalLink
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <Section key={project.id} delay={index * 100}>
              <div className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 border border-slate-200 dark:border-slate-700">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60 backdrop-blur-sm">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform"
                        title="View Demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.repoUrl && project.repoUrl !== "#" && (
                      <a
                        href={project.repoUrl}
                        className="p-3 bg-slate-800 text-white rounded-full hover:scale-110 transition-transform"
                        title="View Code"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
