"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import type { PortfolioItem } from "./portfolioData";

interface PortfolioDetailProps {
  item: PortfolioItem;
}

export default function PortfolioDetail({
  item,
}: PortfolioDetailProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categoryLabel =
    item.category === "wedding"
      ? "Wedding"
      : item.category === "pre-wedding"
      ? "Pre-Wedding"
      : "Phóng Sự Cưới";

  // =========================================================
  // LIGHTBOX - KEYBOARD
  // =========================================================

  useEffect(() => {
    if (selectedImage === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedImage((current) => {
          if (current === null) return 0;

          return (current + 1) % item.images.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setSelectedImage((current) => {
          if (current === null) return 0;

          return (
            (current - 1 + item.images.length) %
            item.images.length
          );
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, item.images.length]);

  // =========================================================
  // OPEN / CLOSE
  // =========================================================

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // =========================================================
  // PREVIOUS / NEXT
  // =========================================================

  const showPrevious = () => {
    setSelectedImage((current) => {
      if (current === null) return 0;

      return (
        (current - 1 + item.images.length) %
        item.images.length
      );
    });
  };

  const showNext = () => {
    setSelectedImage((current) => {
      if (current === null) return 0;

      return (current + 1) % item.images.length;
    });
  };

  return (
    <>
      {/* =====================================================
          ALBUM DETAIL
      ===================================================== */}

      <section className="portfolio-detail">
        <div className="portfolio-detail-inner">

          {/* =================================================
              LEFT - INFORMATION
          ================================================= */}

          <div className="portfolio-detail-info">

            <Link
              href="/works"
              className="portfolio-detail-back"
            >
              ← Back to Portfolio
            </Link>

            <p className="portfolio-detail-category">
              {categoryLabel}
            </p>

            <h1 className="portfolio-detail-title">
              {item.title}
            </h1>

            <p className="portfolio-detail-description">
              {item.description}
            </p>

            {/* Location */}

            {item.location && (
              <div className="portfolio-detail-meta">
                <span>Location</span>

                <strong>
                  {item.location}
                </strong>
              </div>
            )}

            {/* Year */}

            {item.date && (
              <div className="portfolio-detail-meta">
                <span>Year</span>

                <strong>
                  {item.date}
                </strong>
              </div>
            )}

          </div>

          {/* =================================================
              RIGHT - ALBUM GRID
          ================================================= */}

          <div className="portfolio-detail-gallery">

            {item.images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                className="portfolio-detail-image-button"
                onClick={() => openImage(index)}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${item.title} - ${index + 1}`}
                  className="portfolio-detail-image"
                />
              </button>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selectedImage !== null && (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} image viewer`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >

          {/* =================================================
              CLOSE
          ================================================= */}

          <button
            type="button"
            className="portfolio-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image viewer"
          >
            ×
          </button>

          {/* =================================================
              PREVIOUS
          ================================================= */}

          <button
            type="button"
            className="portfolio-lightbox-prev"
            onClick={showPrevious}
            aria-label="Previous image"
          >
            ←
          </button>

          {/* =================================================
              IMAGE
          ================================================= */}

          <div className="portfolio-lightbox-content">

            <img
              key={item.images[selectedImage]}
              src={item.images[selectedImage]}
              alt={`${item.title} - ${selectedImage + 1}`}
              className="portfolio-lightbox-image"
            />

            <p className="portfolio-lightbox-counter">
              {selectedImage + 1} / {item.images.length}
            </p>

          </div>

          {/* =================================================
              NEXT
          ================================================= */}

          <button
            type="button"
            className="portfolio-lightbox-next"
            onClick={showNext}
            aria-label="Next image"
          >
            →
          </button>

        </div>
      )}
    </>
  );
}