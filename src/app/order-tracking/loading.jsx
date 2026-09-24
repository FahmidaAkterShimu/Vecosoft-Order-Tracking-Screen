import { LoaderCircle } from "lucide-react";

export default function Loading() {
    return (
        <main
            className="flex min-h-dvh items-center justify-center bg-white px-4 py-10"
            aria-busy="true"
            aria-live="polite"
        >
            <div className="w-full max-w-md text-center">
                <div
                    aria-hidden="true"
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100"
                >
                    <LoaderCircle
                        size={30}
                        className="animate-spin text-gray-700"
                    />
                </div>

                <h1 className="mt-6 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                    Loading order details
                </h1>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500 sm:text-base">
                    Please wait while we load the latest information for your order.
                </p>

                <span className="sr-only">
                    Loading order details. Please wait.
                </span>
            </div>
        </main>
    );
}