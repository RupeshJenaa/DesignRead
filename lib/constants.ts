/**
 * DesignRead — Application Constants
 * No magic numbers anywhere else in the codebase.
 * All config values live here.
 */

// ─── File Upload ─────────────────────────────────────────────────────────────

/** Maximum upload file size in bytes (10 MB) */
export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

/** Human-readable max file size label */
export const MAX_FILE_SIZE_LABEL = "10MB";

/** Accepted image MIME types */
export const ACCEPTED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
] as const;

/** Accepted file extensions for display */
export const ACCEPTED_EXTENSIONS = ["JPG", "PNG", "WEBP"];

// ─── Image Processing ─────────────────────────────────────────────────────────

/** Max longest edge (px) before resizing — reduces Claude API tokens */
export const MAX_IMAGE_EDGE_PX = 1568;

/** JPEG compression quality (0–1) */
export const COMPRESSION_QUALITY = 0.85;

// ─── API ─────────────────────────────────────────────────────────────────────

/** Claude model to use for all analysis */
export const CLAUDE_MODEL = "claude-sonnet-4-6" as const;

/** Max tokens for analysis response */
export const CLAUDE_MAX_TOKENS = 4096;

/** Requests per IP per hour */
export const RATE_LIMIT_REQUESTS_PER_HOUR = 20;

/** Max prompt refinements allowed per analysis session */
export const MAX_REFINEMENTS_PER_SESSION = 2;

/** Max images retained in session history */
export const MAX_SESSION_HISTORY = 5;

// ─── Timing ──────────────────────────────────────────────────────────────────

/** Show "This one's detailed..." message after this many ms */
export const SLOW_ANALYSIS_THRESHOLD_MS = 20_000;

/** How long to show "Copied!" before resetting (ms) */
export const COPY_FEEDBACK_DURATION_MS = 2000;

// ─── UI ──────────────────────────────────────────────────────────────────────

/** Desktop breakpoint (px) — per DESIGN.md (overrides PRD 768px) */
export const DESKTOP_BREAKPOINT_PX = 1024;

/** Color swatch size in px */
export const COLOR_SWATCH_SIZE_PX = 64;

/** Max color swatches to display */
export const MAX_COLOR_SWATCHES = 6;

// ─── Prompt Tools ────────────────────────────────────────────────────────────

export const PROMPT_TOOLS = [
  { id: "generic", label: "Generic", description: "Tool-agnostic, clean prose" },
  { id: "midjourney", label: "Midjourney", description: "Mood, medium, aspect ratio flags" },
  { id: "dalle3", label: "DALL·E 3", description: "Natural language, descriptive" },
  { id: "firefly", label: "Adobe Firefly", description: "Brand-safe, structured" },
  { id: "stableDiffusion", label: "Stable Diffusion", description: "Weight syntax, negative prompts" },
  { id: "googleStitch", label: "Google Stitch", description: "UI structure, component hierarchy" },
  { id: "figmaAi", label: "Figma AI", description: "Design system terminology, components" },
] as const;

export type PromptToolId = typeof PROMPT_TOOLS[number]["id"];

// ─── Design Pattern Vocabulary ────────────────────────────────────────────────
// Reference list for system prompt — per PRD F-04

export const DESIGN_PATTERN_VOCABULARY = [
  "Bento Layout",
  "Swiss/International Grid",
  "Brutalist Typography",
  "Editorial Grid",
  "Glassmorphism",
  "Neumorphism",
  "Neobrutalism",
  "Minimal Color Palette",
  "Dark Mode Premium",
  "Monochromatic",
  "Split-Screen Layout",
  "Full-Bleed Hero",
  "Typographic Hero",
  "Card Grid",
  "Dashboard Layout",
  "Magazine Layout",
  "Oversized Typography",
  "Micro-animation Forward",
  "Gradient Heavy",
  "Flat Design",
  "Material Design",
  "Anti-Design",
] as const;
