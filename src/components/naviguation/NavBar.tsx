import SliderTheme from "./SliderTheme";
import TypewriterText from "../ui/TypewriterText";
import SliderLanguage from "./SliderLanguage";

function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50 px-6 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center gap-4">
        <TypewriterText
          text="<DevFullstack />"
          className="font-mono text-xl font-bold text-primary-700 dark:text-primary-300"
          typingSpeed={65}
          startDelay={120}
          loop={true}
          showCursor
        />

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-primary-600 dark:hover:text-primary-300 transition-colors">Présentation</a>
            <a href="#projects" className="hover:text-primary-600 dark:hover:text-primary-300 transition-colors">Projets</a>
            <a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-300 transition-colors">Contact</a>
          </div>
          <SliderTheme />
          <SliderLanguage />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
