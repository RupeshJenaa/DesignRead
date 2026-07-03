<div align="center">

# DesignRead

**Reverse-engineer any design. Understand why it works. Generate a production-ready AI prompt.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Claude](https://img.shields.io/badge/Claude-Sonnet_4.6-D4A574?style=flat-square)](https://anthropic.com)
[![Status](https://img.shields.io/badge/Status-In_Development-8C8C8C?style=flat-square)]()

</div>

---

## What Is DesignRead?

DesignRead is an AI-powered design intelligence tool. Upload any visual reference — a landing page screenshot, a UI screen, a poster, a brand identity — and get back:

- **Structured design analysis** — patterns, colors, typography, layout, standout decisions
- **"Why it works" reasoning** for every element — not just descriptions, but principles
- **Production-ready AI prompts** optimized for Midjourney, DALL·E 3, Adobe Firefly, Stable Diffusion, Google Stitch, and Figma AI
- **Design Mentor Mode** — a dedicated education layer that explains why the design works, what could be improved, what beginners get wrong, and where this pattern appears in real products

> DesignRead helps you go from *"I have a reference"* to *"I have a usable AI prompt"* in under 30 seconds — and leaves you knowing more about design than when you started.

---

## Features

| Feature | Description |
|---|---|
| 📸 **Image Upload** | Drag-and-drop or click to upload · JPG, PNG, WEBP · 10MB max |
| 🔍 **AI Visual Analysis** | Full structured breakdown powered by Claude Vision |
| 🏷️ **Design Pattern Recognition** | Named vocabulary tags — *Bento Layout, Swiss Grid, Glassmorphism* — not vague descriptors |
| 🎨 **Color Palette** | Hex swatches with role labels and reasoning behind each color choice |
| ✍️ **Typography & Layout Analysis** | Description + *why* for every structural decision |
| ⚡ **One-Click Prompt Copy** | Ready-to-use prompt with tool-specific variants |
| 🛠️ **Tool Selector** | Switch prompt format between 7 AI tools instantly |
| ✏️ **Prompt Refinement** | Follow-up instructions to adjust the prompt without re-uploading |
| 🎓 **Design Mentor Mode** | Why it works · What could improve · Beginner mistakes · Real-world examples |
| 📋 **Export Analysis** | Full analysis exported as formatted markdown |
| 🕓 **Session History** | Up to 5 previous analyses accessible in a scrollable strip |

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript — strict mode, no `any` |
| Styling | Tailwind CSS |
| AI Provider | Anthropic API · `claude-sonnet-4-6` with vision input |
| Validation | Zod — all AI responses validated before reaching the UI |
| State | React Context — no external state library |
| Hosting | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+
- An [Anthropic API key](https://console.anthropic.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/RupeshJenaa/AgroLink.git
cd AgroLink

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

Open `.env.local` and add your Anthropic API key:

```env
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
designread/
├── app/
│   ├── page.tsx                  # Landing page / workspace
│   ├── layout.tsx                # Root layout, fonts, global styles
│   ├── globals.css               # Tailwind base + CSS variables
│   └── api/
│       ├── analyze/route.ts      # POST — image in, analysis JSON out
│       └── refine/route.ts       # POST — prompt refinement
│
├── components/
│   ├── upload/                   # UploadCard, DragDrop, ImagePreview
│   ├── workspace/                # Workspace layout and state shells
│   ├── analysis/                 # StyleSummary, DesignPatterns, KeyElements
│   │   └── mentor/               # MentorPanel and all 4 sub-sections
│   ├── prompt/                   # PromptPanel, ToolSelector
│   └── ui/                       # Primitive UI: Button, Card, Badge, Chip
│
├── lib/
│   ├── ai/
│   │   ├── analyzeDesign.ts      # Core AI abstraction — the only entry point
│   │   └── providers/            # anthropic.provider.ts
│   ├── prompts/                  # systemPrompt.ts, toolPrompts.ts
│   ├── schema.ts                 # Zod validation schemas
│   ├── constants.ts              # All app constants — no magic numbers
│   └── env.ts                    # Safe environment variable helpers
│
├── types/
│   └── analysis.ts               # Shared TypeScript types (frontend + API)
│
└── context/                      # WorkspaceContext — global session state
```

---

## Design System

DesignRead uses a **strictly monochrome editorial dark UI** — no accent colors. Hierarchy is communicated through contrast, typography, and elevation.

| Token | Hex | Role |
|---|---|---|
| Background | `#0D0D0D` | Obsidian Black — page base |
| Surface | `#1A1A1A` | Deep Charcoal — cards and panels |
| Border | `#262626` | Frosted Gray — dividers |
| Text Primary | `#F2F2F2` | Off-White — headings and body |
| Text Secondary | `#8C8C8C` | Muted Slate — labels and metadata |

**Typography:** High-contrast Didone serif for display headings · Geometric sans-serif for UI and body · JetBrains Mono for hex codes and technical values.

---

## How It Works

```
Upload Image
    ↓
Compress + encode to base64 (client-side)
    ↓
POST /api/analyze
    ↓
Claude Vision API — single call returns full structured JSON
    ↓
Zod schema validation
    ↓
Render: Style Summary → Design Patterns → Key Elements
         → Component Breakdown → Prompt → Design Mentor Mode
```

The AI is isolated behind a single function — `analyzeDesign()` in `lib/ai/analyzeDesign.ts`. Nothing in the UI or API routes touches the Anthropic SDK directly.

---

## Roadmap

- [x] Phase 0 — Foundation (types, schemas, constants, env)
- [ ] Phase 1 — Upload Experience (card, drag-drop, validation, preview, compression)
- [ ] Phase 2 — AI Analysis Engine (Claude integration, JSON parsing, Zod validation, retry)
- [ ] Phase 3 — Results UI (all analysis sections rendered)
- [ ] Phase 4 — Prompt Section (tool selector, one-click copy)
- [ ] Phase 5 — Design Mentor Mode (all 4 sub-sections)
- [ ] Phase 6 — Polish (session history, refinement, export, animations)

---

## Development Notes

This project follows a strict **vertical slice** development process — one small, complete feature at a time, committed independently. See `.ai/TASKS.md` for the full development roadmap and `.ai/RULES.md` for coding conventions.

Key rules enforced across the codebase:
- No `any` types
- No hardcoded colors, spacing, or API strings — use `lib/constants.ts`
- Components stay under 250 lines; hooks and utilities under 150 lines
- Schema changes require updating Zod schema, TypeScript types, API route, and UI components simultaneously
- Design Mentor Mode output is the product's educational differentiator — quality bar is high

---

## License

MIT

---

<div align="center">
  <sub>Built by <a href="https://github.com/RupeshJenaa">Rupesh Jena</a></sub>
</div>
