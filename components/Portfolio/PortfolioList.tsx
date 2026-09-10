
"use client";

import { useState } from "react";

import PortfolioCard, {
  type PortfolioItem,
} from "./PortfolioCard";

import PortfolioFilter, {
  type PortfolioCategory,
} from "./PortfolioFilter";

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Minh & An",
    description:
      "Một ngày cưới nhẹ nhàng, nơi từng ánh nhìn, nụ cười và cái nắm tay đều kể nên câu chuyện của hai người.",
    category: "wedding",
    image: "/hero_wedding.jpg",
    slug: "minh-and-an",
  },
  {
    id: "2",
    title: "Linh & Nam",
    description:
      "Những khoảnh khắc tự nhiên và chân thật được ghi lại trong ngày đặc biệt nhất của một tình yêu.",
    category: "wedding",
    image: "/gallery_4.jpg",
    slug: "linh-and-nam",
  },
  {
    id: "3",
    title: "Thảo & Khang",
    description:
      "Một hành trình trước ngày cưới, nơi tình yêu được kể bằng những khoảnh khắc giản dị giữa hai người.",
    category: "pre-wedding",
    image: "/hero_wedding_2.jpg",
    slug: "thao-and-khang",
  },
  {
    id: "4",
    title: "Mai & Huy",
    description:
      "Một câu chuyện tình yêu mang hơi thở của biển, của những buổi chiều và những khoảnh khắc rất riêng.",
    category: "pre-wedding",
    image: "/gallery_7.jpg",
    slug: "mai-and-huy",
  },
  {
    id: "5",
    title: "Vy & Long",
    description:
      "Không sắp đặt, không diễn. Chỉ đơn giản là những khoảnh khắc thật diễn ra trong ngày cưới.",
    category: "phong-su-cuoi",
    image: "/hero_wedding_3.jpg",
    slug: "vy-and-long",
  },
  {
    id: "6",
    title: "Trang & Phúc",
    description:
      "Từ những phút chuẩn bị đầu tiên cho đến khoảnh khắc cuối ngày, mọi cảm xúc đều được lưu giữ trọn vẹn.",
    category: "phong-su-cuoi",
    image: "/gallery_10.jpg",
    slug: "trang-and-phuc",
  },
];

export default function PortfolioList() {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategory>("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="portfolio-list-section">
      {/* FILTER */}

      <PortfolioFilter
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      {/* PORTFOLIO GRID */}

      <div className="portfolio-list">
        {filteredItems.map((item) => (
          <PortfolioCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

      {/* EMPTY */}

      {filteredItems.length === 0 && (
        <div className="portfolio-empty">
          <p>No stories found.</p>
        </div>
      )}
    </section>
  );
}

