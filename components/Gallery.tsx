"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const moments = [
{
number: "01",
title: "THE FIRST LOOK",
description:
"Khoảnh khắc đầu tiên hai người nhìn thấy nhau trong một ngày thật đặc biệt.",
src: "/hero_wedding.jpg",
alt: "GIF Wedding - The First Look",
align: "left",
},
{
number: "02",
title: "THE TOUCH",
description:
"Có những điều không cần nói thành lời, chỉ một cái nắm tay cũng đủ.",
src: "/gallery_1.jpg",
alt: "GIF Wedding - The Touch",
align: "right",
},
{
number: "03",
title: "THE LAUGH",
description:
"Những khoảnh khắc đẹp nhất thường chẳng được sắp đặt.",
src: "/gallery_2.jpg",
alt: "GIF Wedding - The Laugh",
align: "left",
},
{
number: "04",
title: "THE VOW",
description:
"Một lời hứa cho những ngày phía trước, được lưu giữ qua từng khung hình.",
src: "/gallery_3.jpg",
alt: "GIF Wedding - The Vow",
align: "right",
},
{
number: "05",
title: "THE CELEBRATION",
description:
"Và rồi, câu chuyện ấy trở thành một kỷ niệm để nhớ mãi.",
src: "/hero_wedding.jpg",
alt: "GIF Wedding - The Celebration",
align: "left",
},
];

export default function Gallery() {
const [visibleItems, setVisibleItems] = useState<number[]>([]);
const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

useEffect(() => {
const observers: IntersectionObserver[] = [];


itemRefs.current.forEach((element, index) => {
  if (!element) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisibleItems((prev) =>
          prev.includes(index) ? prev : [...prev, index]
        );

        observer.unobserve(element);
      }
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(element);
  observers.push(observer);
});

return () => {
  observers.forEach((observer) => observer.disconnect());
};


}, []);

return ( <section
   className="bg-white py-24 lg:py-36 section overflow-hidden"
   id="gallery"
 >
{/* ==================== HEADER ==================== */} <div className="container mx-auto px-4 md:px-8"> <div className="text-center mb-24 lg:mb-32">


      <p className="sectionLabel text-secondary font-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
        Moments That Matter
      </p>

      <h2 className="sectionTitle text-[40px] md:text-[58px] font-serif font-light leading-[1.08] text-on-surface">
        Những Khoảnh Khắc
        <br />
        <em className="italic text-gold">
          Đáng Nhớ
        </em>
      </h2>

      <p className="max-w-[520px] mx-auto mt-7 font-sans text-[15px] font-light leading-[1.9] text-[#6b6b6b]">
        Một ngày cưới được tạo nên từ những khoảnh khắc rất nhỏ —
        những điều chúng tôi luôn muốn lưu giữ lại cho bạn.
      </p>

    </div>
  </div>

  {/* ==================== MOMENTS ==================== */}
  <div className="container mx-auto px-4 md:px-8">
    <div className="space-y-28 md:space-y-40 lg:space-y-48">

      {moments.map((moment, index) => {
        const isVisible = visibleItems.includes(index);
        const isRight = moment.align === "right";

        return (
          <div
            key={moment.number}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            className={`
              relative
              flex
              ${
                isRight
                  ? "justify-end"
                  : "justify-start"
              }
            `}
          >

            <div
              className={`
                w-full
                md:w-[78%]
                lg:w-[68%]
                transition-all
                duration-[1200ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }
              `}
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden aspect-[16/10] group">

                <Image
                  src={moment.src}
                  alt={moment.alt}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-[1400ms]
                    ease-out
                    group-hover:scale-[1.035]
                  "
                  sizes="(max-width: 768px) 100vw, 68vw"
                />

                {/* Subtle hover overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    group-hover:bg-black/[0.06]
                    transition-colors
                    duration-700
                  "
                />

              </div>

              {/* TEXT */}
              <div
                className={`
                  mt-6
                  flex
                  ${
                    isRight
                      ? "justify-end"
                      : "justify-start"
                  }
                `}
              >
                <div
                  className={`
                    max-w-[420px]
                    ${
                      isRight
                        ? "text-right"
                        : "text-left"
                    }
                  `}
                >

                  <div className="flex items-center gap-4 mb-3">

                    {!isRight && (
                      <span className="font-ui text-[10px] tracking-[0.2em] text-gold">
                        {moment.number}
                      </span>
                    )}

                    <span className="font-ui text-[11px] font-medium tracking-[0.22em] text-secondary">
                      {moment.title}
                    </span>

                    {isRight && (
                      <span className="font-ui text-[10px] tracking-[0.2em] text-gold">
                        {moment.number}
                      </span>
                    )}

                  </div>

                  <p className="font-sans text-[14px] md:text-[15px] font-light leading-[1.8] text-[#6b6b6b]">
                    {moment.description}
                  </p>

                </div>
              </div>

            </div>

          </div>
        );
      })}

    </div>
  </div>

  {/* ==================== ENDING ==================== */}
  <div className="container mx-auto px-4 md:px-8">

    <div className="text-center mt-32 lg:mt-44">

      <p className="font-serif text-[28px] md:text-[38px] font-light leading-[1.3] text-on-surface">
        Every love story
        <br />
        deserves to be
        <br />
        <em className="italic text-gold">
          remembered.
        </em>
      </p>

      <a
        href="/works"
        className="
          inline-block
          mt-10
          font-ui
          text-[11px]
          font-semibold
          tracking-[0.2em]
          uppercase
          text-on-surface
          border-b
          border-on-surface
          pb-2
          hover:text-gold
          hover:border-gold
          transition-colors
          duration-500
        "
      >
        View All Our Works
      </a>

    </div>

  </div>
</section>

);
}
