import { FileText, Download } from 'lucide-react';
import { useLanguage } from '../../../contexts/language/useLanguage';

export default function CvButton() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      <a
        href="documents/cv-neutral.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors rounded-xl font-semibold text-sm border border-slate-700/50 shadow-sm"
      >
        <FileText className="size-4" />
        {t.about?.viewCv || "Voir mon CV"}
      </a>

      <a
        href="/cv-yanis.pdf"
        download="CV_Yanis_Dev_Fullstack.pdf"
        className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white transition-colors rounded-xl font-semibold text-sm shadow-md shadow-primary-600/10"
      >
        <Download className="size-4" />
        {t.about?.downloadCv || "Télécharger"}
      </a>
    </div>
  );
}
