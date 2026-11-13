import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubpageReturn from "@/components/SubpageReturn";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#091A14] flex flex-col justify-between">
      <Header />
      <div className="container-wide py-20 text-center flex flex-col items-center justify-center flex-grow">
        <SubpageReturn theme="dark" />
        <div className="mt-8">
          <small className="block text-[11px] font-bold tracking-[2px] uppercase text-[#9FB0A8] mb-2">
            404 · Page Not Found
          </small>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#FAF9F5] mb-4">
            The page you seek isn&apos;t here.
          </h1>
          <p className="text-sm text-[#B7C5BF] max-w-[480px] mx-auto mb-8 leading-relaxed">
            The requested page could not be located. Explore our studio work or return to the home page.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/" className="btn-pill-light">
              ← Return Home
            </Link>
            <Link
              href="/case-studies"
              className="btn-pill-dark"
              style={{ background: "rgba(250,249,245,0.08)", border: "1px solid rgba(250,249,245,0.2)", color: "#FAF9F5" }}
            >
              Explore Case Studies ↗
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

