import React from 'react';
import {
  Layers,
  ShieldAlert,
  Cpu,
  Sparkles,
  BookOpen,
  Download,
  BarChart3,
  LayoutGrid,
  FileCheck2,
  Globe2,
  Terminal,
  Compass,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';

interface HeaderProps {
  onOpenPrinciples: () => void;
  onOpenExport: () => void;
  onOpenMasterPrompt?: () => void;
  totalCount: number;
  activeTab: 'cases' | 'dashboard' | 'msa' | 'murs';
  onChangeTab: (tab: 'cases' | 'dashboard' | 'msa' | 'murs') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenPrinciples,
  onOpenExport,
  onOpenMasterPrompt,
  totalCount,
  activeTab,
  onChangeTab,
}) => {
  const { language, setLanguage, t } = useLanguage();

  const languageOptions: { code: Language; label: string; flag: string }[] = [
    { code: 'es', label: 'Español', flag: 'ES' },
    { code: 'en', label: 'English (US/UK)', flag: 'EN' },
    { code: 'pt', label: 'Português', flag: 'PT' },
    { code: 'de', label: 'Deutsch', flag: 'DE' },
  ];

  return (
    <header className="border-b border-stone-200 bg-stone-50/90 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center font-mono font-bold text-base shadow-sm">
            57
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-semibold tracking-tight text-stone-900">
                Aislamiento Fractal de Casos
              </h1>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium bg-stone-200 text-stone-700">
                {totalCount}/57 {language === 'en' ? 'Mapped' : 'Mapeados'}
              </span>
            </div>
            <p className="text-xs text-stone-500 line-clamp-1">
              {t.nav.tagline} | {t.nav.badge}
            </p>
          </div>
        </div>

        {/* Primary View Switcher, Language Selector & Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Main Navigation Tabs */}
          <div className="bg-stone-200/80 p-1 rounded-xl flex items-center gap-1 border border-stone-300 shadow-inner">
            <button
              id="tab-cases"
              onClick={() => onChangeTab('cases')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'cases'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{t.nav.cases}</span>
            </button>

            <button
              id="tab-dashboard"
              onClick={() => onChangeTab('dashboard')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>{t.nav.dashboard}</span>
            </button>

            <button
              id="tab-msa"
              onClick={() => onChangeTab('msa')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'msa'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>{t.nav.msa}</span>
            </button>

            <button
              id="tab-murs"
              onClick={() => onChangeTab('murs')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'murs'
                  ? 'bg-purple-800 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-purple-300" />
              <span>{t.nav.murs}</span>
            </button>
          </div>

          {/* Language Switcher (Client Language Selector) */}
          <div className="relative inline-flex items-center bg-white border border-stone-300 rounded-lg px-2 py-1 shadow-2xs">
            <Globe2 className="w-3.5 h-3.5 text-stone-500 mr-1.5 shrink-0" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-xs font-semibold text-stone-800 focus:outline-none cursor-pointer pr-1"
              aria-label="Seleccionar idioma del cliente"
            >
              {languageOptions.map((opt) => (
                <option key={opt.code} value={opt.code}>
                  {opt.flag} · {opt.label}
                </option>
              ))}
            </select>
          </div>

          {onOpenMasterPrompt && (
            <button
              id="btn-master-prompt"
              onClick={onOpenMasterPrompt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-900 hover:bg-amber-500/20 transition-colors shadow-2xs"
            >
              <Terminal className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden sm:inline">Prompt Maestro</span>
            </button>
          )}

          <button
            id="btn-principles"
            onClick={onOpenPrinciples}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors shadow-2xs"
          >
            <Cpu className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden sm:inline">{t.nav.principles}</span>
          </button>

          <button
            id="btn-export"
            onClick={onOpenExport}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-900 text-stone-100 hover:bg-stone-800 transition-colors shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.nav.export}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
