import NavBar from '../components/naviguation/NavBar';
import SectionPresensation from '../components/presensation/SectionPresensation';
import { useLanguage } from '../contexts/language/useLanguage';
import SectionProjects from '../components/projects/SectionProjects';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-slate-900 dark:text-slate-100 font-sans antialiased scroll-smooth transition-colors duration-300">

      <NavBar />

      <SectionPresensation />

      <SectionProjects />

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
        {t.footer.technologies}<br />{t.footer.copyright}
      </footer>
    </div>
  );
}
