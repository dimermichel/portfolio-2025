import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import Cursor from "./components/ui/Cursor";

const getStoredTheme = (): "light" | "dark" => {
  try {
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
};

const setStoredTheme = (theme: "light" | "dark") => {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Ignore storage write failures (e.g., private mode restrictions).
  }
};

const assetBaseUrl = `${import.meta.env.BASE_URL}assets`;

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getStoredTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    setStoredTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden font-sans selection:bg-primary-500/30 selection:text-primary-500">
      <Cursor />
      {/* Dynamic Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-800/20 dark:bg-primary-900/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-800/20 dark:bg-violet-900/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-800/20 dark:bg-indigo-900/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-5 mix-blend-soft-light"
          style={{ backgroundImage: `url(${assetBaseUrl}/noise.svg)` }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
