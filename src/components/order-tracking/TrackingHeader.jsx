import { ArrowLeft, Ellipsis } from "lucide-react";

export default function TrackingHeader() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-gray-200 px-4">
      <button
        type="button"
        aria-label="Go back"
        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100"
      >
        <ArrowLeft size={20} />
      </button>

      <h1 className="text-base font-semibold text-gray-950">
        Order Tracking
      </h1>

      <button
        type="button"
        aria-label="More options"
        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100"
      >
        <Ellipsis size={20} />
      </button>
    </header>
  );
}