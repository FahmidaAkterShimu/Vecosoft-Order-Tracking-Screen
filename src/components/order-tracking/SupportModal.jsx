"use client";

import { useEffect } from "react";
import {
  X,
  MessageCircle,
  Mail,
  Info,
} from "lucide-react";

export default function SupportModal({
  order,
  isOpen,
  onClose,
}) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isDelayed = order.status === "delayed";
  const isDeliveredNotReceived =
    order.status === "delivered_not_received";

  let description =
    "Our support team can help with questions about your order.";

  if (isDelayed) {
    description =
      "Your order is delayed. Support can help you understand the latest delivery information.";
  }

  if (isDeliveredNotReceived) {
    description =
      "Since your package is marked as delivered, support can help you with the next steps.";
  }

  if (order.status === "tracking_unavailable") {
    description =
      "Tracking information is not available yet. Support can help confirm your order and expected delivery.";
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-title"
    >
      <div className="w-full max-w-md rounded-t-3xl bg-white p-5 shadow-xl sm:rounded-2xl">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-gray-500">
              Customer support
            </p>

            <h2
              id="support-title"
              className="mt-0.5 text-lg font-semibold text-gray-950"
            >
              How can we help?
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close support"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <p className="mt-3 text-sm leading-5 text-gray-500">
          {description}
        </p>

        <div className="mt-5 space-y-2">
          <button
            type="button"
            className="flex min-h-12 w-full items-center gap-3 rounded-xl border border-gray-200 px-4 text-left transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
              <MessageCircle size={18} aria-hidden="true" />
            </span>

            <span>
              <span className="block text-sm font-semibold text-gray-900">
                Chat with support
              </span>

              <span className="mt-0.5 block text-xs text-gray-500">
                Get help from our support team
              </span>
            </span>
          </button>

          <button
            type="button"
            className="flex min-h-12 w-full items-center gap-3 rounded-xl border border-gray-200 px-4 text-left transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
              <Mail size={18} aria-hidden="true" />
            </span>

            <span>
              <span className="block text-sm font-semibold text-gray-900">
                Email support
              </span>

              <span className="mt-0.5 block text-xs text-gray-500">
                Send us your order information
              </span>
            </span>
          </button>
        </div>

        <div className="mt-4 flex gap-2 rounded-xl bg-gray-50 p-3">
          <Info
            size={16}
            className="mt-0.5 shrink-0 text-gray-500"
            aria-hidden="true"
          />

          <p className="text-xs leading-5 text-gray-500">
            When contacting support, include your order number{" "}
            <span className="font-medium text-gray-700">
              #{order.id}
            </span>{" "}
            so we can help you faster.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 min-h-11 w-full rounded-xl bg-gray-950 px-4 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          Close
        </button>
      </div>
    </div>
  );
}