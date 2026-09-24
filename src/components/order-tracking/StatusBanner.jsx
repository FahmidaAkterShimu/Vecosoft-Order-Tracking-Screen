import {
  Info,
  TriangleAlert,
} from "lucide-react";

const statusConfig = {
  delayed: {
    icon: TriangleAlert,
    iconClass: "text-amber-700",
    backgroundClass: "bg-amber-50",
    labelClass: "text-amber-950",
    deliveryLabel: "Estimated delivery",
  },

  delivered_not_received: {
    icon: TriangleAlert,
    iconClass: "text-amber-700",
    backgroundClass: "bg-amber-50",
    labelClass: "text-amber-950",
    deliveryLabel: "Delivery status",
  },

  tracking_unavailable: {
    icon: Info,
    iconClass: "text-blue-700",
    backgroundClass: "bg-blue-50",
    labelClass: "text-blue-950",
    deliveryLabel: "Estimated delivery",
  },
};

export default function StatusBanner({ order }) {
  const config = statusConfig[order.status];
  const Icon = config.icon;

  const isDelivered = order.status === "delivered_not_received";

  return (
    <section
      aria-labelledby="order-status-title"
      className={`rounded-2xl p-5 ${config.backgroundClass}`}
    >
      <div className="flex items-start gap-3">
        <div
          aria-hidden="true"
          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/80"
        >
          <Icon size={19} className={config.iconClass} />
        </div>

        <div className="min-w-0 flex-1">
          <h2
            id="order-status-title"
            className={`text-lg font-semibold leading-6 ${config.labelClass}`}
          >
            {order.statusLabel}
          </h2>

          <p className="mt-1.5 text-sm leading-5 text-gray-600">
            {order.statusDescription}
          </p>
        </div>
      </div>

      <div className="mt-5 border-t border-black/5 pt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-500">
          {config.deliveryLabel}
        </p>

        <p className="mt-1 text-base font-semibold text-gray-950">
          {order.estimatedDelivery}
        </p>

        <p className="mt-0.5 text-sm text-gray-600">
          {order.estimatedTime}
        </p>

        {isDelivered && (
          <p className="mt-3 text-xs font-medium text-amber-800">
            If you didn&lsquo;t receive this package, please report the delivery
            issue below.
          </p>
        )}
      </div>
    </section>
  );
}