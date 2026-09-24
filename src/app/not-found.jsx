"use client";

import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

export default function NotFound() {
  function handleGoBack() {
    window.history.back();
  }

  return (<main className="flex min-h-dvh items-center justify-center bg-white px-4 py-10"> <div className="w-full max-w-md text-center">
    {/* Icon */} <div
      aria-hidden="true"
      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100"
    > <SearchX size={30} className="text-gray-500" /> </div>

    {/* 404 */}
    <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-gray-500">
      404
    </p>

    {/* Heading */}
    <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
      Page not found
    </h1>

    {/* Description */}
    <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500 sm:text-base">
      Sorry, we couldn&apos;t find the page you&apos;re looking for. It
      may have been moved, removed, or the link may be incorrect.
    </p>

    {/* Actions */}
    <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:justify-center">
      <Link
        href="/"
        className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        aria-label="Back to home"
      >
        <Home size={17} aria-hidden="true" />
        Back to Home
      </Link>

      <button
        type="button"
        onClick={handleGoBack}
        className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 text-sm font-medium text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        aria-label="Go back to the previous page"
      >
        <ArrowLeft size={17} aria-hidden="true" />
        Go Back
      </button>
    </div>
  </div>
  </main>
  );
}
