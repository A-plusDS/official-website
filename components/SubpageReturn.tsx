"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SubpageReturnProps {
  theme?: "dark" | "light";
}

export default function SubpageReturn({ theme = "dark" }: SubpageReturnProps) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const pillClass =
    theme === "light"
      ? "return-pill return-pill-light"
      : "return-pill return-pill-dark";

  return (
    <div className="subpage-return-row flex space-x-2">
      <button type="button" onClick={handleBack} className={pillClass}>
        ← Back
      </button>
      <Link href="/" className={pillClass}>
        Home
      </Link>
    </div>
  );
}

