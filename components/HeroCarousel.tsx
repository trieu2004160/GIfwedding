"use client";

import { useEffect, useState } from "react";

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
  const [conceptIndex, setConceptIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Có 4 concept, mỗi concept 4 ảnh
  const totalConcepts = Math.ceil(images.length / 4);

  // ─── Auto change concept ───────────────────────────────────────────────
  useEffect(() => {
    if (images.length <= 4) return;

    const interval = setInterval(() => {
      setAnimating(true);

      setTimeout(() => {
        setConceptIndex((prev) => (prev + 1) % totalConcepts);
        setAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, totalConcepts]);

  // ─── Lấy đúng 4 ảnh của concept hiện tại ──────────────────────────────
  const startIndex = conceptIndex * 4;

  const visible = images.slice(startIndex, startIndex + 4);

  return (
    <div className="relative w-full">

      {/* ── Image strip ──────────────────────────────────────────────── */}
      <div
        className="flex items-start gap-2 md:gap-3"
        style={{
          opacity: animating ? 0 : 1,
          transform: animating
            ? "translateY(12px)"
            : "translateY(0)",
          transition:
            "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        {visible.map((img, i) => {

          // Ảnh 1 & 3 thấp xuống
          // Ảnh 2 & 4 cao hơn
          const isOffset = i % 2 === 0;

          return (
            <div
              key={`${conceptIndex}-${i}`}
              className={`
                flex-1
                min-w-0
                overflow-hidden
                cursor-pointer
                h-[220px]
                sm:h-[260px]
                md:h-[300px]
                lg:h-[360px]
                ${
                  isOffset
                    ? "mt-8 sm:mt-10 md:mt-12"
                    : "mt-0"
                }
              `}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.04]
                "
              />
            </div>
          );
        })}
      </div>

      {/* ── Concept indicators ───────────────────────────────────────── */}
      {totalConcepts > 1 && (
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: totalConcepts }).map((_, i) => (
            <button
              key={i}
              aria-label={`Concept ${i + 1}`}
              onClick={() => {
                if (animating || i === conceptIndex) return;

                setAnimating(true);

                setTimeout(() => {
                  setConceptIndex(i);
                  setAnimating(false);
                }, 500);
              }}
              className={`
                h-1.5
                rounded-full
                border-none
                transition-all
                duration-300
                ${
                  i === conceptIndex
                    ? "w-6 bg-brand"
                    : "w-1.5 bg-gray-300"
                }
              `}
            />
          ))}
        </div>
      )}

    </div>
  );
}