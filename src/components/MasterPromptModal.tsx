import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Sparkles,
  Terminal,
  ShieldAlert,
  ArrowRight,
  Flame,
  Binary,
  Layers,
  HelpCircle,
  Play
} from 'lucide-react';
import { casesData } from '../data/cases';

interface MasterPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PROMPT_MAESTRO_RECONSTRUCCION_NO_REPETICION = `# PROMPT MAESTRO — MOTOR DE RECONSTRUCCIÓN Y NO REPETICIÓN
## Diagnóstico de viabilidad, curvas de fallo, mecanismos causales y recuperación sistémica

### 1. IDENTIDAD DEL MOTOR
Actúa como un motor de diagnóstico de sistemas complejos especializado en análisis post mortem, reconstrucción de trayectorias de fallo, viabilidad operativa, análisis de dependencias, resiliencia modular y conservación de memoria causal.

Tu función no es resumir un fracaso ni atribuirlo automáticamente a errores humanos. Debes reconstruir cómo un sistema pasó de un estado funcional a un estado degradado, inviable, colapsado o reorganizado.

El sistema analizado puede pertenecer a cualquier dominio: organizaciones, empresas, proyectos, infraestructura, instituciones, redes, gobernanza, sistemas técnicos, ecosistemas u otros dominios documentados.

No presupongas que todos los post mortems comparten una causa, una escala, una arquitectura o una curva idéntica.

Objetivo fundamental: convertir cada post mortem en un modelo de fallo contrastable, una trayectoria de viabilidad, una arquitectura de recuperación y una memoria causal reutilizable.

### 2. PRINCIPIOS OBLIGATORIOS
1. No inventes hechos, fechas, variables, estados iniciales, umbrales ni relaciones causales.
2. Distingue siempre entre evidencia explícita, inferencia razonable, hipótesis y dato desconocido.
3. Asigna a cada conclusión una confianza: ALTA, MEDIA o BAJA.
4. Explica por qué asignas ese nivel de confianza.
5. No confundas correlación temporal con causalidad.
6. No supongas que toda centralización es perjudicial ni que toda descentralización mejora la resiliencia.
7. No presupongas que destruir, reemplazar o retirar un nodo central es la solución correcta.
8. No confundas la continuidad de una estructura con la conservación de su función.
9. No confundas una recuperación aparente con la recuperación de la capacidad mínima viable.
10. No atribuyas intención, conspiración, incompetencia o responsabilidad personal sin evidencia suficiente.
11. No fuerces todos los casos a una taxonomía cerrada. Si la evidencia exige una nueva clase de trayectoria, propónla y justifica su incorporación.
12. Preserva la distinción entre hechos observados y escenarios contrafactuales.
13. No presentes las recomendaciones como garantía de que un fallo no volverá a ocurrir.
14. Minimiza el daño humano, protege a los afectados y considera los costes de transición, los efectos distributivos y los daños colaterales.

### 3. FASE I — RECONSTRUCCIÓN DE LA SECUENCIA
Extrae y organiza:
• Identificador del caso.
• Dominio y tipo de sistema.
• Propósito original.
• Arquitectura formal y arquitectura operativa real.
• Componentes, nodos, silos y dependencias críticas.
• Recursos y capacidades disponibles.
• Condiciones iniciales conocidas.
• Detonantes y perturbaciones.
• Decisiones, intervenciones y omisiones documentadas.
• Cambios observables en el comportamiento del sistema.
• Síntomas tempranos.
• Puntos de inflexión.
• Umbral de pérdida de funcionalidad, si puede identificarse.
• Resultado final.
• Capacidades que sobrevivieron.
• Intentos de reparación y sus resultados.
• Lecciones explícitas e implícitas.

Construye una cronología de eventos con: qué ocurrió, cuándo ocurrió, evidencia que lo respalda, capacidades afectadas, consecuencias posteriores y explicaciones causales abiertas.

### 4. FASE II — MODELO DE VIABILIDAD
Representa el estado del sistema en el tiempo mediante:
X(t) = vector de capacidades y condiciones observables.

Dimensiones críticas:
• Capacidad de ejecución.
• Acceso a recursos y liquidez.
• Coordinación e interfaces.
• Capacidad de decisión y gobernanza.
• Integridad de la información y señales de terreno.
• Regulación y corrección.
• Autonomía de los módulos locales.
• Recuperación después de perturbaciones.
• Conservación del conocimiento tribal.
• Capacidad de adaptación.

Formulación cuantitativa:
r_i(t) = x_i(t) / x_i,min
M(t) = min_i[r_i(t)] - 1

Interpretación:
• M(t) > 0: todas las dimensiones críticas están por encima de sus umbrales.
• M(t) = 0: al menos una dimensión crítica alcanza su umbral mínimo viable.
• M(t) < 0: al menos una dimensión crítica está por debajo de su umbral (zona de fallo/colapso).

Distingue:
A. Existencia del sistema.
B. Capacidad de ejecutar su función.
C. Capacidad de autorregularse.
D. Capacidad de recuperarse.
E. Capacidad de reorganizarse.

### 5. FASE III — IDENTIFICACIÓN DE LA CURVA
Clasifica la trayectoria principal y secundarias:
• CLASE A — DEGRADACIÓN PROGRESIVA: La capacidad disminuye acumulativamente perdiendo margen.
• CLASE B — COLAPSO ABRUPTO O TARDÍO: Deterioro visible limitado hasta ruptura catastrófica.
• CLASE C — OSCILACIÓN Y RECUPERACIÓN INSUFICIENTE: Ciclos de deterioro sin restablecer capacidades.
• CLASE D — RUPTURA CENTRAL CON RECUPERACIÓN MODULAR: El nodo integrador cae pero módulos locales conservan capacidades.
• CLASE E — PÉRDIDA PERSISTENTE DE VIABILIDAD: El sistema no consigue recuperarse con mecanismos previos.
• CLASE F — DEGRADACIÓN POR BLOQUEO DE COORDINACIÓN: Módulos locales capaces pero vetos y desconfianza impiden ejecución.
• CLASE G — FALLA DE REGULACIÓN O APRENDIZAJE: Alarmas ignoradas sin mutación de reglas.
• CLASE H — COLAPSO POR AGOTAMIENTO DE RECURSOS: Quema de tesorería, energía o capital vital.
• CLASE I — FALLO EN CASCADA: Contagio sucesivo a través de dependencias críticas identificables.
• CLASE J — TRANSICIÓN ADAPTATIVA: Pérdida de configuración anterior con mutación a nueva organización viable.
• CLASE K — INDETERMINADA O MIXTA: Evidencia insuficiente o superposición de patrones.

### 6. FASE IV — CURVATURA MATEMÁTICA Y CUALITATIVA
κ(t) = d²M(t)/dt²
• κ(t) < 0: Curvatura hacia abajo (aceleración del deterioro).
• κ(t) > 0: Curvatura hacia arriba (desaceleración o inicio de amortiguación).
• κ(t) ≈ 0: Evolución aproximadamente lineal.

### 7. FASE V — ANÁLISIS CAUSAL Y DE DEPENDENCIAS
Cadena de mecanismos:
Condición inicial → Detonante → Respuesta del sistema → Degradación de capacidad → Fallo funcional → Resultado.
Identifica: causa próxima vs estructural, dependencias críticas, cuellos de botella, puntos únicos de fallo (SPOF) y bucles de retroalimentación.

### 8. FASE VI — ARQUITECTURA DE RECUPERACIÓN Y REORGANIZACIÓN
Protocolo de Reconstrucción:
1. Parada de sangría y aislamiento de necrosis.
2. Identificación del filamento único viable (Regla Maestra MURS).
3. Reorganización modular con autonomía de borde.
4. Activación de interruptores booleanos irreversibles.

### 9. FASE VII — PRESERVACIÓN DE MEMORIA CAUSAL Y NO REPETICIÓN
Invariantes no negociables para comités directivos y equipos operativos para garantizar la no repetición del patrón.

### 10. FASE VIII — MATRIZ UNIVERSAL DE RECONSTRUCCIÓN (MURS)
Síntesis y Triaje de los 57 Casos Sistémicos:
• 5 Preguntas Críticas de Triaje de Emergencia (72 horas).
• 10 Reglas del Playbook de Reconstrucción.
• Matriz Fractal de 4 Escalas (Micro, Meso, Macro, Meta).
`;

export const MASTER_DECONSTRUCTION_PROMPT = `### PROMPT MAESTRO DE DECONSTRUCCIÓN SISTÉMICA (PATRÓN DE DEPENDENCIA INVERTIDA)

Actúa como un **Stress Tester de Sistemas Complejos y Auditor de Arquitectura Decisional** (con experiencia empírica en comités de inversión, reestructuraciones de alta presión y post-mortems corporativos de escala 10 a 10,000+ personas).

Tu tarea no es dar consejos blandos, coaching motivacional ni parches operativos superficiales. Tu objetivo es **deconstruir el síntoma reportado por el decisor hasta su núcleo fractal de auto-sabotaje**, revelando la **Dependencia Invertida** que mantiene al sistema quemando tiempo, salud y tesorería.

---

#### MARCO TEÓRICO FUNDAMENTAL: EL PRINCIPIO DE LA DEPENDENCIA INVERTIDA
En cualquier sistema enfermo:
1. **La Inversión de Carga**: Una prótesis, recurso o persona que debería ser una herramienta auxiliar (el operador lúcido, la ronda de capital, el consultor, el headhunter, el stress tester) ha sido forzada por el sistema a asumir el rol de "amortiguador fisiológico" del decisor.
2. **El Subsidio Oculto**: El sistema aparenta estabilidad porque alguien está absorbiendo en su propio cuerpo, salud o nervios la disonancia cognitiva y la incompetencia decisional del líder o de la junta.
3. **La Deuda Oculta**: Mientras el amortiguador aguante, la raíz del problema es invisible. Cuando el amortiguador colapsa o renuncia, el sistema quema su caja o reputación en 4 semanas.

---

#### PROTOCOLO DE DECONSTRUCCIÓN EN 5 PASOS FRACTALES:

Aplica estrictamente los siguientes 5 filtros analíticos ante el síntoma presentado:

**PASO 1: DECONSTRUCCIÓN DEL SÍNTOMA COSMÉTICO A LA VULNERABILIDAD FISIOLÓGICA**
- **Síntoma Reportado**: ¿Qué dice el líder/directorio que está fallando? (Ej: "falta de compromiso", "el mercado cambió", "el VP de ventas no rinde", "nos falta runway").
- **Disonancia Operativa**: ¿Qué hecho observable contradice directamente esa narrativa en el piso de trinchera?
- **Fisiología del Decisor**: ¿Qué miedo, fijación de ego, ceguera o agotamiento está protegiendo esa narrativa?

**PASO 2: MAPEO DE LA DEPENDENCIA INVERTIDA (¿QUIÉN SUBSIDIA A QUIÉN?)**
- Identifica la **Prótesis Tóxica**: ¿Qué recurso o persona está haciendo de "buffer" artificial?
- ¿Quién está pagando el costo real de no tomar la decisión difícil?
- Si quitamos la prótesis durante 72 horas, ¿qué parte del sistema colapsa primero y por qué?

**PASO 3: TRIANGULACIÓN FRACTAL DE ESTRUCTURAS AFECTADAS**
Determina la secuencia de contagio entre los 3 vectores:
- **Estructura Humana**: ¿Dónde está el burnout, la ruptura de salud, la disociación cognitiva o la parálisis por ego?
- **Estructura Social**: ¿Dónde se rompieron los feudos de poder, la confianza en juntas, los pactos implícitos y la legitimidad de mando?
- **Estructura Financiera**: ¿Cuánto capital real y runway se está quemando cada 4 semanas para sostener esta mentira operativa?

**PASO 4: AUDITORÍA DE LA ECUACIÓN DE FRICCIÓN (VARIABLE DE ESCUCHA)**
Evalúa la variable crítica:
\`\`\`
∑_(X → M) [ ((R₁…R_N) / (PI → PFF)) / (T × I) ]² × √[ (Filosofía de Liderazgo) / (Capacidad Real de Movilizar) ]
\`\`\`
- Si la capacidad de escuchar la realidad del líder es **0**, la raíz es **0**. ¿Está el sistema en "Cero de Escucha"? Si es así, declara inviable cualquier inyección de capital o contratación hasta remover el cuello de botella decisional.

**PASO 5: EL INTERRUPTOR BOOLEANO DE SALIDA (CRITERIO BINARIO SIN RETORNO)**
Formula una Clave de Salida sin ambigüedad:
- **Regla Binaria**: "SI [Condición Cuantificable en ≤ 14 días], ENTONCES [Acción Irrevocable: Éxito / Archivado / Delegado con Auditoría Externa / Baja Inmediata / Liquidación Fallida]".
- **Ahorro Directo**: Calcula cuánto dinero y semanas de vida recupera el sistema al ejecutar el corte ahora vs. dentro de 4 semanas.

---

#### FORMATO DE RESPUESTA REQUERIDO:
1. **Núcleo del Auto-Sabotaje (La Dependencia Invertida en 1 frase brutalmente honesta)**
2. **El Subsidio Oculto (Quién está pagando la factura invisible)**
3. **Mapeo de los 3 Vectores (Humano, Social, Financiero)**
4. **Dictamen de Viabilidad (¿Hay capacidad real de escuchar o la raíz es 0?)**
5. **Interruptor Booleano de 72 Horas (Qué cortar, delegar o dar de baja de inmediato)**
`;

export const MasterPromptModal: React.FC<MasterPromptModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState<number>(1);
  const [customSymptom, setCustomSymptom] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'prompt' | 'theory' | 'interactive'>('prompt');
  const [promptType, setPromptType] = useState<'murs_engine' | 'inversion'>('murs_engine');

  if (!isOpen) return null;

  const currentCase = casesData.find((c) => c.id === selectedCaseId) || casesData[0];

  const currentPromptText =
    promptType === 'murs_engine'
      ? PROMPT_MAESTRO_RECONSTRUCCION_NO_REPETICION
      : MASTER_DECONSTRUCTION_PROMPT;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(currentPromptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleCopyCaseTest = () => {
    const text =
      promptType === 'murs_engine'
        ? `CASO A EVALUAR: ${currentCase.caseNumber} - "${currentCase.title}"
INDUSTRIA: ${currentCase.industry}
CONDICIÓN INICIAL: "${currentCase.elementalFractal.initialCondition}"
CUELLO DE BOTELLA IDENTIFICADO: "${currentCase.elementalFractal.bottleneck}"
RECURSOS Y BUFFERS EN JUEGO: ${currentCase.keyResources.join(', ')}
ESTRUCTURAS AFECTADAS: ${currentCase.affectedStructures.types.join(', ')}
CLAVE DE SALIDA HISTÓRICA: ${currentCase.exitKey.status} - "${currentCase.exitKey.criterion}"

Por favor ejecuta el MOTOR DE RECONSTRUCCIÓN Y NO REPETICIÓN (Fases I a VIII):
1. Reconstruye la secuencia y cronología del fallo.
2. Modela el vector de viabilidad X(t) y el margen M(t).
3. Identifica la clase de trayectoria (Clases A-K) y calcula/estima la curvatura κ(t).
4. Desglosa los eslabones causales y dependencias ocultas.
5. Emite la arquitectura de rescate con la Regla Maestra MURS y el interruptor booleano irreversible.`
        : `SÍNTOMA PRESENTADO: "${currentCase.elementalFractal.initialCondition}"
CUELLO DE BOTELLA IDENTIFICADO: "${currentCase.elementalFractal.bottleneck}"
INDUSTRIA: ${currentCase.industry}
RECURSOS NOMBRADOS: ${currentCase.keyResources.join(', ')}

Por favor aplica el PROMPT MAESTRO DE DECONSTRUCCIÓN SISTÉMICA para deconstruir este caso a su causa raíz de Dependencia Invertida y formular el interruptor booleano de salida.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-stone-900 border border-stone-800 text-stone-100 rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-800 bg-stone-950 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Patrón Maestro de Abstracción & Prompt de Deconstrucción
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Dependencia Invertida
                </span>
              </div>
              <p className="text-xs text-stone-400">
                La arquitectura cognitiva que reduce los 57 casos a un único algoritmo de auditoría y corte
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-4 sm:px-6 pt-3 border-b border-stone-800 bg-stone-950/50 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('prompt')}
            className={`px-3 py-2 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'prompt'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Prompt Maestro Ejecutable</span>
          </button>

          <button
            onClick={() => setActiveTab('theory')}
            className={`px-3 py-2 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'theory'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Patrón de Dependencia Invertida (Teoría)</span>
          </button>

          <button
            onClick={() => setActiveTab('interactive')}
            className={`px-3 py-2 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'interactive'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Binary className="w-3.5 h-3.5" />
            <span>Simulador de Deconstrucción (57 Casos)</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-stone-200 flex-1">
          {activeTab === 'prompt' && (
            <div className="space-y-4">
              {/* Prompt Selector Pills */}
              <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-950 rounded-xl border border-stone-800">
                <button
                  type="button"
                  onClick={() => setPromptType('murs_engine')}
                  className={`flex-1 min-w-[200px] text-left px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                    promptType === 'murs_engine'
                      ? 'bg-amber-500 text-stone-950 shadow-xs'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Motor de Reconstrucción &amp; No Repetición</span>
                  </div>
                  <span className={`block text-[10px] font-normal ${promptType === 'murs_engine' ? 'text-stone-900' : 'text-stone-500'}`}>
                    Fases I-VIII · Viabilidad X(t) · Curvas A-K · Curvatura κ(t) · MURS
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPromptType('inversion')}
                  className={`flex-1 min-w-[200px] text-left px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                    promptType === 'inversion'
                      ? 'bg-amber-500 text-stone-950 shadow-xs'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 shrink-0" />
                    <span>Deconstrucción de Dependencia Invertida</span>
                  </div>
                  <span className={`block text-[10px] font-normal ${promptType === 'inversion' ? 'text-stone-900' : 'text-stone-500'}`}>
                    5 Pasos Fractales · Ecuación de Fricción · Interruptor Booleano
                  </span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    {promptType === 'murs_engine'
                      ? 'Prompt Maestro universal para auditar trayectorias de fallo, viabilidad M(t) y reconstrucción en cualquier dominio.'
                      : 'Copia este prompt e ingrésalo en cualquier modelo LLM junto con la situación de una empresa o síntoma ejecutivo.'}
                  </span>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 text-stone-950 font-bold hover:bg-amber-300 transition-colors shrink-0 shadow-xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? '¡Copiado!' : promptType === 'murs_engine' ? 'Copiar Motor MURS' : 'Copiar Prompt Maestro'}</span>
                </button>
              </div>

              <div className="relative rounded-xl border border-stone-800 bg-stone-950 p-4 font-mono text-xs leading-relaxed text-stone-300 overflow-x-auto shadow-inner max-h-[50vh]">
                <pre className="whitespace-pre-wrap font-sans text-xs sm:text-[13px] leading-relaxed text-stone-300">
                  {currentPromptText}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'theory' && (
            <div className="space-y-5 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
                  <Flame className="w-4 h-4" />
                  <h3>¿Qué es el Patrón Maestro de Abstracción en los 57 Casos?</h3>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  Detrás de la heterogeneidad superficial de los 57 casos (desde arbitraje financiero y robótica hasta auditoría forense o diplomacia internacional), subyace una <strong>única invariante fractal</strong>:
                </p>
                <div className="p-3.5 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-200 font-medium leading-relaxed">
                  <strong>La Dependencia Invertida:</strong> El sistema crea o contrata un elemento amortiguador (el operador lúcido, la inyección de capital, el consultor externo, la nueva jerarquía) para resolver un problema. Pero en lugar de resolver la causa, <strong>la jerarquía convierte al amortiguador en el rehén que absorbe las consecuencias de no tomar la decisión estructural</strong>.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                    1. Vector Financiero
                  </span>
                  <h4 className="font-bold text-white text-sm">La Quema como Anestesia</h4>
                  <p className="text-stone-300 text-xs leading-relaxed">
                    El capital o runway no se gasta en tracción; se gasta en pagar el costo de oportunidad de no confrontar un modelo de negocio o contrato roto. El dinero se usa para comprar tiempo que no se aprovecha.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                    2. Vector Humano
                  </span>
                  <h4 className="font-bold text-white text-sm">La Inversión de Fisiología</h4>
                  <p className="text-stone-300 text-xs leading-relaxed">
                    El decisor con ego o pánico se disocia de la trinchera. El estrés no lo sufre quien tiene el poder de decidir, sino los subordinados de alto rendimiento que intentan sostener el sistema sin autoridad real.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 space-y-2">
                  <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block">
                    3. Vector Social / Político
                  </span>
                  <h4 className="font-bold text-white text-sm">El Feudo de la Simulación</h4>
                  <p className="text-stone-300 text-xs leading-relaxed">
                    Nadie en la mesa directiva dice la verdad porque el primero que la enuncia rompe el pacto de impunidad mutua. El sistema prefiere auto-sabotearse lentamente antes que exponer el vacío de liderazgo.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-3">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Binary className="w-4 h-4 text-amber-400" />
                  <span>La Condición de Rescate: El Interruptor Booleano</span>
                </h4>
                <p className="text-stone-300 text-xs leading-relaxed">
                  Ningún caso de los 57 se salvó por "diálogo empático" o "más paciencia". En los casos con clave de salida <strong>Éxito</strong> o <strong>Delegado</strong>, el rescate ocurrió cuando el operador activó un criterio binario irrefutable:
                </p>
                <div className="bg-stone-900 p-3 rounded-lg border border-stone-800 font-mono text-xs text-amber-300">
                  <code>SI [el decisor rechaza auditar el Excel en 48h] → EJECUTAR [salida/corte inmediato].</code>
                </div>
                <p className="text-stone-400 text-xs">
                  Esto ahorra un promedio de <strong>4 a 12 semanas de quema inútil</strong> de dinero y previene el daño irreversible al sistema nervioso del equipo.
                </p>
              </div>

              {/* Cartografía de Decisión vs. Consultoría de Riesgos */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/20 border border-amber-500/40 space-y-2.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider font-mono">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <span>Cartografía para Decisores: Prevención de Choque vs. Consultoría de Riesgos</span>
                </div>
                <p className="text-stone-200 text-xs leading-relaxed">
                  Esta App y sus 57 post-mortems + MURS son una <strong>versión interactiva y formalizada de cómo opera la mente del decisor frente a fallos estructurales ya identificados</strong>. No es consultoría de riesgos convencional: es una <em>cartografía de navegación para decisores con tiempo, dinero, recursos y equipo en estado de entropía o fuga de precisión sistémica</em>.
                </p>
                <div className="p-3 bg-stone-950/80 rounded-lg border border-stone-800 text-xs text-stone-300 space-y-1 font-mono">
                  <p className="text-amber-300 font-bold">Un único criterio fractal según quién tiene la palanca:</p>
                  <p>• La diferencia entre quemar en un post-mortem por ceguera operativa...</p>
                  <p>• O tener una única condición de acción que evite al sistema estrellarse o descarrilarse perdiendo su valuación.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'interactive' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-3">
                <label className="text-xs font-bold text-stone-200 block">
                  Selecciona uno de los 57 casos para ver su deconstrucción fractal en vivo:
                </label>
                <select
                  value={selectedCaseId}
                  onChange={(e) => setSelectedCaseId(Number(e.target.value))}
                  className="w-full bg-stone-900 border border-stone-700 text-stone-100 rounded-lg p-2.5 text-xs font-mono focus:outline-none focus:border-amber-400"
                >
                  {casesData.map((c) => (
                    <option key={c.id} value={c.id}>
                      Caso #{c.caseNumber} - {c.title} ({c.industry})
                    </option>
                  ))}
                </select>
              </div>

              {/* Live Deconstructed Breakdown */}
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-4 text-xs">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <div>
                    <span className="text-[11px] font-mono text-amber-400 font-bold">
                      CASO #{currentCase.caseNumber}: {currentCase.title}
                    </span>
                    <span className="text-stone-400 block text-[11px] mt-0.5">
                      Sector: {currentCase.industry} | Salida: {currentCase.exitKey.status}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyCaseTest}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono transition-colors"
                  >
                    <Copy className="w-3 h-3 text-amber-400" />
                    <span>Copiar caso para Prompt</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block">
                      1. Síntoma / Condición Inicial
                    </span>
                    <p className="text-stone-300 leading-relaxed font-mono">
                      {currentCase.elementalFractal.initialCondition}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                      2. Cuello de Botella (La Dependencia Invertida)
                    </span>
                    <p className="text-stone-300 leading-relaxed font-mono">
                      {currentCase.elementalFractal.bottleneck}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold block">
                    3. Iteración & Causa Raíz de Fondo
                  </span>
                  <p className="text-stone-300 leading-relaxed">
                    {currentCase.elementalFractal.iteration}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-emerald-950/30 border border-emerald-500/40 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                      4. Clave de Salida & Criterio Fractal Booleano
                    </span>
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-emerald-500/20 text-emerald-300">
                      {currentCase.exitKey.status}
                    </span>
                  </div>
                  <p className="text-emerald-100 font-mono text-xs leading-relaxed">
                    {currentCase.exitKey.criterion}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-1 text-[11px] text-stone-400">
                  <span className="font-semibold text-stone-300">Estructuras comprometidas:</span>
                  {currentCase.affectedStructures.types.map((st) => (
                    <span
                      key={st}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-800 border border-stone-700 text-stone-300"
                    >
                      {st}
                    </span>
                  ))}
                  <span className="ml-auto text-stone-500 font-mono">
                    Recursos clave: {currentCase.keyResources.slice(0, 2).join(', ')}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-800 bg-stone-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="text-stone-400 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Matriz de Deconstrucción 57:1 lista para usar en comités de auditoría y screening C-Level.</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyPrompt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 text-stone-950 font-bold hover:bg-amber-300 transition-colors shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado al portapapeles' : 'Copiar Prompt'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
