import {
  Check,
  Circle,
  TriangleAlert,
} from "lucide-react";

const statusStyles = {
  completed: {
    icon: Check,
    iconWrapper: "bg-gray-950 text-white",
    title: "text-gray-950",
  },

  current: {
    icon: Circle,
    iconWrapper: "border-2 border-gray-950 bg-white text-gray-950",
    title: "text-gray-950",
  },

  delayed: {
    icon: TriangleAlert,
    iconWrapper: "bg-amber-500 text-white",
    title: "text-amber-900",
  },

  pending: {
    icon: Circle,
    iconWrapper: "border border-gray-300 bg-white text-gray-300",
    title: "text-gray-400",
  },
};

export default function TimelineItem({ event, isLast }) {
  const config = statusStyles[event.status];
  const Icon = config.icon;

  const isCurrent =
    event.status === "current" || event.status === "delayed";

  return (
    <div
      className="flex gap-3"
      aria-current={isCurrent ? "step" : undefined}
    >
      <div className="flex w-7 shrink-0 flex-col items-center">
        <div
          aria-hidden="true"
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${config.iconWrapper}`}
        >
          <Icon size={13} strokeWidth={2.5} />
        </div>

        {!isLast && (
          <div
            aria-hidden="true"
            className="my-1 min-h-10 w-px bg-gray-200"
          />
        )}
      </div>

      <div className={`min-w-0 ${isLast ? "pb-0" : "pb-5"} pt-0.5`}>
        <h3 className={`text-sm font-semibold leading-5 ${config.title}`}>
          {event.title}
        </h3>

        <p className="mt-0.5 text-xs leading-5 text-gray-500">
          {event.description}
        </p>

        {event.timestamp && (
          <time className="mt-1 block text-xs font-medium text-gray-400">
            {event.timestamp}
          </time>
        )}
      </div>
    </div>
  );
}