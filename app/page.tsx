
"use client";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import HeroCarousel, {
  type HeroImage,
} from "@/components/HeroCarousel";

import About from "@/components/About";
import Services from "@/components/Services";
import RecentWorks from "@/components/RecentWorks";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/* =========================================================
   HERO — 16 IMAGES / 4 CONCEPTS
   ========================================================= */

const heroImages: HeroImage[] = [
  /* ===================== CONCEPT 01 ===================== */

  {
    src: "/hero_wedding.jpg",
    alt: "GIF Wedding Film - Concept 01",
  },
  {
    src: "/gallery_1.jpg",
    alt: "GIF Wedding - Concept 01",
  },
  {
    src: "/gallery_2.jpg",
    alt: "GIF Wedding - Concept 01",
  },
  {
    src: "/gallery_3.jpg",
    alt: "GIF Wedding - Concept 01",
  },

  /* ===================== CONCEPT 02 ===================== */

  {
    src: "/hero_wedding_2.jpg",
    alt: "GIF Wedding Film - Concept 02",
  },
  {
    src: "/gallery_4.jpg",
    alt: "GIF Wedding - Concept 02",
  },
  {
    src: "/gallery_5.jpg",
    alt: "GIF Wedding - Concept 02",
  },
  {
    src: "/gallery_6.jpg",
    alt: "GIF Wedding - Concept 02",
  },

  /* ===================== CONCEPT 03 ===================== */

  {
    src: "/hero_wedding_3.jpg",
    alt: "GIF Wedding Film - Concept 03",
  },
  {
    src: "/gallery_7.jpg",
    alt: "GIF Wedding - Concept 03",
  },
  {
    src: "/gallery_8.jpg",
    alt: "GIF Wedding - Concept 03",
  },
  {
    src: "/gallery_9.jpg",
    alt: "GIF Wedding - Concept 03",
  },

  /* ===================== CONCEPT 04 ===================== */

  {
    src: "/hero_wedding_4.jpg",
    alt: "GIF Wedding Film - Concept 04",
  },
  {
    src: "/gallery_10.jpg",
    alt: "GIF Wedding - Concept 04",
  },
  {
    src: "/gallery_11.jpg",
    alt: "GIF Wedding - Concept 04",
  },
  {
    src: "/gallery_12.jpg",
    alt: "GIF Wedding - Concept 04",
  },
];

/* =========================================================
   HOME PAGE
   ========================================================= */

export default function Home() {
  return (
    <>
      {/* ===================================================
          NAVBAR
          =================================================== */}

      <Navbar />

      <main className="pt-20">
        {/* =================================================
            HERO
            ================================================= */}

        <section className="py-section text-center">
          {/* ---------- HERO TEXT ---------- */}

          <div className="px-4">
            <p
              className="
                text-xs
                font-semibold
                tracking-[0.2em]
                uppercase
                text-gray-500
                mb-6
              "
            >
              Welcome To
            </p>

            <h1
              className="
                font-serif
                text-4xl
                md:text-6xl
                text-gray-900
                mb-6
              "
            >
              GIF Wedding Film
            </h1>

            <h2
              className="
                font-serif
                text-3xl
                md:text-5xl
                italic
                text-gray-600
                mb-3
              "
            >
              Your Wedding Story, Beautifully Told
            </h2>

            <p
              className="
                font-serif
                text-sm
                md:text-base
                text-gray-500
                mb-8
              "
            >
              Câu chuyện tình yêu của bạn, được kể bằng những thước phim đầy
              cảm xúc.
            </p>

            {/* ---------- PORTFOLIO LINK ---------- */}

            <Link
              href="/works"
              className="
                inline-block
                text-brand
                text-sm
                font-semibold
                uppercase
                tracking-wider
                border-b-2
                border-brand
                pb-1
                hover:text-brand-hover
                hover:border-brand-hover
                transition-colors
                mb-12
              "
            >
              See our Portfolio
            </Link>
          </div>

          {/* =================================================
              HERO CAROUSEL
              ================================================= */}

          <div
            className="
              relative
              w-[calc(100%-32px)]
              sm:w-[calc(100%-48px)]
              lg:w-[calc(100%-64px)]
              max-w-[1180px]
              mx-auto
            "
          >
            <HeroCarousel images={heroImages} />
          </div>
        </section>

        {/* =================================================
            ABOUT
            ================================================= */}

        <About />

        {/* =================================================
            SERVICES
            ================================================= */}

        <Services />

        {/* =================================================
            RECENT WORKS
            ================================================= */}

        <RecentWorks />

        {/* =================================================
            GALLERY
            ================================================= */}

        <Gallery />

        {/* =================================================
            TESTIMONIALS
            ================================================= */}

        <Testimonials />

        {/* =================================================
            CONTACT
            ================================================= */}

        <Contact />
      </main>

      {/* ===================================================
          FOOTER
          =================================================== */}

      <Footer />
    </>
  );
}
