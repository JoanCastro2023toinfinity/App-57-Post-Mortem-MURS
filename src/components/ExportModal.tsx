import React, { useState } from 'react';
import { X, Download, Copy, Check, FileSpreadsheet, FileJson, FileText } from 'lucide-react';
import { CaseStudy } from '../types';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  cases: CaseStudy[];
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, cases }) => {
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const downloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(cases, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', '57_casos_matriz_fractal_murs.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const downloadCSV = () => {
    const headers = [
      'Numero de caso',
      'Titulo',
      'Bloque',
      'Tipo de industria',
      'Clave de salida',
      'Criterio fractal',
      'Recursos claves nombrados',
      'Estructuras afectadas',
      'Detalle financiero',
      'Detalle humano',
      'Detalle social',
      'Nota del cirujano',
      'Valor para IC'
    ];

    const rows = cases.map((c) => [
      `"${c.caseNumber}"`,
      `"${c.title.replace(/"/g, '""')}"`,
      `"${c.block.replace(/"/g, '""')}"`,
      `"${c.industry.replace(/"/g, '""')}"`,
      `"${c.exitKey.status}"`,
      `"${c.exitKey.criterion.replace(/"/g, '""')}"`,
      `"${c.keyResources.join('; ').replace(/"/g, '""')}"`,
      `"${c.affectedStructures.types.join(', ')}"`,
      `"${(c.affectedStructures.financialDetails || '').replace(/"/g, '""')}"`,
      `"${(c.affectedStructures.humanDetails || '').replace(/"/g, '""')}"`,
      `"${(c.affectedStructures.socialDetails || '').replace(/"/g, '""')}"`,
      `"${c.elementalFractal.surgeonNote.replace(/"/g, '""')}"`,
      `"${c.elementalFractal.icValue.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', '57_casos_matriz_fractal_murs.csv');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const copyAllMarkdown = () => {
    const markdown = cases
      .map(
        (c) =>
          `### ${c.caseNumber} - ${c.title}\n` +
          `- **Estructura / Bloque**: ${c.block}\n` +
          `- **Tipo de Industria**: ${c.industry}\n` +
          `- **Recursos Claves**: ${c.keyResources.join(', ')}\n` +
          `- **Clave de Salida**: ${c.exitKey.status} | "${c.exitKey.criterion}"\n` +
          `- **Estructuras Afectadas**: ${c.affectedStructures.types.join(', ')}\n` +
          `  - Financiera: ${c.affectedStructures.financialDetails || 'N/A'}\n` +
          `  - Humana: ${c.affectedStructures.humanDetails || 'N/A'}\n` +
          `  - Social: ${c.affectedStructures.socialDetails || 'N/A'}\n` +
          `- **Nota del Cirujano**: ${c.elementalFractal.surgeonNote}\n` +
          `- **Valor para IC**: ${c.elementalFractal.icValue}\n`
      )
      .join('\n---\n\n');

    navigator.clipboard.writeText(markdown);
    setCopied('md');
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-stone-200 shadow-2xl overflow-hidden flex flex-col">
        <div className="p-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
          <h3 className="font-bold text-stone-900 text-base">Exportar Matriz de los {cases.length} Casos & MURS</h3>
          <button onClick={onClose} className="p-1 text-stone-400 hover:text-stone-700 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-3">
          <p className="text-xs text-stone-600 mb-4">
            Selecciona el formato para descargar o copiar la totalidad de los {cases.length} casos con su aislamiento en las 6 dimensiones solicitadas y la Matriz Universal de Reconstrucción.
          </p>

          <button
            onClick={downloadCSV}
            className="w-full flex items-center justify-between p-3.5 rounded-xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-sm text-stone-900">
                  Descargar Archivo CSV (Excel / Sheets)
                </div>
                <div className="text-[11px] text-stone-500">
                  Ideal para comités de inversión, modelos de filtrado y tableros.
                </div>
              </div>
            </div>
            <Download className="w-4 h-4 text-stone-400 group-hover:text-emerald-700" />
          </button>

          <button
            onClick={downloadJSON}
            className="w-full flex items-center justify-between p-3.5 rounded-xl border border-stone-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-800">
                <FileJson className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-sm text-stone-900">
                  Descargar Formato JSON Estructurado
                </div>
                <div className="text-[11px] text-stone-500">
                  Estructura completa de objetos tipados para integración de datos.
                </div>
              </div>
            </div>
            <Download className="w-4 h-4 text-stone-400 group-hover:text-blue-700" />
          </button>

          <button
            onClick={copyAllMarkdown}
            className="w-full flex items-center justify-between p-3.5 rounded-xl border border-stone-200 hover:border-amber-500 hover:bg-amber-50/50 transition-all text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-100 text-amber-800">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-sm text-stone-900">
                  Copiar Todo en Formato Markdown
                </div>
                <div className="text-[11px] text-stone-500">
                  Listo para pegar en Notion, Obsidian o documentación ejecutiva.
                </div>
              </div>
            </div>
            {copied === 'md' ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4 text-stone-400 group-hover:text-amber-700" />
            )}
          </button>
        </div>

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
