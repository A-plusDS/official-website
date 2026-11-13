"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#091A14] flex flex-col justify-between">
      <Header />
      <div className="container-wide py-20 text-center flex flex-col items-center justify-center flex-grow">
        <small className="block text-[11px] font-bold tracking-[2px] uppercase text-[#9FB0A8] mb-2">
          500 · Application Error
        </small>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#FAF9F5] mb-4">
          Something went wrong.
        </h1>
        <p className="text-sm text-[#B7C5BF] max-w-[480px] mx-auto mb-8 leading-relaxed">
          An unexpected error occurred while rendering this page.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            type="button"
            onClick={() => reset()}
            className="btn-pill-light cursor-pointer"
          >
            Try Again ↻
          </button>
          <Link
            href="/"
            className="btn-pill-dark"
            style={{ background: "rgba(250,249,245,0.08)", border: "1px solid rgba(250,249,245,0.2)", color: "#FAF9F5" }}
          >
            ← Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

