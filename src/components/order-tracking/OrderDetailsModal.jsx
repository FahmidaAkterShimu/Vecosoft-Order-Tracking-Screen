"use client";

import { useEffect } from "react";
import { X, Package, Truck } from "lucide-react";
import Image from "next/image";

export default function OrderDetailsModal({
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-details-title"
    >
      <div className="w-full max-w-md rounded-t-3xl bg-white p-5 shadow-xl sm:rounded-2xl">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-gray-500">
              Order details
            </p>

            <h2
              id="order-details-title"
              className="mt-0.5 text-lg font-semibold text-gray-950"
            >
              #{order.id}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close order details"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[70vh] space-y-5 overflow-y-auto">
          {/* Product */}
          <section>
            <h3 className="mb-3 text-sm font-semibold text-gray-950">
              Product
            </h3>

            <div className="flex gap-3 rounded-xl bg-gray-50 p-3">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white">
                <Image
                  src={order.product.image}
                  alt={order.product.name}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                  {order.product.name}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Quantity: {order.product.quantity}
                </p>

                <p className="mt-1 text-sm font-medium text-gray-900">
                  {order.product.price}
                </p>
              </div>
            </div>
          </section>

          {/* Delivery information */}
          <section>
            <h3 className="mb-3 text-sm font-semibold text-gray-950">
              Delivery information
            </h3>

            <div className="space-y-3">
              <DetailRow
                icon={Truck}
                label="Current status"
                value={order.statusLabel}
              />

              <DetailRow
                icon={Package}
                label="Estimated delivery"
                value={`${order.estimatedDelivery} · ${order.estimatedTime}`}
              />
            </div>
          </section>

          {/* Order information */}
          <section className="border-t border-gray-100 pt-4">
            <h3 className="mb-3 text-sm font-semibold text-gray-950">
              Order information
            </h3>

            <div className="space-y-3">
              <InfoRow label="Order ID" value={`#${order.id}`} />

              <InfoRow
                label="Items"
                value={`${order.product.quantity} item`}
              />

              <InfoRow
                label="Product total"
                value={order.product.price}
              />
            </div>
          </section>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 min-h-11 w-full rounded-xl bg-gray-950 px-4 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          Done
        </button>
      </div>
    </div>
  );
}

function DetailRow({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-3">
      <div
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-50"
      >
        <Icon size={17} className="text-gray-500" />
      </div>

      <div className="min-w-0">
        <p className="text-xs text-gray-500">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-gray-900">
          {value}
        </p>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="text-right font-medium text-gray-900">
        {value}
      </span>
    </div>
  );
}