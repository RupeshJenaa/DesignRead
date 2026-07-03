import { z } from "zod";

/**
 * DesignRead — Zod Runtime Validation Schemas
 * Must stay in sync with types/analysis.ts.
 * If the schema changes, update BOTH files (see RULES.md rule 29).
 */

// ─── Design Pattern ─────────────────────────────────────────────────────────

export const DesignPatternSchema = z.object({
  name: z.string().min(1),
  confidence: z.enum(["high", "medium"]),
  description: z.string().min(1),
});

// ─── Color Palette ───────────────────────────────────────────────────────────

export const ColorSwatchSchema = z.object({
  hex: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Invalid hex color"),
  label: z.string().min(1),
  role: z.string().min(1),
  why: z.string().min(1),
});

// ─── Typography ──────────────────────────────────────────────────────────────

export const TypographyAnalysisSchema = z.object({
  description: z.string().min(1),
  why: z.string().min(1),
});

// ─── Layout ──────────────────────────────────────────────────────────────────

export const LayoutAnalysisSchema = z.object({
  description: z.string().min(1),
  why: z.string().min(1),
});

// ─── Standout Detail ─────────────────────────────────────────────────────────

export const StandoutDetailSchema = z.object({
  detail: z.string().min(1),
  why: z.string().min(1),
});

// ─── Key Elements ────────────────────────────────────────────────────────────

export const KeyElementsSchema = z.object({
  colorPalette: z.array(ColorSwatchSchema).min(1).max(6),
  typography: TypographyAnalysisSchema,
  layout: LayoutAnalysisSchema,
  standoutDetails: z.array(StandoutDetailSchema).min(1).max(4),
});

// ─── Component Breakdown ─────────────────────────────────────────────────────

export const DesignComponentSchema = z.object({
  name: z.string().min(1),
  purpose: z.string().min(1),
  designNote: z.string().min(1),
});

export const ComponentBreakdownSchema = z.object({
  applicable: z.boolean(),
  components: z.array(DesignComponentSchema),
});

// ─── AI Prompt ───────────────────────────────────────────────────────────────

export const PromptToolVariantsSchema = z.object({
  midjourney: z.string().min(1),
  dalle3: z.string().min(1),
  firefly: z.string().min(1),
  stableDiffusion: z.string().min(1),
  googleStitch: z.string().min(1),
  figmaAi: z.string().min(1),
});

export const PromptResultSchema = z.object({
  generic: z.string().min(1),
  toolVariants: PromptToolVariantsSchema,
});

// ─── Design Mentor ───────────────────────────────────────────────────────────

export const BeginnerMistakeSchema = z.object({
  mistake: z.string().min(1),
  consequence: z.string().min(1),
  fix: z.string().min(1),
});

export const RealWorldExampleSchema = z.object({
  company: z.string().min(1),
  usage: z.string().min(1),
  urlHint: z.string().min(1),
});

export const DesignMentorSchema = z.object({
  whyItWorks: z.array(z.string().min(1)).min(1).max(5),
  whatCouldBeImproved: z.array(z.string().min(1)).min(1).max(3),
  commonBeginnerMistakes: z.array(BeginnerMistakeSchema).min(1).max(4),
  realWorldExamples: z.array(RealWorldExampleSchema).min(0).max(4),
});

// ─── Full Analysis Result ────────────────────────────────────────────────────

export const AnalysisResultSchema = z.object({
  styleSummary: z.string().min(1),
  designPatterns: z.array(DesignPatternSchema).min(0).max(8),
  keyElements: KeyElementsSchema,
  componentBreakdown: ComponentBreakdownSchema,
  prompt: PromptResultSchema,
  designMentor: DesignMentorSchema,
});

// Export the inferred type so it matches the TypeScript type
export type ValidatedAnalysisResult = z.infer<typeof AnalysisResultSchema>;
