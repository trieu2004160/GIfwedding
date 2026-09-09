import Navbar from "@/components/Navbar";
import HeroCarousel, {
  type HeroImage,
} from "@/components/HeroCarousel";

import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const heroImages: HeroImage[] = [
  // ==================== CONCEPT 1 ====================
  {
    src: "/hero_wedding.jpg",
    alt: "GIF Wedding Film - Concept 1",
  },
  {
    src: "/gallery_1.jpg",
    alt: "GIF Wedding - Concept 1",
  },
  {
    src: "/gallery_2.jpg",
    alt: "GIF Wedding - Concept 1",
  },
  {
    src: "/gallery_3.jpg",
    alt: "GIF Wedding - Concept 1",
  },

  // ==================== CONCEPT 2 ====================
  {
    src: "/hero_05.jpg",
    alt: "GIF Wedding Film - Concept 2",
  },
  {
    src: "/hero_06.jpg",
    alt: "GIF Wedding - Concept 2",
  },
  {
    src: "/hero_07.jpg",
    alt: "GIF Wedding - Concept 2",
  },
  {
    src: "/hero_08.jpg",
    alt: "GIF Wedding - Concept 2",
  },

  // ==================== CONCEPT 3 ====================
  {
    src: "/hero_09.jpg",
    alt: "GIF Wedding Film - Concept 3",
  },
  {
    src: "/hero_10.jpg",
    alt: "GIF Wedding - Concept 3",
  },
  {
    src: "/hero_11.jpg",
    alt: "GIF Wedding - Concept 3",
  },
  {
    src: "/hero_12.jpg",
    alt: "GIF Wedding - Concept 3",
  },

  // ==================== CONCEPT 4 ====================
  {
    src: "/hero_13.jpg",
    alt: "GIF Wedding Film - Concept 4",
  },
  {
    src: "/hero_14.jpg",
    alt: "GIF Wedding - Concept 4",
  },
  {
    src: "/hero_15.jpg",
    alt: "GIF Wedding - Concept 4",
  },
  {
    src: "/hero_16.jpg",
    alt: "GIF Wedding - Concept 4",
  },
];

export default function Home() {
  return (
    <>
      {/* ==================== NAVBAR ==================== */}
      <Navbar />

      <main className="pt-20">

        {/* ==================== HERO ==================== */}
        <section className="py-section text-center">

          <div className="px-4">

            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-6">
              Welcome To
            </p>

            <h1 className="font-serif text-4xl md:text-6xl text-gray-900 mb-6">
              GIF Wedding Film
            </h1>

            <h2 className="font-serif text-3xl md:text-5xl italic text-gray-600 mb-8">
              Your Wedding Story, Beautifully Told
            </h2>

            <a
              className="inline-block text-brand text-sm font-semibold uppercase tracking-wider border-b-2 border-brand pb-1 hover:text-brand-hover hover:border-brand-hover transition-colors mb-12"
              href="#gallery"
            >
              See our Portfolio
            </a>

          </div>

          {/* HERO CAROUSEL */}
          <div className="relative w-full max-w-[1280px] mx-auto px-2 md:px-4">
            <HeroCarousel images={heroImages} />
          </div>

        </section>

        {/* ==================== ABOUT ==================== */}
        <About />

        {/* ==================== SERVICES ==================== */}
        <Services />

        {/* ==================== GALLERY ==================== */}
        <Gallery />

        {/* ==================== TESTIMONIALS ==================== */}
        <Testimonials />

        {/* ==================== CONTACT ==================== */}
        <Contact />

      </main>

      {/* ==================== FOOTER ==================== */}
      <Footer />
    </>
  );
}