import { useLanguage } from "../../contexts/language/useLanguage";

function SliderLanguage() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-full border border-slate-200 dark:border-slate-800">
      <button
        onClick={() => setLanguage('fr')}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase transition-all ${
          language === 'fr' ? 'bg-white dark:bg-slate-800 text-primary-500' : 'text-slate-400'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase transition-all ${
          language === 'en' ? 'bg-white dark:bg-slate-800 text-primary-500' : 'text-slate-400'
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default SliderLanguage;