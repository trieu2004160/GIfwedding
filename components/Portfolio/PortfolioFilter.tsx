
"use client";

export type PortfolioCategory =
  | "all"
  | "wedding"
  | "pre-wedding"
  | "phong-su-cuoi";

interface PortfolioFilterProps {
  activeCategory: PortfolioCategory;
  onChange: (category: PortfolioCategory) => void;
}

const filters: {
  label: string;
  value: PortfolioCategory;
}[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Wedding",
    value: "wedding",
  },
  {
    label: "Pre-Wedding",
    value: "pre-wedding",
  },
  {
    label: "Phóng Sự Cưới",
    value: "phong-su-cuoi",
  },
];

export default function PortfolioFilter({
  activeCategory,
  onChange,
}: PortfolioFilterProps) {
  return (
    <div className="portfolio-filter">
      <div className="portfolio-filter-inner">
        {filters.map((filter) => {
          const isActive = activeCategory === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => onChange(filter.value)}
              className={`portfolio-filter-button ${
                isActive ? "portfolio-filter-button-active" : ""
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
