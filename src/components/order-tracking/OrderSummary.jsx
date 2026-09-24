import { ChevronRight, Package } from "lucide-react";
import Image from "next/image";

export default function OrderSummary({ order, onViewDetails }) {
  return (
    <section
      aria-labelledby="order-summary-title"
      className="rounded-2xl border border-gray-200 bg-white p-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-gray-500">
            Order number
          </p>

          <h2
            id="order-summary-title"
            className="mt-0.5 text-sm font-semibold text-gray-950"
          >
            #{order.id}
          </h2>
        </div>

        <div
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50"
        >
          <Package size={18} className="text-gray-500" />
        </div>
      </div>

      <div className="my-4 h-px bg-gray-100" />

      <div className="flex gap-3">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={order.product.image}
            alt={order.product.name}
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-semibold text-gray-950">
            {order.product.name}
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            Quantity: {order.product.quantity}
          </p>

          <p className="mt-2 text-sm font-semibold text-gray-950">
            {order.product.price}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onViewDetails}
        className="mt-4 flex min-h-11 w-full items-center justify-between border-t border-gray-100 pt-4 text-left text-sm font-medium text-gray-900 transition hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
      >
        <span>View order details</span>

        <ChevronRight
          size={18}
          aria-hidden="true"
        />
      </button>
    </section>
  );
}