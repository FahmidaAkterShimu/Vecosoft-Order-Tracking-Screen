"use client";

import { useState } from "react";
import { orders } from "@/data/orders";

import TrackingHeader from "./TrackingHeader";
import StatusBanner from "./StatusBanner";
import OrderTimeline from "./OrderTimeline";
import OrderSummary from "./OrderSummary";
import SupportCard from "./SupportCard";
import OrderDetailsModal from "./OrderDetailsModal";
import SupportModal from "./SupportModal";
import DeliveryIssueModal from "./DeliveryIssueModal";
import { CircleAlert, PackageSearch } from "lucide-react";

export default function OrderTracking() {
  const [trackingState, setTrackingState] = useState("delayed");

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isIssueOpen, setIsIssueOpen] = useState(false);

  const order = orders[trackingState];

  function handleStateChange(event) {
    setTrackingState(event.target.value);
    setIsDetailsOpen(false);
    setIsSupportOpen(false);
    setIsIssueOpen(false);
  }

  return (
    <main className="min-h-dvh bg-gray-100">
      <div className="mx-auto min-h-dvh w-full max-w-md bg-white">
        <TrackingHeader />

        <div className="space-y-5 px-4 py-5">
          <section
            aria-label="Demo state selector"
            className="rounded-xl border border-gray-200 bg-gray-50 p-3"
          >
            <label
              htmlFor="tracking-state"
              className="mb-2 block text-xs font-medium text-gray-500"
            >
              Demo state
            </label>

            <select
              id="tracking-state"
              value={trackingState}
              onChange={handleStateChange}
              className="min-h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            >
              <option value="delayed">Delayed</option>

              <option value="delivered_not_received">
                Delivered but not received
              </option>

              <option value="tracking_unavailable">
                Tracking unavailable
              </option>
            </select>
          </section>

          <StatusBanner order={order} />

          <OrderTimeline timeline={order.timeline} />

          <OrderSummary
            order={order}
            onViewDetails={() => setIsDetailsOpen(true)}
          />

          <SupportCard
            status={order.status}
            onContactSupport={() => setIsSupportOpen(true)}
            onReportIssue={() => setIsIssueOpen(true)}
          />
        </div>

        <OrderDetailsModal
          order={order}
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
        />

        <SupportModal
          order={order}
          isOpen={isSupportOpen}
          onClose={() => setIsSupportOpen(false)}
        />

        <DeliveryIssueModal
          order={order}
          isOpen={isIssueOpen}
          onClose={() => setIsIssueOpen(false)}
        />
      </div>
    </main>
  );
}