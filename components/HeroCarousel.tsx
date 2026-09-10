
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
  const [isAnimating, setIsAnimating] = useState(false);

  // 16 ảnh → 4 concept → mỗi concept 4 ảnh
  const totalConcepts = Math.ceil(images.length / 4);

  // ─── Auto change concept ───────────────────────────────────────────────
  useEffect(() => {
    if (totalConcepts <= 1) return;

    const timer = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setConceptIndex((prev) => (prev + 1) % totalConcepts);
        setIsAnimating(false);
      }, 700);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalConcepts]);

  // ─── Current 4 images ─────────────────────────────────────────────────
  const startIndex = conceptIndex * 4;

  const visibleImages = Array.from({ length: 4 }, (_, index) => {
    return images[(startIndex + index) % images.length];
  });

  return (
    <div className="relative w-full overflow-visible">
      {/* ── Image concept ─────────────────────────────────────────────── */}
      <div
        className={`hero-concept ${
          isAnimating ? "hero-concept-exit" : "hero-concept-enter"
        }`}
      >
        {visibleImages.map((image, index) => {
          // Ảnh 1 & 3 thấp hơn
          const isOffset = index === 0 || index === 2;

          return (
            <div
              key={`${conceptIndex}-${index}`}
              className={`hero-image-item ${
                isOffset ? "hero-image-offset" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="hero-image"
              />
            </div>
          );
        })}
      </div>

      {/* ── Concept indicators ────────────────────────────────────────── */}
      {totalConcepts > 1 && (
        <div className="hero-dots">
          {Array.from({ length: totalConcepts }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`View concept ${index + 1}`}
              onClick={() => {
                if (index === conceptIndex || isAnimating) return;

                setIsAnimating(true);

                setTimeout(() => {
                  setConceptIndex(index);
                  setIsAnimating(false);
                }, 700);
              }}
              className={`hero-dot ${
                index === conceptIndex ? "hero-dot-active" : ""
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

