import React from "react";

interface BrandLogoProps {
  mode?: "light" | "dark";
  variant?: "lockup" | "mark";
  className?: string;
}

export default function BrandLogo({
  mode = "light",
  variant = "lockup",
  className = "h-8 w-auto",
}: BrandLogoProps) {
  const isLight = mode === "light";
  const strokeColor = isLight ? "#FAF9F5" : "#091A14";
  const subColor = isLight ? "#C4D0CB" : "#5C6A64";

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 100 84"
        className={className}
        style={{ display: "block", flexShrink: 0 }}
        aria-hidden="true"
      >
        <path
          d="M 10 76 L 42 8 L 74 76"
          fill="none"
          stroke={strokeColor}
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="24"
          y1="48"
          x2="92"
          y2="48"
          stroke={strokeColor}
          strokeWidth="3.8"
          strokeLinecap="round"
        />
        <line
          x1="78"
          y1="34"
          x2="78"
          y2="62"
          stroke={strokeColor}
          strokeWidth="3.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 450 72"
      className={className}
      style={{ display: "block" }}
      aria-hidden="true"
    >
      <g transform="translate(2, 2) scale(0.92)">
        <path
          d="M 10 76 L 42 8 L 74 76"
          fill="none"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="24"
          y1="48"
          x2="92"
          y2="48"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="78"
          y1="34"
          x2="78"
          y2="62"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      <g transform="translate(94, 38)">
        <text
          fontFamily="'Sora', sans-serif"
          fontSize="26.5"
          fontWeight="800"
          fill={strokeColor}
          letterSpacing="0.6"
        >
          A+ DIGITAL SOLUTIONS
        </text>
        <text
          y="22"
          fontFamily="'Inter', sans-serif"
          fontSize="11.5"
          fontWeight="600"
          fill={subColor}
          letterSpacing="3.6"
        >
          STRATEGY · DESIGN · TECHNOLOGY
        </text>
      </g>
    </svg>
  );
}

