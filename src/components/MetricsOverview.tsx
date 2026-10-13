import React from 'react';
import { StructureType, ExitKeyType, CaseStudy } from '../types';
import { DollarSign, User, Users, CheckCircle2, Archive, ArrowRightLeft, AlertOctagon, XCircle, BarChart3, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface MetricsOverviewProps {
  cases: CaseStudy[];
  selectedStructure: StructureType | 'ALL';
  onSelectStructure: (s: StructureType | 'ALL') => void;
  selectedExitKey: ExitKeyType | 'ALL';
  onSelectExitKey: (k: ExitKeyType | 'ALL') => void;
  onOpenDashboard?: () => void;
}

export const MetricsOverview: React.FC<MetricsOverviewProps> = ({
  cases,
  selectedStructure,
  onSelectStructure,
  selectedExitKey,
  onSelectExitKey,
  onOpenDashboard,
}) => {
  const { t, language } = useLanguage();
  const financialCount = cases.filter((c) => c.affectedStructures.types.includes('Financiera')).length;
  const humanCount = cases.filter((c) => c.affectedStructures.types.includes('Humana')).length;
  const socialCount = cases.filter((c) => c.affectedStructures.types.includes('Social')).length;

  const exitCounts: Record<ExitKeyType, number> = {
    'Éxito': cases.filter((c) => c.exitKey.status === 'Éxito').length,
    'Archivado': cases.filter((c) => c.exitKey.status === 'Archivado').length,
    'Delegado': cases.filter((c) => c.exitKey.status === 'Delegado').length,
    'Baja': cases.filter((c) => c.exitKey.status === 'Baja').length,
    'Fallido': cases.filter((c) => c.exitKey.status === 'Fallido').length,
  };

  return (
    <div className="bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        {onOpenDashboard && (
          <div className="mb-3 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-amber-200 text-amber-900">
                <BarChart3 className="w-3.5 h-3.5" />
              </span>
              <span className="text-stone-700">
                <strong>Análisis para Directores:</strong> {t.metrics.directorBannerTitle}
              </span>
            </div>
            <button
              onClick={onOpenDashboard}
              className="inline-flex items-center gap-1 font-semibold text-amber-950 hover:text-amber-800 bg-white px-3 py-1 rounded-lg border border-amber-300 shadow-2xs hover:bg-amber-100/50 transition-colors shrink-0 text-xs"
            >
              <span>{t.metrics.directorBannerBtn}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Structures Section */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                {t.metrics.title}
              </span>
              {selectedStructure !== 'ALL' && (
                <button
                  onClick={() => onSelectStructure('ALL')}
                  className="text-[11px] font-medium text-stone-600 hover:text-stone-900 underline"
                >
                  {language === 'en' ? 'Reset filter' : 'Restablecer filtro'}
                </button>
              )}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                id="filter-struct-fin"
                onClick={() => onSelectStructure(selectedStructure === 'Financiera' ? 'ALL' : 'Financiera')}
                className={`p-2.5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                  selectedStructure === 'Financiera'
                    ? 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500/20'
                    : 'border-stone-200 hover:border-emerald-300 bg-stone-50/50 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-emerald-800 flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                    {t.structures.Financiera}
                  </span>
                  <span className="font-mono text-sm font-bold text-emerald-900">{financialCount}</span>
                </div>
                <p className="text-[10px] text-emerald-700/80 mt-1 line-clamp-1">
                  {t.metrics.financialDesc}
                </p>
              </button>

              <button
                id="filter-struct-hum"
                onClick={() => onSelectStructure(selectedStructure === 'Humana' ? 'ALL' : 'Humana')}
                className={`p-2.5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                  selectedStructure === 'Humana'
                    ? 'border-amber-500 bg-amber-50 ring-1 ring-amber-500/20'
                    : 'border-stone-200 hover:border-amber-300 bg-stone-50/50 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-amber-800 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-amber-600" />
                    {t.structures.Humana}
                  </span>
                  <span className="font-mono text-sm font-bold text-amber-900">{humanCount}</span>
                </div>
                <p className="text-[10px] text-amber-700/80 mt-1 line-clamp-1">
                  {t.metrics.humanDesc}
                </p>
              </button>

              <button
                id="filter-struct-soc"
                onClick={() => onSelectStructure(selectedStructure === 'Social' ? 'ALL' : 'Social')}
                className={`p-2.5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                  selectedStructure === 'Social'
                    ? 'border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500/20'
                    : 'border-stone-200 hover:border-indigo-300 bg-stone-50/50 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-indigo-800 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-indigo-600" />
                    {t.structures.Social}
                  </span>
                  <span className="font-mono text-sm font-bold text-indigo-900">{socialCount}</span>
                </div>
                <p className="text-[10px] text-indigo-700/80 mt-1 line-clamp-1">
                  {t.metrics.socialDesc}
                </p>
              </button>
            </div>
          </div>

          {/* Exit Keys Section */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                {t.metrics.exitKeyFilter}
              </span>
              {selectedExitKey !== 'ALL' && (
                <button
                  onClick={() => onSelectExitKey('ALL')}
                  className="text-[11px] font-medium text-stone-600 hover:text-stone-900 underline"
                >
                  {t.metrics.allCases}
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(['Éxito', 'Archivado', 'Delegado', 'Baja', 'Fallido'] as ExitKeyType[]).map((status) => {
                const isSelected = selectedExitKey === status;
                const count = exitCounts[status];
                return (
                  <button
                    key={status}
                    id={`filter-exit-${status}`}
                    onClick={() => onSelectExitKey(isSelected ? 'ALL' : status)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      isSelected
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100 hover:border-stone-300'
                    }`}
                  >
                    {status === 'Éxito' && <CheckCircle2 className={`w-3 h-3 ${isSelected ? 'text-emerald-300' : 'text-emerald-600'}`} />}
                    {status === 'Archivado' && <Archive className={`w-3 h-3 ${isSelected ? 'text-amber-300' : 'text-amber-600'}`} />}
                    {status === 'Delegado' && <ArrowRightLeft className={`w-3 h-3 ${isSelected ? 'text-blue-300' : 'text-blue-600'}`} />}
                    {status === 'Baja' && <AlertOctagon className={`w-3 h-3 ${isSelected ? 'text-orange-300' : 'text-orange-600'}`} />}
                    {status === 'Fallido' && <XCircle className={`w-3 h-3 ${isSelected ? 'text-rose-300' : 'text-rose-600'}`} />}
                    <span>{t.exitKeys[status] || status}</span>
                    <span
                      className={`ml-1 px-1.5 py-0.2 rounded font-mono text-[10px] ${
                        isSelected ? 'bg-stone-700 text-stone-100' : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
