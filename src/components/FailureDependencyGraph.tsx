import React, { useState, useMemo, useRef } from 'react';
import { CaseStudy } from '../types';
import {
  ELEMENTAL_BOTTLENECK_DEFINITIONS,
  SHARED_CRITICAL_HUBS,
  CASE_DEPENDENCY_PROFILES,
  ElementalBottleneckId,
  SharedCriticalHubId,
  ElementalBottleneck,
  SharedCriticalHub,
  CaseDependencyProfile,
} from '../data/failureDependencies';
import {
  Clock,
  Eye,
  DollarSign,
  Zap,
  Activity,
  Layers,
  Filter,
  Search,
  ArrowRight,
  ChevronRight,
  Info,
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  Sliders,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Crosshair,
  ShieldAlert,
  AlertTriangle,
  Network,
  Share2,
  ExternalLink,
  Flame,
} from 'lucide-react';

interface FailureDependencyGraphProps {
  cases: CaseStudy[];
  onSelectCase: (caseStudy: CaseStudy) => void;
}

type GraphLayoutMode = 'radial' | 'flow' | 'matrix';

export const FailureDependencyGraph: React.FC<FailureDependencyGraphProps> = ({
  cases,
  onSelectCase,
}) => {
  // Navigation & view states
  const [layoutMode, setLayoutMode] = useState<GraphLayoutMode>('radial');
  const [selectedBottleneckFilter, setSelectedBottleneckFilter] = useState<ElementalBottleneckId | 'ALL'>('ALL');
  const [selectedHubFilter, setSelectedHubFilter] = useState<SharedCriticalHubId | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected active node (for inspection)
  const [selectedNodeId, setSelectedNodeId] = useState<{
    type: 'case' | 'hub' | 'bottleneck';
    id: string | number;
  } | null>({ type: 'hub', id: 'HUB_CEGUERA' });

  // Hovered node
  const [hoveredNodeId, setHoveredNodeId] = useState<{
    type: 'case' | 'hub' | 'bottleneck';
    id: string | number;
  } | null>(null);

  // Zoom level & Pan
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isCopied, setIsCopied] = useState(false);
  const [showFormulaModal, setShowFormulaModal] = useState(false);

  // Interactive Clarity & Energy Conversion Calculator State
  const [calcRelevantInfo, setCalcRelevantInfo] = useState<number>(35); // 0-100%
  const [calcBias, setCalcBias] = useState<number>(25); // 0-50%
  const [calcExpectations, setCalcExpectations] = useState<number>(20); // 0-50%
  const [calcCognitiveLoad, setCalcCognitiveLoad] = useState<number>(30); // 0-50%
  const [calcNetNodes, setCalcNetNodes] = useState<number>(4); // Real useful nodes
  const [calcNominalNodes, setCalcNominalNodes] = useState<number>(12); // Org chart nodes
  const [calcEnergyEfficiency, setCalcEnergyEfficiency] = useState<number>(45); // Conversion %

  // Computed Clarity: C = Relevant/Total - Biases - Expectations - CognitiveLoad
  const calculatedClarity = useMemo(() => {
    const rawC = (calcRelevantInfo / 100) - (calcBias / 100) - (calcExpectations / 100) - (calcCognitiveLoad / 100);
    return Math.round(rawC * 100);
  }, [calcRelevantInfo, calcBias, calcExpectations, calcCognitiveLoad]);

  // Computed Net Capacity: NetNodes * Efficiency - Dispersion
  const calculatedCapacityIndex = useMemo(() => {
    const dispersion = 100 - calcEnergyEfficiency;
    const effectiveUseful = (calcNetNodes / Math.max(1, calcNominalNodes)) * calcEnergyEfficiency;
    return Math.round(effectiveUseful);
  }, [calcNetNodes, calcNominalNodes, calcEnergyEfficiency]);

  // Fast lookups
  const casesMap = useMemo(() => {
    const map = new Map<number, CaseStudy>();
    cases.forEach((c) => map.set(c.id, c));
    return map;
  }, [cases]);

  // Combine case studies with dependency profiles
  const fullCaseNodes = useMemo(() => {
    return cases.map((cs) => {
      const profile = CASE_DEPENDENCY_PROFILES[cs.id] || {
        caseId: cs.id,
        caseNumber: cs.caseNumber,
        primaryBottleneck: 'claridad' as ElementalBottleneckId,
        secondaryBottleneck: 'capacidad_real' as ElementalBottleneckId,
        primaryHub: 'HUB_CEGUERA' as SharedCriticalHubId,
        energyDispersionPct: 70,
        clarityLeakPct: 75,
        singleActionCondition: cs.exitKey.criterion,
        connectedCaseIds: [],
        failureTrajectory: cs.elementalFractal.bottleneck,
      };

      return {
        ...cs,
        profile,
      };
    });
  }, [cases]);

  // Filtered case nodes based on selection and search
  const filteredCaseNodes = useMemo(() => {
    return fullCaseNodes.filter((c) => {
      // 1. Bottleneck filter
      if (selectedBottleneckFilter !== 'ALL') {
        if (
          c.profile.primaryBottleneck !== selectedBottleneckFilter &&
          c.profile.secondaryBottleneck !== selectedBottleneckFilter
        ) {
          return false;
        }
      }

      // 2. Hub filter
      if (selectedHubFilter !== 'ALL') {
        if (
          c.profile.primaryHub !== selectedHubFilter &&
          c.profile.secondaryHub !== selectedHubFilter
        ) {
          return false;
        }
      }

      // 3. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inNum = c.caseNumber.toLowerCase().includes(q);
        const inTitle = c.title.toLowerCase().includes(q);
        const inInd = c.industry.toLowerCase().includes(q);
        const inCond = c.profile.singleActionCondition.toLowerCase().includes(q);
        const inTraj = c.profile.failureTrajectory.toLowerCase().includes(q);
        return inNum || inTitle || inInd || inCond || inTraj;
      }

      return true;
    });
  }, [fullCaseNodes, selectedBottleneckFilter, selectedHubFilter, searchQuery]);

  // Layout Node Coordinates Generator
  const layoutCoordinates = useMemo(() => {
    const width = 1000;
    const height = 750;
    const cx = width / 2;
    const cy = height / 2;

    if (layoutMode === 'radial') {
      // 1. Central 4 Elemental Bottlenecks (inner diamond)
      const bottleneckPositions: Record<ElementalBottleneckId, { x: number; y: number }> = {
        tiempo: { x: cx, y: cy - 90 },
        claridad: { x: cx - 120, y: cy },
        recursos: { x: cx + 120, y: cy },
        capacidad_real: { x: cx, y: cy + 90 },
      };

      // 2. 8 Shared Critical Hubs (middle orbit, radius ~210)
      const hubPositions: Record<SharedCriticalHubId, { x: number; y: number }> = {
        HUB_CEGUERA: { x: cx - 180, y: cy - 130 },
        HUB_BURNOUT: { x: cx - 70, y: cy - 210 },
        HUB_ASINCRONIA: { x: cx + 70, y: cy - 210 },
        HUB_AMPUTACION: { x: cx + 180, y: cy - 130 },
        HUB_CONTRATOS: { x: cx + 210, y: cy + 60 },
        HUB_CONVERSION: { x: cx + 90, y: cy + 200 },
        HUB_MONOLITO: { x: cx - 90, y: cy + 200 },
        HUB_FEUDOS: { x: cx - 210, y: cy + 60 },
      };

      // 3. 57 Cases positioned around their primary hub in satellite clusters
      const casePositions: Record<number, { x: number; y: number }> = {};
      const hubGroups: Record<SharedCriticalHubId, number[]> = {
        HUB_CEGUERA: [],
        HUB_BURNOUT: [],
        HUB_AMPUTACION: [],
        HUB_CONVERSION: [],
        HUB_FEUDOS: [],
        HUB_MONOLITO: [],
        HUB_ASINCRONIA: [],
        HUB_CONTRATOS: [],
      };

      fullCaseNodes.forEach((c) => {
        hubGroups[c.profile.primaryHub].push(c.id);
      });

      // Distribute cases radially outwards around each hub
      Object.entries(hubGroups).forEach(([hubKey, caseIds]) => {
        const hubPos = hubPositions[hubKey as SharedCriticalHubId];
        const hubAngle = Math.atan2(hubPos.y - cy, hubPos.x - cx);
        const count = caseIds.length;

        caseIds.forEach((id, idx) => {
          // Arc spread around the hub
          const angleOffset = count > 1 ? ((idx - (count - 1) / 2) / count) * 1.5 : 0;
          const finalAngle = hubAngle + angleOffset;
          const distance = 100 + (idx % 2 === 0 ? 0 : 25);
          casePositions[id] = {
            x: Math.max(30, Math.min(width - 30, hubPos.x + Math.cos(finalAngle) * distance)),
            y: Math.max(30, Math.min(height - 30, hubPos.y + Math.sin(finalAngle) * distance)),
          };
        });
      });

      return { bottleneckPositions, hubPositions, casePositions, width, height };
    }

    if (layoutMode === 'flow') {
      // 4-Stage Flow from left to right:
      // Left: 4 Elemental Bottlenecks (x: 100)
      // Mid-Left: 8 Shared Critical Hubs (x: 350)
      // Mid-Right / Right: 57 Cases arranged in grid/columns (x: 650 to 920)
      const bottleneckPositions: Record<ElementalBottleneckId, { x: number; y: number }> = {
        tiempo: { x: 100, y: 130 },
        claridad: { x: 100, y: 290 },
        recursos: { x: 100, y: 460 },
        capacidad_real: { x: 100, y: 620 },
      };

      const hubPositions: Record<SharedCriticalHubId, { x: number; y: number }> = {
        HUB_CEGUERA: { x: 340, y: 80 },
        HUB_BURNOUT: { x: 340, y: 165 },
        HUB_ASINCRONIA: { x: 340, y: 250 },
        HUB_AMPUTACION: { x: 340, y: 335 },
        HUB_FEUDOS: { x: 340, y: 420 },
        HUB_MONOLITO: { x: 340, y: 505 },
        HUB_CONVERSION: { x: 340, y: 590 },
        HUB_CONTRATOS: { x: 340, y: 675 },
      };

      const casePositions: Record<number, { x: number; y: number }> = {};
      fullCaseNodes.forEach((c, idx) => {
        // Arrange 57 cases across 3 columns on the right
        const col = idx % 3;
        const row = Math.floor(idx / 3);
        casePositions[c.id] = {
          x: 580 + col * 160,
          y: 60 + row * 34,
        };
      });

      return { bottleneckPositions, hubPositions, casePositions, width, height };
    }

    // Default radial fallback
    return {
      bottleneckPositions: {} as any,
      hubPositions: {} as any,
      casePositions: {} as any,
      width,
      height,
    };
  }, [layoutMode, fullCaseNodes]);

  // Currently inspected details
  const inspectedData = useMemo(() => {
    if (!selectedNodeId) return null;

    if (selectedNodeId.type === 'bottleneck') {
      const bKey = selectedNodeId.id as ElementalBottleneckId;
      const bottleneck = ELEMENTAL_BOTTLENECK_DEFINITIONS[bKey];
      const linkedCases = fullCaseNodes.filter(
        (c) => c.profile.primaryBottleneck === bKey || c.profile.secondaryBottleneck === bKey
      );
      const linkedHubs = SHARED_CRITICAL_HUBS.filter(
        (h) => h.primaryBottleneck === bKey || h.secondaryBottleneck === bKey
      );
      return {
        type: 'bottleneck' as const,
        data: bottleneck,
        linkedCases,
        linkedHubs,
      };
    }

    if (selectedNodeId.type === 'hub') {
      const hKey = selectedNodeId.id as SharedCriticalHubId;
      const hub = SHARED_CRITICAL_HUBS.find((h) => h.id === hKey);
      if (!hub) return null;
      const primaryB = ELEMENTAL_BOTTLENECK_DEFINITIONS[hub.primaryBottleneck];
      const secondaryB = ELEMENTAL_BOTTLENECK_DEFINITIONS[hub.secondaryBottleneck];
      const linkedCases = fullCaseNodes.filter(
        (c) => c.profile.primaryHub === hKey || c.profile.secondaryHub === hKey
      );
      return {
        type: 'hub' as const,
        data: hub,
        primaryBottleneck: primaryB,
        secondaryBottleneck: secondaryB,
        linkedCases,
      };
    }

    if (selectedNodeId.type === 'case') {
      const cId = Number(selectedNodeId.id);
      const cNode = fullCaseNodes.find((c) => c.id === cId);
      if (!cNode) return null;
      const primaryB = ELEMENTAL_BOTTLENECK_DEFINITIONS[cNode.profile.primaryBottleneck];
      const secondaryB = ELEMENTAL_BOTTLENECK_DEFINITIONS[cNode.profile.secondaryBottleneck];
      const primaryH = SHARED_CRITICAL_HUBS.find((h) => h.id === cNode.profile.primaryHub);
      const peerCases = fullCaseNodes.filter((p) =>
        cNode.profile.connectedCaseIds.includes(p.id)
      );
      return {
        type: 'case' as const,
        data: cNode,
        primaryBottleneck: primaryB,
        secondaryBottleneck: secondaryB,
        primaryHub: primaryH,
        peerCases,
      };
    }

    return null;
  }, [selectedNodeId, fullCaseNodes]);

  // Is element highlighted in graph
  const isElementHighlighted = (type: 'case' | 'hub' | 'bottleneck', id: string | number) => {
    // If nothing selected or hovered, show all normally
    const activeTarget = hoveredNodeId || selectedNodeId;
    if (!activeTarget) return true;

    if (activeTarget.type === 'bottleneck') {
      if (type === 'bottleneck') return activeTarget.id === id;
      if (type === 'hub') {
        const hub = SHARED_CRITICAL_HUBS.find((h) => h.id === id);
        return hub?.primaryBottleneck === activeTarget.id || hub?.secondaryBottleneck === activeTarget.id;
      }
      if (type === 'case') {
        const cNode = fullCaseNodes.find((c) => c.id === id);
        return (
          cNode?.profile.primaryBottleneck === activeTarget.id ||
          cNode?.profile.secondaryBottleneck === activeTarget.id
        );
      }
    }

    if (activeTarget.type === 'hub') {
      if (type === 'hub') return activeTarget.id === id;
      if (type === 'bottleneck') {
        const hub = SHARED_CRITICAL_HUBS.find((h) => h.id === activeTarget.id);
        return hub?.primaryBottleneck === id || hub?.secondaryBottleneck === id;
      }
      if (type === 'case') {
        const cNode = fullCaseNodes.find((c) => c.id === id);
        return cNode?.profile.primaryHub === activeTarget.id || cNode?.profile.secondaryHub === activeTarget.id;
      }
    }

    if (activeTarget.type === 'case') {
      const activeCase = fullCaseNodes.find((c) => c.id === activeTarget.id);
      if (!activeCase) return false;
      if (type === 'case') {
        return (
          id === activeCase.id ||
          activeCase.profile.connectedCaseIds.includes(id as number)
        );
      }
      if (type === 'hub') {
        return activeCase.profile.primaryHub === id || activeCase.profile.secondaryHub === id;
      }
      if (type === 'bottleneck') {
        return (
          activeCase.profile.primaryBottleneck === id ||
          activeCase.profile.secondaryBottleneck === id
        );
      }
    }

    return true;
  };

  const handleCopyManifesto = () => {
    if (!inspectedData) return;
    let text = '';
    if (inspectedData.type === 'bottleneck') {
      text = `[CUELLO DE BOTELLA ELEMENTAL] ${inspectedData.data.name}
Definición: ${inspectedData.data.definition}
Tesis: ${inspectedData.data.deepThesis}
Síntoma de Fricción: ${inspectedData.data.frictionSymptom}
Principio de Solución: ${inspectedData.data.curePrinciple}
Fórmula: ${inspectedData.data.formula}`;
    } else if (inspectedData.type === 'hub') {
      text = `[NODO CRÍTICO COMPARTIDO] ${inspectedData.data.name}
Mecanismo de Falla: ${inspectedData.data.mechanism}
Axioma de Riesgo: ${inspectedData.data.riskAxiom}
Cuellos de Botella: ${inspectedData.data.primaryBottleneck} + ${inspectedData.data.secondaryBottleneck}
Casos Vinculados: ${inspectedData.linkedCases.map((c) => c.caseNumber).join(', ')}`;
    } else if (inspectedData.type === 'case') {
      text = `[FICHA DE FALLO SISTÉMICO ${inspectedData.data.caseNumber}] ${inspectedData.data.title}
Industria: ${inspectedData.data.industry}
Trayectoria de Falla: ${inspectedData.data.profile.failureTrajectory}
Cuello Elemental: ${inspectedData.primaryBottleneck.name}
Nodo Crítico: ${inspectedData.primaryHub?.name}
Dispersión Energética (X->Y): ${inspectedData.data.profile.energyDispersionPct}%
Fuga de Claridad (C): ${inspectedData.data.profile.clarityLeakPct}%
Condición Única de Acción: ${inspectedData.data.profile.singleActionCondition}`;
    }

    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Ontology & Elemental Bottlenecks Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 text-white p-6 sm:p-8 border border-amber-500/30 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="space-y-3 relative z-10 max-w-5xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-wider">
              <Network className="w-3.5 h-3.5" />
              <span>ONTOLOGÍA MATEMÁTICA · GRAFO DE DEPENDENCIAS DE FALLOS</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>57 Casos Interconectados · 8 Hubs Críticos · 4 Ejes Termodinámicos</span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
            Red Causal de Fallos & Cuellos de Botella Elementales
          </h2>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            <strong>Tesis Ontológica:</strong> Todo sistema complejo —sin excepción de industria, escala o tecnología— comparte una misma serie elemental de cuellos de botella de donde nace todo lo que termina en post mortem: la fricción insoluble entre <strong>Tiempo</strong> (la invariante del flujo físico y evolutivo), <strong>Claridad</strong> (la ecuación de información relevante vs sesgo y ruido), <strong>Recursos/Capital</strong> (runway y amortiguación de choque), y la <strong>Capacidad Real del Sistema</strong> (conversión termodinámica de energía $X \to Y$ sin disipación entrópica).
          </p>

          {/* Quick 4 Elemental Bottlenecks Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3">
            {Object.values(ELEMENTAL_BOTTLENECK_DEFINITIONS).map((b) => (
              <button
                key={b.id}
                onClick={() => {
                  setSelectedBottleneckFilter((prev) => (prev === b.id ? 'ALL' : b.id));
                  setSelectedNodeId({ type: 'bottleneck', id: b.id });
                }}
                className={`p-3 rounded-2xl border text-left transition-all group relative ${
                  selectedBottleneckFilter === b.id
                    ? `${b.bgClass} ${b.borderClass} ring-2 ring-amber-400/50 shadow-lg`
                    : 'bg-stone-900/80 border-stone-800 hover:border-stone-700 hover:bg-stone-800/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 font-bold font-mono text-xs">
                    {b.id === 'tiempo' && <Clock className="w-3.5 h-3.5 text-amber-400" />}
                    {b.id === 'claridad' && <Eye className="w-3.5 h-3.5 text-cyan-400" />}
                    {b.id === 'recursos' && <DollarSign className="w-3.5 h-3.5 text-emerald-400" />}
                    {b.id === 'capacidad_real' && <Zap className="w-3.5 h-3.5 text-purple-400" />}
                    <span className={b.textClass}>{b.symbol}</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-800 text-stone-400">
                    {fullCaseNodes.filter(
                      (c) => c.profile.primaryBottleneck === b.id || c.profile.secondaryBottleneck === b.id
                    ).length}{' '}
                    casos
                  </span>
                </div>
                <div className="font-semibold text-xs text-stone-100 group-hover:text-white line-clamp-1">
                  {b.shortName}
                </div>
                <div className="text-[11px] text-stone-400 mt-1 line-clamp-2 leading-tight">
                  {b.definition}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Interactive Controls & Filtering Toolbar */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por caso (#01), síntoma, interruptor o trayectoria..."
            className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs font-bold"
            >
              ×
            </button>
          )}
        </div>

        {/* Filters and View Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Layout mode */}
          <div className="inline-flex rounded-xl bg-stone-100 p-1 border border-stone-200 text-xs">
            <button
              onClick={() => setLayoutMode('radial')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                layoutMode === 'radial'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Topología Radial</span>
            </button>
            <button
              onClick={() => setLayoutMode('flow')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                layoutMode === 'flow'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Flujo Causal (Fases)</span>
            </button>
          </div>

          {/* Reset button */}
          {(selectedBottleneckFilter !== 'ALL' || selectedHubFilter !== 'ALL' || searchQuery !== '') && (
            <button
              onClick={() => {
                setSelectedBottleneckFilter('ALL');
                setSelectedHubFilter('ALL');
                setSearchQuery('');
              }}
              className="px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-600 hover:text-stone-900 text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpiar Filtros</span>
            </button>
          )}
        </div>
      </div>

      {/* 3. Main Network Canvas & Inspection Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Center Graph Visualizer Canvas (8 cols) */}
        <div className="lg:col-span-8 bg-stone-950 rounded-3xl border border-stone-800 shadow-xl overflow-hidden relative flex flex-col justify-between min-h-[680px]">
          {/* Canvas Top Status Bar */}
          <div className="p-4 bg-stone-900/90 border-b border-stone-800/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 z-20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="text-xs font-mono font-bold text-stone-200">
                {layoutMode === 'radial' ? 'VISTA RADIAL MULTI-ORBITAL' : 'VISTA DE FLUJO CAUSAL POR FASES'}
              </span>
              <span className="text-[11px] font-mono text-stone-400">
                ({filteredCaseNodes.length} de 57 casos visibles)
              </span>
            </div>

            {/* Hub Quick Filter */}
            <div className="flex items-center gap-1 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
              <span className="text-[10px] text-stone-400 font-mono mr-1 shrink-0">Hub Crítico:</span>
              <button
                onClick={() => setSelectedHubFilter('ALL')}
                className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors shrink-0 ${
                  selectedHubFilter === 'ALL'
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'bg-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                Todos
              </button>
              {SHARED_CRITICAL_HUBS.map((h) => (
                <button
                  key={h.id}
                  onClick={() => {
                    setSelectedHubFilter((prev) => (prev === h.id ? 'ALL' : h.id));
                    setSelectedNodeId({ type: 'hub', id: h.id });
                  }}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors whitespace-nowrap shrink-0 ${
                    selectedHubFilter === h.id
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'bg-stone-800 text-stone-400 hover:text-white'
                  }`}
                >
                  {h.shortName.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1 bg-stone-800/80 p-1 rounded-lg border border-stone-700/50">
              <button
                onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.15))}
                className="p-1 text-stone-300 hover:text-white hover:bg-stone-700 rounded transition-colors"
                title="Alejar"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-mono text-stone-400 px-1">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(1.6, z + 0.15))}
                className="p-1 text-stone-300 hover:text-white hover:bg-stone-700 rounded transition-colors"
                title="Acercar"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  setZoomLevel(1);
                  setPanOffset({ x: 0, y: 0 });
                }}
                className="p-1 text-stone-300 hover:text-white hover:bg-stone-700 rounded transition-colors ml-1"
                title="Restablecer vista"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* SVG Dependency Canvas */}
          <div className="flex-1 w-full relative overflow-hidden bg-radial from-stone-900/40 via-stone-950 to-stone-950 flex items-center justify-center p-2 select-none">
            {/* Subtle grid pattern */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#57534E" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            <svg
              viewBox={`0 0 ${layoutCoordinates.width} ${layoutCoordinates.height}`}
              className="w-full h-full transition-transform duration-200"
              style={{
                transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
                transformOrigin: 'center center',
              }}
            >
              <defs>
                {/* Glow Filter */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="5"
                  refY="5"
                  markerWidth="4"
                  markerHeight="4"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#78716C" />
                </marker>
              </defs>

              {/* 1. EDGES / CAUSAL DEPENDENCY LINKS */}
              <g className="edges opacity-40">
                {/* Links from Elemental Bottlenecks to Shared Critical Hubs */}
                {SHARED_CRITICAL_HUBS.map((hub) => {
                  const hubPos = layoutCoordinates.hubPositions[hub.id];
                  const primaryBPos = layoutCoordinates.bottleneckPositions[hub.primaryBottleneck];
                  const secondaryBPos = layoutCoordinates.bottleneckPositions[hub.secondaryBottleneck];
                  if (!hubPos || !primaryBPos) return null;

                  const isHubHighlighted = isElementHighlighted('hub', hub.id);

                  return (
                    <React.Fragment key={`hub-links-${hub.id}`}>
                      {/* Primary Bottleneck Link */}
                      <path
                        d={`M ${primaryBPos.x} ${primaryBPos.y} Q ${(primaryBPos.x + hubPos.x) / 2} ${(primaryBPos.y + hubPos.y) / 2} ${hubPos.x} ${hubPos.y}`}
                        fill="none"
                        stroke={isHubHighlighted ? hub.color : '#44403C'}
                        strokeWidth={isHubHighlighted ? 2.5 : 1}
                        strokeDasharray={isHubHighlighted ? 'none' : '4 4'}
                        opacity={isHubHighlighted ? 0.8 : 0.2}
                      />
                      {/* Secondary Bottleneck Link */}
                      {secondaryBPos && (
                        <path
                          d={`M ${secondaryBPos.x} ${secondaryBPos.y} Q ${(secondaryBPos.x + hubPos.x) / 2} ${(secondaryBPos.y + hubPos.y) / 2} ${hubPos.x} ${hubPos.y}`}
                          fill="none"
                          stroke={isHubHighlighted ? hub.color : '#292524'}
                          strokeWidth={isHubHighlighted ? 1.5 : 0.8}
                          strokeDasharray="2 4"
                          opacity={isHubHighlighted ? 0.5 : 0.15}
                        />
                      )}
                    </React.Fragment>
                  );
                })}

                {/* Links from Shared Critical Hubs to Cases */}
                {filteredCaseNodes.map((c) => {
                  const cPos = layoutCoordinates.casePositions[c.id];
                  const hubPos = layoutCoordinates.hubPositions[c.profile.primaryHub];
                  if (!cPos || !hubPos) return null;

                  const isCaseHighlighted = isElementHighlighted('case', c.id);
                  const hub = SHARED_CRITICAL_HUBS.find((h) => h.id === c.profile.primaryHub);

                  return (
                    <line
                      key={`case-edge-${c.id}`}
                      x1={hubPos.x}
                      y1={hubPos.y}
                      x2={cPos.x}
                      y2={cPos.y}
                      stroke={isCaseHighlighted ? hub?.color || '#D97706' : '#292524'}
                      strokeWidth={isCaseHighlighted ? 1.8 : 0.6}
                      opacity={isCaseHighlighted ? 0.75 : 0.15}
                    />
                  );
                })}
              </g>

              {/* 2. NODES: ELEMENTAL BOTTLENECK ANCHORS (4 Central Poles) */}
              <g className="bottleneck-nodes">
                {Object.values(ELEMENTAL_BOTTLENECK_DEFINITIONS).map((b) => {
                  const pos = layoutCoordinates.bottleneckPositions[b.id];
                  if (!pos) return null;

                  const isHighlighted = isElementHighlighted('bottleneck', b.id);
                  const isSelected = selectedNodeId?.type === 'bottleneck' && selectedNodeId.id === b.id;

                  return (
                    <g
                      key={`bottleneck-node-${b.id}`}
                      transform={`translate(${pos.x}, ${pos.y})`}
                      className="cursor-pointer transition-transform duration-150"
                      onClick={() => setSelectedNodeId({ type: 'bottleneck', id: b.id })}
                      onMouseEnter={() => setHoveredNodeId({ type: 'bottleneck', id: b.id })}
                      onMouseLeave={() => setHoveredNodeId(null)}
                    >
                      {/* Pulse Halo if highlighted */}
                      {isHighlighted && (
                        <circle
                          r="38"
                          fill={b.color}
                          opacity="0.12"
                          className="animate-pulse"
                        />
                      )}

                      <circle
                        r="30"
                        fill="#1C1917"
                        stroke={b.color}
                        strokeWidth={isSelected ? 3.5 : isHighlighted ? 2.5 : 1}
                        filter={isSelected ? 'url(#glow)' : undefined}
                      />

                      {/* Bottleneck Symbol & Label */}
                      <text
                        y="-4"
                        textAnchor="middle"
                        fill={b.color}
                        fontSize="15"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        {b.symbol}
                      </text>
                      <text
                        y="14"
                        textAnchor="middle"
                        fill="#D6D3D1"
                        fontSize="9"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                      >
                        {b.id === 'tiempo'
                          ? 'TIEMPO'
                          : b.id === 'claridad'
                          ? 'CLARIDAD'
                          : b.id === 'recursos'
                          ? 'RECURSOS'
                          : 'CAPACIDAD'}
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* 3. NODES: 8 SHARED CRITICAL HUBS */}
              <g className="hub-nodes">
                {SHARED_CRITICAL_HUBS.map((hub) => {
                  const pos = layoutCoordinates.hubPositions[hub.id];
                  if (!pos) return null;

                  const isHighlighted = isElementHighlighted('hub', hub.id);
                  const isSelected = selectedNodeId?.type === 'hub' && selectedNodeId.id === hub.id;
                  const caseCount = fullCaseNodes.filter(
                    (c) => c.profile.primaryHub === hub.id || c.profile.secondaryHub === hub.id
                  ).length;

                  return (
                    <g
                      key={`hub-node-${hub.id}`}
                      transform={`translate(${pos.x}, ${pos.y})`}
                      className="cursor-pointer"
                      onClick={() => setSelectedNodeId({ type: 'hub', id: hub.id })}
                      onMouseEnter={() => setHoveredNodeId({ type: 'hub', id: hub.id })}
                      onMouseLeave={() => setHoveredNodeId(null)}
                    >
                      {/* Glow ring */}
                      {isSelected && (
                        <circle
                          r="26"
                          fill="none"
                          stroke={hub.color}
                          strokeWidth="2"
                          strokeDasharray="4 2"
                          className="animate-spin"
                        />
                      )}

                      <rect
                        x="-20"
                        y="-20"
                        width="40"
                        height="40"
                        rx="10"
                        fill="#292524"
                        stroke={hub.color}
                        strokeWidth={isSelected ? 3 : isHighlighted ? 2 : 1}
                        opacity={isHighlighted ? 1 : 0.4}
                      />

                      <text
                        y="4"
                        textAnchor="middle"
                        fill={isHighlighted ? '#FFFFFF' : '#A8A29E'}
                        fontSize="11"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        {caseCount}
                      </text>

                      {/* Small Hub Label Tag Below */}
                      <text
                        y="32"
                        textAnchor="middle"
                        fill={isHighlighted ? hub.color : '#78716C'}
                        fontSize="9"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                      >
                        {hub.shortName.length > 20
                          ? hub.shortName.slice(0, 18) + '...'
                          : hub.shortName}
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* 4. NODES: 57 CASES */}
              <g className="case-nodes">
                {filteredCaseNodes.map((c) => {
                  const pos = layoutCoordinates.casePositions[c.id];
                  if (!pos) return null;

                  const isHighlighted = isElementHighlighted('case', c.id);
                  const isSelected = selectedNodeId?.type === 'case' && selectedNodeId.id === c.id;

                  // Status dot color
                  const statusColor =
                    c.exitKey.status === 'Éxito'
                      ? '#10B981'
                      : c.exitKey.status === 'Archivado'
                      ? '#F59E0B'
                      : c.exitKey.status === 'Delegado'
                      ? '#3B82F6'
                      : '#EF4444';

                  return (
                    <g
                      key={`case-node-${c.id}`}
                      transform={`translate(${pos.x}, ${pos.y})`}
                      className="cursor-pointer"
                      onClick={() => setSelectedNodeId({ type: 'case', id: c.id })}
                      onMouseEnter={() => setHoveredNodeId({ type: 'case', id: c.id })}
                      onMouseLeave={() => setHoveredNodeId(null)}
                    >
                      {/* Selected halo */}
                      {isSelected && (
                        <circle
                          r="18"
                          fill="none"
                          stroke="#F59E0B"
                          strokeWidth="2.5"
                          strokeDasharray="3 3"
                        />
                      )}

                      <circle
                        r={isSelected ? 14 : isHighlighted ? 11 : 8}
                        fill="#1C1917"
                        stroke={statusColor}
                        strokeWidth={isSelected ? 3 : isHighlighted ? 2 : 1}
                        opacity={isHighlighted ? 1 : 0.25}
                      />

                      <text
                        y="3.5"
                        textAnchor="middle"
                        fill={isHighlighted ? '#FFFFFF' : '#78716C'}
                        fontSize={isSelected ? 9 : 8}
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        {c.id}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Canvas Bottom Legend & Quick Explanation Bar */}
          <div className="p-3 bg-stone-900 border-t border-stone-800 text-xs text-stone-300 flex flex-wrap items-center justify-between gap-3 z-10">
            <div className="flex items-center gap-4 text-[11px] font-mono">
              <span className="text-stone-400">Leyenda Nodos:</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-300" />
                <span className="text-stone-300">Archivado / Pérdida</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-emerald-300" />
                <span className="text-stone-300">Éxito / Corte Viable</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 border border-blue-300" />
                <span className="text-stone-300">Delegado</span>
              </div>
            </div>

            <div className="text-[11px] text-stone-400">
              💡 Haz clic en cualquier nodo o caso para abrir su diagnóstico causal profundo.
            </div>
          </div>
        </div>

        {/* Right Inspection & Forensic Breakdown Panel (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-stone-200 p-6 shadow-xs flex flex-col justify-between space-y-6">
          {inspectedData ? (
            <div className="space-y-5">
              {/* Type Badge & Title */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-700">
                    {inspectedData.type === 'bottleneck'
                      ? 'Cuello de Botella Elemental'
                      : inspectedData.type === 'hub'
                      ? 'Nodo Crítico Compartido'
                      : 'Ficha de Falla Sistémica'}
                  </span>
                  {inspectedData.type === 'case' && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold font-mono ${
                        inspectedData.data.exitKey.status === 'Éxito'
                          ? 'bg-emerald-100 text-emerald-800'
                          : inspectedData.data.exitKey.status === 'Archivado'
                          ? 'bg-amber-100 text-amber-800'
                          : inspectedData.data.exitKey.status === 'Delegado'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {inspectedData.data.exitKey.status}
                    </span>
                  )}
                </div>

                <h3 className="font-extrabold text-stone-900 text-lg leading-tight">
                  {inspectedData.type === 'bottleneck'
                    ? inspectedData.data.name
                    : inspectedData.type === 'hub'
                    ? inspectedData.data.name
                    : `[${inspectedData.data.caseNumber}] ${inspectedData.data.title}`}
                </h3>

                {inspectedData.type === 'case' && (
                  <p className="text-xs text-stone-500 font-mono">
                    {inspectedData.data.industry}
                  </p>
                )}
              </div>

              {/* Specific Content Based on Type */}
              {inspectedData.type === 'bottleneck' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                    <span className="text-[11px] font-mono text-stone-500 font-bold block">
                      DEFINICIÓN ONTOLÓGICA
                    </span>
                    <p className="text-xs text-stone-800 font-medium leading-relaxed">
                      {inspectedData.data.definition}
                    </p>
                  </div>

                  <div className="space-y-1 text-xs">
                    <span className="text-[11px] font-mono text-stone-500 font-bold block">
                      TESIS PROFUNDA
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {inspectedData.data.deepThesis}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-amber-900">
                      <Flame className="w-3.5 h-3.5 text-amber-600" />
                      <span>Síntoma de Fricción Principal:</span>
                    </div>
                    <p className="text-amber-800 text-[11px] leading-relaxed">
                      {inspectedData.data.frictionSymptom}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                      <ShieldAlert className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Principio de Salvamento:</span>
                    </div>
                    <p className="text-emerald-800 text-[11px] leading-relaxed">
                      {inspectedData.data.curePrinciple}
                    </p>
                  </div>

                  {/* Connected Cases Quick Strip */}
                  <div className="space-y-2 pt-2 border-t border-stone-200">
                    <div className="flex items-center justify-between text-xs font-bold text-stone-700">
                      <span>Casos que Sufrieron este Cuello ({inspectedData.linkedCases.length}):</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                      {inspectedData.linkedCases.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setSelectedNodeId({ type: 'case', id: c.id })}
                          className="px-2 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-800 text-[11px] font-mono transition-colors"
                        >
                          {c.caseNumber}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {inspectedData.type === 'hub' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-stone-500 font-bold">
                        PUNTOS ANCLA ELEMENTALES:
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono font-bold text-[11px]">
                        {inspectedData.primaryBottleneck.shortName}
                      </span>
                      <span className="text-stone-400">+</span>
                      <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-mono font-bold text-[11px]">
                        {inspectedData.secondaryBottleneck.shortName}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-stone-500 font-bold block">
                      MECANISMO DE CONTAGIO SISTÉMICO
                    </span>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      {inspectedData.data.mechanism}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-amber-950">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      <span>Axioma de Riesgo para Directores:</span>
                    </div>
                    <p className="text-amber-900 text-[11px] italic leading-relaxed">
                      "{inspectedData.data.riskAxiom}"
                    </p>
                  </div>

                  {/* Connected cases */}
                  <div className="space-y-2 pt-2 border-t border-stone-200">
                    <div className="flex items-center justify-between text-xs font-bold text-stone-700">
                      <span>{inspectedData.linkedCases.length} Casos en este Nodo Crítico:</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                      {inspectedData.linkedCases.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setSelectedNodeId({ type: 'case', id: c.id })}
                          className="p-2 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 text-left transition-colors group"
                        >
                          <span className="font-mono text-[10px] font-bold text-amber-700 block">
                            {c.caseNumber}
                          </span>
                          <span className="text-xs font-semibold text-stone-900 line-clamp-1 group-hover:text-amber-950">
                            {c.title}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {inspectedData.type === 'case' && (
                <div className="space-y-4">
                  {/* Energy & Clarity Gauges */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200">
                      <span className="text-[10px] font-mono text-purple-900 font-bold block">
                        Dispersión X → Y
                      </span>
                      <span className="text-lg font-mono font-extrabold text-purple-950">
                        {inspectedData.data.profile.energyDispersionPct}%
                      </span>
                      <span className="text-[10px] text-purple-700 block">Energía perdida</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-200">
                      <span className="text-[10px] font-mono text-cyan-900 font-bold block">
                        Fuga de Claridad (C)
                      </span>
                      <span className="text-lg font-mono font-extrabold text-cyan-950">
                        {inspectedData.data.profile.clarityLeakPct}%
                      </span>
                      <span className="text-[10px] text-cyan-700 block">Desacople terreno</span>
                    </div>
                  </div>

                  {/* Single Action Condition */}
                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-amber-950 text-xs">
                      <Crosshair className="w-3.5 h-3.5 text-amber-600" />
                      <span>Condición Única de Acción (Anti-Choque):</span>
                    </div>
                    <p className="text-xs text-amber-900 font-medium leading-relaxed italic">
                      "{inspectedData.data.profile.singleActionCondition}"
                    </p>
                  </div>

                  {/* Failure Trajectory */}
                  <div className="space-y-1 text-xs">
                    <span className="text-[11px] font-mono text-stone-500 font-bold block">
                      TRAYECTORIA DEL COLAPSO
                    </span>
                    <p className="text-xs text-stone-700 leading-relaxed font-mono bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                      {inspectedData.data.profile.failureTrajectory}
                    </p>
                  </div>

                  {/* Elemental Bottleneck & Hub Tag */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="px-2 py-1 rounded bg-stone-100 text-stone-700 text-xs font-mono font-bold">
                      {inspectedData.primaryBottleneck.shortName}
                    </span>
                    {inspectedData.primaryHub && (
                      <span className="px-2 py-1 rounded bg-amber-100 text-amber-900 text-xs font-mono font-bold">
                        {inspectedData.primaryHub.shortName}
                      </span>
                    )}
                  </div>

                  {/* Peer Cases */}
                  {inspectedData.peerCases.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-stone-200">
                      <span className="text-[11px] font-mono text-stone-500 font-bold block">
                        CASOS CON FALLA ISOMÓRFICA:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {inspectedData.peerCases.map((p) => (
                          <button
                            key={p.id}
                            onClick={() => setSelectedNodeId({ type: 'case', id: p.id })}
                            className="px-2 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-800 text-[11px] font-mono transition-colors"
                          >
                            {p.caseNumber} ({p.title.slice(0, 16)}...)
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Open full case modal button */}
                  <button
                    onClick={() => onSelectCase(inspectedData.data)}
                    className="w-full py-2.5 px-4 rounded-xl bg-stone-900 text-white hover:bg-stone-800 transition-colors text-xs font-bold flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Abrir Ficha Clínica Completa</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Action: Copy Diagnosis Manifesto */}
              <button
                onClick={handleCopyManifesto}
                className="w-full py-2 px-3 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copiado al Portapapeles</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-500" />
                    <span>Copiar Diagnóstico Causal</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="text-center py-20 text-stone-400 space-y-2">
              <Network className="w-8 h-8 mx-auto text-stone-300" />
              <p className="text-xs">Selecciona cualquier nodo o caso del grafo para inspeccionar su física causal.</p>
            </div>
          )}
        </div>
      </div>

      {/* 4. Interactive Mathematical Simulator: Claridad & Capacidad Real (Conversión X → Y) */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold">
              <Sliders className="w-3.5 h-3.5" />
              <span>SIMULADOR FRACTAL DE CUADRÍCULA TERMOCONVERSORA</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-stone-900">
              Ecuación de Claridad Neta & Capacidad Real de Conversión ($X \to Y$)
            </h3>
            <p className="text-xs text-stone-500 max-w-3xl">
              Prueba la calibración de tu propia organización ajustando las variables de la invariante física: observa cómo los sesgos, la sobrecarga cognitiva y la dispersión entrópica anulan la capacidad real del sistema aunque el organigrama parezca robusto.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Live Indicator Gauge */}
            <div className={`p-4 rounded-2xl border text-center ${
              calculatedClarity > 15
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                : calculatedClarity >= 0
                ? 'bg-amber-50 border-amber-300 text-amber-950'
                : 'bg-rose-50 border-rose-300 text-rose-950'
            }`}>
              <span className="text-[10px] font-mono uppercase font-bold block">
                Claridad Neta ($C$)
              </span>
              <span className="text-2xl font-mono font-black">
                {calculatedClarity}%
              </span>
              <span className="text-[10px] block font-semibold">
                {calculatedClarity > 15
                  ? 'Percepción Calibrada'
                  : calculatedClarity >= 0
                  ? 'Fuga Moderada'
                  : 'Ceguera Terminal (Crash Inminente)'}
              </span>
            </div>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Slider 1: Relevant Info Ratio */}
          <div className="space-y-2 p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="flex justify-between items-center text-xs font-bold text-stone-800">
              <span>Info Relevante / Info Total</span>
              <span className="font-mono text-cyan-700">{calcRelevantInfo}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              value={calcRelevantInfo}
              onChange={(e) => setCalcRelevantInfo(Number(e.target.value))}
              className="w-full accent-cyan-600 cursor-pointer"
            />
            <p className="text-[11px] text-stone-500 leading-tight">
              Proporción de señal pura frente al mar de ruido, métricas de vanidad y reportes de mandos medios.
            </p>
          </div>

          {/* Slider 2: Bias & Confirmation */}
          <div className="space-y-2 p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="flex justify-between items-center text-xs font-bold text-stone-800">
              <span>Sesgos de Confirmación</span>
              <span className="font-mono text-rose-700">-{calcBias}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              value={calcBias}
              onChange={(e) => setCalcBias(Number(e.target.value))}
              className="w-full accent-rose-600 cursor-pointer"
            />
            <p className="text-[11px] text-stone-500 leading-tight">
              Tendencia del decisor a buscar únicamente datos que convaliden su tesis previa o el pitch deck.
            </p>
          </div>

          {/* Slider 3: Uncalibrated Expectations */}
          <div className="space-y-2 p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="flex justify-between items-center text-xs font-bold text-stone-800">
              <span>Expectativas Desacopladas</span>
              <span className="font-mono text-amber-700">-{calcExpectations}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              value={calcExpectations}
              onChange={(e) => setCalcExpectations(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer"
            />
            <p className="text-[11px] text-stone-500 leading-tight">
              Proyecciones forzadas para cumplir covenants con inversores desconectadas de la física del producto.
            </p>
          </div>

          {/* Slider 4: Cognitive Load */}
          <div className="space-y-2 p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="flex justify-between items-center text-xs font-bold text-stone-800">
              <span>Carga Cognitiva / Fatiga</span>
              <span className="font-mono text-purple-700">-{calcCognitiveLoad}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              value={calcCognitiveLoad}
              onChange={(e) => setCalcCognitiveLoad(Number(e.target.value))}
              className="w-full accent-purple-600 cursor-pointer"
            />
            <p className="text-[11px] text-stone-500 leading-tight">
              Agotamiento decisorio, juntas consecutivas y dispersión en múltiples iniciativas paralelas.
            </p>
          </div>

          {/* Slider 5: Useful Net Nodes Ratio */}
          <div className="space-y-2 p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="flex justify-between items-center text-xs font-bold text-stone-800">
              <span>Nodos Netos Efectivos vs Nominales</span>
              <span className="font-mono text-indigo-700">
                {calcNetNodes} de {calcNominalNodes} personas
              </span>
            </div>
            <input
              type="range"
              min="1"
              max={calcNominalNodes}
              value={calcNetNodes}
              onChange={(e) => setCalcNetNodes(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <p className="text-[11px] text-stone-500 leading-tight">
              Cuántos miembros del equipo realmente resuelven la carga operativa crítica sin requerir supervisión parasitaria.
            </p>
          </div>

          {/* Slider 6: Energy Conversion Efficiency (X -> Y) */}
          <div className="space-y-2 p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="flex justify-between items-center text-xs font-bold text-stone-800">
              <span>Eficiencia de Conversión ($X \to Y$)</span>
              <span className="font-mono text-emerald-700">{calcEnergyEfficiency}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="95"
              value={calcEnergyEfficiency}
              onChange={(e) => setCalcEnergyEfficiency(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <p className="text-[11px] text-stone-500 leading-tight">
              Porcentaje de energía $X$ (horas de trabajo, presupuesto) que se convierte en valor útil $Y$ antes de disiparse en retrabajos y burocracia.
            </p>
          </div>
        </div>

        {/* Diagnosis Outcome Box */}
        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
              DIAGNÓSTICO EN TIEMPO REAL SEGÚN LOS 57 POST MORTEMS:
            </span>
            <p className="text-xs sm:text-sm text-stone-200 font-medium">
              {calculatedClarity < 0
                ? '⚠️ PELIGRO CRÍTICO: La ecuación de claridad es negativa. El equipo directivo está tomando decisiones en un universo simulado. Riesgo de choque abrupto similar a los casos #01, #04, #28 y #49.'
                : calculatedClarity < 15
                ? '⚡ ATENCIÓN: Fuga de precisión sistémica activa. El 40%+ de los recursos se dispersa en fricción de coordinación antes de generar rentabilidad. Aplicar la Regla de los 90 Días (#42).'
                : '✅ ZONA DE MANIOBRA VIABLE: La claridad neta supera la dispersión entrópica. La velocidad de adaptación del equipo está sincronizada con el flujo temporal real.'}
            </p>
          </div>

          <div className="shrink-0 font-mono text-right">
            <span className="text-[10px] text-stone-400 block">Capacidad Real del Sistema:</span>
            <span className="text-xl font-bold text-amber-400">
              {calculatedCapacityIndex} pts termodinámicos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
