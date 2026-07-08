import { useState } from "react";
import { Menu, X } from 'lucide-react';
import SliderTheme from "./SliderTheme";
import TypewriterText from "../ui/TypewriterText";
import SliderLanguage from "./SliderLanguage";
import { useLanguage } from "../../contexts/language/useLanguage";

function NavBar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50 px-6 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">

        <div className="shrink-0">
          <TypewriterText
            text="<DevFullstack />"
            className="font-mono text-lg sm:text-xl font-bold text-primary-700 dark:text-primary-300"
            typingSpeed={65}
            startDelay={120}
            loop={true}
            showCursor
          />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-primary-600 dark:hover:text-primary-300 transition-colors">{t.navbar.presentation}</a>
            <a href="#projects" className="hover:text-primary-600 dark:hover:text-primary-300 transition-colors">{t.navbar.projects}</a>
            <a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-300 transition-colors">{t.navbar.contact}</a>
          </div>
          <SliderTheme />
          <SliderLanguage />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="size-6 text-primary-600 dark:text-primary-400" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-50/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out origin-top shadow-xl ${
          isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-lg py-2.5 px-3 rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all"
            >
              {t.navbar.presentation}
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-lg py-2.5 px-3 rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all"
            >
              {t.navbar.projects}
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-lg py-2.5 px-3 rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all"
            >
              {t.navbar.contact}
            </a>
          </div>

          <hr className="border-slate-200 dark:border-slate-800/60" />

          <div className="flex items-center justify-between p-3.5 bg-slate-100/60 dark:bg-slate-950/40 rounded-2xl border border-slate-200/40 dark:border-slate-800/40">
            <div className="flex items-center gap-5">
              <SliderTheme />
              <SliderLanguage />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
