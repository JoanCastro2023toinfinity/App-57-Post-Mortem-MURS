import React from 'react';
import { CaseStudy } from '../types';
import { DollarSign, User, Users, ChevronRight, Copy } from 'lucide-react';

interface CaseTableRowProps {
  caseStudy: CaseStudy;
  onSelect: (caseStudy: CaseStudy) => void;
  onQuickCopy: (caseStudy: CaseStudy) => void;
}

export const CaseTableRow: React.FC<CaseTableRowProps> = ({ caseStudy, onSelect, onQuickCopy }) => {
  const getExitBadge = (status: string) => {
    switch (status) {
      case 'Éxito':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">Éxito</span>;
      case 'Archivado':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">Archivado</span>;
      case 'Delegado':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">Delegado</span>;
      case 'Baja':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-800">Baja</span>;
      case 'Fallido':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">Fallido</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-stone-100 text-stone-700">{status}</span>;
    }
  };

  return (
    <tr
      id={`table-row-${caseStudy.id}`}
      onClick={() => onSelect(caseStudy)}
      className="hover:bg-stone-50/80 transition-colors border-b border-stone-200/80 cursor-pointer group text-xs"
    >
      {/* 1. Número de caso */}
      <td className="py-3 px-3 font-mono font-bold text-stone-900 whitespace-nowrap">
        {caseStudy.caseNumber}
      </td>

      {/* 2. Estructura y Título */}
      <td className="py-3 px-3">
        <div className="font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
          {caseStudy.title}
        </div>
        <div className="text-[10px] text-stone-400 font-mono line-clamp-1">{caseStudy.block}</div>
      </td>

      {/* 3. Tipo de Industria */}
      <td className="py-3 px-3 text-stone-700 font-medium whitespace-nowrap">
        {caseStudy.industry}
      </td>

      {/* 4. Clave de salida y Criterio */}
      <td className="py-3 px-3 max-w-xs">
        <div className="flex items-center gap-1.5 mb-1">{getExitBadge(caseStudy.exitKey.status)}</div>
        <div className="text-[11px] font-mono text-stone-700 line-clamp-2 italic">
          "{caseStudy.exitKey.criterion}"
        </div>
      </td>

      {/* 5. Recursos Claves Nombrados */}
      <td className="py-3 px-3 max-w-xs">
        <div className="flex flex-wrap gap-1">
          {caseStudy.keyResources.slice(0, 3).map((r, i) => (
            <span key={i} className="px-1.5 py-0.5 bg-stone-100 text-stone-600 rounded text-[10px]">
              {r}
            </span>
          ))}
          {caseStudy.keyResources.length > 3 && (
            <span className="text-[10px] text-stone-400 font-mono">+{caseStudy.keyResources.length - 3}</span>
          )}
        </div>
      </td>

      {/* 6. Estructura Afectada */}
      <td className="py-3 px-3 whitespace-nowrap">
        <div className="flex items-center gap-1">
          {caseStudy.affectedStructures.types.includes('Financiera') && (
            <span
              className="p-1 rounded bg-emerald-100 text-emerald-800"
              title={`Financiera: ${caseStudy.affectedStructures.financialDetails || ''}`}
            >
              <DollarSign className="w-3 h-3" />
            </span>
          )}
          {caseStudy.affectedStructures.types.includes('Humana') && (
            <span
              className="p-1 rounded bg-amber-100 text-amber-800"
              title={`Humana: ${caseStudy.affectedStructures.humanDetails || ''}`}
            >
              <User className="w-3 h-3" />
            </span>
          )}
          {caseStudy.affectedStructures.types.includes('Social') && (
            <span
              className="p-1 rounded bg-indigo-100 text-indigo-800"
              title={`Social: ${caseStudy.affectedStructures.socialDetails || ''}`}
            >
              <Users className="w-3 h-3" />
            </span>
          )}
        </div>
      </td>

      {/* Actions */}
      <td className="py-3 px-3 text-right whitespace-nowrap">
        <div className="flex items-center justify-end gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickCopy(caseStudy);
            }}
            title="Copiar texto de caso"
            className="p-1.5 text-stone-400 hover:text-stone-800 hover:bg-stone-200/60 rounded transition-colors"
          >
            <Copy className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onSelect(caseStudy)}
            className="p-1.5 text-stone-400 hover:text-stone-900 rounded"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};
