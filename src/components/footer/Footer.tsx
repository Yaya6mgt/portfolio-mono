import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../contexts/language/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  const email = "yanis6mgt@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/yanis6mgt";
  const githubUrl = "https://github.com/Yaya6mgt";

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-slate-200 dark:border-slate-800/60 transition-colors">

      <div className="px-6 max-w-5xl mx-auto text-center py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          {t.toWork.title}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
          {t.toWork.subtitle}
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white transition-all rounded-xl font-semibold shadow-xl shadow-primary-600/20 hover:-translate-y-0.5 active:translate-y-0"
        >
          <Mail className="size-4" />
          {t.toWork.mail}
        </a>
      </div>

      <div className="max-w-5xl mx-auto border-t border-slate-200/60 dark:border-slate-800/40"></div>

      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 font-mono">
            Direct Contact
          </span>
          <a
            href={`mailto:${email}`}
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-mono"
          >
            {email}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-200/50 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 border border-slate-200/20 dark:border-slate-700/30 transition-all shadow-2xs"
            title="LinkedIn"
          >
            <FaLinkedin className="size-5" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-200/50 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 border border-slate-200/20 dark:border-slate-700/30 transition-all shadow-2xs"
            title="GitHub"
          >
            <FaGithub className="size-5" />
          </a>
        </div>

        <div className="text-slate-500 dark:text-slate-400 text-xs font-mono md:text-right leading-relaxed">
          <span>{t.footer.technologies}</span>
          <br />
          <span className="text-slate-400 dark:text-slate-500">{t.footer.copyright}</span>
        </div>

      </div>
    </footer>
  );
}
