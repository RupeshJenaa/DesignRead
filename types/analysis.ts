/**
 * DesignRead — Shared TypeScript Types
 * All API response shapes and UI data types live here.
 * Never redefine these — always import from this file.
 */

// ─── Design Pattern ─────────────────────────────────────────────────────────

export interface DesignPattern {
  name: string;
  confidence: "high" | "medium";
  description: string;
}

// ─── Color Palette ───────────────────────────────────────────────────────────

export interface ColorSwatch {
  hex: string;
  label: string;
  role: string;
  why: string;
}

// ─── Typography ──────────────────────────────────────────────────────────────

export interface TypographyAnalysis {
  description: string;
  why: string;
}

// ─── Layout ──────────────────────────────────────────────────────────────────

export interface LayoutAnalysis {
  description: string;
  why: string;
}

// ─── Standout Detail ─────────────────────────────────────────────────────────

export interface StandoutDetail {
  detail: string;
  why: string;
}

// ─── Key Elements ────────────────────────────────────────────────────────────

export interface KeyElements {
  colorPalette: ColorSwatch[];
  typography: TypographyAnalysis;
  layout: LayoutAnalysis;
  standoutDetails: StandoutDetail[];
}

// ─── Component Breakdown ─────────────────────────────────────────────────────

export interface DesignComponent {
  name: string;
  purpose: string;
  designNote: string;
}

export interface ComponentBreakdown {
  applicable: boolean;
  components: DesignComponent[];
}

// ─── AI Prompt ───────────────────────────────────────────────────────────────

export interface PromptToolVariants {
  midjourney: string;
  dalle3: string;
  firefly: string;
  stableDiffusion: string;
  googleStitch: string;
  figmaAi: string;
}

export interface PromptResult {
  generic: string;
  toolVariants: PromptToolVariants;
}

// ─── Design Mentor ───────────────────────────────────────────────────────────

export interface BeginnerMistake {
  mistake: string;
  consequence: string;
  fix: string;
}

export interface RealWorldExample {
  company: string;
  usage: string;
  urlHint: string;
}

export interface DesignMentor {
  whyItWorks: string[];
  whatCouldBeImproved: string[];
  commonBeginnerMistakes: BeginnerMistake[];
  realWorldExamples: RealWorldExample[];
}

// ─── Full Analysis Result ────────────────────────────────────────────────────

export interface AnalysisResult {
  styleSummary: string;
  designPatterns: DesignPattern[];
  keyElements: KeyElements;
  componentBreakdown: ComponentBreakdown;
  prompt: PromptResult;
  designMentor: DesignMentor;
}

// ─── API Request / Response ──────────────────────────────────────────────────

export interface AnalyzeRequest {
  imageBase64: string;
  mimeType: "image/jpeg" | "image/png" | "image/webp";
  targetTool?: PromptTool;
}

export interface AnalyzeResponse {
  success: true;
  data: AnalysisResult;
}

export interface AnalyzeErrorResponse {
  success: false;
  error: string;
  code: ErrorCode;
}

// ─── Prompt Tool Selector ────────────────────────────────────────────────────

export type PromptTool =
  | "generic"
  | "midjourney"
  | "dalle3"
  | "firefly"
  | "stableDiffusion"
  | "googleStitch"
  | "figmaAi";

// ─── Workspace State ─────────────────────────────────────────────────────────

export type WorkspaceState =
  | "empty"
  | "uploading"
  | "analyzing"
  | "results"
  | "refine";

// ─── Session History Entry ───────────────────────────────────────────────────

export interface HistoryEntry {
  id: string;
  imageUrl: string;
  fileName: string;
  analysis: AnalysisResult;
  timestamp: number;
}

// ─── Error Codes ─────────────────────────────────────────────────────────────

export type ErrorCode =
  | "INVALID_FILE_TYPE"
  | "FILE_TOO_LARGE"
  | "API_TIMEOUT"
  | "API_RATE_LIMIT"
  | "SCHEMA_VALIDATION_FAILED"
  | "API_UNAVAILABLE"
  | "UNKNOWN_ERROR";
