import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar } from "lucide-react";
import { EXPERIENCE } from "../constants";
import Section from "./ui/Section";

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const scopeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(".timeline-progress", { scaleY: 1 });
        return;
      }

      gsap.fromTo(
        ".experience-head",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".experience-head", start: "top 85%" },
        },
      );

      // Indigo progress line draws itself as you scroll the timeline
      gsap.to(".timeline-progress", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-wrap",
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.5,
        },
      });

      gsap.utils.toArray<HTMLElement>(".experience-item").forEach((item) => {
        gsap.fromTo(
          item,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 85%" },
          },
        );
      });
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={scopeRef} id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section>
          <h2 className="experience-head text-3xl md:text-4xl font-bold mb-16 text-center">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </Section>

        <div className="max-w-3xl mx-auto">
          <div className="timeline-wrap relative ml-4 md:ml-0 space-y-12">
            {/* Static track + animated progress line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />
            <div className="timeline-progress absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-violet-500" />

            {EXPERIENCE.map((item, index) => (
              <Section key={item.id} delay={index * 100}>
                <div className="experience-item relative pl-8 md:pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[7px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-slate-950 shadow-lg shadow-primary-500/50"></div>

                  <div className="glass-card p-6 rounded-xl hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {item.role}
                        </h3>
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
                        <li
                          key={i}
                          className="text-slate-600 dark:text-slate-400 flex items-start gap-2"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500/50 flex-shrink-0"></span>
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-mono text-slate-500 dark:text-slate-500"
                        >
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
