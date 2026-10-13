import React, { useState, useMemo } from 'react';
import {
  FileCheck2,
  ShieldCheck,
  Download,
  Copy,
  Check,
  Briefcase,
  DollarSign,
  AlertTriangle,
  Lock,
  Calendar,
  Building2,
  UserCheck,
  User,
  Percent,
  Sparkles,
  ExternalLink,
  FileText,
  Printer
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const MsaLicensingVault: React.FC = () => {
  const { t, language } = useLanguage();

  // Licensee form state
  const [companyName, setCompanyName] = useState('Venture Portfolio Holdings, LLC');
  const [directorName, setDirectorName] = useState('Elena Rostova, Managing Partner & Board Director');
  const [licenseTier, setLicenseTier] = useState<'tier1' | 'tier2' | 'tier3' | 'tier4'>('tier2');
  const [hasHeadhunter, setHasHeadhunter] = useState(true);
  const [headhunterFirm, setHeadhunterFirm] = useState('Spencer & Mercer Executive Search Partners');
  const [headhunterRep, setHeadhunterRep] = useState('Marcus Vance, Senior Partner');
  const [contractDate, setContractDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [copiedContract, setCopiedContract] = useState(false);

  // Headhunter Calculator State
  const [cLevelSalary, setCLevelSalary] = useState(240000); // $240,000 USD base
  const [placementFeePct, setPlacementFeePct] = useState(25); // 25% fee

  // Pricing definitions
  const tierConfig = {
    tier1: { name: 'Tier 1: Boutique / Agencia (10-25p)', fee: 5000, treasury: '< $200k USD' },
    tier2: { name: 'Tier 2: Scale-up / VC Portco (50-250p)', fee: 25000, treasury: '$1M – $3M USD' },
    tier3: { name: 'Tier 3: Mid-Market / Private Equity', fee: 65000, treasury: '$5M – $15M USD' },
    tier4: { name: 'Tier 4: Enterprise / Conglomerado', fee: 150000, treasury: '> $20M USD' },
  };

  const currentTier = tierConfig[licenseTier];
  const headhunterCommission = hasHeadhunter ? Math.round(currentTier.fee * 0.1) : 0;

  // Headhunter calculations
  const placementBonusAtRisk = Math.round((cLevelSalary * placementFeePct) / 100);
  const totalValuePreserved = placementBonusAtRisk + headhunterCommission;

  // Pseudo cryptographic hash for contract authenticity
  const contractHash = useMemo(() => {
    const raw = `${companyName}-${directorName}-${currentTier.fee}-${contractDate}-${headhunterFirm}`;
    let hash = 0;
    for (let i = 0; i < raw.length; i++) {
      hash = (hash << 5) - hash + raw.charCodeAt(i);
      hash |= 0;
    }
    const hex = Math.abs(hash).toString(16).toUpperCase().padStart(8, '0');
    return `MSA-57C-${hex}-SEC-2026`;
  }, [companyName, directorName, currentTier.fee, contractDate, headhunterFirm]);

  const fullContractText = useMemo(() => {
    return `================================================================================
MASTER SERVICES AGREEMENT (MSA) & LICENCIA DE PROPIEDAD INTELECTUAL
ARBITRAJE DE RIESGO SISTÉMICO Y COMPENDIO DE 57 CASOS FRACTALES Y MATRIZ MURS
================================================================================
CÓDIGO DE AUTENTICIDAD: ${contractHash}
FECHA DE ENTRADA EN VIGOR: ${contractDate}

PARTE LICENCIANTE:
Autor y Titular de Propiedad Intelectual ("El Licenciante")
Modelo de Física de Sistemas y 57 Puntos de Fractura Organizacional y Matriz MURS

PARTE LICENCIATARIA:
Razón Social: ${companyName}
Representante / C-Level Responsable: ${directorName}
Nivel de Licencia: ${currentTier.name} (Honorario: $${currentTier.fee.toLocaleString()} USD)
${hasHeadhunter ? `Intermediario / Executive Search Acreditado: ${headhunterFirm} (Rep: ${headhunterRep})` : 'Modalidad: Adquisición Directa Corporativa'}

--------------------------------------------------------------------------------
CLÁUSULA 1: OBJETO Y CONCESIÓN DE LICENCIA LIMITADA
--------------------------------------------------------------------------------
1.1. El Licenciante otorga al Licenciatario una licencia de uso corporativa, no exclusiva,
intransferible y estrictamente revocable para la lectura, consulta y aplicación táctica del
Compendio de los 57 Casos Fractales, la Fórmula de Fricción Estructural (Variable 1),
los 57 Interruptores Booleanos de Supervivencia y el Protocolo de Triaje MURS.
1.2. La licencia concede derechos de acceso exclusivo para la toma de decisiones internas
del Licenciatario y sus portafolios directamente controlados.

--------------------------------------------------------------------------------
CLÁUSULA 2: ESTRICTA PROHIBICIÓN DE REVENTA, SUBLICENCIAMIENTO Y DISTRIBUCIÓN
--------------------------------------------------------------------------------
2.1. Queda TERMINANTEMENTE PROHIBIDO al Licenciatario:
    (a) Revender, sublicenciar, ceder, alquilar o comercializar total o parcialmente este compendio.
    (b) Distribuir o publicar las fichas, fórmulas o notas forenses en repositorios públicos,
        páginas web externas o alimentar modelos de inteligencia artificial no autorizados.
    (c) Utilizar los 57 casos y la Matriz MURS para ofrecer servicios de consultoría a terceros ajenos a la entidad.
2.2. Penalidad por Incumplimiento: Cualquier infracción a esta cláusula acarreará una penalidad
inmediata de daños punitivos tasada en 10 (diez) veces el valor de la licencia contratada o
$500,000 USD (lo que resulte mayor), sin perjuicio de las acciones civiles y penales correspondientes.

--------------------------------------------------------------------------------
CLÁUSULA 3: CERO INTERVENCIÓN OPERATIVA & EXENCIÓN TOTAL DE GESTIÓN (HOLD HARMLESS)
--------------------------------------------------------------------------------
3.1. Naturaleza Asíncrona: El Licenciante actúa única y exclusivamente como proveedor de
propiedad intelectual y mapas forenses de stress-testing.
3.2. Cero Responsabilidad Operativa: El Licenciante NO asume:
    (a) Funciones fiduciarias, operativas, laborales, gerenciales ni de gobierno corporativo.
    (b) Obligación de asistencia en llamadas síncronas, mediaciones de oficina ni juntas de crisis.
    (c) Responsabilidad por los resultados financieros, despidos, pivots o pérdidas comerciales
        derivadas de las decisiones ejecutadas por los directores del Licenciatario.
3.3. El Licenciatario reconoce que los directores y C-Levels designados poseen la exclusiva
autoridad y responsabilidad sobre la activación de los interruptores de emergencia.

--------------------------------------------------------------------------------
CLÁUSULA 4: VIGENCIA Y CADUCIDAD DE LA LICENCIA
--------------------------------------------------------------------------------
4.1. La presente licencia entra en vigor en la fecha ${contractDate} y tendrá una vigencia
operativa de 12 (doce) meses continuos para la consulta activa de matrices actualizadas.
4.2. Tras el vencimiento, el Licenciatario podrá conservar las descargas históricas para uso
interno de archivo, pero cesará el derecho a recibir nuevas actualizaciones o derivaciones.

--------------------------------------------------------------------------------
CLÁUSULA 5: RÉGIMEN ESPECIAL DE HEADHUNTERS C-LEVEL & SALVAGUARDA DE BONOS (10% FEE)
--------------------------------------------------------------------------------
5.1. Reconocimiento de Intermediación: En caso de que la presente licencia sea suscrita o
recomendada a través de una firma de Executive Search (${headhunterFirm || 'Headhunter Acreditado'}),
el Licenciante abonará al intermediario el 10% (diez por ciento) del fee neto cobrado
($${headhunterCommission.toLocaleString()} USD).
5.2. Propósito de Salvaguarda de Retención (Garantía de 90 días):
    Las partes reconocen que el objetivo principal de este sistema es servir como Radar de
    Onboarding y Aislamiento de Fricción para el nuevo C-Level posicionado, reduciendo a cero
    el riesgo de burnout, parálisis o renuncia temprana en la ventana de garantía de 90 a 180 días,
    salvaguardando íntegramente el bono de colocación (placement fee) de la firma reclutadora.

--------------------------------------------------------------------------------
CLÁUSULA 6: JURISDICCIÓN, CONFIDENCIALIDAD (NDA) Y FIRMA ELECTRÓNICA
--------------------------------------------------------------------------------
6.1. El presente contrato se rige bajo estricto acuerdo de no divulgación (NDA) bilateral y
arbitraje comercial expedito.
6.2. La emisión del código de verificación ${contractHash} y el registro en el vault
constituyen prueba plena e irrevocable del consentimiento de las partes.

FIRMADO ELECTRÓNICAMENTE:
Licenciante: [SISTEMA FRACTAL 57/57 · MURS ARCHITECTURE]
Licenciatario: ${directorName} (${companyName})
${hasHeadhunter ? `Intermediario Headhunter: ${headhunterRep} (${headhunterFirm})` : ''}
HASH CRIPTOGRÁFICO: ${contractHash}
================================================================================`;
  }, [
    contractHash,
    contractDate,
    companyName,
    directorName,
    currentTier,
    hasHeadhunter,
    headhunterFirm,
    headhunterRep,
    headhunterCommission,
  ]);

  const handleCopyContract = () => {
    navigator.clipboard.writeText(fullContractText);
    setCopiedContract(true);
    setTimeout(() => setCopiedContract(false), 2400);
  };

  const handleDownloadContract = () => {
    const element = document.createElement('a');
    const file = new Blob([fullContractText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `MSA_LICENCIA_${companyName.replace(/[^a-zA-Z0-9]/g, '_')}_${contractHash}.txt`;
    document.body.appendChild(element);
    element.click();
    element.remove();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 border border-stone-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-4xl space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-medium">
            <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.msa.badge}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {t.msa.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
            {t.msa.subtitle}
          </p>
        </div>

        {/* Top Feature Highlights */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-800 text-xs">
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-800/60 border border-stone-700/60">
            <Lock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-200 block">No Reventa & Uso Interno</span>
              <span className="text-[11px] text-stone-400">
                Licencia protegida por penalidad de 10x ($500,000 USD).
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-800/60 border border-stone-700/60">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-200 block">Cero Intervención Operativa</span>
              <span className="text-[11px] text-stone-400">
                Sin reuniones síncronas ni responsabilidad fiduciaria de gestión.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-800/60 border border-stone-700/60">
            <Percent className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-200 block">10% Fee para Headhunters</span>
              <span className="text-[11px] text-stone-400">
                Comisión de referral y salvaguarda del placement fee de 90 días.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Headhunter Bonus Protection Calculator */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950 text-white rounded-2xl p-6 border border-amber-500/30 shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500 text-stone-950">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white">
                {t.msa.calculatorTitle}
              </h3>
              <p className="text-xs text-stone-300">
                {t.msa.calculatorSubtitle}
              </p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-amber-400/20 text-amber-300 text-xs font-mono font-semibold border border-amber-400/30">
            Executive Search Tier
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          {/* Sliders and inputs */}
          <div className="lg:col-span-6 space-y-4 text-xs">
            <div>
              <div className="flex justify-between items-center mb-1.5 font-medium text-stone-300">
                <span>{t.msa.cLevelSalary}:</span>
                <span className="text-amber-400 font-mono text-sm font-bold">
                  ${cLevelSalary.toLocaleString()} USD
                </span>
              </div>
              <input
                type="range"
                min={120000}
                max={500000}
                step={10000}
                value={cLevelSalary}
                onChange={(e) => setCLevelSalary(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-700 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-stone-500 mt-1 font-mono">
                <span>$120k (VP / Head)</span>
                <span>$250k (C-Level Mid)</span>
                <span>$500k+ (CEO Enterprise)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5 font-medium text-stone-300">
                <span>{t.msa.placementFeeRate}:</span>
                <span className="text-amber-400 font-mono text-sm font-bold">
                  {placementFeePct}%
                </span>
              </div>
              <input
                type="range"
                min={15}
                max={33}
                step={1}
                value={placementFeePct}
                onChange={(e) => setPlacementFeePct(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-700 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-stone-500 mt-1 font-mono">
                <span>15% (Retainer estándar)</span>
                <span>25% (Benchmark C-Suite)</span>
                <span>33% (Top tier global)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700 space-y-1 text-stone-300 text-[11px]">
              <strong className="text-white block">La Paradoja del Headhunter C-Level:</strong>
              <p>
                Si el C-Level contratado renuncia al día 60 por desalineación estructural o burnout, el headhunter está obligado por contrato a repetir la búsqueda de forma gratuita o devolver su bono de colocación.
              </p>
              <p className="text-amber-300 pt-1">
                Al exigir que la empresa adquiera la licencia como parte del kit de onboarding, el headhunter asegura el éxito del placement y cobra <strong>$ {headhunterCommission.toLocaleString()} USD</strong> en efectivo inmediato.
              </p>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/50 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-rose-300 block mb-1">
                  Bono en Riesgo (Garantía 90d)
                </span>
                <span className="text-2xl font-bold font-mono text-rose-400">
                  ${placementBonusAtRisk.toLocaleString()} USD
                </span>
              </div>
              <p className="text-[10px] text-rose-300/80 mt-2">
                Capital que el headhunter pierde o debe trabajar gratis si el candidato se quema.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-700/50 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-emerald-300 block mb-1">
                  Fee 10% Headhunter (Inmediato)
                </span>
                <span className="text-2xl font-bold font-mono text-emerald-400">
                  ${headhunterCommission.toLocaleString()} USD
                </span>
              </div>
              <p className="text-[10px] text-emerald-300/80 mt-2">
                Pago neto directo abonado a la firma reclutadora sobre la licencia contratada.
              </p>
            </div>

            <div className="sm:col-span-2 p-4 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-300 block">
                  Valor Económico Total Protegido
                </span>
                <span className="text-xs text-stone-300">
                  Bono de placement salvado + Comisión de referral del 10%
                </span>
              </div>
              <span className="text-2xl sm:text-3xl font-bold font-mono text-amber-400">
                ${totalValuePreserved.toLocaleString()} USD
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contract Generator Form & Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Form: Delivery Metadata */}
        <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-4">
          <div className="border-b border-stone-200 pb-3">
            <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
              <Building2 className="w-4 h-4 text-stone-700" />
              {t.msa.clientData}
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Personaliza el contrato ejecutable de entrega para cada cliente o portco.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                {t.msa.companyName}
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 font-mono text-xs"
                placeholder="Nombre de la empresa o fondo..."
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                {t.msa.clientRep}
              </label>
              <input
                type="text"
                value={directorName}
                onChange={(e) => setDirectorName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 text-xs"
                placeholder="Nombre y cargo del C-Level..."
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                {t.msa.licenseTier}
              </label>
              <select
                value={licenseTier}
                onChange={(e) => setLicenseTier(e.target.value as any)}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-stone-900 text-xs font-mono"
              >
                <option value="tier1">Tier 1: Boutique (10-25p) — $5,000 USD</option>
                <option value="tier2">Tier 2: Scale-up / VC Portco (50-250p) — $25,000 USD</option>
                <option value="tier3">Tier 3: Mid-Market / Private Equity — $65,000 USD</option>
                <option value="tier4">Tier 4: Enterprise Global — $150,000 USD</option>
              </select>
              <div className="text-[11px] text-stone-500 mt-1">
                Perfil de tesorería sugerido: <strong>{currentTier.treasury}</strong>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                Fecha de Emisión & Entrega
              </label>
              <input
                type="date"
                value={contractDate}
                onChange={(e) => setContractDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 text-xs font-mono"
              />
            </div>

            {/* Headhunter Section */}
            <div className="pt-2 border-t border-stone-200">
              <label className="flex items-center gap-2 font-semibold text-stone-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasHeadhunter}
                  onChange={(e) => setHasHeadhunter(e.target.checked)}
                  className="rounded text-stone-900 focus:ring-stone-900 w-4 h-4"
                />
                <span>{t.msa.headhunterInvolved}</span>
              </label>

              {hasHeadhunter && (
                <div className="mt-2.5 p-3 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2.5 animate-in fade-in">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-0.5">
                      Firma de Executive Search:
                    </label>
                    <input
                      type="text"
                      value={headhunterFirm}
                      onChange={(e) => setHeadhunterFirm(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white text-xs font-mono"
                      placeholder="Spencer Stuart, Korn Ferry, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-0.5">
                      Partner / Consultor que refirió:
                    </label>
                    <input
                      type="text"
                      value={headhunterRep}
                      onChange={(e) => setHeadhunterRep(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white text-xs"
                      placeholder="Nombre del Headhunter..."
                    />
                  </div>

                  <div className="text-[11px] text-amber-900 font-mono bg-amber-100/70 p-2 rounded-md">
                    Comisión acreditada: <strong>10% ($ {headhunterCommission.toLocaleString()} USD)</strong>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Preview: Live Legal Agreement */}
        <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-stone-800" />
                <h3 className="font-bold text-stone-900 text-base">
                  Previsualización Legal del MSA de Entrega
                </h3>
              </div>
              <span className="text-[11px] text-stone-500 font-mono">
                Hash: {contractHash}
              </span>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={handleCopyContract}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 text-xs font-medium transition-colors"
                title="Copiar texto del contrato"
              >
                {copiedContract ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>{copiedContract ? 'Copiado' : 'Copiar'}</span>
              </button>

              <button
                onClick={handleDownloadContract}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold transition-colors shadow-2xs"
                title="Descargar archivo .txt legal"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar (.txt)</span>
              </button>

              <button
                onClick={handlePrint}
                className="p-1.5 rounded-lg border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 transition-colors"
                title="Imprimir contrato"
              >
                <Printer className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Raw Contract Viewer */}
          <div className="bg-stone-950 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-y-auto max-h-[420px] shadow-inner border border-stone-800 space-y-2 whitespace-pre-wrap leading-relaxed select-all">
            {fullContractText}
          </div>

          {/* Integrity Footer Guarantee */}
          <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-stone-500 gap-2">
            <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Protección jurídica de propiedad intelectual y no subordinación garantizada.</span>
            </div>
            <span className="font-mono text-stone-400">Estado: Listo para firma & entrega</span>
          </div>
        </div>
      </div>
    </div>
  );
};
