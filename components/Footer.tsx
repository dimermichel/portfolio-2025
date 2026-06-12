import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="font-bold text-xl tracking-tight block mb-2">
              Michel<span className="text-primary-500">Maia</span>
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              © {currentYear} Michel Maia. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              const isMailto = link.url.startsWith("mailto:");
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target={isMailto ? undefined : "_blank"}
                  rel={isMailto ? undefined : "noopener noreferrer"}
                  className="text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.platform}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;