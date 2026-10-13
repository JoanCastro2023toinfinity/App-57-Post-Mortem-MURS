import React, { useState } from 'react';
import { CaseStudy } from '../types';
import {
  X,
  Copy,
  Check,
  Briefcase,
  DollarSign,
  User,
  Users,
  Compass,
  Zap,
  Quote,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface CaseDetailModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onNavigateNext: () => void;
  onNavigatePrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const CaseDetailModal: React.FC<CaseDetailModalProps> = ({
  caseStudy,
  onClose,
  onNavigateNext,
  onNavigatePrev,
  hasNext,
  hasPrev,
}) => {
  const [copied, setCopied] = useState(false);

  if (!caseStudy) return null;

  const handleCopyText = () => {
    const text = `[${caseStudy.caseNumber}] ${caseStudy.title} | Salida: ${caseStudy.exitKey.status}

1. Condición inicial: ${caseStudy.elementalFractal.initialCondition}
2. Cuello de botella: ${caseStudy.elementalFractal.bottleneck}
3. Iteración: ${caseStudy.elementalFractal.iteration}
4. Criterio: ${caseStudy.exitKey.criterion}

Nota del cirujano: ${caseStudy.elementalFractal.surgeonNote}
Estructura afectada: ${caseStudy.affectedStructures.types.join(', ')}
Industria: ${caseStudy.industry}
Recursos clave: ${caseStudy.keyResources.join(', ')}
Lectura IC: ${caseStudy.elementalFractal.icValue}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div
        id="case-detail-modal"
        className="bg-white rounded-2xl max-w-3xl w-full border border-stone-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-50 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 bg-stone-900 text-white font-mono font-bold text-xs rounded">
                {caseStudy.caseNumber}
              </span>
              <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                {caseStudy.block}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-stone-200 text-stone-800">
                Salida: {caseStudy.exitKey.status}
              </span>
            </div>
            <h2 className="text-xl font-bold text-stone-900">{caseStudy.title}</h2>
            <div className="flex items-center gap-1.5 text-xs text-stone-600 mt-1">
              <Briefcase className="w-3.5 h-3.5 text-stone-500" />
              <span>{caseStudy.industry}</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-300 bg-white text-xs font-medium text-stone-700 hover:bg-stone-100 transition-colors shadow-xs"
              title="Copiar formato texto"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-500" />
                  <span>Copiar Ficha</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-stone-800">
          {/* Criterio Booleano de Salida Fractal */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 mb-1.5">
              <Zap className="w-4 h-4 text-amber-700" />
              <span>Criterio Fractal & Interruptor de Salida</span>
            </div>
            <p className="text-sm sm:text-base font-mono font-medium text-stone-900 leading-snug">
              "{caseStudy.exitKey.criterion}"
            </p>
          </div>

          {/* Esencia Elemental: 4 Pasos de Trinchera */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Esencia Elemental Estructural (Los 4 Pasos)</span>
            </h4>
            <div className="space-y-2.5">
              <div className="p-3 rounded-lg border border-stone-200 bg-stone-50/50">
                <span className="text-[11px] font-mono font-bold uppercase text-stone-500 block mb-0.5">
                  1. Condición Inicial
                </span>
                <p className="text-xs sm:text-sm text-stone-800 font-medium">
                  {caseStudy.elementalFractal.initialCondition}
                </p>
              </div>

              <div className="p-3 rounded-lg border border-stone-200 bg-stone-50/50">
                <span className="text-[11px] font-mono font-bold uppercase text-stone-500 block mb-0.5">
                  2. Cuello de Botella
                </span>
                <p className="text-xs sm:text-sm text-stone-800 font-medium">
                  {caseStudy.elementalFractal.bottleneck}
                </p>
              </div>

              <div className="p-3 rounded-lg border border-stone-200 bg-stone-50/50">
                <span className="text-[11px] font-mono font-bold uppercase text-stone-500 block mb-0.5">
                  3. Iteración y Validación
                </span>
                <p className="text-xs sm:text-sm text-stone-800 font-medium">
                  {caseStudy.elementalFractal.iteration}
                </p>
              </div>

              <div className="p-3 rounded-lg border border-stone-200 bg-stone-50/50">
                <span className="text-[11px] font-mono font-bold uppercase text-stone-500 block mb-0.5">
                  4. Criterio de Resolución
                </span>
                <p className="text-xs sm:text-sm text-stone-800 font-medium">
                  {caseStudy.exitKey.criterion}
                </p>
              </div>
            </div>
          </div>

          {/* Estructuras Afectadas: Detalle de Impacto */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>Estructura Afectada (Financiera, Humana, Social)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Financiera */}
              <div
                className={`p-3.5 rounded-xl border transition-all ${
                  caseStudy.affectedStructures.types.includes('Financiera')
                    ? 'border-emerald-300 bg-emerald-50/60'
                    : 'border-stone-200 bg-stone-50/30 opacity-60'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 mb-1.5">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  <span>Estructura Financiera</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {caseStudy.affectedStructures.financialDetails ||
                    'Sin afectación financiera primaria en este nodo.'}
                </p>
              </div>

              {/* Humana */}
              <div
                className={`p-3.5 rounded-xl border transition-all ${
                  caseStudy.affectedStructures.types.includes('Humana')
                    ? 'border-amber-300 bg-amber-50/60'
                    : 'border-stone-200 bg-stone-50/30 opacity-60'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 mb-1.5">
                  <User className="w-4 h-4 text-amber-600" />
                  <span>Estructura Humana</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {caseStudy.affectedStructures.humanDetails ||
                    'Sin afectación psíquica o humana primaria en este nodo.'}
                </p>
              </div>

              {/* Social */}
              <div
                className={`p-3.5 rounded-xl border transition-all ${
                  caseStudy.affectedStructures.types.includes('Social')
                    ? 'border-indigo-300 bg-indigo-50/60'
                    : 'border-stone-200 bg-stone-50/30 opacity-60'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-800 mb-1.5">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <span>Estructura Social</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {caseStudy.affectedStructures.socialDetails ||
                    'Sin afectación social/colectiva primaria en este nodo.'}
                </p>
              </div>
            </div>
          </div>

          {/* Recursos Claves Nombrados */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2.5">
              Recursos Claves Nombrados ({caseStudy.keyResources.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.keyResources.map((res, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-stone-100 border border-stone-200 text-stone-800 rounded-lg text-xs font-medium"
                >
                  {res}
                </span>
              ))}
            </div>
          </div>

          {/* Nota del Cirujano & Traducción IC */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-700 mb-1">
                <Quote className="w-3.5 h-3.5 text-amber-600" />
                <span>Nota del Cirujano</span>
              </div>
              <p className="text-xs italic text-stone-700 leading-relaxed">
                "{caseStudy.elementalFractal.surgeonNote}"
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-900 text-stone-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Valor para Due Diligence / IC Partner</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {caseStudy.elementalFractal.icValue}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Navigation Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
          <button
            onClick={onNavigatePrev}
            disabled={!hasPrev}
            className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-medium text-stone-700 hover:bg-stone-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            ← Caso anterior
          </button>

          <span className="text-xs font-mono text-stone-500">
            {caseStudy.id} de 57
          </span>

          <button
            onClick={onNavigateNext}
            disabled={!hasNext}
            className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-medium text-stone-700 hover:bg-stone-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Siguiente caso →
          </button>
        </div>
      </div>
    </div>
  );
};
