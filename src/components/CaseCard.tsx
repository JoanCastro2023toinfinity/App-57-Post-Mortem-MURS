import React from 'react';
import { CaseStudy, StructureType } from '../types';
import {
  DollarSign,
  User,
  Users,
  CheckCircle2,
  Archive,
  ArrowRightLeft,
  AlertOctagon,
  XCircle,
  ExternalLink,
  Copy,
  ChevronRight,
  Briefcase
} from 'lucide-react';

interface CaseCardProps {
  caseStudy: CaseStudy;
  onSelect: (caseStudy: CaseStudy) => void;
  onQuickCopy: (caseStudy: CaseStudy) => void;
}

export const CaseCard: React.FC<CaseCardProps> = ({ caseStudy, onSelect, onQuickCopy }) => {
  const getExitBadge = (status: string) => {
    switch (status) {
      case 'Éxito':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Éxito
          </span>
        );
      case 'Archivado':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-100 text-amber-800 border border-amber-200">
            <Archive className="w-3 h-3 text-amber-600" /> Archivado
          </span>
        );
      case 'Delegado':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-blue-100 text-blue-800 border border-blue-200">
            <ArrowRightLeft className="w-3 h-3 text-blue-600" /> Delegado
          </span>
        );
      case 'Baja':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-orange-100 text-orange-800 border border-orange-200">
            <AlertOctagon className="w-3 h-3 text-orange-600" /> Baja
          </span>
        );
      case 'Fallido':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-rose-100 text-rose-800 border border-rose-200">
            <XCircle className="w-3 h-3 text-rose-600" /> Fallido
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-stone-100 text-stone-700">
            {status}
          </span>
        );
    }
  };

  const renderStructureBadge = (type: StructureType) => {
    if (type === 'Financiera') {
      return (
        <span
          key={type}
          className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide bg-emerald-50 text-emerald-800 border border-emerald-200"
          title={caseStudy.affectedStructures.financialDetails}
        >
          <DollarSign className="w-3 h-3 text-emerald-600" /> Financiera
        </span>
      );
    }
    if (type === 'Humana') {
      return (
        <span
          key={type}
          className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide bg-amber-50 text-amber-800 border border-amber-200"
          title={caseStudy.affectedStructures.humanDetails}
        >
          <User className="w-3 h-3 text-amber-600" /> Humana
        </span>
      );
    }
    return (
      <span
        key={type}
        className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide bg-indigo-50 text-indigo-800 border border-indigo-200"
        title={caseStudy.affectedStructures.socialDetails}
      >
        <Users className="w-3 h-3 text-indigo-600" /> Social
      </span>
    );
  };

  return (
    <div
      id={`card-case-${caseStudy.id}`}
      className="group bg-white border border-stone-200 hover:border-stone-400 rounded-xl p-4 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
    >
      <div>
        {/* Top Header: Case Number & Exit Status */}
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-stone-900 text-white font-mono font-bold text-xs rounded">
              {caseStudy.caseNumber}
            </span>
            <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
              {caseStudy.block.split(' ')[0]}
            </span>
          </div>
          <div className="flex items-center gap-1">
            {getExitBadge(caseStudy.exitKey.status)}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickCopy(caseStudy);
              }}
              title="Copiar formato post"
              className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Title and Industry */}
        <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-1 mb-1">
          {caseStudy.title}
        </h3>

        <div className="flex items-center gap-1.5 text-xs text-stone-600 mb-3">
          <Briefcase className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <span className="font-medium truncate">{caseStudy.industry}</span>
        </div>

        {/* Criterio Booleano de Salida Fractal */}
        <div className="bg-stone-50 border border-stone-200/80 rounded-lg p-2.5 mb-3">
          <div className="text-[10px] font-semibold tracking-wider uppercase text-stone-500 mb-1">
            Interruptor / Criterio Fractal
          </div>
          <p className="text-xs font-mono text-stone-800 leading-relaxed line-clamp-2">
            "{caseStudy.exitKey.criterion}"
          </p>
        </div>

        {/* Recursos Claves Nombrados */}
        <div className="mb-3">
          <div className="text-[10px] font-semibold tracking-wider uppercase text-stone-400 mb-1.5">
            Recursos Claves Nombrados ({caseStudy.keyResources.length})
          </div>
          <div className="flex flex-wrap gap-1">
            {caseStudy.keyResources.slice(0, 3).map((res, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-stone-100 text-stone-700 text-[11px] rounded-md font-medium truncate max-w-[200px]"
                title={res}
              >
                {res}
              </span>
            ))}
            {caseStudy.keyResources.length > 3 && (
              <span className="px-1.5 py-0.5 bg-stone-100 text-stone-500 text-[10px] rounded font-mono">
                +{caseStudy.keyResources.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Estructuras Afectadas (Financiera, Humana, Social) */}
        <div>
          <div className="text-[10px] font-semibold tracking-wider uppercase text-stone-400 mb-1.5">
            Estructuras Afectadas
          </div>
          <div className="flex flex-wrap gap-1.5">
            {caseStudy.affectedStructures.types.map(renderStructureBadge)}
          </div>
        </div>
      </div>

      {/* Footer link to detail */}
      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
        <span className="text-[11px] text-stone-500 line-clamp-1 italic">
          {caseStudy.elementalFractal.surgeonNote}
        </span>
        <button
          onClick={() => onSelect(caseStudy)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 hover:text-amber-700 transition-colors ml-2 shrink-0"
        >
          <span>Ver caso</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
