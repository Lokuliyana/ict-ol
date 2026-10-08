/**
 * src/types/curriculum.ts
 * Strict TypeScript interfaces for Syllabus & Micro-Learning Content Schemas
 * Adhering to PROJECT.md §Interface Contracts
 */

export interface BilingualText {
  en: string;
  si: string;
}

export type VisualWidgetType =
  | 'binary_weight'
  | 'hex_vat'
  | 'logic_gate'
  | 'laser_grid'
  | 'trace_table'
  | 'table_mason'
  | 'cpu_bus'
  | 'network_topo'
  | 'security_cipher';

export interface TheoryCard {
  id: string;
  title: BilingualText;
  visualWidget?: VisualWidgetType;
  bulletPoints: BilingualText[];
  keyTakeaway: BilingualText;
}

export interface QuizQuestion {
  id: string;
  prompt: BilingualText;
  options: BilingualText[]; // exactly 4 options
  correctIndex: number; // 0 to 3
  explanation: BilingualText;
  syllabusRef?: string;
}

export interface LevelNode {
  id: string; // e.g. "g10-u1-s1", "g10-u03-n01"
  unitId: string; // e.g. "g10-u1", "g10-u03"
  unitTitle: BilingualText;
  title: BilingualText;
  type: 'concept' | 'interactive_lab' | 'boss_arena';
  theoryCards: TheoryCard[];
  quizQuestions: QuizQuestion[];
  sandboxType?: 'switchboard' | 'color_vat' | 'logic_workbench' | 'laser_grid' | 'trace_table' | 'table_mason';
  orderIndex: number;
}
