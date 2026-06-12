import React from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS, SKILLS } from "../constants";
import Magnetic from "./ui/Magnetic";

const Hero: React.FC = () => {
  const isAvailable = true;

  const linkedInUrl =
    SOCIAL_LINKS.find((link) => link.platform === "LinkedIn")?.url || "#";
  const githubUrl =
    SOCIAL_LINKS.find((link) => link.platform === "GitHub")?.url || "#";

  // Helper to get featured skills dynamically
  const getFeaturedSkills = () => {
    const frontend = SKILLS.find((c) => c.name === "Frontend")?.skills || [];
    const backend = SKILLS.find((c) => c.name === "Backend")?.skills || [];
    const databaseCloud =
      SKILLS.find((c) => c.name === "Database & Cloud")?.skills || [];
    return [
      ...frontend.slice(0, 2),
      ...backend.slice(0, 2),
      ...databaseCloud.slice(0, 1),
    ];
  };

  const featuredSkills = getFeaturedSkills();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium transition-colors ${
                isAvailable
                  ? "bg-primary-500/10 border-primary-500/20 text-primary-600 dark:text-primary-400"
                  : "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isAvailable ? "bg-emerald-400" : "bg-red-400"
                  }`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    isAvailable ? "bg-emerald-500" : "bg-red-500"
                  }`}
                ></span>
              </span>
              {isAvailable
                ? "Available for new projects"
                : "Currently fully booked"}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Building digital <br />
              <span className="text-gradient">experiences</span> that matter.
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              I'm{" "}
              <span className="font-semibold text-slate-900 dark:text-slate-200">
                Michel Maia
              </span>
              , a Full Stack Developer specializing in building exceptional
              digital products. I transform complex problems into elegant,
              scalable solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Magnetic>
                <a
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-1 transition-all flex items-center gap-2 border border-primary-700/50"
                >
                  View Work <ArrowRight size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-4 glass-card rounded-full font-medium text-slate-700 dark:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all flex items-center gap-2"
                >
                  Resume <Download size={18} />
                </a>
              </Magnetic>
            </div>

            <div className="pt-8 flex items-center gap-6 text-slate-400">
              <span className="text-sm font-medium uppercase tracking-wider">
                Follow me
              </span>
              <div className="h-px w-12 bg-slate-300 dark:bg-slate-700"></div>
              <div className="flex gap-4">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:dimermichel@gmail.com"
                  className="hover:text-primary-500 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block relative">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto animate-float">
              {/* Abstract shapes composition */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] glass-card rounded-2xl border-t border-white/20 shadow-2xl flex flex-col overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Window Header / Controls */}
                <div className="w-full p-4 flex gap-2 shrink-0 z-10 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>

                {/* Code snippet decoration */}
                <div className="flex-1 p-6 flex items-center opacity-90">
                  <div className="space-y-2 font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 w-full leading-relaxed">
                    <p>
                      <span className="text-primary-400">const</span>{" "}
                      <span className="text-blue-400">developer</span> ={" "}
                      <span className="text-yellow-500">{"{"}</span>
                    </p>
                    <p className="pl-4">
                      name:{" "}
                      <span className="text-green-400">"Michel Maia"</span>,
                    </p>
                    <p className="pl-4">
                      role:{" "}
                      <span className="text-green-400">"Full Stack Dev"</span>,
                    </p>
                    <p className="pl-4">
                      skills: [
                      {featuredSkills.map((skill, index) => (
                        <React.Fragment key={skill}>
                          <span className="text-green-400">"{skill}"</span>
                          {index < featuredSkills.length - 1 && ", "}
                        </React.Fragment>
                      ))}
                      ],
                    </p>
                    <p className="pl-4">
                      hardWorker: <span className="text-primary-400">true</span>
                      ,
                    </p>
                    <p className="pl-4">
                      passion:{" "}
                      <span className="text-primary-400">Infinity</span>
                    </p>
                    <p>
                      <span className="text-yellow-500">{"}"}</span>;
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}

              <div className="absolute -top-4 -right-4 p-4 glass-card rounded-xl shadow-xl animate-pulse-slow border border-white/10">
                <Magnetic>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Performance
                      </p>
                      <p className="font-bold text-slate-900 dark:text-white">
                        100%
                      </p>
                    </div>
                  </div>
                </Magnetic>
              </div>
              <div
                className="absolute -bottom-8 -left-4 p-4 glass-card rounded-xl shadow-xl animate-float border border-white/10"
                style={{ animationDelay: "1s" }}
              >
                <Magnetic>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Projects
                      </p>
                      <p className="font-bold text-slate-900 dark:text-white">
                        Completed
                      </p>
                    </div>
                  </div>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
