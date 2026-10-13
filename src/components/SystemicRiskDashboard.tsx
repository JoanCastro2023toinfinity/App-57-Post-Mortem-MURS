import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { CaseStudy, StructureType } from '../types';
import {
  ShieldAlert,
  TrendingUp,
  Users,
  DollarSign,
  User,
  Filter,
  ArrowUpRight,
  AlertTriangle,
  Lightbulb,
  Crosshair,
  BarChart3,
  Layers,
  ChevronRight,
  Network,
  Share2
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { FailureDependencyGraph } from './FailureDependencyGraph';

interface SystemicRiskDashboardProps {
  cases: CaseStudy[];
  onSelectCase: (caseStudy: CaseStudy) => void;
}

// 8 Macro sectors covering all 57 cases (48 Core + 9 Ghost Cases)
export interface SectorGroup {
  id: string;
  name: string;
  shortName: string;
  description: string;
  caseIds: number[];
}

export const MACRO_SECTORS: SectorGroup[] = [
  {
    id: 'fintech',
    name: 'Finanzas, Banca & Trading',
    shortName: 'Finanzas & Banca',
    description: 'HFT, Banca Corporativa, Gestión de Portafolios, Finanzas Estructuradas, Neobancos & Distress.',
    caseIds: [1, 7, 17, 34, 38, 51, 52, 57],
  },
  {
    id: 'tech_saas',
    name: 'Tech, SaaS & Startups',
    shortName: 'Tech & SaaS',
    description: 'DevTools, Scale-ups en crisis, FoodTech, Growth Hacking, Sprints, AdTech D2C & Core Legacy.',
    caseIds: [8, 26, 30, 39, 43, 48, 49, 50],
  },
  {
    id: 'servicios_legal',
    name: 'Servicios Profesionales, BPO & Legal',
    shortName: 'Servicios & Legal',
    description: 'Call Centers, Talleres de precisión, Bufetes Jurídicos, LegalTech, Selección RRHH.',
    caseIds: [2, 3, 4, 10, 36, 45],
  },
  {
    id: 'liderazgo_warroom',
    name: 'Liderazgo, War Rooms & Células',
    shortName: 'Liderazgo & War Rooms',
    description: 'Dirección Ejecutiva, Crisis Fundador, Resiliencia Células, Cap-Table Gridlock.',
    caseIds: [9, 31, 32, 40, 41, 46, 47, 54],
  },
  {
    id: 'politica_gobierno',
    name: 'Gobernanza, Política & Sector Público',
    shortName: 'Gobierno & Política',
    description: 'GovTech, Partidos Políticos, Sistemas Electorales, Planificación Colectiva.',
    caseIds: [5, 11, 12, 13, 14, 15, 18],
  },
  {
    id: 'geopolitica_macro',
    name: 'Geopolítica, Macroeconomía & Recursos',
    shortName: 'Geopolítica & Macro',
    description: 'Agrocommodities, Explotación de Recursos Naturales, Medios de Masas, Planificación.',
    caseIds: [6, 16, 19, 21, 22, 23],
  },
  {
    id: 'data_conocimiento',
    name: 'Data Intelligence & Gestión de Conocimiento',
    shortName: 'Data & Conocimiento',
    description: 'Algoritmos, Shadow Operations, Auditoría de Huecos Negros, AI Labs & Datos Sintéticos.',
    caseIds: [24, 25, 28, 33, 35, 37, 42, 44, 53],
  },
  {
    id: 'salud_industria',
    name: 'Salud, Turnaround Operativo & Manufactura',
    shortName: 'Salud & Operaciones',
    description: 'HealthTech Distress, Productividad Industrial, Whistleblower Integrity, Supply Chain JIT.',
    caseIds: [20, 27, 29, 55, 56],
  },
];

export const SystemicRiskDashboard: React.FC<SystemicRiskDashboardProps> = ({ cases, onSelectCase }) => {
  const [dashboardView, setDashboardView] = useState<'graph' | 'sectors'>('graph');
  const [selectedSectorId, setSelectedSectorId] = useState<string | null>(null);
  const [activeStructureFilter, setActiveStructureFilter] = useState<StructureType | 'ALL'>('ALL');
  const [chartMode, setChartMode] = useState<'stacked' | 'normalized'>('stacked');

  // Sector aggregated correlation data
  const sectorData = useMemo(() => {
    return MACRO_SECTORS.map((sector) => {
      const sectorCases = cases.filter((c) => sector.caseIds.includes(c.id));
      const financiera = sectorCases.filter((c) => c.affectedStructures.types.includes('Financiera')).length;
      const humana = sectorCases.filter((c) => c.affectedStructures.types.includes('Humana')).length;
      const social = sectorCases.filter((c) => c.affectedStructures.types.includes('Social')).length;
      const totalCases = sectorCases.length;

      // Multi-structure risk count (cases where 2 or more structures were impacted)
      const multiRiskCount = sectorCases.filter((c) => c.affectedStructures.types.length >= 2).length;
      const systemicRiskIndex = totalCases > 0 ? Math.round((multiRiskCount / totalCases) * 100) : 0;

      // Percentages for normalized view
      const finPct = totalCases > 0 ? Math.round((financiera / totalCases) * 100) : 0;
      const humPct = totalCases > 0 ? Math.round((humana / totalCases) * 100) : 0;
      const socPct = totalCases > 0 ? Math.round((social / totalCases) * 100) : 0;

      return {
        id: sector.id,
        name: sector.shortName,
        fullName: sector.name,
        totalCases,
        financiera,
        humana,
        social,
        finPct,
        humPct,
        socPct,
        multiRiskCount,
        systemicRiskIndex,
        cases: sectorCases,
      };
    });
  }, [cases]);

  // Radar chart data for global footprint
  const radarData = useMemo(() => {
    return [
      {
        axis: 'Financiera (Capital & Runway)',
        Fintech: 80,
        TechSaaS: 83,
        Liderazgo: 43,
        Politica: 14,
        DataOps: 38,
      },
      {
        axis: 'Humana (Burnout & Biología)',
        Fintech: 60,
        TechSaaS: 83,
        Liderazgo: 100,
        Politica: 43,
        DataOps: 75,
      },
      {
        axis: 'Social (Gobernanza & Redes)',
        Fintech: 60,
        TechSaaS: 50,
        Liderazgo: 57,
        Politica: 100,
        DataOps: 75,
      },
    ];
  }, []);

  // Multi-structure intersections analysis
  const intersectionStats = useMemo(() => {
    const bothFinHum = cases.filter(
      (c) => c.affectedStructures.types.includes('Financiera') && c.affectedStructures.types.includes('Humana')
    );
    const bothHumSoc = cases.filter(
      (c) => c.affectedStructures.types.includes('Humana') && c.affectedStructures.types.includes('Social')
    );
    const bothFinSoc = cases.filter(
      (c) => c.affectedStructures.types.includes('Financiera') && c.affectedStructures.types.includes('Social')
    );
    const allThree = cases.filter((c) => c.affectedStructures.types.length === 3);

    return {
      bothFinHum: bothFinHum.length,
      bothHumSoc: bothHumSoc.length,
      bothFinSoc: bothFinSoc.length,
      allThree: allThree.length,
    };
  }, [cases]);

  // Selected sector cases or all filtered cases
  const displayedCases = useMemo(() => {
    let result = cases;
    if (selectedSectorId) {
      const sector = MACRO_SECTORS.find((s) => s.id === selectedSectorId);
      if (sector) {
        result = result.filter((c) => sector.caseIds.includes(c.id));
      }
    }
    if (activeStructureFilter !== 'ALL') {
      result = result.filter((c) => c.affectedStructures.types.includes(activeStructureFilter));
    }
    return result;
  }, [cases, selectedSectorId, activeStructureFilter]);

  const activeSectorObj = MACRO_SECTORS.find((s) => s.id === selectedSectorId);

  const { t, language } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Executive Header Banner */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 border border-stone-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-4xl space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-medium">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.dashboard.badge}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {t.dashboard.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
            {t.dashboard.subtitle}
          </p>
        </div>

        {/* Global Key Metrics Badges */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-800">
          <div className="bg-stone-800/60 p-3 rounded-xl border border-stone-700/60">
            <span className="text-[11px] text-stone-400 block font-mono">{t.dashboard.multiriskIndex}</span>
            <span className="text-lg sm:text-xl font-bold font-mono text-amber-400">
              {Math.round((cases.filter((c) => c.affectedStructures.types.length >= 2).length / cases.length) * 100)}%
            </span>
            <span className="text-[10px] text-stone-400 block mt-0.5">{t.dashboard.multiriskDesc}</span>
          </div>

          <div className="bg-stone-800/60 p-3 rounded-xl border border-stone-700/60">
            <span className="text-[11px] text-emerald-400 block font-mono">{t.dashboard.finVuln}</span>
            <span className="text-lg sm:text-xl font-bold font-mono text-emerald-300">
              {cases.filter((c) => c.affectedStructures.types.includes('Financiera')).length} / {cases.length}
            </span>
            <span className="text-[10px] text-stone-400 block mt-0.5">Vulnerabilidad de Caja</span>
          </div>

          <div className="bg-stone-800/60 p-3 rounded-xl border border-stone-700/60">
            <span className="text-[11px] text-amber-400 block font-mono">{t.dashboard.humVuln}</span>
            <span className="text-lg sm:text-xl font-bold font-mono text-amber-300">
              {cases.filter((c) => c.affectedStructures.types.includes('Humana')).length} / {cases.length}
            </span>
            <span className="text-[10px] text-stone-400 block mt-0.5">Vector Letal (Burnout)</span>
          </div>

          <div className="bg-stone-800/60 p-3 rounded-xl border border-stone-700/60">
            <span className="text-[11px] text-indigo-400 block font-mono">{t.dashboard.socVuln}</span>
            <span className="text-lg sm:text-xl font-bold font-mono text-indigo-300">
              {cases.filter((c) => c.affectedStructures.types.includes('Social')).length} / {cases.length}
            </span>
            <span className="text-[10px] text-stone-400 block mt-0.5">Gobernanza & Silos</span>
          </div>
        </div>
      </div>

      {/* Primary Dashboard Perspective Switcher */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-2.5 rounded-2xl border border-stone-200 shadow-xs">
        <div className="flex items-center gap-1.5 w-full sm:w-auto">
          <button
            onClick={() => setDashboardView('graph')}
            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              dashboardView === 'graph'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Network className="w-4 h-4 text-amber-400" />
            <span>Grafo de Dependencias de Fallos</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-300 font-bold ml-1">
              57 Nodos · 4 Cuellos
            </span>
          </button>

          <button
            onClick={() => setDashboardView('sectors')}
            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              dashboardView === 'sectors'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-emerald-400" />
            <span>Correlación Macro-Sectorial & Matrices</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-stone-200 text-stone-700 font-bold ml-1">
              8 Sectores Recharts
            </span>
          </button>
        </div>

        <div className="text-[11px] text-stone-500 font-mono hidden lg:flex items-center gap-2 pr-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>
            {dashboardView === 'graph'
              ? 'Topología Causal: Tiempo · Claridad · Recursos · Capacidad Real (X → Y)'
              : 'Frecuencia de fracturas en Cash, Burnout y Silos de Gobernanza'}
          </span>
        </div>
      </div>

      {dashboardView === 'graph' ? (
        <FailureDependencyGraph cases={cases} onSelectCase={onSelectCase} />
      ) : (
        <>
          {/* Main Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Bar Chart: Sector vs Structure Frequency */}
        <div className="lg:col-span-8 bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-stone-700" />
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  Frecuencia de Estructuras Afectadas por Macrosector
                </h3>
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                Haz clic en cualquier barra o sector para filtrar las fichas y explorar los cuellos de botella específicos.
              </p>
            </div>

            {/* Toggle count vs percentage */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg border border-stone-200 text-xs shrink-0">
              <button
                onClick={() => setChartMode('stacked')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  chartMode === 'stacked'
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Frecuencia (Casos)
              </button>
              <button
                onClick={() => setChartMode('normalized')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  chartMode === 'normalized'
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Tasa Relativa (%)
              </button>
            </div>
          </div>

          {/* Recharts Bar Component */}
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={sectorData}
                margin={{ top: 10, right: 10, left: -20, bottom: 40 }}
                onClick={(e: any) => {
                  if (e && e.activePayload && e.activePayload.length > 0) {
                    const clickedId = e.activePayload[0].payload.id;
                    setSelectedSectorId((prev) => (prev === clickedId ? null : clickedId));
                  }
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E7E5E4" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: '#57534E' }}
                  angle={-25}
                  textAnchor="end"
                  interval={0}
                  height={50}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: '#78716C' }}
                  domain={chartMode === 'normalized' ? [0, 100] : [0, 'auto']}
                  unit={chartMode === 'normalized' ? '%' : ''}
                />
                <Tooltip
                  cursor={{ fill: '#F5F5F4' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-stone-900 text-stone-100 p-3 rounded-xl shadow-xl border border-stone-800 text-xs space-y-1.5 min-w-[210px]">
                          <div className="font-bold text-white border-b border-stone-800 pb-1">
                            {data.fullName}
                          </div>
                          <div className="text-[11px] text-stone-400">Total Casos Mapeados: {data.totalCases}</div>
                          <div className="space-y-1 pt-1 font-mono">
                            <div className="flex justify-between items-center text-emerald-400">
                              <span>Financiera:</span>
                              <span className="font-bold">
                                {data.financiera} casos ({data.finPct}%)
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-amber-400">
                              <span>Humana:</span>
                              <span className="font-bold">
                                {data.humana} casos ({data.humPct}%)
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-indigo-400">
                              <span>Social:</span>
                              <span className="font-bold">
                                {data.social} casos ({data.socPct}%)
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 pt-1 border-t border-stone-800 text-[10px] text-stone-400 italic">
                            💡 Clic para filtrar casos de este sector
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend
                  wrapperStyle={{ paddingTop: '8px', fontSize: '12px' }}
                  formatter={(value) => {
                    if (value === 'financiera' || value === 'finPct') return 'Estructura Financiera (Cash/P&L)';
                    if (value === 'humana' || value === 'humPct') return 'Estructura Humana (Burnout/Cognitiva)';
                    if (value === 'social' || value === 'socPct') return 'Estructura Social (Gobernanza/Contratos)';
                    return value;
                  }}
                />
                <Bar
                  dataKey={chartMode === 'normalized' ? 'finPct' : 'financiera'}
                  name={chartMode === 'normalized' ? 'finPct' : 'financiera'}
                  fill="#10B981"
                  radius={[4, 4, 0, 0]}
                  cursor="pointer"
                />
                <Bar
                  dataKey={chartMode === 'normalized' ? 'humPct' : 'humana'}
                  name={chartMode === 'normalized' ? 'humPct' : 'humana'}
                  fill="#F59E0B"
                  radius={[4, 4, 0, 0]}
                  cursor="pointer"
                />
                <Bar
                  dataKey={chartMode === 'normalized' ? 'socPct' : 'social'}
                  name={chartMode === 'normalized' ? 'socPct' : 'social'}
                  fill="#6366F1"
                  radius={[4, 4, 0, 0]}
                  cursor="pointer"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Quick Sector Selector Chips */}
          <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-medium text-stone-500 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Filtrar sector:
            </span>
            <button
              onClick={() => setSelectedSectorId(null)}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                selectedSectorId === null
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Todos (8)
            </button>
            {MACRO_SECTORS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSectorId(selectedSectorId === s.id ? null : s.id)}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  selectedSectorId === s.id
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {s.shortName}
              </button>
            ))}
          </div>
        </div>

        {/* Co-occurrence & Multirisk Vulnerability Panel */}
        <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Crosshair className="w-4 h-4 text-amber-600" />
                Intersecciones Críticas
              </h3>
              <span className="text-[10px] font-mono bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                Efecto Cascada
              </span>
            </div>
            <p className="text-xs text-stone-500">
              Patrones donde una fractura en una estructura contagia a otra antes de quebrar el P&amp;L.
            </p>
          </div>

          {/* Intersections Metrics */}
          <div className="space-y-2.5">
            {/* Humana + Financiera */}
            <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/50 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Humana + Financiera
                </div>
                <div className="text-[11px] text-stone-600 mt-0.5">
                  El operador se quema y nubla el juicio de corte o quema cash forzado (#01, #02, #30).
                </div>
              </div>
              <div className="text-right pl-2">
                <span className="text-lg font-bold font-mono text-amber-900">{intersectionStats.bothFinHum}</span>
                <span className="text-[10px] text-stone-500 block">casos (31%)</span>
              </div>
            </div>

            {/* Humana + Social */}
            <div className="p-3 rounded-xl border border-indigo-200 bg-indigo-50/50 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  Humana + Social
                </div>
                <div className="text-[11px] text-stone-600 mt-0.5">
                  Ego del líder, ruptura de confianza y destrucción de canales comunitarios (#03, #15, #32).
                </div>
              </div>
              <div className="text-right pl-2">
                <span className="text-lg font-bold font-mono text-indigo-900">{intersectionStats.bothHumSoc}</span>
                <span className="text-[10px] text-stone-500 block">casos (33%)</span>
              </div>
            </div>

            {/* Financiera + Social */}
            <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/50 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Financiera + Social
                </div>
                <div className="text-[11px] text-stone-600 mt-0.5">
                  Contratos rígidos, burocracia de feudos o acuerdos rotos con inversores (#06, #07, #45).
                </div>
              </div>
              <div className="text-right pl-2">
                <span className="text-lg font-bold font-mono text-emerald-900">{intersectionStats.bothFinSoc}</span>
                <span className="text-[10px] text-stone-500 block">casos (27%)</span>
              </div>
            </div>

            {/* Triple Impact */}
            <div className="p-3 rounded-xl border border-rose-300 bg-rose-50/70 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-950">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  Triple Colapso (Fin + Hum + Soc)
                </div>
                <div className="text-[11px] text-rose-800 mt-0.5">
                  Colapso de sistema completo: desbalance biológico + quiebra económica (#16).
                </div>
              </div>
              <div className="text-right pl-2">
                <span className="text-lg font-bold font-mono text-rose-900">{intersectionStats.allThree}</span>
                <span className="text-[10px] text-rose-700 block">caso crítico</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600">
            <strong>Axioma para Directores:</strong> Cuando una empresa reporta un "problema de ventas o financiamiento", en el 79% de los casos la causa raíz previa fue una fractura humana o social no atendida.
          </div>
        </div>
      </div>

      {/* 4 Systemic Risk Patterns for Corporate Directors */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-100 text-amber-900">
              <Lightbulb className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-base">
                {t.dashboard.patternsTitle}
              </h3>
              <p className="text-xs text-stone-500">
                {t.dashboard.patternsSubtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-2 hover:border-amber-400 transition-colors">
            <span className="px-2 py-0.5 bg-amber-100 text-amber-900 font-mono text-[10px] font-bold rounded">
              PATRÓN 01 · TECH & SAAS
            </span>
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm">
              La Ilusión del Desajuste de Producto
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              En Tech y Startups (#08, #26, #30), el 83% de los casos combina fractura Financiera y Humana. La quema no es técnica: ocurre porque el liderazgo cambia sprints cada 15 días, agotando al equipo técnico antes de que el mercado pueda responder.
            </p>
            <div className="text-[11px] font-semibold text-stone-800 pt-1 border-t border-stone-200">
              Interruptor: <em>Regla de los 90 días (Caso #42) y congelar PMV mínimo (#30).</em>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-2 hover:border-emerald-400 transition-colors">
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 font-mono text-[10px] font-bold rounded">
              PATRÓN 02 · FINTECH & HFT
            </span>
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm">
              Agotamiento de Autogestión en Volatilidad
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              En finanzas cuant y banca (#01, #34, #38), el modelo matemático nunca falla solo. Falla cuando el operador estrella entra en fatiga biológica (burnt) y pierde la frialdad para cerrar en pérdida, apalancando la portco hacia el abismo.
            </p>
            <div className="text-[11px] font-semibold text-stone-800 pt-1 border-t border-stone-200">
              Interruptor: <em>Si talento en burnout &gt; capacidad de corte, salir de posición (#01).</em>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-2 hover:border-indigo-400 transition-colors">
            <span className="px-2 py-0.5 bg-indigo-100 text-indigo-900 font-mono text-[10px] font-bold rounded">
              PATRÓN 03 · GOBIERNO & FEUDOS
            </span>
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm">
              Incentivo Político Interno &gt; Valor Usuario
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              En el 100% de los casos de sector público y política (#05, #11, #14), la afectación Social es total. Los mandos medios optimizan su permanencia y poder interno, ignorando la retroalimentación de la calle y creando fricción terminal.
            </p>
            <div className="text-[11px] font-semibold text-stone-800 pt-1 border-t border-stone-200">
              Interruptor: <em>Incentivar el ego estructural del decisor con métricas de base (#14).</em>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-2 hover:border-rose-400 transition-colors">
            <span className="px-2 py-0.5 bg-rose-100 text-rose-900 font-mono text-[10px] font-bold rounded">
              PATRÓN 04 · SERVICIOS & LEGAL
            </span>
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm">
              Fricción Contractual Asfixia la Operación
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              En legal y BPO (#03, #36, #45), el tiempo invertido en legalizar o en defender scripts rígidos excede el tiempo de ejecución. La empresa pierde clientes de alto valor no por mal servicio, sino por no comprimir sus acuerdos a una sola página.
            </p>
            <div className="text-[11px] font-semibold text-stone-800 pt-1 border-t border-stone-200">
              Interruptor: <em>Contratos de 1 página de principios y lógica funcional (#45).</em>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Case Drill-Down for Selected Sector */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-stone-700" />
              <h3 className="font-bold text-stone-900 text-base">
                Fichas Relacionadas: {activeSectorObj ? activeSectorObj.name : 'Todos los Sectores'}
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-mono text-xs font-semibold">
                {displayedCases.length} casos
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">
              {activeSectorObj
                ? activeSectorObj.description
                : 'Muestra los casos correspondientes al sector y estructura seleccionada.'}
            </p>
          </div>

          {/* Structure filter within drilldown */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] text-stone-500">Filtrar estructura:</span>
            <button
              onClick={() => setActiveStructureFilter('ALL')}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                activeStructureFilter === 'ALL'
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setActiveStructureFilter(activeStructureFilter === 'Financiera' ? 'ALL' : 'Financiera')}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1 ${
                activeStructureFilter === 'Financiera'
                  ? 'bg-emerald-600 text-white font-semibold'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
              }`}
            >
              <DollarSign className="w-3 h-3" /> Financiera
            </button>
            <button
              onClick={() => setActiveStructureFilter(activeStructureFilter === 'Humana' ? 'ALL' : 'Humana')}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1 ${
                activeStructureFilter === 'Humana'
                  ? 'bg-amber-600 text-white font-semibold'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
              }`}
            >
              <User className="w-3 h-3" /> Humana
            </button>
            <button
              onClick={() => setActiveStructureFilter(activeStructureFilter === 'Social' ? 'ALL' : 'Social')}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1 ${
                activeStructureFilter === 'Social'
                  ? 'bg-indigo-600 text-white font-semibold'
                  : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100'
              }`}
            >
              <Users className="w-3 h-3" /> Social
            </button>
          </div>
        </div>

        {/* Compact List of Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {displayedCases.map((c) => (
            <div
              key={c.id}
              onClick={() => onSelectCase(c)}
              className="p-3.5 rounded-xl border border-stone-200 hover:border-stone-800 bg-white hover:bg-stone-50/70 transition-all cursor-pointer group flex flex-col justify-between shadow-2xs"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                    {c.caseNumber}
                  </span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${
                      c.exitKey.status === 'Éxito'
                        ? 'bg-emerald-100 text-emerald-800'
                        : c.exitKey.status === 'Archivado'
                        ? 'bg-amber-100 text-amber-800'
                        : c.exitKey.status === 'Delegado'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {c.exitKey.status}
                  </span>
                </div>
                <h4 className="font-bold text-stone-900 text-xs sm:text-sm line-clamp-1">{c.title}</h4>
                <div className="text-[11px] text-stone-500 font-mono line-clamp-1">{c.industry}</div>
                <div className="p-2 rounded bg-stone-50 border border-stone-200 text-[11px] text-stone-700 line-clamp-2 italic">
                  "{c.exitKey.criterion}"
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1">
                  {c.affectedStructures.types.map((st) => (
                    <span
                      key={st}
                      className={`px-1.5 py-0.2 rounded text-[10px] font-semibold ${
                        st === 'Financiera'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : st === 'Humana'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      }`}
                    >
                      {st}
                    </span>
                  ))}
                </div>
                <span className="text-stone-400 group-hover:text-stone-900 flex items-center gap-0.5 font-medium transition-colors">
                  Ver detalle <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )}
</div>
);
};
