export type Language = 'es' | 'en' | 'pt' | 'de';

export interface Translations {
  // Navigation & General
  nav: {
    cases: string;
    dashboard: string;
    msa: string;
    murs: string;
    principles: string;
    export: string;
    tagline: string;
    badge: string;
  };
  // Metrics & Headers
  metrics: {
    title: string;
    subtitle: string;
    financial: string;
    financialDesc: string;
    human: string;
    humanDesc: string;
    social: string;
    socialDesc: string;
    allCases: string;
    exitKeyFilter: string;
    directorBannerTitle: string;
    directorBannerBtn: string;
  };
  // Filters
  filters: {
    searchPlaceholder: string;
    allBlocks: string;
    showing: string;
    of: string;
    casesCount: string;
    clearFilters: string;
    viewGrid: string;
    viewTable: string;
  };
  // Structures & Exits
  structures: {
    Financiera: string;
    Humana: string;
    Social: string;
  };
  exitKeys: {
    Éxito: string;
    Archivado: string;
    Delegado: string;
    Baja: string;
    Fallido: string;
  };
  // MSA & Licensing
  msa: {
    badge: string;
    title: string;
    subtitle: string;
    deliveryNotice: string;
    clientData: string;
    companyName: string;
    clientRep: string;
    licenseTier: string;
    headhunterInvolved: string;
    headhunterName: string;
    generateMsa: string;
    downloadMsa: string;
    copyMsa: string;
    calculatorTitle: string;
    calculatorSubtitle: string;
    cLevelSalary: string;
    placementFeeRate: string;
    atRiskBonus: string;
    headhunterFee: string;
    savedBonus: string;
  };
  // Dashboard
  dashboard: {
    badge: string;
    title: string;
    subtitle: string;
    multiriskIndex: string;
    multiriskDesc: string;
    finVuln: string;
    humVuln: string;
    socVuln: string;
    chartTitle: string;
    chartSubtitle: string;
    intersectionsTitle: string;
    intersectionsSubtitle: string;
    patternsTitle: string;
    patternsSubtitle: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      cases: 'Fichas & Matriz',
      dashboard: 'Dashboard & Grafo de Dependencias',
      msa: 'Espacio MSA & Licencias',
      murs: 'Matriz Reconstrucción (MURS)',
      principles: 'Fórmula & Principios',
      export: 'Exportar Matriz',
      tagline: '57 Casos · 57 Cicatrices',
      badge: 'Cartografía de Prevención de Choque',
    },
    metrics: {
      title: 'Afectación Estructural & Claves de Salida',
      subtitle: 'Haz clic en una estructura o clave de salida para filtrar inmediatamente los 57 casos',
      financial: 'Estructura Financiera',
      financialDesc: 'Quema de capital, apalancamiento, descalce de runway y contratos',
      human: 'Estructura Humana',
      humanDesc: 'Burnout, disociación, colapso cognitivo y parálisis del decisor',
      social: 'Estructura Social',
      socialDesc: 'Pérdida de gobernanza, feudos corporativos y ruptura de confianza',
      allCases: 'Todos los casos',
      exitKeyFilter: 'Filtrar por Clave de Salida:',
      directorBannerTitle: 'Cartografía de Decisión: Identifica la red de dependencias causales y los 4 cuellos de botella elementales compartidos (Tiempo · Claridad · Recursos · Capacidad Real).',
      directorBannerBtn: 'Abrir Grafo & Dashboard',
    },
    filters: {
      searchPlaceholder: 'Buscar por industria, recurso clave, interruptor booleano o síntoma...',
      allBlocks: 'Todos los Bloques Temáticos',
      showing: 'Mostrando',
      of: 'de',
      casesCount: 'casos documentados',
      clearFilters: 'Limpiar filtros',
      viewGrid: 'Cuadrícula',
      viewTable: 'Tabla',
    },
    structures: {
      Financiera: 'Financiera',
      Humana: 'Humana',
      Social: 'Social',
    },
    exitKeys: {
      Éxito: 'Éxito',
      Archivado: 'Archivado',
      Delegado: 'Delegado',
      Baja: 'Baja',
      Fallido: 'Fallido',
    },
    msa: {
      badge: 'Master Services Agreement & Licencia de Arbitraje',
      title: 'Espacio de Entrega Formal: MSA & Régimen de Licencia',
      subtitle: 'Contrato legal ejecutable para cada entrega institucional. Incluye cláusulas de no reventa, no intervención operativa y protección de bonos para Headhunters C-Level.',
      deliveryNotice: 'Cada entrega se formaliza mediante este Master Services Agreement firmado criptográficamente, garantizando la inmutabilidad de la IP y la ausencia de subordinación operativa.',
      clientData: 'Datos de la Entrega & Licenciatario',
      companyName: 'Razón Social / Portco Licenciataria',
      clientRep: 'Representante Autorizado / C-Level',
      licenseTier: 'Nivel de Licencia & Tesorería',
      headhunterInvolved: '¿Referido por Headhunter de C-Level?',
      headhunterName: 'Firma de Executive Search / Headhunter',
      generateMsa: 'Generar MSA Ejecutable',
      downloadMsa: 'Descargar MSA (.txt / Legal)',
      copyMsa: 'Copiar Texto Completo',
      calculatorTitle: 'Calculadora de Salvaguarda de Bonos para Headhunters C-Level',
      calculatorSubtitle: 'Cómo evitar que tus ejecutivos colocados se quemen en los primeros 90 días mientras cobras un 10% de referral fee.',
      cLevelSalary: 'Compensación Anual del C-Level Posicionado (USD)',
      placementFeeRate: 'Tasa de Honorario de Colocación (Placement Fee)',
      atRiskBonus: 'Bono en Riesgo por Garantía de 90 días',
      headhunterFee: 'Comisión del 10% para el Headhunter (USD)',
      savedBonus: 'Bono Protegido al Evitar Burnout & Renuncia',
    },
    dashboard: {
      badge: 'Matriz de Diagnóstico y Vulnerabilidad para Comités de Inversión (IC) & C-Level',
      title: 'Correlación Sectorial de Estructuras Afectadas & Riesgo Sistémico',
      subtitle: 'Mapea la correlación entre 8 macrosectores y los 3 vectores de colapso: Financiero, Humano y Social.',
      multiriskIndex: 'Índice Multirriesgo',
      multiriskDesc: '38 de 57 casos con impacto combinado',
      finVuln: 'Vulnerabilidad Financiera',
      humVuln: 'Vulnerabilidad Humana',
      socVuln: 'Vulnerabilidad Social',
      chartTitle: 'Frecuencia de Estructuras Afectadas por Macrosector',
      chartSubtitle: 'Haz clic en cualquier barra o sector para filtrar las fichas y explorar los cuellos de botella específicos.',
      intersectionsTitle: 'Intersecciones Críticas',
      intersectionsSubtitle: 'Patrones donde una fractura en una estructura contagia a otra antes de quebrar el P&L.',
      patternsTitle: '4 Patrones de Riesgo Sistémico Identificados en los 57 Casos',
      patternsSubtitle: 'Leyes empíricas de física de organizaciones que los directores pueden aplicar en comités y portcos.',
    },
  },
  en: {
    nav: {
      cases: 'Cases & Matrix',
      dashboard: 'Risk & Dependency Graph',
      msa: 'MSA & Licensing Vault',
      murs: 'Reconstruction Matrix (MURS)',
      principles: 'Formula & Principles',
      export: 'Export Matrix',
      tagline: '57 Cases · 57 Scars',
      badge: 'Crash Prevention & Decision Cartography',
    },
    metrics: {
      title: 'Structural Impact & Exit Keys',
      subtitle: 'Click on any structure or exit status to instantly filter across the 57 cases',
      financial: 'Financial Structure',
      financialDesc: 'Capital burn, leverage, runway mismatch, and debt covenants',
      human: 'Human Structure',
      humanDesc: 'Burnout, dissociation, cognitive breakdown, and executive paralysis',
      social: 'Social Structure',
      socialDesc: 'Governance loss, corporate silos, and trust breakdown',
      allCases: 'All Cases',
      exitKeyFilter: 'Filter by Exit Status:',
      directorBannerTitle: 'Decision Cartography: Map failure dependency pathways and the 4 elemental bottlenecks (Time · Clarity · Resources · Real Capacity).',
      directorBannerBtn: 'Open Graph & Dashboard',
    },
    filters: {
      searchPlaceholder: 'Search by industry, key asset, boolean switch, or symptom...',
      allBlocks: 'All Structural Blocks',
      showing: 'Showing',
      of: 'of',
      casesCount: 'documented cases',
      clearFilters: 'Clear filters',
      viewGrid: 'Grid',
      viewTable: 'Table',
    },
    structures: {
      Financiera: 'Financial',
      Humana: 'Human',
      Social: 'Social',
    },
    exitKeys: {
      Éxito: 'Success',
      Archivado: 'Archived',
      Delegado: 'Delegated',
      Baja: 'Terminated',
      Fallido: 'Failed',
    },
    msa: {
      badge: 'Master Services Agreement & Risk Arbitrage License',
      title: 'Formal Delivery Vault: MSA & Institutional Licensing',
      subtitle: 'Enforceable legal contract attached to every delivery. Includes strict non-resale, zero-operational-intervention, and C-Level Headhunter retention fee protection.',
      deliveryNotice: 'Every delivery is formalized through this cryptographically hashed Master Services Agreement, ensuring IP immutability and zero operational entanglement.',
      clientData: 'Delivery & Licensee Information',
      companyName: 'Legal Entity / Licensee Portco',
      clientRep: 'Authorized Officer / C-Level Sponsor',
      licenseTier: 'License Tier & Treasury Profile',
      headhunterInvolved: 'Referred by C-Level Executive Search / Headhunter?',
      headhunterName: 'Search Firm / Executive Headhunter',
      generateMsa: 'Generate Enforceable MSA',
      downloadMsa: 'Download MSA (.txt / Legal)',
      copyMsa: 'Copy Full Agreement Text',
      calculatorTitle: 'C-Level Headhunter Placement Bonus Safeguard Calculator',
      calculatorSubtitle: 'Protect your 90-day placement fee guarantees by arming hired executives with a systems radar, while earning a 10% referral commission.',
      cLevelSalary: 'Hired C-Level Base Compensation (USD)',
      placementFeeRate: 'Search Firm Placement Fee Rate',
      atRiskBonus: 'At-Risk Placement Fee (90-Day Guarantee)',
      headhunterFee: 'Headhunter 10% Referral Commission (USD)',
      savedBonus: 'Protected Placement Fee from Day-90 Executive Burnout',
    },
    dashboard: {
      badge: 'Diagnostic & Vulnerability Matrix for Investment Committees & C-Suite',
      title: 'Industry Sector Correlation & Systemic Risk Footprint',
      subtitle: 'Cross-analyze 8 macro-sectors against the 3 collapse vectors: Financial, Human, and Social.',
      multiriskIndex: 'Multi-Risk Index',
      multiriskDesc: '38 of 57 cases with multi-structure contagion',
      finVuln: 'Financial Vulnerability',
      humVuln: 'Human Vulnerability',
      socVuln: 'Social Vulnerability',
      chartTitle: 'Affected Structure Frequency across Macro-Sectors',
      chartSubtitle: 'Click on any bar or sector chip to filter records and inspect root-cause bottlenecks.',
      intersectionsTitle: 'Critical Contagion Intersections',
      intersectionsSubtitle: 'Failure cascades where human or social friction destroys the P&L.',
      patternsTitle: '4 Core Systemic Risk Laws derived from the 57 Cases',
      patternsSubtitle: 'Empirical organizational physics rules ready to deploy at board and committee level.',
    },
  },
  pt: {
    nav: {
      cases: 'Casos & Matriz',
      dashboard: 'Dashboard & Grafo de Dependências',
      msa: 'Espaço MSA & Licença',
      murs: 'Matriz Reconstrução (MURS)',
      principles: 'Fórmula & Princípios',
      export: 'Exportar Matriz',
      tagline: '57 Casos · 57 Cicatrizes',
      badge: 'Cartografia de Prevenção de Choque',
    },
    metrics: {
      title: 'Impacto Estrutural & Chaves de Saída',
      subtitle: 'Clique em uma estrutura ou status de saída para filtrar imediatamente os 57 casos',
      financial: 'Estrutura Financeira',
      financialDesc: 'Queima de caixa, alavancagem, descasamento de runway e contratos',
      human: 'Estrutura Humana',
      humanDesc: 'Burnout, dissociação, colapso cognitivo e paralisia de decisão',
      social: 'Estrutura Social',
      socialDesc: 'Perda de governança, feudos corporativos e quebra de confiança',
      allCases: 'Todos os Casos',
      exitKeyFilter: 'Filtrar por Status de Saída:',
      directorBannerTitle: 'Cartografia de Decisão: Identifique a rede de dependências causais e os 4 gargalos elementares (Tempo · Clareza · Recursos · Capacidade Real).',
      directorBannerBtn: 'Abrir Grafo & Dashboard',
    },
    filters: {
      searchPlaceholder: 'Pesquisar por indústria, recurso chave, gatilho booleano ou sintoma...',
      allBlocks: 'Todos os Blocos Estruturais',
      showing: 'Mostrando',
      of: 'de',
      casesCount: 'casos documentados',
      clearFilters: 'Limpar filtros',
      viewGrid: 'Grade',
      viewTable: 'Tabela',
    },
    structures: {
      Financiera: 'Financeira',
      Humana: 'Humana',
      Social: 'Social',
    },
    exitKeys: {
      Éxito: 'Sucesso',
      Archivado: 'Arquivado',
      Delegado: 'Delegado',
      Baja: 'Baixa',
      Fallido: 'Falhou',
    },
    msa: {
      badge: 'Master Services Agreement & Licença de Arbitragem',
      title: 'Espaço de Entrega Formal: MSA & Licenciamento',
      subtitle: 'Contrato legal executável para cada entrega institucional. Cláusulas de não-revenda, não-intervenção operacional e proteção de bônus para Headhunters C-Level.',
      deliveryNotice: 'Cada entrega é formalizada por este Master Services Agreement assinado criptograficamente.',
      clientData: 'Dados da Entrega & Licenciatário',
      companyName: 'Razão Social / Portco Licenciada',
      clientRep: 'Representante Autorizado / C-Level',
      licenseTier: 'Nível de Licença & Tesouraria',
      headhunterInvolved: 'Indicado por Headhunter / Executive Search?',
      headhunterName: 'Firma de Headhunting / Consultor',
      generateMsa: 'Gerar MSA Executável',
      downloadMsa: 'Baixar MSA (.txt / Legal)',
      copyMsa: 'Copiar Texto Completo',
      calculatorTitle: 'Calculadora de Proteção de Bônus para Headhunters C-Level',
      calculatorSubtitle: 'Evite que seus executivos contratados peçam demissão nos primeiros 90 dias e receba 10% de referral fee.',
      cLevelSalary: 'Remuneração Anual do C-Level Contratado (USD)',
      placementFeeRate: 'Taxa de Honorário de Colocação',
      atRiskBonus: 'Bônus em Risco na Garantia de 90 dias',
      headhunterFee: 'Comissão de 10% para o Headhunter (USD)',
      savedBonus: 'Bônus Protegido contra Burnout Executivo',
    },
    dashboard: {
      badge: 'Matriz de Diagnóstico para Comitês de Investimento & Conselhos',
      title: 'Correlação Setorial & Risco Sistêmico',
      subtitle: 'Mapeamento entre 8 macrosetores e os 3 vetores de colapso.',
      multiriskIndex: 'Índice Multirrisco',
      multiriskDesc: '38 de 57 casos com impacto combinado',
      finVuln: 'Vulnerabilidade Financeira',
      humVuln: 'Vulnerabilidade Humana',
      socVuln: 'Vulnerabilidade Social',
      chartTitle: 'Frequência de Estruturas Afetadas por Setor',
      chartSubtitle: 'Clique em qualquer barra para filtrar fichas específicas.',
      intersectionsTitle: 'Interseções Críticas de Contágio',
      intersectionsSubtitle: 'Cascatas onde a fricção humana destrói o resultado operacional.',
      patternsTitle: '4 Leis de Risco Sistêmico Derivadas dos 57 Casos',
      patternsSubtitle: 'Regras empíricas de física organizacional para comitês.',
    },
  },
  de: {
    nav: {
      cases: 'Fälle & Matrix',
      dashboard: 'Dashboard & Abhängigkeitsgraph',
      msa: 'MSA & Lizenzraum',
      murs: 'Rekonstruktionsmatrix (MURS)',
      principles: 'Formel & Prinzipien',
      export: 'Matrix Exportieren',
      tagline: '57 Fälle · 57 Narben',
      badge: 'Kollisionsprävention & Entscheidungskartographie',
    },
    metrics: {
      title: 'Strukturelle Belastung & Ausgangs-Schalter',
      subtitle: 'Klicken Sie auf eine Struktur, um die 57 dokumentierten Fälle zu filtern',
      financial: 'Finanzstruktur',
      financialDesc: 'Cashburn, Hebelwirkung, Runway-Fehlanpassung und Verträge',
      human: 'Menschliche Struktur',
      humanDesc: 'Burnout, kognitiver Zusammenbruch und Führungslähmung',
      social: 'Soziale Struktur',
      socialDesc: 'Governance-Verlust, Silos und Vertrauensbruch',
      allCases: 'Alle Fälle',
      exitKeyFilter: 'Nach Status filtern:',
      directorBannerTitle: 'Entscheidungskartographie: Fehlerabhängigkeiten und die 4 elementaren Engpässe kartieren (Zeit · Klarheit · Ressourcen · Realkapazität).',
      directorBannerBtn: 'Graph & Dashboard öffnen',
    },
    filters: {
      searchPlaceholder: 'Nach Branche, Asset, booleschem Schalter oder Symptom suchen...',
      allBlocks: 'Alle Themenblöcke',
      showing: 'Zeige',
      of: 'von',
      casesCount: 'Fällen',
      clearFilters: 'Filter zurücksetzen',
      viewGrid: 'Kacheln',
      viewTable: 'Tabelle',
    },
    structures: {
      Financiera: 'Finanziell',
      Humana: 'Menschlich',
      Social: 'Sozial',
    },
    exitKeys: {
      Éxito: 'Erfolg',
      Archivado: 'Archiviert',
      Delegado: 'Delegiert',
      Baja: 'Beendet',
      Fallido: 'Gescheitert',
    },
    msa: {
      badge: 'Master Services Agreement & Risikolizenz',
      title: 'Lieferraum: Formelles MSA & Institutionelle Lizenz',
      subtitle: 'Vollstreckbarer Vertrag für institutionelle Übergaben. Beinhaltet Weiterverkaufsverbot, Haftungsausschluss und Headhunter-Schutz.',
      deliveryNotice: 'Jede Übergabe wird durch dieses kryptografisch signierte MSA formalisiert.',
      clientData: 'Empfängerdaten & Lizenznehmer',
      companyName: 'Firmenname / Lizenzierte Portco',
      clientRep: 'Bevollmächtigter C-Level Vertreter',
      licenseTier: 'Lizenzstufe & Finanzprofil',
      headhunterInvolved: 'Durch C-Level Headhunter vermittelt?',
      headhunterName: 'Executive Search Firma',
      generateMsa: 'Vollstreckbares MSA Erstellen',
      downloadMsa: 'MSA Herunterladen (.txt / Legal)',
      copyMsa: 'Volltext Kopieren',
      calculatorTitle: 'Bonus-Schutzrechner für C-Level Headhunter',
      calculatorSubtitle: 'Schützen Sie 90-Tage-Garantien Ihrer Führungskräfte und sichern Sie sich 10% Empfehlungsprovision.',
      cLevelSalary: 'Jahresgehalt der platzierten Führungskraft (USD)',
      placementFeeRate: 'Vermittlungsprovision (%)',
      atRiskBonus: 'Gefährdeter Vermittlungsbonus (90-Tage-Klausel)',
      headhunterFee: '10% Provision für den Headhunter (USD)',
      savedBonus: 'Geschützter Vermittlungsbonus durch Burnout-Prävention',
    },
    dashboard: {
      badge: 'Diagnosematrix für Investitionskomitees & Vorstände',
      title: 'Sektorkorrelation & Systemisches Risiko',
      subtitle: 'Verbindung zwischen 8 Makrosektoren und den 3 Kollapsachsen.',
      multiriskIndex: 'Multi-Risiko-Index',
      multiriskDesc: '38 von 57 Fällen mit kombinierter Wirkung',
      finVuln: 'Finanzielle Verwundbarkeit',
      humVuln: 'Menschliche Verwundbarkeit',
      socVuln: 'Soziale Verwundbarkeit',
      chartTitle: 'Häufigkeit betroffener Strukturen nach Branche',
      chartSubtitle: 'Klicken Sie auf einen Balken, um Fälle direkt zu filtern.',
      intersectionsTitle: 'Kritische Schnittstellen',
      intersectionsSubtitle: 'Kaskadeneffekte, bevor das operative Ergebnis kippt.',
      patternsTitle: '4 Systemgesetze aus den 57 Fällen',
      patternsSubtitle: 'Empirische Physik zur direkten Anwendung in Vorständen.',
    },
  },
};
