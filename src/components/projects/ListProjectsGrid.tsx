import { useLanguage } from '../../contexts/language/useLanguage';
import type { Project } from '../../data/projects';

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (id: string) => void;
}

export default function ListProjectsGrid({ projects, onProjectClick }: ProjectGridProps) {
  const { t } = useLanguage();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {projects.map((project) => {
        const projectText = t.project.projects[project.id];
        if (!projectText) return null;

        return (
          <div
            key={project.id}
            onClick={() => onProjectClick(project.id)}
            className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-gray-900 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 group shadow-sm cursor-pointer"
          >
            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.category.map((cat) => (
                  <span key={cat} className="text-[10px] font-mono px-2 py-0.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded uppercase font-semibold border border-primary-100 dark:border-primary-800/60">
                    {cat}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                {projectText.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                {projectText.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-mono bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-900">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
