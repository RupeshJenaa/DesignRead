/**
 * DesignRead — Home Page
 * Slice 1.1: Renders the UploadCard.
 * onUploadClick is a no-op placeholder — Slice 1.2 will wire up the file picker.
 */
import UploadCard from "@/components/upload/UploadCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 gap-8">
      {/* Wordmark */}
      <div className="text-center space-y-2">
        <h1 className="font-serif text-5xl text-text-primary tracking-tight">
          DesignRead
        </h1>
        <p className="text-text-secondary text-xs uppercase tracking-[0.15em] font-medium">
          AI Design Analysis
        </p>
      </div>

      {/* Upload card */}
      <UploadCard />
    </main>
  );
}
