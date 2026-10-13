import React, { useState, useMemo } from 'react';
import { casesData } from './data/cases';
import { CaseStudy, StructureType, ExitKeyType, BlockCategory } from './types';
import { Header } from './components/Header';
import { MetricsOverview } from './components/MetricsOverview';
import { FilterBar } from './components/FilterBar';
import { CaseCard } from './components/CaseCard';
import { CaseTableRow } from './components/CaseTableRow';
import { CaseDetailModal } from './components/CaseDetailModal';
import { PrinciplesModal } from './components/PrinciplesModal';
import { ExportModal } from './components/ExportModal';
import { SystemicRiskDashboard } from './components/SystemicRiskDashboard';
import { MsaLicensingVault } from './components/MsaLicensingVault';
import { MasterPromptModal } from './components/MasterPromptModal';
import { UniversalReconstructionMatrixView } from './components/UniversalReconstructionMatrixView';
import { useLanguage } from './i18n/LanguageContext';
import { Check, SearchX } from 'lucide-react';

export default function App() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'cases' | 'dashboard' | 'msa' | 'murs'>('cases');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStructure, setSelectedStructure] = useState<StructureType | 'ALL'>('ALL');
  const [selectedExitKey, setSelectedExitKey] = useState<ExitKeyType | 'ALL'>('ALL');
  const [selectedBlock, setSelectedBlock] = useState<BlockCategory | 'ALL'>('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isPrinciplesOpen, setIsPrinciplesOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isMasterPromptOpen, setIsMasterPromptOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2400);
  };

  const handleQuickCopy = (caseStudy: CaseStudy) => {
    const text = `[${caseStudy.caseNumber}] ${caseStudy.title} | Salida: ${caseStudy.exitKey.status}
1. Condición inicial: ${caseStudy.elementalFractal.initialCondition}
2. Cuello de botella: ${caseStudy.elementalFractal.bottleneck}
3. Iteración: ${caseStudy.elementalFractal.iteration}
4. Criterio: ${caseStudy.exitKey.criterion}
Estructura afectada: ${caseStudy.affectedStructures.types.join(', ')}
Industria: ${caseStudy.industry}
Recursos: ${caseStudy.keyResources.join(', ')}`;

    navigator.clipboard.writeText(text);
    showToast(`Ficha ${caseStudy.caseNumber} copiada al portapapeles`);
  };

  const filteredCases = useMemo(() => {
    return casesData.filter((c) => {
      // 1. Structure filter
      if (selectedStructure !== 'ALL' && !c.affectedStructures.types.includes(selectedStructure)) {
        return false;
      }
      // 2. Exit key filter
      if (selectedExitKey !== 'ALL' && c.exitKey.status !== selectedExitKey) {
        return false;
      }
      // 3. Block filter
      if (selectedBlock !== 'ALL' && c.block !== selectedBlock) {
        return false;
      }
      // 4. Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inNumber = c.caseNumber.toLowerCase().includes(query);
        const inTitle = c.title.toLowerCase().includes(query);
        const inIndustry = c.industry.toLowerCase().includes(query);
        const inCriterion = c.exitKey.criterion.toLowerCase().includes(query);
        const inResources = c.keyResources.some((r) => r.toLowerCase().includes(query));
        const inInitial = c.elementalFractal.initialCondition.toLowerCase().includes(query);
        const inBottleneck = c.elementalFractal.bottleneck.toLowerCase().includes(query);
        const inSurgeon = c.elementalFractal.surgeonNote.toLowerCase().includes(query);
        const inIC = c.elementalFractal.icValue.toLowerCase().includes(query);

        return (
          inNumber ||
          inTitle ||
          inIndustry ||
          inCriterion ||
          inResources ||
          inInitial ||
          inBottleneck ||
          inSurgeon ||
          inIC
        );
      }
      return true;
    });
  }, [searchQuery, selectedStructure, selectedExitKey, selectedBlock]);

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedStructure !== 'ALL' ||
    selectedExitKey !== 'ALL' ||
    selectedBlock !== 'ALL';

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedStructure('ALL');
    setSelectedExitKey('ALL');
    setSelectedBlock('ALL');
  };

  // Navigate in modal
  const currentIndex = selectedCase ? casesData.findIndex((c) => c.id === selectedCase.id) : -1;
  const hasNext = currentIndex >= 0 && currentIndex < casesData.length - 1;
  const hasPrev = currentIndex > 0;

  const handleNext = () => {
    if (hasNext) setSelectedCase(casesData[currentIndex + 1]);
  };
  const handlePrev = () => {
    if (hasPrev) setSelectedCase(casesData[currentIndex - 1]);
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-stone-900">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-stone-100 px-4 py-2.5 rounded-xl shadow-lg border border-stone-700 text-xs font-medium flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header */}
      <Header
        onOpenPrinciples={() => setIsPrinciplesOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        onOpenMasterPrompt={() => setIsMasterPromptOpen(true)}
        totalCount={casesData.length}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
      />

      {activeTab === 'murs' ? (
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <UniversalReconstructionMatrixView
            onSelectCase={(cs) => {
              setSelectedCase(cs);
              setActiveTab('cases');
            }}
            onOpenMasterPrompt={() => setIsMasterPromptOpen(true)}
          />
        </main>
      ) : activeTab === 'msa' ? (
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <MsaLicensingVault />
        </main>
      ) : activeTab === 'dashboard' ? (
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <SystemicRiskDashboard
            cases={casesData}
            onSelectCase={(cs) => setSelectedCase(cs)}
          />
        </main>
      ) : (
        <>
          {/* Summary Metrics & Primary Structure Filters */}
          <MetricsOverview
            cases={casesData}
            selectedStructure={selectedStructure}
            onSelectStructure={setSelectedStructure}
            selectedExitKey={selectedExitKey}
            onSelectExitKey={setSelectedExitKey}
            onOpenDashboard={() => setActiveTab('dashboard')}
          />

          {/* Filter and View Mode Controller */}
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedBlock={selectedBlock}
            onBlockChange={setSelectedBlock}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            totalFiltered={filteredCases.length}
            onClearFilters={handleClearFilters}
            hasActiveFilters={hasActiveFilters}
          />

          {/* Main Case Explorer Body */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {filteredCases.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 shadow-xs max-w-md mx-auto p-6">
                <SearchX className="w-10 h-10 text-stone-300 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-stone-900 mb-1">
                  No se encontraron casos con los criterios seleccionados
                </h3>
                <p className="text-xs text-stone-500 mb-4">
                  Prueba modificando el término de búsqueda o restableciendo los filtros de estructura y salida.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-3.5 py-1.5 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors shadow-xs"
                >
                  {t.filters.clearFilters}
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCases.map((c) => (
                  <CaseCard
                    key={c.id}
                    caseStudy={c}
                    onSelect={(cs) => setSelectedCase(cs)}
                    onQuickCopy={handleQuickCopy}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-stone-50 border-b border-stone-200 text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                        <th className="py-3 px-3">Caso</th>
                        <th className="py-3 px-3">Estructura / Título</th>
                        <th className="py-3 px-3">Tipo de Industria</th>
                        <th className="py-3 px-3">Clave de Salida & Criterio Fractal</th>
                        <th className="py-3 px-3">Recursos Claves Nombrados</th>
                        <th className="py-3 px-3">Estructura Afectada</th>
                        <th className="py-3 px-3 text-right">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCases.map((c) => (
                        <CaseTableRow
                          key={c.id}
                          caseStudy={c}
                          onSelect={(cs) => setSelectedCase(cs)}
                          onQuickCopy={handleQuickCopy}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </main>
        </>
      )}

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-800">57 Casos · 57 Cicatrices · MURS</span>
            <span>·</span>
            <span>Matriz Universal de Reconstrucción de Sistemas</span>
          </div>
          <div className="font-mono text-[11px]">
            Compilado para Investment Committees & Thought Partners
          </div>
        </div>
      </footer>

      {/* Modals */}
      <CaseDetailModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        onNavigateNext={handleNext}
        onNavigatePrev={handlePrev}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />

      <PrinciplesModal
        isOpen={isPrinciplesOpen}
        onClose={() => setIsPrinciplesOpen(false)}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        cases={casesData}
      />

      <MasterPromptModal
        isOpen={isMasterPromptOpen}
        onClose={() => setIsMasterPromptOpen(false)}
      />
    </div>
  );
}
