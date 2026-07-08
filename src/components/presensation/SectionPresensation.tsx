import { BriefcaseBusiness, Languages, MapPin, GraduationCap } from "lucide-react";
import { useLanguage } from '../../contexts/language/useLanguage';

import TypewriterText from "../ui/TypewriterText";

function SectionPresensation()
{
  const { t } = useLanguage();

  return (
    <section id="about" className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-[85vh]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-2 flex flex-col justify-center">
          <TypewriterText
            text={t.about.title}
            className="font-mono text-sm text-primary dark:text-primary-300 mb-3"
            typingSpeed={65}
            startDelay={120}
            loop={false}
            showCursor
          />
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            Yanis Mignot
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-500 dark:text-slate-400 mb-6">
            {t.about.subtitle}
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
            {t.about.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm border-t border-slate-200/80 dark:border-slate-800/80 pt-6">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-950/40 px-4 py-3 shadow-sm shadow-slate-200/40 dark:shadow-none backdrop-blur-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-utils-location/15 text-utils-location">
                <MapPin className="size-4" />
              </span>
              <div className="leading-tight">
                <div className="font-medium text-slate-900 dark:text-white">{t.about.cardLocation.title}</div>
                <div className="text-slate-500 dark:text-slate-400">{t.about.cardLocation.subtitle}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-950/40 px-4 py-3 shadow-sm shadow-slate-200/40 dark:shadow-none backdrop-blur-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-utils-education/15 text-utils-education">
                <GraduationCap className="size-4" />
              </span>
              <div className="leading-tight">
                <div className="font-medium text-slate-900 dark:text-white">{t.about.cardEducation.title}</div>
                <div className="text-slate-500 dark:text-slate-400">{t.about.cardEducation.subtitle}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-950/40 px-4 py-3 shadow-sm shadow-slate-200/40 dark:shadow-none backdrop-blur-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-utils-availability/15 text-utils-availability">
                <BriefcaseBusiness className="size-4" />
              </span>
              <div className="leading-tight">
                <div className="font-medium text-slate-900 dark:text-white">{t.about.cardAvailability.title}</div>
                <div className="text-slate-500 dark:text-slate-400">{t.about.cardAvailability.subtitle}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-950/40 px-4 py-3 shadow-sm shadow-slate-200/40 dark:shadow-none backdrop-blur-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-utils-language/15 text-utils-language">
                <Languages className="size-4" />
              </span>
              <div className="leading-tight">
                <div className="font-medium text-slate-900 dark:text-white">{t.about.cardLanguage.title}</div>
                <div className="text-slate-500 dark:text-slate-400">{t.about.cardLanguage.subtitle}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white transition-all rounded-lg font-semibold shadow-lg shadow-primary-700/30">
              {t.about.btnProjects}
            </a>
            <a href="#contact" className="px-6 py-3 bg-slate-100 dark:bg-gray-900 hover:bg-slate-200 dark:hover:bg-gray-800 transition-all rounded-lg font-semibold border border-slate-200 dark:border-gray-700">
              {t.about.btnContact}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center lg:border-l lg:border-slate-200 lg:dark:border-gray-900 lg:pl-8">
          <div className="relative group w-44 h-44 mb-6">
            <div className="absolute inset-0 bg-linear-to-tr from-primary-500 to-primary-900 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
            <img
              src="/photo_moi.jpeg"
              alt="Yanis Mignot"
              className="relative w-full h-full object-cover rounded-full border-2 border-slate-200 dark:border-gray-900 grayscale-20 group-hover:grayscale-0 transition duration-300"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-xs">
            {t.about.softSkills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/60"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default SectionPresensation;
