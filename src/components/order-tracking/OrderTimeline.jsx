import TimelineItem from "./TimelineItem";

export default function OrderTimeline({ timeline }) {
  return (
    <section aria-labelledby="delivery-progress-title">
      <div className="mb-4">
        <h2
          id="delivery-progress-title"
          className="text-base font-semibold text-gray-950"
        >
          Delivery progress
        </h2>

        <p className="mt-1 text-sm leading-5 text-gray-500">
          Follow your package from order to delivery.
        </p>
      </div>

      <div>
        {timeline.map((event, index) => (
          <TimelineItem
            key={event.id}
            event={event}
            isLast={index === timeline.length - 1}
          />
        ))}
      </div>
    </section>
  );
}