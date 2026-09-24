import {
  Headphones,
  MessageCircle,
  TriangleAlert,
} from "lucide-react";

export default function SupportCard({
  status,
  onContactSupport,
  onReportIssue,
}) {
  const showReportButton =
    status === "delayed" ||
    status === "delivered_not_received";

  const isTrackingUnavailable =
    status === "tracking_unavailable";

  return (
    <section
      aria-labelledby="support-title"
      className="rounded-2xl bg-gray-50 p-4"
    >
      <div className="flex items-start gap-3">
        <div
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white"
        >
          <Headphones size={19} className="text-gray-700" />
        </div>

        <div className="min-w-0">
          <h2
            id="support-title"
            className="text-sm font-semibold text-gray-950"
          >
            {isTrackingUnavailable
              ? "Need help with tracking?"
              : "Need help?"}
          </h2>

          <p className="mt-1 text-xs leading-5 text-gray-500">
            {status === "delayed"
              ? "Your delivery is delayed. Let us know if you need help."
              : status === "delivered_not_received"
                ? "Didn't receive your package? We can help you report the issue."
                : "Tracking information will be available once your package is handed to the carrier."}
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        {showReportButton && (
          <button
            type="button"
            onClick={onReportIssue}
            className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gray-950 px-4 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <TriangleAlert size={17} aria-hidden="true" />
            Report delivery issue
          </button>
        )}

        <button
          type="button"
          onClick={onContactSupport}
          className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        >
          <MessageCircle size={17} aria-hidden="true" />
          Contact support
        </button>
      </div>
    </section>
  );
}