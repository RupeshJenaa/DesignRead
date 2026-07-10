"use client";

/**
 * DesignRead — UploadCard
 * Slice 1.2: File picker connected.
 * - Hidden <input type="file"> triggered by the button
 * - Selected File stored in local state
 * - No validation yet (Slice 1.4). No preview yet (Slice 1.5).
 */

import { useRef, useState } from "react";
import { ACCEPTED_MIME_TYPES } from "@/lib/constants";

export default function UploadCard() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  /** Open the OS file picker */
  function handleButtonClick() {
    inputRef.current?.click();
  }

  /** Capture the selected file — no validation yet */
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    console.log("[DesignRead] File selected:", {
      name: file.name,
      type: file.type,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
    });

    // Reset so the same file can be re-selected if needed
    e.target.value = "";
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Hidden file input — triggered programmatically */}
      <input
        ref={inputRef}
        type="file"
        id="file-input"
        accept={ACCEPTED_MIME_TYPES.join(",")}
        onChange={handleFileChange}
        className="sr-only"
        aria-label="Upload design image"
      />

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
              <path
                d="M16 21V11M16 11L12 15M16 11L20 15"
                stroke="#8C8C8C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 23H22"
                stroke="#8C8C8C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
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
            onClick={handleButtonClick}
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

          {/* Accepted formats label */}
          <p className="text-text-secondary text-xs tracking-wide uppercase font-medium">
            JPG · PNG · WEBP · up to 10 MB
          </p>

          {/* Temporary file name feedback — replaced by full preview in Slice 1.5 */}
          {selectedFile && (
            <p className="text-text-secondary text-xs font-mono">
              ✓ {selectedFile.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
