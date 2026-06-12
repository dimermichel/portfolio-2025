import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_ITEMS } from "../constants";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const assetBaseUrl = `${import.meta.env.BASE_URL}assets`;

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" className="flex items-center gap-3 group relative">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary-500 shadow-lg shadow-primary-500/20 transform group-hover:rotate-12 transition-transform">
                {theme === "dark" ? (
                  <img
                    src={`${assetBaseUrl}/avatar-black.jpg`}
                    alt="Michel Maia"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={`${assetBaseUrl}/avatar-purple.jpg`}
                    alt="Michel Maia"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <span className="font-bold text-xl tracking-tight">
                Michel<span className="text-primary-500">Maia</span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6 bg-white/5 dark:bg-slate-900/30 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10 dark:border-slate-700/30 shadow-sm">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-300 transition-all group-hover:w-full rounded-full"></span>
                  </a>
                ))}
              </div>

              <div className="pl-6 border-l border-slate-200 dark:border-slate-700">
                <button
                  onClick={toggleTheme}
                  className="p-2 cursor-pointer rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun size={20} className="text-amber-400" />
                  ) : (
                    <Moon size={20} className="text-slate-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4 relative z-[60]">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun size={20} className="text-amber-400" />
                ) : (
                  <Moon size={20} />
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold text-slate-800 dark:text-slate-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-full font-medium shadow-lg shadow-primary-500/30"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
