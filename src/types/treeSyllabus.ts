/**
 * src/types/treeSyllabus.ts
 * Tree-Down Living Syllabus Type Definitions
 * Phase 1 Contract: Tree-Down Unified Learning Engine
 */

export type TreeNodeType = 'root' | 'branch' | 'leaf' | 'checkpoint';

export interface ActiveRecallCard {
  termEn: string;
  termSi: string;
  departmentKeywordsEn: string[];
  departmentKeywordsSi: string[];
  mnemonicEn?: string;
  mnemonicSi?: string;
  definitionEn: string;
  definitionSi: string;
  examTrapWarningEn?: string;
  examTrapWarningSi?: string;
}

export interface TactileWidgetConfig {
  widgetKey: string;
  titleEn: string;
  titleSi: string;
  defaultSubMode?: string | number;
  hideInternalTabs?: boolean;
  props?: Record<string, any>;
}

export interface TheoryBite {
  titleEn: string;
  titleSi: string;
  contentEn: string;
  contentSi: string;
  bulletPointsEn?: string[];
  bulletPointsSi?: string[];
  keyTakeawayEn?: string;
  keyTakeawaySi?: string;
}

export interface MentalModelAnalogy {
  analogyEn: string;
  analogySi: string;
  explanationEn?: string;
  explanationSi?: string;
}

export interface ConceptLeafPayload {
  theoryBite: TheoryBite;
  analogy?: MentalModelAnalogy;
  tactileWidget?: TactileWidgetConfig;
  activeRecallCard: ActiveRecallCard;
}

export interface CheckpointOption {
  id: string;
  key?: 'A' | 'B' | 'C' | 'D';
  en: string;
  si: string;
}

export interface CheckpointQuestion {
  id: string;
  questionNumber?: number;
  promptEn: string;
  promptSi: string;
  options: CheckpointOption[];
  correctOptionId: string;
  correctKey?: 'A' | 'B' | 'C' | 'D';
  explanationEn: string;
  explanationSi: string;
  syllabusRef?: string;
}

export interface CheckpointPayload {
  titleEn: string;
  titleSi: string;
  instructionsEn?: string;
  instructionsSi?: string;
  questions: CheckpointQuestion[];
  passingScore?: number;
  rewardXp?: number;
}

export interface RootPayload {
  unitNumber: number;
  grade: '10' | '11';
  overviewEn?: string;
  overviewSi?: string;
  totalBranches: number;
  totalLeaves: number;
}

export interface BranchPayload {
  branchNumber: string;
  summaryEn?: string;
  summarySi?: string;
  totalLeaves: number;
}

export interface SyllabusTreeNode {
  id: string;
  unitId: string;
  type: TreeNodeType;
  depth: number; // 0 = root, 1 = branch, 2 = leaf, 3 = checkpoint
  orderIndex: number;
  parentId?: string | null;
  childIds: string[];
  titleEn: string;
  titleSi: string;
  rootPayload?: RootPayload;
  branchPayload?: BranchPayload;
  leafPayload?: ConceptLeafPayload;
  checkpointPayload?: CheckpointPayload;
}

export interface UnitTreeManifest {
  unitId: string;
  grade: '10' | '11';
  unitNumber: number;
  titleEn: string;
  titleSi: string;
  rootNode: SyllabusTreeNode;
  nodes: Record<string, SyllabusTreeNode>;
  branchIds: string[];
  checkpointNodeId: string;
}
