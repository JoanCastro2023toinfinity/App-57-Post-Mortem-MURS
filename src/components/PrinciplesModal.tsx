import React, { useState } from 'react';
import { X, Copy, Check, Cpu, Sparkles, Scale, Gauge, Compass } from 'lucide-react';
import { summaryPrinciples } from '../data/cases';

interface PrinciplesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrinciplesModal: React.FC<PrinciplesModalProps> = ({ isOpen, onClose }) => {
  const [copiedFormula, setCopiedFormula] = useState(false);

  if (!isOpen) return null;

  const handleCopyFormula = () => {
    navigator.clipboard.writeText(summaryPrinciples.variable1.formula);
    setCopiedFormula(true);
    setTimeout(() => setCopiedFormula(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-stone-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 border-b border-stone-200 bg-stone-900 text-white flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Los 3 Principios Fundamentales & Física de Sistemas</h2>
              <p className="text-xs text-stone-400">
                La arquitectura subyacente que unifica los 57 casos, las 57 cicatrices y la Matriz MURS
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-800">
          {/* Variable 1 */}
          <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/60 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-mono font-bold">
                  Variable 1
                </span>
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  Identificar y Cuantificar Fricción Estructural
                </h3>
              </div>
              <button
                onClick={handleCopyFormula}
                className="text-xs font-mono text-stone-600 hover:text-stone-900 flex items-center gap-1 border border-stone-300 rounded px-2 py-1 bg-white"
              >
                {copiedFormula ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedFormula ? 'Copiado' : 'Copiar LaTeX'}</span>
              </button>
            </div>

            {/* Formula Block */}
            <div className="bg-stone-950 text-amber-200 rounded-lg p-3.5 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner border border-stone-800">
              <code>
                ∑_(X → M) [ ( (R₁…R_N) / (PI → PFF) ) / (T × I) ]² × √[ (Filosofía Liderazgo) / (Capacidad Real Movilizar) ]
              </code>
            </div>

            {/* Legend */}
            <div className="text-xs space-y-1 text-stone-600 font-mono bg-white p-3 rounded-lg border border-stone-200">
              <div className="font-bold text-stone-800 text-[11px] uppercase tracking-wider mb-1">
                Leyenda Matemática:
              </div>
              <p>• <strong>X = Desgaste → M = Dispersión</strong>: cuando el desgaste supera la capacidad de decisión, el sistema se atomiza antes de quebrar.</p>
              <p>• <strong>R₁ a R_N = Recursos mapeados</strong>: inventario de activos tangibles e intangibles en juego.</p>
              <p>• <strong>PI a PFF = Punto Fricción Inicial a Final</strong>: 5 Whys de Toyota (del síntoma a la causa raíz).</p>
              <p>• <strong>T = Tiempo | I = Inversión</strong>: tasa de consumo de runway e inversión realizada.</p>
              <p>• <strong>Raíz Cuadrada</strong>: Filosofía de Liderazgo / Capacidad Real de Movilizar Sistema por Decisiones.</p>
            </div>

            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900">
              <strong>Regla del Quiebre:</strong> Si la capacidad de escuchar del líder es 0, la capacidad real de movilizar es 0 (√0 = 0); el sistema colapsa sin importar la cantidad de dinero, tiempo o recursos invertidos.
            </div>
          </div>

          {/* Variable 2 */}
          <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/60 space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-xs font-mono font-bold">
                Variable 2
              </span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                Ajustar Excel Bajo Fuego Humano + Técnico
              </h3>
            </div>
            <p className="text-xs text-stone-600 italic">
              "El operador que ajusta el Excel cuando el Excel ya no sirve."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                <span className="font-bold text-emerald-800 block mb-0.5 font-mono">"TENGO"</span>
                <p className="text-emerald-950">
                  Criterio operativo templado para discernir, parar y operar bajo ruido extremo y ambigüedad.
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200">
                <span className="font-bold text-rose-800 block mb-0.5 font-mono">"ME BLOQUEA"</span>
                <p className="text-rose-950">
                  Decisores internos o fundadores con un Excel lleno de piezas sueltas y sin lectura del terreno real.
                </p>
              </div>
            </div>
          </div>

          {/* Variable 3 */}
          <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/60 space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-900 text-xs font-mono font-bold">
                Variable 3
              </span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                Tiempo & 57 Interruptores Fractales de Supervivencia
              </h3>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed">
              Un Investment Committee (IC) o un fondo no contrata teóricos ni narrativas de storytelling. Contrata a quien tiene documentados los <strong>interruptores de emergencia</strong>: criterios binarios condicionales del tipo <code>"Si X &gt; Y, entonces parar/ajustar"</code> antes de que el P&amp;L trimestral revele la catástrofe.
            </p>
          </div>

          {/* Core Product Thesis: Cartografía vs. Consultoría de Riesgos */}
          <div className="border-2 border-amber-500/40 rounded-2xl p-5 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 text-white space-y-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 text-[11px] font-mono font-black tracking-wide uppercase">
                  Tesis Central del Sistema
                </span>
                <span className="text-xs font-mono text-amber-300 font-semibold">
                  Prevención de Choque ≠ Consultoría de Riesgos
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-black text-white tracking-tight leading-snug">
                Cartografía para Decisores con Tiempo, Dinero, Recursos y Equipo en Estado de Entropía o Fuga de Precisión Sistémica
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Los 57 post-mortems y la Matriz MURS no son un inventario de autopsias teóricas ni consultoría de cumplimiento cosmético. <strong>Son una versión interactiva y computable de cómo funciona la mente del decisor frente a fallos ya identificados.</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 space-y-1.5">
                <span className="text-amber-400 font-mono font-bold block uppercase tracking-wider text-[11px]">
                  La Palanca del Sistema
                </span>
                <p className="text-stone-300 leading-relaxed">
                  De acuerdo a <strong>quién tiene la palanca</strong> (Fundador, Operador Clave, Inversor/IC o CTO), un solo criterio fractal es la diferencia entre <em>quemar en un post-mortem por ceguera operativa</em> o <em>activar la condición única de rescate</em> que evita descarrilar el sistema y perder la valuación.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 space-y-1.5">
                <span className="text-emerald-400 font-mono font-bold block uppercase tracking-wider text-[11px]">
                  Fuga de Precisión Sistémica
                </span>
                <p className="text-stone-300 leading-relaxed">
                  Cuando la organización entra en entropía, cada semana de inercia disipa runway y quema la capacidad cognitiva del equipo. Esta cartografía otorga <strong>certeza de trayectoria</strong>: corta el ruido y fuerza el interruptor booleano antes del punto de fractura irreversible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-stone-900 text-stone-100 text-xs font-semibold hover:bg-stone-800 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
