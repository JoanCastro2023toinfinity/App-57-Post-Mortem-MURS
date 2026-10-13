import React, { useState } from 'react';
import {
  Compass,
  AlertTriangle,
  Flame,
  CheckCircle2,
  Copy,
  Check,
  ChevronRight,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Zap,
  Activity,
  Layers,
  Scale,
  RefreshCw,
  Sliders,
  ExternalLink,
  Target,
  Scissors,
  Terminal
} from 'lucide-react';
import { universalReconstructionMatrix, casesData } from '../data/cases';
import { CaseStudy, MursQuestion, MursPlaybookRule, MursScaleLayer } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface UniversalReconstructionMatrixViewProps {
  onSelectCase?: (caseStudy: CaseStudy) => void;
  onOpenMasterPrompt?: () => void;
}

export const UniversalReconstructionMatrixView: React.FC<UniversalReconstructionMatrixViewProps> = ({
  onSelectCase,
  onOpenMasterPrompt,
}) => {
  const { language } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState<'regla' | 'playbook' | 'escalas' | 'simulador' | 'palanca'>('regla');
  const [selectedLeverRole, setSelectedLeverRole] = useState<'founder' | 'coo' | 'investor' | 'cto' | 'board'>('founder');
  const [copiedLeverManifesto, setCopiedLeverManifesto] = useState(false);
  const [copiedProtocol, setCopiedProtocol] = useState(false);
  const [selectedRuleNumber, setSelectedRuleNumber] = useState<number>(1);
  const [filterRuleCategory, setFilterRuleCategory] = useState<'ALL' | 'corte' | 'flujo' | 'humano'>('ALL');

  // Interactive Triage Simulator State
  const [p1Answer, setP1Answer] = useState<string>('Facturación directa a cliente ancla sin financiamiento bancario');
  const [p2Score, setP2Score] = useState<number>(70); // Desacople 0-100%
  const [p3Necrosis, setP3Necrosis] = useState<string>('Unidad experimental / canal de pauta con ROAS negativo');
  const [p4SensorIdentified, setP4SensorIdentified] = useState<boolean>(true);
  const [p5Trigger, setP5Trigger] = useState<string>('Si el flujo de caja operativo es < 1.5x nómina en día 15, suspender 100% de consultorías externas');
  const [copiedDiagnosis, setCopiedDiagnosis] = useState(false);

  const { masterRule, emergencyProtocol, playbookRules, multiScaleMatrix } = universalReconstructionMatrix;

  const handleCopyTriageProtocol = () => {
    const text = `======================================================
MATRIZ UNIVERSAL DE RECONSTRUCCIÓN (MURS)
PROTOCOLO DE TRIAJE DE EMERGENCIA (72 HORAS)
57 Casos Sistémicos Consolidados
======================================================

REGLA MAESTRA MURS:
"${masterRule.axiom}"

${masterRule.description}

LAS 5 PREGUNTAS CRÍTICAS DE TRIAJE INMEDIATO:
${emergencyProtocol.questions
  .map(
    (q: MursQuestion) => `
[${q.numberStr}] ${q.question}
• Enfoque: ${q.focus}
• Diagnóstico: ${q.diagnosticPrompt}
• Protocolo de Acción: ${q.actionProtocol}
`
  )
  .join('\n')}

LAS 10 REGLAS DEL PLAYBOOK DE RECONSTRUCCIÓN:
${playbookRules
  .map(
    (r: MursPlaybookRule) => `Regla ${r.number}: ${r.title}
• Axioma: ${r.axiom}
• Cortar: ${r.symptomToCut}
• Restaurar: ${r.restorationVector}
• Caso de referencia: #${r.referencedCaseId} ${r.referencedCaseTitle}
`
  )
  .join('\n')}
`;
    navigator.clipboard.writeText(text);
    setCopiedProtocol(true);
    setTimeout(() => setCopiedProtocol(false), 2500);
  };

  const handleCopyDiagnosis = () => {
    const diagnosisText = `======================================================
ORDEN DE TRIAJE EJECUTIVO MURS (72 HORAS)
Auditoría Inmediata de Reconstrucción de Sistemas
======================================================

1. FLUJO VITAL PROTEGIDO:
${p1Answer}

2. NIVEL DE DESACOPLE DETECTADO:
${p2Score}% (Fricción entre el síntoma en terreno y el poder de corte)

3. NECROSIS / SUBSIDIO A CORTAR HOY:
${p3Necrosis}

4. SENSOR DE TERRENO VALIDADO:
${p4SensorIdentified ? 'Centinela de trinchera identificado y con canal directo al director.' : 'ALERTA: Sensor de terreno no validado. Alto riesgo de ceguera ejecutiva.'}

5. INTERRUPTOR BOOLEANO IRREVERSIBLE:
${p5Trigger}

REGLA APLICADA:
"Antes de intentar reparar el todo, estabiliza una sola conexión viable."
`;
    navigator.clipboard.writeText(diagnosisText);
    setCopiedDiagnosis(true);
    setTimeout(() => setCopiedDiagnosis(false), 2500);
  };

  const handleCopyLeverManifesto = () => {
    const roleLabels = {
      founder: 'FUNDADOR / CEO (Palanca de Asignación y Corte de Inercia)',
      coo: 'OPERADOR CLAVE / COO (Palanca del Eje de Fricción en Terreno)',
      investor: 'INVERSOR / IC (Palanca de Fusible de Valuación y Desembolso Condicionado)',
      cto: 'LÍDER TÉCNICO / CTO (Palanca de Desacoplamiento y Sandbox)',
      board: 'BOARD / GOBERNANZA (Palanca de Fusible de Salida y Criterio Forense)'
    };

    const triggers = {
      founder: 'SI [la unidad de negocio X no genera margen de contribución positivo en 60 días] → CONGELAR 100% de gasto discrecional y amputar el 50% de las iniciativas secundarias para blindar el canal de caja vital.',
      coo: 'SI [el CEO o Directorio se niega a confrontar el cuello de botella físico documentado en 48h] → ACTIVAR cláusula de rescate: operar únicamente sobre la cadena de entrega que produce caja directa y suspender reportes burocráticos.',
      investor: 'SI [el burn multiple es > 2.5x y la ecuación de fricción ∑(X→M) muestra desacople > 60%] → NO LIBERAR siguiente tramo de capital sin antes ejecutar el Protocolo de Triaje MURS de 72 horas y nombrar un auditor de trinchera.',
      cto: 'SI [un módulo o proveedor externo incrementa la tasa de error por encima del 5% durante 3 ventanas consecutivas] → AISLAR el servicio en sandbox mediante circuito abierto (circuit breaker) y degradar elegantemente a modo autónomo local.',
      board: 'SI [en dos sesiones consecutivas del Board no se presenta la correlación entre caja operativa y retención neta real] → ACTIVAR auditoría forense instantánea y suspender planes de compensación extraordinaria hasta restablecer la visibilidad de terreno.'
    };

    const text = `======================================================
CARTOGRAFÍA DE PREVENCIÓN DE CHOQUE SISTÉMICO
Axioma de la Palanca del Sistema (57 Casos + MURS)
======================================================

TESIS FUNDAMENTAL:
"Esto no se vende como consultoría de riesgos tradicional, sino como prevención de choque o, en términos más precisos, una cartografía para decisores con tiempo, dinero, recursos y equipo en estado de entropía o fuga de precisión sistémica.

Un único criterio fractal de acuerdo a quién tiene la palanca del sistema es la diferencia entre quemar en un post-mortem por ceguera operativa, o tener una única condición de acción que evite al sistema estrellarse o descarrilarse perdiendo su valuación."

ROL SELECCIONADO: ${roleLabels[selectedLeverRole]}

ÚNICO CRITERIO FRACTAL DE ACCIÓN:
${triggers[selectedLeverRole]}
`;
    navigator.clipboard.writeText(text);
    setCopiedLeverManifesto(true);
    setTimeout(() => setCopiedLeverManifesto(false), 2500);
  };

  const selectedRule = playbookRules.find((r: MursPlaybookRule) => r.number === selectedRuleNumber) || playbookRules[0];

  const filteredRules = playbookRules.filter((r: MursPlaybookRule) => {
    if (filterRuleCategory === 'corte') return [1, 5, 9].includes(r.number);
    if (filterRuleCategory === 'flujo') return [2, 6, 10].includes(r.number);
    if (filterRuleCategory === 'humano') return [3, 4, 7, 8].includes(r.number);
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 text-white p-6 sm:p-8 border border-stone-800 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-semibold tracking-wide">
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              <span>MURS · MASTER RECONSTRUCTION SYSTEM · 57 CASOS</span>
            </div>

            <div className="flex items-center gap-2">
              {onOpenMasterPrompt && (
                <button
                  onClick={onOpenMasterPrompt}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors shadow-xs"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Prompt Maestro (Motor MURS)</span>
                </button>
              )}
              <button
                onClick={handleCopyTriageProtocol}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-stone-800/90 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors shadow-xs"
              >
                {copiedProtocol ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedProtocol ? 'Protocolo Copiado' : 'Copiar Protocolo MURS'}</span>
              </button>
            </div>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Matriz Universal de Reconstrucción (MURS)
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              El cierre unificado de los <strong>57 Ghost Cases</strong>: la arquitectura de rescate para sistemas en colapso por
              dependencia invertida. Cuando el Excel no basta, la física de sistemas impone: <em>aislar la necrosis, blindar el canal de
              caja vital y reconectar el terreno con la decisión.</em>
            </p>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-stone-800/80">
            <div className="bg-stone-900/60 rounded-xl p-3 border border-stone-800">
              <span className="text-[11px] font-mono text-stone-400 block uppercase">Base Analítica</span>
              <span className="text-lg font-black text-amber-400">57 Casos</span>
              <span className="text-[10px] text-stone-500 block">48 Históricos + 9 Ghost</span>
            </div>
            <div className="bg-stone-900/60 rounded-xl p-3 border border-stone-800">
              <span className="text-[11px] font-mono text-stone-400 block uppercase">Regla Maestra</span>
              <span className="text-lg font-black text-emerald-400">1 Conexión</span>
              <span className="text-[10px] text-stone-500 block">Restaurar el primer flujo</span>
            </div>
            <div className="bg-stone-900/60 rounded-xl p-3 border border-stone-800">
              <span className="text-[11px] font-mono text-stone-400 block uppercase">Triaje de Crisis</span>
              <span className="text-lg font-black text-sky-400">5 Preguntas</span>
              <span className="text-[10px] text-stone-500 block">Ventana crítica 72 horas</span>
            </div>
            <div className="bg-stone-900/60 rounded-xl p-3 border border-stone-800">
              <span className="text-[11px] font-mono text-stone-400 block uppercase">Playbook & Escalas</span>
              <span className="text-lg font-black text-purple-400">10 Reglas</span>
              <span className="text-[10px] text-stone-500 block">4 Capas Multi-Resolución</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-white rounded-2xl p-1.5 border border-stone-200 shadow-xs flex items-center gap-1.5 overflow-x-auto">
        <button
          onClick={() => setActiveSubTab('regla')}
          className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
            activeSubTab === 'regla'
              ? 'bg-stone-900 text-white shadow-sm'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <Zap className="w-4 h-4 text-amber-400" />
          <span>Regla Maestra & Triaje (72h)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('playbook')}
          className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
            activeSubTab === 'playbook'
              ? 'bg-stone-900 text-white shadow-sm'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <Scissors className="w-4 h-4 text-emerald-400" />
          <span>Playbook de las 10 Reglas</span>
        </button>

        <button
          onClick={() => setActiveSubTab('escalas')}
          className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
            activeSubTab === 'escalas'
              ? 'bg-stone-900 text-white shadow-sm'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <Layers className="w-4 h-4 text-purple-400" />
          <span>Matriz Multi-Resolución (4 Escalas)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('simulador')}
          className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
            activeSubTab === 'simulador'
              ? 'bg-stone-900 text-white shadow-sm'
              : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <Sliders className="w-4 h-4 text-amber-400" />
          <span>Simulador de Triaje en Vivo</span>
        </button>

        <button
          onClick={() => setActiveSubTab('palanca')}
          className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
            activeSubTab === 'palanca'
              ? 'bg-amber-500 text-stone-950 shadow-sm'
              : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <Target className="w-4 h-4 text-stone-950" />
          <span>Cartografía de Palanca (Prevención)</span>
        </button>
      </div>

      {/* Sub-Tab 1: La Regla Maestra & Triaje 72h */}
      {activeSubTab === 'regla' && (
        <div className="space-y-6">
          {/* Master Rule Banner */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-amber-900 font-mono text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Axioma Central de la Física de Sistemas</span>
            </div>

            <blockquote className="text-xl sm:text-2xl font-black text-stone-900 leading-snug tracking-tight">
              "{masterRule.axiom}"
            </blockquote>

            <p className="text-stone-700 text-sm leading-relaxed max-w-4xl">
              {masterRule.description}
            </p>
          </div>

          {/* 5 Critical Emergency Questions */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-black text-stone-900 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-red-600" />
                  <span>{emergencyProtocol.title}</span>
                </h2>
                <p className="text-xs text-stone-500">{emergencyProtocol.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergencyProtocol.questions.map((q: MursQuestion) => (
                <div
                  key={q.id}
                  className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-amber-300 transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 font-mono text-xs font-bold flex items-center justify-center">
                        {q.numberStr}
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                        {q.focus}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                      {q.question}
                    </h3>

                    <div className="text-xs text-stone-600 space-y-1.5 pt-1 border-t border-stone-100">
                      <div>
                        <strong className="text-stone-800 block text-[11px] uppercase font-mono">Diagnóstico:</strong>
                        <p className="text-stone-600 text-xs leading-relaxed">{q.diagnosticPrompt}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 bg-amber-50/60 -mx-5 -mb-5 p-4 rounded-b-2xl">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 block mb-1">
                      Protocolo de Acción:
                    </span>
                    <p className="text-xs text-stone-800 font-medium leading-relaxed">
                      {q.actionProtocol}
                    </p>
                  </div>
                </div>
              ))}

              {/* Summary Card for Board of Directors */}
              <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-2xl p-5 border border-stone-700 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase">
                    <Target className="w-4 h-4" />
                    <span>Mandato para el Director</span>
                  </div>
                  <h3 className="text-base font-bold text-stone-100">
                    La Amputación de Emergencia
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Si no puedes responder afirmativamente a la <strong>P1</strong> y ejecutar la <strong>P5</strong> en menos de 72 horas,
                    el sistema entra en caída libre por agotamiento de tesorería y deserción del operador amortiguador.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-700">
                  <button
                    onClick={() => setActiveSubTab('simulador')}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-colors shadow-xs"
                  >
                    <span>Llenar Triaje de mi Empresa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub-Tab 2: Playbook de las 10 Reglas */}
      {activeSubTab === 'playbook' && (
        <div className="space-y-6">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 bg-stone-200/70 p-1 rounded-xl border border-stone-300">
              <button
                onClick={() => setFilterRuleCategory('ALL')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  filterRuleCategory === 'ALL' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Todas (10)
              </button>
              <button
                onClick={() => setFilterRuleCategory('corte')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  filterRuleCategory === 'corte' ? 'bg-red-600 text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Corte & Amputación (R1, R5, R9)
              </button>
              <button
                onClick={() => setFilterRuleCategory('flujo')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  filterRuleCategory === 'flujo' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Caja & Conexión (R2, R6, R10)
              </button>
              <button
                onClick={() => setFilterRuleCategory('humano')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  filterRuleCategory === 'humano' ? 'bg-purple-600 text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Terreno & Desacople (R3, R4, R7, R8)
              </button>
            </div>

            <span className="text-xs text-stone-500 font-mono">
              Mostrando {filteredRules.length} de 10 reglas fundamentales
            </span>
          </div>

          {/* Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRules.map((rule: MursPlaybookRule) => {
              const refCase = casesData.find((c) => c.id === rule.referencedCaseId);
              const isSelected = selectedRuleNumber === rule.number;

              return (
                <div
                  key={rule.number}
                  onClick={() => setSelectedRuleNumber(rule.number)}
                  className={`bg-white rounded-2xl border p-5 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'border-amber-500 shadow-md ring-2 ring-amber-400/20'
                      : 'border-stone-200 hover:border-stone-400 shadow-xs'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-stone-900 text-amber-400 font-mono text-xs font-bold flex items-center justify-center">
                          R{rule.number}
                        </span>
                        <h3 className="text-sm font-bold text-stone-900 leading-tight">
                          {rule.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-stone-800 font-medium bg-stone-50 p-2.5 rounded-xl border border-stone-100 italic">
                      "{rule.axiom}"
                    </p>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-red-100 text-red-800 font-mono text-[10px] font-bold shrink-0">
                          CORTAR
                        </span>
                        <span className="text-stone-600 leading-relaxed">{rule.symptomToCut}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold shrink-0">
                          RESTAURAR
                        </span>
                        <span className="text-stone-700 leading-relaxed font-medium">{rule.restorationVector}</span>
                      </div>
                    </div>
                  </div>

                  {/* Reference Case Pill */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-stone-500">
                      Caso Referencia: <strong className="text-stone-800">#{rule.referencedCaseId}</strong> ({rule.referencedCaseTitle})
                    </span>
                    {onSelectCase && refCase && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCase(refCase);
                        }}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 hover:text-amber-900 hover:underline"
                      >
                        <span>Ver Ficha</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sub-Tab 3: Matriz Multi-Resolución & Multi-Escala */}
      {activeSubTab === 'escalas' && (
        <div className="space-y-6">
          <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase font-bold tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Arquitectura Fractal Multi-Resolución</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Deconstrucción por Capas de Escala: Micro, Meso, Macro & Meta
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
              El auto-sabotaje nunca ocurre en un vacío: nace en la <strong>disonancia cognitiva (Meta)</strong>, se oculta en el
              <strong> balance cosmético (Macro)</strong>, se transmite por <strong>procesos rotos (Meso)</strong> y termina destruyendo la
              salud del <strong>operador de trinchera (Micro)</strong>. La reconstrucción MURS interviene simultáneamente en los 4 niveles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {multiScaleMatrix.map((layer: MursScaleLayer) => {
              const badgeColors: Record<string, { bg: string; text: string; border: string }> = {
                Micro: { bg: 'bg-emerald-500/10', text: 'text-emerald-800', border: 'border-emerald-200' },
                Meso: { bg: 'bg-sky-500/10', text: 'text-sky-800', border: 'border-sky-200' },
                Macro: { bg: 'bg-purple-500/10', text: 'text-purple-800', border: 'border-purple-200' },
                Meta: { bg: 'bg-amber-500/10', text: 'text-amber-800', border: 'border-amber-200' },
              };
              const color = badgeColors[layer.scale] || badgeColors.Micro;

              return (
                <div
                  key={layer.scale}
                  className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-1 rounded-lg font-mono text-xs font-bold border ${color.bg} ${color.text} ${color.border}`}>
                        ESCALA {layer.scale.toUpperCase()}
                      </span>
                      <span className="text-xs font-mono text-stone-500">MURS Layer</span>
                    </div>

                    <h3 className="text-base font-bold text-stone-900">
                      {layer.title}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {layer.scope}
                    </p>

                    <div className="pt-2 border-t border-stone-100 space-y-2">
                      <div className="bg-red-50/70 p-3 rounded-xl border border-red-100 text-xs">
                        <strong className="text-red-900 block font-mono text-[11px] mb-0.5">Fricción Patológica:</strong>
                        <p className="text-stone-700">{layer.diagnosticFriction}</p>
                      </div>

                      <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 text-xs">
                        <strong className="text-emerald-900 block font-mono text-[11px] mb-0.5">Vector de Reconstrucción:</strong>
                        <p className="text-stone-800 font-medium">{layer.reconstructionLink}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-100">
                    <div className="text-xs font-mono font-bold text-stone-900 bg-stone-100 p-2.5 rounded-xl border border-stone-200">
                      <span className="text-amber-700 block text-[10px] uppercase">Ley de Supervivencia:</span>
                      "{layer.keyRule}"
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sub-Tab 4: Simulador de Triaje en Vivo */}
      {activeSubTab === 'simulador' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
              <div>
                <h2 className="text-xl font-black text-stone-900 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-amber-600" />
                  <span>Generador de Orden de Triaje Inmediata (72h)</span>
                </h2>
                <p className="text-xs text-stone-500">
                  Calibra las 5 variables críticas de tu sistema para emitir un dictamen de reconstrucción no negociable.
                </p>
              </div>

              <button
                onClick={handleCopyDiagnosis}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors shadow-xs"
              >
                {copiedDiagnosis ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedDiagnosis ? 'Orden Copiada' : 'Copiar Dictamen de Triaje'}</span>
              </button>
            </div>

            {/* Questions Form */}
            <div className="space-y-5">
              {/* Question 1 */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 font-mono">
                  [P1] Flujo Vital Primario (¿Qué sostiene la caja o entrega vital hoy?):
                </label>
                <input
                  type="text"
                  value={p1Answer}
                  onChange={(e) => setP1Answer(e.target.value)}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50"
                  placeholder="Ej: Contratos de cobro quincenal de clientes Tier-1..."
                />
              </div>

              {/* Question 2 */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold uppercase tracking-wider text-stone-700 font-mono">
                    [P2] Nivel de Desacople entre Síntoma y Decisión:
                  </label>
                  <span className="font-mono font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    {p2Score}% de Brecha
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={p2Score}
                  onChange={(e) => setP2Score(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                  <span>0% (Contacto directo diario)</span>
                  <span>50% (Excel filtrado)</span>
                  <span>100% (Ceguera total / vanidad)</span>
                </div>
              </div>

              {/* Question 3 */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 font-mono">
                  [P3] Subsidio Parasitario o Necrosis a Amputar Hoy:
                </label>
                <input
                  type="text"
                  value={p3Necrosis}
                  onChange={(e) => setP3Necrosis(e.target.value)}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50"
                  placeholder="Ej: Feature zombi, unidad experimental que quema FCF..."
                />
              </div>

              {/* Question 4 */}
              <div className="flex items-center justify-between p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <div>
                  <span className="text-xs font-bold text-stone-900 block font-mono">
                    [P4] Sensor de Terreno Validado (¿Tienes al operador directo sin filtro de vanidad?):
                  </span>
                  <span className="text-[11px] text-stone-500">
                    {p4SensorIdentified
                      ? 'Sí: El operador de trinchera tiene canal de veto directo sobre el cuello de botella.'
                      : 'No: El decisor sigue recibiendo reportes edulcorados por intermediarios.'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setP4SensorIdentified(!p4SensorIdentified)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    p4SensorIdentified ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
                  }`}
                >
                  {p4SensorIdentified ? 'Sensor Activo' : 'Sin Sensor'}
                </button>
              </div>

              {/* Question 5 */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 font-mono">
                  [P5] Interruptor Booleano Irreversible (IF/THEN de Corte):
                </label>
                <textarea
                  rows={2}
                  value={p5Trigger}
                  onChange={(e) => setP5Trigger(e.target.value)}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50 font-mono"
                  placeholder="Si [métrica X] supera [umbral Y], entonces EJECUTAR [corte/liquidación Z]..."
                />
              </div>
            </div>

            {/* Generated Triage Summary Preview */}
            <div className="bg-stone-950 text-stone-100 rounded-2xl p-5 border border-stone-800 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-amber-400 text-[11px] font-bold uppercase">
                <div className="flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <span>Dictamen de Viabilidad MURS Generado</span>
                </div>
                <span>Código: MURS-57C-TRIAGE-2026</span>
              </div>

              <div className="space-y-1.5 text-stone-300 pt-2 border-t border-stone-800 text-[11px]">
                <p>
                  <strong>• Prioridad 1 (Blindaje):</strong> Proteger `{p1Answer}`.
                </p>
                <p>
                  <strong>• Prioridad 2 (Amputación):</strong> Detener inmediatamente fondos hacia `{p3Necrosis}`.
                </p>
                <p>
                  <strong>• Diagnóstico de Fricción:</strong> Brecha de desacople del {p2Score}%.{' '}
                  {p2Score > 50
                    ? 'ALERTA: El decisor está tomando decisiones sobre una simulación. Urge poner al operador en la mesa de corte.'
                    : 'Alineación aceptable con la realidad del terreno.'}
                </p>
                <p>
                  <strong>• Protocolo de Salida:</strong> `{p5Trigger}`.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub-Tab 5: Cartografía de Palanca & Prevención de Choque */}
      {activeSubTab === 'palanca' && (
        <div className="space-y-6">
          {/* Header Manifesto Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 text-white p-6 sm:p-8 border border-amber-500/30 shadow-2xl">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
            <div className="space-y-3 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-wider">
                  <Target className="w-3.5 h-3.5" />
                  <span>CARTOGRAFÍA PARA DECISORES · NO ES CONSULTORÍA DE RIESGOS</span>
                </div>
                <button
                  onClick={handleCopyLeverManifesto}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors shadow-xs"
                >
                  {copiedLeverManifesto ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLeverManifesto ? 'Directiva Copiada' : 'Copiar Directiva de Palanca'}</span>
                </button>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                Prevención de Choque & El Único Criterio Fractal de Acción
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
                Los 57 post-mortems + el MURS son una versión interactiva de cómo opera la mente del decisor sobre fallos ya identificados. En organizaciones con tiempo, dinero, recursos y equipo en estado de entropía o fuga de precisión sistémica, <strong>un único criterio fractal calibrado según quién tiene la palanca</strong> es la frontera entre quemar en un post-mortem por ceguera operativa o tener la condición de acción que evita al sistema estrellarse o descarrilarse perdiendo su valuación.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-amber-300/90 border-t border-stone-800">
                <span>• No vendemos consultoría de riesgos post-facto.</span>
                <span>• Cartografiamos la física del sistema antes del choque.</span>
                <span>• Identificamos el interruptor binario no negociable.</span>
              </div>
            </div>
          </div>

          {/* Role Lever Switcher */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-600 font-mono">
                1. ¿Quién sostiene la palanca operativa real del sistema? (Selecciona el rol activo):
              </label>
              <span className="text-[11px] font-mono text-stone-500">5 Puntos de Inserción Mecánica</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {[
                { id: 'founder' as const, name: 'Fundador / CEO', tag: 'Asignación & Inercia', icon: Flame },
                { id: 'coo' as const, name: 'Operador Clave / COO', tag: 'Eje de Fricción', icon: Activity },
                { id: 'investor' as const, name: 'Inversor / IC', tag: 'Fusible Valuación', icon: Scale },
                { id: 'cto' as const, name: 'Líder Técnico / CTO', tag: 'Desacople & Sandbox', icon: Zap },
                { id: 'board' as const, name: 'Board / Gobernanza', tag: 'Veto & Salida', icon: ShieldAlert },
              ].map((role) => {
                const IconComponent = role.icon;
                const isSelected = selectedLeverRole === role.id;
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedLeverRole(role.id)}
                    className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 ${
                      isSelected
                        ? 'bg-stone-900 border-amber-500 text-white shadow-md ring-2 ring-amber-500/20'
                        : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-amber-500 text-stone-950' : 'bg-stone-100 text-stone-600'}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-stone-800 text-amber-300' : 'bg-stone-100 text-stone-500'
                      }`}>
                        {role.tag}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-xs sm:text-sm block">{role.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Lever Diagnostic Profile */}
          {(() => {
            const profiles = {
              founder: {
                role: 'Fundador / CEO',
                leverTitle: 'Palanca de Asignación de Capital, Enfoque y Detención de Inercia',
                location: 'La mesa de corte de roadmap, la fijación de prioridades y la chequera de tesorería.',
                entropySymptom: 'Proyectos en paralelo sin tracción, narrativas circulares para calmar inversores, adicción al "una feature más" y quema marginal disimulada mientras el runway se acorta.',
                fractalTrigger: 'SI [la unidad de negocio X no genera margen de contribución positivo en 60 días] → CONGELAR 100% de gasto discrecional y amputar el 50% de las iniciativas secundarias para blindar el canal de caja vital.',
                whyNotConsulting: 'La consultoría tradicional cobra por redactar un "plan de transformación cultural" a 18 meses. La prevención de choque congela la quema en 24 horas y salva la valuación de la compañía.',
                casesRef: [49, 50, 7, 15]
              },
              coo: {
                role: 'Operador Clave / COO',
                leverTitle: 'Palanca del Eje de Fricción & Cadena de Entrega en Terreno',
                location: 'La interfaz directa entre el cliente, el inventario/código y el equipo que ejecuta día a día.',
                entropySymptom: 'El Excel del CEO dice una cosa, pero en la trinchera los pedidos fallan, la rotación de talento clave se dispara y el operador actúa como amortiguador de quejas sin poder de decisión real.',
                fractalTrigger: 'SI [el CEO o Directorio se niega a confrontar el cuello de botella físico documentado en 48h] → ACTIVAR cláusula de rescate: operar únicamente sobre la cadena de entrega que produce caja directa y suspender reportes burocráticos.',
                whyNotConsulting: 'La consultoría pide más KPIs y dashboards de seguimiento. La prevención de choque elimina 4 capas de intermediación y conecta al operador con el gatillo de ejecución.',
                casesRef: [51, 4, 12, 33]
              },
              investor: {
                role: 'Inversor / Comité de Inversión (IC)',
                leverTitle: 'Palanca de Fusible de Valuación & Desembolso Condicionado',
                location: 'La firma de tramos de capital (tranches) y los covenants vinculantes del pacto de socios.',
                entropySymptom: 'La portco pide extensiones de puente (bridge rounds) basadas en proyecciones que mutan cada mes; los fundadores camuflan CAC creciente con subsidios y rotación de ejecutivos.',
                fractalTrigger: 'SI [el burn multiple es > 2.5x y la ecuación de fricción ∑(X→M) muestra desacople > 60%] → NO LIBERAR siguiente tramo de capital sin antes ejecutar el Protocolo de Triaje MURS de 72 horas y nombrar un auditor de trinchera.',
                whyNotConsulting: 'La consultoría sugiere una ronda de retención o contratar un advisor senior. La prevención de choque condiciona el capital a la detención del sangrado, evitando que el fondo queme su reserva de seguimiento.',
                casesRef: [56, 57, 2, 24]
              },
              cto: {
                role: 'Líder Técnico / CTO / Arquitecto',
                leverTitle: 'Palanca de Desacoplamiento & Aislamiento de Fallo en Cascada',
                location: 'La arquitectura de servicios, base de datos y contratos de integración (APIs/Infraestructuras).',
                entropySymptom: 'Microservicios zombis, dependencias circulares, incidentes de latencia parchados con más servidores en la nube, y equipos que temen tocar el core del sistema.',
                fractalTrigger: 'SI [un módulo o proveedor externo incrementa la tasa de error por encima del 5% durante 3 ventanas consecutivas] → AISLAR el servicio en sandbox mediante circuito abierto (circuit breaker) y degradar elegantemente a modo autónomo local sin comprometer la persistencia.',
                whyNotConsulting: 'La consultoría propone un refactor total a 2 años. La prevención de choque corta las ramas necrosadas en 1 sprint, desacopla el monolito y blinda la base de datos.',
                casesRef: [52, 55, 8, 19]
              },
              board: {
                role: 'Board de Directores / Gobernanza',
                leverTitle: 'Palanca de Activación de Fusibles de Salida & Remoción de Bloqueos',
                location: 'Los estatutos societarios, el derecho de veto y la designación de liderazgo ejecutivo.',
                entropySymptom: 'Cortesía corporativa tóxica, directores que no hacen preguntas difíciles por no incomodar al fundador, y auditorías formales que aprueban balances desconectados del mercado real.',
                fractalTrigger: 'SI [en dos sesiones consecutivas del Board no se presenta la correlación entre caja operativa y retención neta real] → ACTIVAR auditoría forense instantánea y suspender planes de compensación extraordinaria hasta restablecer la visibilidad de terreno.',
                whyNotConsulting: 'La consultoría produce minutas de "gestión de riesgos" que nadie ejecuta. La prevención de choque ejerce el derecho de veto y protege la valuación accionaria antes del default.',
                casesRef: [53, 54, 1, 18]
              }
            };

            const current = profiles[selectedLeverRole];

            return (
              <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-sm">
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-200">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase">
                        Palanca Activa: {current.role}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      {current.leverTitle}
                    </h3>
                  </div>
                  <div className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs font-mono text-stone-600 sm:max-w-xs">
                    <span className="text-stone-400 block uppercase text-[10px]">Ubicación Mecánica:</span>
                    <span className="text-stone-800 font-medium">{current.location}</span>
                  </div>
                </div>

                {/* 3 Core Analytical Pillars */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Pillar 1: Entropía y Fuga de Precisión */}
                  <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-2.5 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-rose-900 font-mono text-xs font-bold uppercase tracking-wide">
                        <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>Fuga de Precisión Sistémica</span>
                      </div>
                      <p className="text-xs text-rose-950 leading-relaxed">
                        {current.entropySymptom}
                      </p>
                    </div>
                    <div className="text-[11px] font-mono text-rose-700 bg-rose-100/70 p-2 rounded-lg border border-rose-200">
                      Riesgo: Quemar en post-mortem por ceguera operativa acumulada.
                    </div>
                  </div>

                  {/* Pillar 2: El Único Criterio Fractal */}
                  <div className="p-4 rounded-2xl bg-amber-50/80 border-2 border-amber-400 space-y-2.5 flex flex-col justify-between shadow-xs">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-amber-900 font-mono text-xs font-black uppercase tracking-wide">
                        <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>Único Criterio Fractal de Acción</span>
                      </div>
                      <div className="bg-stone-950 text-amber-300 p-3 rounded-xl font-mono text-xs leading-relaxed border border-stone-800 shadow-inner">
                        {current.fractalTrigger}
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-amber-900 bg-amber-100/80 p-2 rounded-lg border border-amber-300 font-semibold">
                      Impacto: Evita el descarrilamiento y rescata la valuación del sistema.
                    </div>
                  </div>

                  {/* Pillar 3: Por Qué No es Consultoría de Riesgos */}
                  <div className="p-4 rounded-2xl bg-stone-900 text-white space-y-2.5 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wide">
                        <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Prevención vs. Consultoría</span>
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed">
                        {current.whyNotConsulting}
                      </p>
                    </div>
                    <div className="text-[11px] font-mono text-emerald-300 bg-stone-800 p-2 rounded-lg border border-stone-700">
                      Enfoque: Cartografía quirúrgica en tiempo real, no autopsia pasiva.
                    </div>
                  </div>
                </div>

                {/* Direct Case References among the 57 */}
                <div className="pt-4 border-t border-stone-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
                      Casos de Referencia Directa entre los 57 (#):
                    </span>
                    <span className="text-xs text-stone-500">Haz clic en cualquier caso para abrir su ficha completa</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {current.casesRef.map((caseNum) => {
                      const matchedCase = casesData.find((c) => c.id === caseNum);
                      if (!matchedCase) return null;
                      return (
                        <button
                          key={caseNum}
                          type="button"
                          onClick={() => onSelectCase && onSelectCase(matchedCase)}
                          className="p-3 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:border-amber-400 hover:shadow-xs transition-all text-left flex flex-col justify-between gap-1.5 group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs font-bold text-amber-700 group-hover:text-amber-900">
                              {matchedCase.caseNumber}
                            </span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-200 text-stone-700">
                              {matchedCase.exitKey.status}
                            </span>
                          </div>
                          <span className="font-semibold text-xs text-stone-900 line-clamp-1 group-hover:text-amber-950">
                            {matchedCase.title}
                          </span>
                          <span className="text-[10px] text-stone-500 line-clamp-1">
                            {matchedCase.industry}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
