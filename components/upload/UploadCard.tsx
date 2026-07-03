"use client";

/**
 * DesignRead — UploadCard
 * Slice 1.1: Static upload card with title, description, and upload button.
 * No file picker logic yet (Slice 1.2). No drag-and-drop yet (Slice 1.3).
 */

export default function UploadCard() {
  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Outer card */}
      <div className="bg-surface border border-border rounded-card p-7">

        {/* Upload zone — dashed inner border, per PRD F-01 */}
        <div className="border border-dashed border-border rounded-card-inner p-8 flex flex-col items-center gap-5 text-center">

          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Upload arrow */}
              <path
                d="M16 21V11M16 11L12 15M16 11L20 15"
                stroke="#8C8C8C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Bottom tray */}
              <path
                d="M10 23H22"
                stroke="#8C8C8C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Outer rectangle */}
              <rect
                x="4"
                y="4"
                width="24"
                height="24"
                rx="6"
                stroke="#262626"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h2 className="font-serif text-2xl text-text-primary leading-tight tracking-tight">
              Drop any design here
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Upload a UI screenshot, landing page, poster, or any visual
              reference to get a structured analysis and ready-to-use AI prompt.
            </p>
          </div>

          {/* Upload button — Primary style per DESIGN.md §7.3 */}
          <button
            id="upload-trigger"
            type="button"
            className="mt-1 inline-flex items-center gap-2 bg-text-primary text-background text-sm font-medium px-5 py-2.5 rounded-pill transition-opacity duration-fast hover:opacity-90 active:scale-[0.98] active:opacity-80"
          >
            Choose file
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7 1L13 7M13 7L7 13M13 7H1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Accepted formats */}
          <p className="text-text-secondary text-xs tracking-wide uppercase font-medium">
            JPG · PNG · WEBP · up to 10 MB
          </p>
        </div>
      </div>
    </div>
  );
}
