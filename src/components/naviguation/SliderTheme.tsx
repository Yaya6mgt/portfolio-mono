import { Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/theme/useTheme';

const THEME_OPTIONS = [
  { key: 'light', label: 'Theme clair', Icon: Sun, activeText: 'text-utils-sun' },
  { key: 'dark', label: 'Theme sombre', Icon: Moon, activeText: 'text-utils-moon' },
  { key: 'system', label: 'Theme systeme', Icon: Laptop, activeText: 'text-utils-laptop' },
] as const;

function SliderTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-full border border-slate-200 dark:border-slate-800 relative">
      {THEME_OPTIONS.map(({ key, label, Icon, activeText }) => (
        <button
          key={key}
          type="button"
          aria-label={label}
          title={label}
          onClick={() => setTheme(key)}
          className={`px-3 py-1 rounded-full z-10 transition-all duration-200 ${
            theme === key
              ? `bg-white dark:bg-slate-800 ${activeText} shadow-sm`
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <span className="sr-only">{label}</span>
          <Icon className="h-4 w-4" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}

export default SliderTheme;
