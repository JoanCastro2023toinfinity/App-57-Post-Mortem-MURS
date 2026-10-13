export type StructureType = 'Financiera' | 'Humana' | 'Social';

export type ExitKeyType = 'Éxito' | 'Archivado' | 'Delegado' | 'Baja' | 'Fallido';

export type BlockCategory =
  | 'Trinchera (Operación Base)'
  | 'Gobernanza & Arquitectura (IP Propia)'
  | 'Guerra Política & Discurso'
  | 'Macroeconomía & Modelos de Sistema'
  | 'Inteligencia & Conflictos'
  | 'Reconstrucción Autónoma (Matriz X/Y)'
  | 'Humanidad, Duelo & Legado'
  | 'Buffers Técnicos & Operativos';

export interface CaseStudy {
  id: number;
  caseNumber: string; // e.g. "#01/57"
  title: string;
  industry: string;
  block: BlockCategory;
  exitKey: {
    status: ExitKeyType;
    criterion: string; // The "Si X > Y, entonces Z"
  };
  keyResources: string[];
  affectedStructures: {
    types: StructureType[];
    financialDetails?: string;
    humanDetails?: string;
    socialDetails?: string;
  };
  elementalFractal: {
    initialCondition: string;
    bottleneck: string;
    iteration: string;
    surgeonNote: string;
    icValue: string; // What this tells an Investment Committee / Portco partner
  };
  rawPostText?: string;
}

export interface SummaryStats {
  totalCases: number;
  byStructure: Record<StructureType, number>;
  byExitKey: Record<ExitKeyType, number>;
  byBlock: Record<string, number>;
}

export interface MursQuestion {
  id: number;
  numberStr: string;
  question: string;
  focus: string;
  diagnosticPrompt: string;
  actionProtocol: string;
}

export interface MursPlaybookRule {
  number: number;
  title: string;
  axiom: string;
  symptomToCut: string;
  restorationVector: string;
  referencedCaseId: number;
  referencedCaseTitle: string;
}

export interface MursScaleLayer {
  scale: 'Micro' | 'Meso' | 'Macro' | 'Meta';
  title: string;
  scope: string;
  diagnosticFriction: string;
  reconstructionLink: string;
  keyRule: string;
}

export interface UniversalReconstructionMatrixData {
  masterRule: {
    title: string;
    axiom: string;
    description: string;
  };
  emergencyProtocol: {
    title: string;
    subtitle: string;
    questions: MursQuestion[];
  };
  playbookRules: MursPlaybookRule[];
  multiScaleMatrix: MursScaleLayer[];
}
