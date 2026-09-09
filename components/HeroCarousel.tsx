"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────
export interface HeroImage {
  src: string;
  alt: string;
}

interface HeroCarouselProps {
  images: HeroImage[];
}

// ─── Component ────────────────────────────────────────────────────────────
export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const canNav = images.length > 4;

  function navigate(dir: "left" | "right") {
    if (animating || !canNav) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setStartIndex((prev) =>
        dir === "right"
          ? (prev + 1) % images.length
          : (prev - 1 + images.length) % images.length,
      );
      setAnimating(false);
    }, 350);
  }

  const visible = [0, 1, 2, 3].map(
    (i) => images[(startIndex + i) % images.length],
  );

  return (
    <div className="relative w-full">
      {/* ── Image strip ──────────────────────────────────────────────── */}
      <div
        className="flex items-start gap-2"
        style={{
          opacity: animating ? 0 : 1,
          transform: animating
            ? `translateX(${direction === "right" ? "-16px" : "16px"})`
            : "translateX(0)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}
      >
        {visible.map((img, i) => {
          // Col 0 & 2 thụt xuống tạo stagger effect (giống theflab.co)
          const isOffset = i % 2 === 0;
          return (
            <div
              key={i}
              className={`flex-1 min-w-0 overflow-hidden cursor-pointer h-[220px] sm:h-[260px] md:h-[300px] lg:h-[360px] ${
                isOffset ? "mt-8 sm:mt-10 md:mt-12" : "mt-0"
              }`}
            >
              <img
                alt={img.alt}
                src={img.src}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
          );
        })}
      </div>

      {/* ◀ Left arrow */}
      <button
        aria-label="Previous"
        onClick={() => navigate("left")}
        disabled={!canNav}
        className={`
          absolute left-[-18px] top-1/2 -translate-y-1/2 z-10
          w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm
          flex items-center justify-center
          transition-colors duration-200
          hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed
        `}
      >
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            d="M15 18l-6-6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* ▶ Right arrow */}
      <button
        aria-label="Next"
        onClick={() => navigate("right")}
        disabled={!canNav}
        className={`
          absolute right-[-18px] top-1/2 -translate-y-1/2 z-10
          w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm
          flex items-center justify-center
          transition-colors duration-200
          hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed
        `}
      >
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            d="M9 18l6-6-6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dot indicators — chỉ hiện khi có hơn 4 ảnh */}
      {images.length > 4 && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!animating) setStartIndex(i);
              }}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 rounded-full border-none transition-all duration-300 ${
                i === startIndex ? "w-4 bg-brand" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
