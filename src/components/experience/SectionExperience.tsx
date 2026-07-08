import { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Layers } from 'lucide-react';
import { useLanguage } from '../../contexts/language/useLanguage';
import { EXPERIENCES } from '../../data/experiences';

type ExpType = 'all' | 'work' | 'education';

export default function Experience() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ExpType>('all');

  const filteredExperiences = filter === 'all'
    ? EXPERIENCES
    : EXPERIENCES.filter(exp => exp.type === filter);

  return (
    <section id="experience" className="py-24 px-6 bg-gray-50dark:bg-gray-950 transition-colors overflow-hidden">
      <div className="max-w-4xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
              {t.experience?.title || "Parcours & Expériences"}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {t.experience?.subtitle || "Découvrez mes jalons scolaires et professionnels."}
            </p>
          </div>

          <div className="flex gap-1.5 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 self-start">
            <button
              onClick={() => setFilter('all')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'all' ? 'bg-primary-600 text-white shadow' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Layers className="size-3.5" /> {t.experience?.all || "Tous"}
            </button>
            <button
              onClick={() => setFilter('work')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'work' ? 'bg-primary-600 text-white shadow' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Briefcase className="size-3.5" /> {t.experience?.work || "Expériences Pro"}
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'education' ? 'bg-primary-600 text-white shadow' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <GraduationCap className="size-3.5" /> {t.experience?.education || "Éducation"}
            </button>
          </div>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-8 before:absolute before:top-0 before:bottom-0 before:left-0.5 before:w-0.5 before:bg-linear-to-b before:from-primary-500 before:via-sky-500 before:to-transparent">

          {filteredExperiences.map((exp) => {
            const expText = t.experience.experiences[exp.id];
            if (!expText) return null;

            return (
              <div
                key={exp.id}
                className="relative transition-all duration-500 ease-in-out animate-fade-in group"
              >
                <div className="absolute -left-7.75 sm:-left-9.75 top-6 flex items-center justify-center size-5 rounded-full bg-white dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-700 group-hover:border-primary-500 transition-colors duration-300 shadow-sm">
                <div className={`size-2 rounded-full transition-all duration-300 group-hover:scale-125 ${
                  exp.type === 'work' ? 'bg-primary-500' : 'bg-sky-500'
                }`} />
                </div>

                <div className="bg-gray-50/60 dark:bg-slate-900/40 rounded-2xl p-6 border border-slate-200 dark:border-gray-900/60 shadow-sm backdrop-blur-sm hover:bg-white dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-left">

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                      <Calendar className="size-3.5 text-slate-400" />
                      {expText.date}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
                      <MapPin className="size-3" />
                      {exp.location}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2 rounded-xl border shrink-0 bg-white dark:bg-slate-950 shadow-sm ${
                      exp.type === 'work' ? 'border-primary-100 dark:border-primary-900/30 text-primary-500' : 'border-sky-100 dark:border-sky-900/30 text-sky-500'
                    }`}>
                      {exp.type === 'work' ? <Briefcase className="size-4" /> : <GraduationCap className="size-4" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
                        {expText.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 pl-1">
                    {expText.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/40 dark:border-slate-800/40">
                    {expText.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800/80 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}