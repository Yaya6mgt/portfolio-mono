import { useState } from 'react';
import NavBar from '../components/naviguation/NavBar';
import SectionPresensation from '../components/presensation/SectionPresensation';

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: 'web' | 'mobile' | 'back';
}

const PROJECTS: Project[] = [
  {
    title: 'E-Commerce API',
    description: 'API REST robuste avec gestion de panier, authentification JWT et paiement Stripe.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'TypeScript'],
    category: 'back',
  },
  {
    title: 'App de Fitness',
    description: 'Application mobile iOS/Android de suivi de performances avec graphiques natifs.',
    tags: ['React Native', 'Tailwind', 'Firebase'],
    category: 'mobile',
  },
  {
    title: 'SaaS Dashboard',
    description: "Interface d'administration complexe avec mise à jour des données en temps réel.",
    tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    category: 'web',
  },
];

export default function HomePage() {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'back'>('all');

  const filteredProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased scroll-smooth transition-colors duration-300">

      <NavBar />

      <SectionPresensation />

      <section id="projects" className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Mes réalisations</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Filtrer mes projets par domaine de compétences :</p>
            </div>

            <div className="flex gap-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 self-start">
              {(['all', 'web', 'mobile', 'back'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-md text-xs font-medium capitalize transition-all ${
                    filter === cat
                      ? 'bg-primary-600 text-white shadow'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {cat === 'all' ? 'Tous' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all group shadow-sm">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono px-2 py-0.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded uppercase font-semibold border border-primary-100 dark:border-primary-800/60">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-900">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">On travaille ensemble ?</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8">
          Je suis actuellement disponible pour de nouvelles opportunités en CDI ou en Freelance.
        </p>
        <a
          href="mailto:yayadeusty@gmail.com"
          className="inline-block px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white transition-all rounded-lg font-semibold shadow-xl shadow-primary-700/30"
        >
          Envoyer un e-mail
        </a>
      </section>

      <footer className="py-8 border-t border-slate-200 dark:border-slate-900 text-center text-xs text-slate-400 dark:text-slate-600 font-mono">
        Technologies utilisées : React, TypeScript, TailwindCSS, Vite.<br />© {new Date().getFullYear()} - Conçu par Yanis Mignot. Tous droits réservés.
      </footer>
    </div>
  );
}
