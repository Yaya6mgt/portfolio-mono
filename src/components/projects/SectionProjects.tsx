import { useState } from 'react';
import { useLanguage } from '../../contexts/language/useLanguage';
import { PROJECTS, Category, type CategoryType } from '../../data/projects';
import ProjectModal from './ProjectsModal';
import ListProjectsAnimate from './ListProjectsAnimate';
import ListProjectsGrid from './ListProjectsGrid';
import { LayoutGrid, RefreshCw } from 'lucide-react';

export default function SectionProjects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | CategoryType>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(filter));

  const activeProject = PROJECTS.find(p => p.id === selectedProjectId);
  const activeProjectText = activeProject ? t.project.projects[activeProject.id] : null;

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900/50 border-y border-slate-100 dark:border-slate-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {t.project?.title || "Mes réalisations"}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {t.project?.subtitle || "Filtrer mes projets par domaine de compétences :"}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start">
            {viewMode === 'grid' && (
            <div className="flex gap-2 bg-gray-50 dark:bg-gray-900 p-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
              {(['all', Category.WEB, Category.MOBILE, Category.BACK] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-md text-xs font-medium capitalize transition-all ${
                    filter === cat ? 'bg-primary-600 text-white shadow' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {cat === 'all' ? (t.project?.all || 'Tous') : cat}
                </button>
              ))}
            </div>
            )}

            <div className="flex gap-1 bg-gray-50 dark:bg-gray-900 p-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-primary-600 text-white shadow' : 'text-slate-400'}`}
              >
                <LayoutGrid className="size-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-primary-600 text-white shadow' : 'text-slate-400'}`}
              >
                <RefreshCw className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'grid' && (
          <ListProjectsGrid
            projects={filteredProjects}
            onProjectClick={setSelectedProjectId}
          />
        )}
      </div>

      {viewMode === 'list' && (
        <ListProjectsAnimate
          projects={PROJECTS}
          onProjectClick={setSelectedProjectId}
        />
      )}

     {activeProject && activeProjectText && (
        <ProjectModal
          project={activeProject}
          projectText={activeProjectText}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </section>
  );
}
