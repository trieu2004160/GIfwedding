"use client";

import { useEffect, useState } from "react";

const recentWorks = [
  [
    "/hero_wedding.jpg",
    "/gallery_1.jpg",
    "/gallery_2.jpg",
    "/gallery_3.jpg",
    "/hero_wedding.jpg",
    "/gallery_1.jpg",
    "/gallery_2.jpg",
    "/gallery_3.jpg",
  ],

  [
    "/hero_wedding.jpg",
    "/gallery_1.jpg",
    "/gallery_2.jpg",
    "/gallery_3.jpg",
    "/hero_wedding.jpg",
    "/gallery_1.jpg",
    "/gallery_2.jpg",
    "/gallery_3.jpg",
  ],

  [
    "/hero_wedding.jpg",
    "/gallery_1.jpg",
    "/gallery_2.jpg",
    "/gallery_3.jpg",
    "/hero_wedding.jpg",
    "/gallery_1.jpg",
    "/gallery_2.jpg",
    "/gallery_3.jpg",
  ],

  [
    "/hero_wedding.jpg",
    "/gallery_1.jpg",
    "/gallery_2.jpg",
    "/gallery_3.jpg",
    "/hero_wedding.jpg",
    "/gallery_1.jpg",
    "/gallery_2.jpg",
    "/gallery_3.jpg",
  ],
];

export default function RecentWorks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="works" className="works-section">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="recent-works-header">

        <p className="recent-works-label">
          Recent Work
        </p>

        <h2 className="recent-works-title">
          Những Câu Chuyện
          <br />

          <em>
            Chúng Tôi Đã Kể
          </em>
        </h2>

      </div>


      {/* =====================================================
          DIAGONAL IMAGES
          ===================================================== */}

      <div className="samples-container">

        {recentWorks.map((row, rowIndex) => {

          const movement =
            rowIndex % 2 === 0
              ? -(scrollY * 0.08)
              : scrollY * 0.08;

          return (
            <div
              key={rowIndex}
              className="sample-set"
              style={{
                transform: `translate3d(${movement}px, 0, 0)`,
              }}
            >

              {row.map((src, imageIndex) => (
                <div
                  key={`${rowIndex}-${imageIndex}`}
                  className="work-sample"
                  style={{
                    backgroundImage: `url("${src}")`,
                  }}
                />
              ))}

            </div>
          );
        })}

      </div>


      {/* =====================================================
          CTA
          ===================================================== */}

      <div className="works-cta">

        <div className="works-cta-card">

          <p className="works-cta-text">
            Mỗi đám cưới là một câu chuyện riêng.
          </p>

          <a
            href="/works"
            className="works-cta-link"
          >
            View all our Works
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}