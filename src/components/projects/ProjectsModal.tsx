import { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import type { Project, ProjectText } from '../../data/projects';
import { useLanguage } from '../../contexts/language/useLanguage';

interface ProjectModalProps {
  project: Project;
  projectText: ProjectText;
  onClose: () => void;
}

export default function ProjectModal({ project, projectText, onClose }: ProjectModalProps)
{
  const { t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-2xl z-10 scrollbar-thin">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="size-5" />
        </button>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.category.map((cat) => (
            <span key={cat} className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded uppercase font-semibold">
              {cat}
            </span>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
          {projectText.title}
        </h3>

        <div className="text-slate-600 dark:text-slate-400 text-sm md:text-base whitespace-pre-line leading-relaxed mb-6">
          {projectText.longDescription}
        </div>

        {projectText.features && projectText.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">{t.project.modal.keyFeatures}</h4>
            <ul className="space-y-2">
              {projectText.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-primary-500 mt-0.5">🔹</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {projectText.personalNote && (
          <div className="mb-6 p-4 rounded-xl bg-primary-100/50 dark:bg-primary-900/80 border border-primary-100/50 dark:border-primary-900/30">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-1">{t.project.modal.personalNote}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
              {projectText.personalNote}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-8 border-t border-slate-100 dark:border-slate-800 pt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors rounded-xl font-semibold text-sm border border-slate-700"
            >
              <FaGithub className="size-4" /> {t.project.modal.sourceCode || 'Code Source'}
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white transition-colors rounded-xl font-semibold text-sm shadow-lg shadow-primary-600/20"
            >
              <ExternalLink className="size-4" /> {t.project.modal.urlProject || 'Lien du projet'}
            </a>
          )}
        </div>

      </div>
    </div>
  );
}