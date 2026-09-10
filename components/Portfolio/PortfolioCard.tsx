
"use client";

import Link from "next/link";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: "wedding" | "pre-wedding" | "phong-su-cuoi";
  image: string;
  slug: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({
  item,
}: PortfolioCardProps) {
  const categoryLabel =
    item.category === "wedding"
      ? "Wedding"
      : item.category === "pre-wedding"
      ? "Pre-Wedding"
      : "Phóng Sự Cưới";

  return (
    <article className="portfolio-card">

      {/* Image */}
      <div className="portfolio-card-image-wrap">
        <Link
          href={`/works/${item.slug}`}
          className="portfolio-card-image-link"
        >
          <div
            className="portfolio-card-image"
            style={{
              backgroundImage: `url("${item.image}")`,
            }}
          />

          <div className="portfolio-card-image-overlay">
            <span>View Story</span>
            <span className="portfolio-card-arrow">
              ↗
            </span>
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="portfolio-card-content">

        <p className="portfolio-card-category">
          {categoryLabel}
        </p>

        <h2 className="portfolio-card-title">
          {item.title}
        </h2>

        <p className="portfolio-card-description">
          {item.description}
        </p>

        <Link
          href={`/works/${item.slug}`}
          className="portfolio-card-link"
        >
          View this story
          <span>→</span>
        </Link>

      </div>
    </article>
  );
}
