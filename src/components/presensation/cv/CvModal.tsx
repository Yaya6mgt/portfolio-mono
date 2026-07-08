import { useEffect } from 'react';
import { X, Download, Eye } from 'lucide-react';
import { useLanguage } from '../../../contexts/language/useLanguage';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  const { t } = useLanguage();
  const cvPath = "/documents/cv-neutral.pdf";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-4xl h-[85vh] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col shadow-2xl z-10 overflow-hidden animate-scale-up">

        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <h3 className="font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200">
              Curriculum Vitae
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={cvPath}
              download="CV_Yanis_Dev_Fullstack.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white transition-colors rounded-xl font-medium text-xs sm:text-sm shadow-md shadow-primary-600/10"
            >
              <Download className="size-4" />
              <span className="hidden xs:inline">{t.about?.downloadCv || "Télécharger"}</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-slate-100 dark:bg-slate-950 relative">
          <iframe
            src={`${cvPath}#view=FitH`}
            className="hidden md:block w-full h-full border-none"
            title="Mon CV"
          />

          <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm mb-4">
              <Eye className="size-10 text-primary-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Aperçu optimisé pour mobile
              </p>
            </div>
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-slate-900 dark:bg-slate-800 text-white rounded-xl text-sm font-semibold shadow border border-slate-700/50"
            >
              Ouvrir l'aperçu plein écran
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
