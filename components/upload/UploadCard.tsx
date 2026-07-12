"use client";

/**
 * DesignRead — UploadCard
 * Slice 1.3: Drag & Drop added.
 * - dragenter / dragleave / dragover / drop handlers on the upload zone
 * - isDragging state drives a visual highlight on the dashed border
 * - Dropped file lands in the same selectedFile state as the file picker
 * - No validation yet (Slice 1.4). No preview yet (Slice 1.5).
 */

import { useRef, useState } from "react";
import { ACCEPTED_MIME_TYPES } from "@/lib/constants";
import clsx from "clsx";

export default function UploadCard() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  /** Store file and log it — shared by picker and drop */
  function captureFile(file: File) {
    setSelectedFile(file);
    console.log("[DesignRead] File selected:", {
      name: file.name,
      type: file.type,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
    });
  }

  /** Open the OS file picker */
  function handleButtonClick() {
    inputRef.current?.click();
  }

  /** Capture file from the hidden input */
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    captureFile(file);
    e.target.value = ""; // allow re-selecting the same file
  }

  /** Prevent default browser behaviour (opening the file) */
  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  /** Highlight the zone when a dragged item enters */
  function handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }

  /** Remove highlight when the dragged item leaves */
  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    // Only clear if leaving the zone entirely (not entering a child element)
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    setIsDragging(false);
  }

  /** Capture the dropped file */
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    captureFile(file);
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

        {/* Upload zone — drag target, dashed inner border per PRD F-01 */}
        <div
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={clsx(
            "border border-dashed rounded-card-inner p-8 flex flex-col items-center gap-5 text-center transition-colors duration-fast",
            isDragging
              ? "border-text-secondary bg-white/[0.02]"   // highlight on drag
              : "border-border"                             // default state
          )}
        >
          {/* Icon — brightens slightly while dragging */}
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
                stroke={isDragging ? "#F2F2F2" : "#8C8C8C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: "stroke 150ms" }}
              />
              <path
                d="M10 23H22"
                stroke={isDragging ? "#F2F2F2" : "#8C8C8C"}
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ transition: "stroke 150ms" }}
              />
              <rect
                x="4"
                y="4"
                width="24"
                height="24"
                rx="6"
                stroke={isDragging ? "#8C8C8C" : "#262626"}
                strokeWidth="1.5"
                style={{ transition: "stroke 150ms" }}
              />
            </svg>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h2 className="font-serif text-2xl text-text-primary leading-tight tracking-tight">
              {isDragging ? "Release to upload" : "Drop any design here"}
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
