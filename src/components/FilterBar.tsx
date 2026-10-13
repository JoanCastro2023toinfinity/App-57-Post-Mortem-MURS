import React from 'react';
import { Search, LayoutGrid, Table2, SlidersHorizontal, X } from 'lucide-react';
import { BlockCategory } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedBlock: BlockCategory | 'ALL';
  onBlockChange: (b: BlockCategory | 'ALL') => void;
  viewMode: 'grid' | 'table';
  onViewModeChange: (m: 'grid' | 'table') => void;
  totalFiltered: number;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const BLOCKS: (BlockCategory | 'ALL')[] = [
  'ALL',
  'Trinchera (Operación Base)',
  'Gobernanza & Arquitectura (IP Propia)',
  'Guerra Política & Discurso',
  'Macroeconomía & Modelos de Sistema',
  'Inteligencia & Conflictos',
  'Reconstrucción Autónoma (Matriz X/Y)',
  'Humanidad, Duelo & Legado',
  'Buffers Técnicos & Operativos',
];

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedBlock,
  onBlockChange,
  viewMode,
  onViewModeChange,
  totalFiltered,
  onClearFilters,
  hasActiveFilters,
}) => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-stone-50/70 border-b border-stone-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          {/* Search bar */}
          <div className="relative flex-1 max-w-lg">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.filters.searchPlaceholder}
              className="w-full pl-9 pr-9 py-2 bg-white border border-stone-300 rounded-lg text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-1 focus:ring-stone-800 focus:border-stone-800 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Block Selector and View Toggles */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="relative">
              <select
                id="block-select"
                value={selectedBlock}
                onChange={(e) => onBlockChange(e.target.value as BlockCategory | 'ALL')}
                className="bg-white border border-stone-300 text-stone-800 py-2 pl-3 pr-8 rounded-lg text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-stone-800 cursor-pointer shadow-xs"
              >
                <option value="ALL">{t.filters.allBlocks} (8)</option>
                {BLOCKS.filter((b) => b !== 'ALL').map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="inline-flex items-center gap-1 text-xs text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-2.5 py-2 rounded-lg font-medium transition-colors"
              >
                <X className="w-3 h-3" />
                <span>{t.filters.clearFilters}</span>
              </button>
            )}

            {/* View Mode Toggle */}
            <div className="flex items-center rounded-lg border border-stone-300 bg-white p-0.5 shadow-xs ml-auto lg:ml-0">
              <button
                id="view-grid"
                onClick={() => onViewModeChange('grid')}
                className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
                title="Vista Cuadrícula Fractal"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">{t.filters.viewGrid}</span>
              </button>

              <button
                id="view-table"
                onClick={() => onViewModeChange('table')}
                className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-colors ${
                  viewMode === 'table'
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
                title="Vista Matriz Tabular"
              >
                <Table2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">{t.filters.viewTable}</span>
              </button>
            </div>

            <div className="text-xs font-mono text-stone-500 pl-1">
              <span className="font-semibold text-stone-800">{totalFiltered}</span> {language === 'en' ? 'cases' : 'casos'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
