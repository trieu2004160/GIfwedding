import HeroCarousel, { type HeroImage } from "@/components/HeroCarousel";

// ─── Dữ liệu ảnh hero ─────────────────────────────────────────────────────
// TODO: thay bằng API call khi có backend
const heroImages: HeroImage[] = [
  {
    src: "https://cdn.prod.website-files.com/6576918dabe35789fb8cc666/657763119b0e865bf29bb07a_Aniqua-Chris-03.jpeg",
    alt: "Aniqua & Chris Wedding",
  },
  {
    src: "https://cdn.prod.website-files.com/6576918dabe35789fb8cc666/65776219b7d42c9d3f198ae3_Mai-Nas-01.jpeg",
    alt: "Mai & Nas Wedding",
  },
  { src: "/gallery_1.jpg",    alt: "Wedding floral arrangement" },
  { src: "/gallery_2.jpg",    alt: "Bride and groom portrait" },
  { src: "/gallery_3.jpg",    alt: "Wedding venue decoration" },
  { src: "/hero_wedding.jpg", alt: "Wedding couple celebration" },
];

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <a
                className="font-serif text-3xl font-bold tracking-tighter text-brand"
                href="#"
              >
                F<span className="text-xl">L</span>
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                className="text-gray-500 hover:text-brand transition-colors text-sm uppercase tracking-widest font-medium"
                href="#"
              >
                Portfolio
              </a>
              <a
                className="text-gray-500 hover:text-brand transition-colors text-sm uppercase tracking-widest font-medium"
                href="#"
              >
                Services
              </a>
              <a
                className="text-gray-500 hover:text-brand transition-colors text-sm uppercase tracking-widest font-medium"
                href="#"
              >
                About
              </a>
              <a
                className="text-gray-500 hover:text-brand transition-colors text-sm uppercase tracking-widest font-medium"
                href="#"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button className="text-gray-500 hover:text-brand focus:outline-none p-2">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* ── Hero Section ── */}
        <section className="py-section text-center">

          {/* Centred text block */}
          <div className="px-4">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-6">
              Welcome To
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-gray-900 mb-6">
              GIF Wedding Film
            </h1>
            <h2 className="font-serif text-3xl md:text-5xl italic text-gray-600 mb-8">
              <span className="not-italic">your</span> Wedding &amp; Events Planner
            </h2>
            <a
              className="inline-block text-brand text-sm font-semibold uppercase tracking-wider border-b-2 border-brand pb-1 hover:text-brand-hover hover:border-brand-hover transition-colors mb-12"
              href="#"
            >
              See our Portfolio
            </a>
          </div>

          {/* Carousel — max-width như theflab.co */}
          <div className="relative max-w-[860px] mx-auto px-8">
            <HeroCarousel images={heroImages} />
          </div>

          {/* Get Quote — fixed to right edge of viewport */}
          <div
            className="hidden lg:flex flex-col items-center"
            style={{
              position: "fixed",
              right: "32px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 40,
            }}
          >
            <a
              href="#contact"
              className="bg-brand text-white rounded-full px-6 py-3 text-sm font-medium shadow-lg hover:bg-brand-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Quote
            </a>
            <div className="mt-2 text-gray-400 text-sm italic relative">
              Click
              <svg
                className="absolute -right-5 top-1 w-6 h-6 text-gray-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              </svg>
            </div>
          </div>

        </section>


        <section className="py-section px-4 text-center bg-gray-50/50">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-6">
              Introduction
            </p>
            <p className="font-serif text-xl md:text-2xl text-gray-800 leading-relaxed text-balance">
              Gif is a creative boutique consultancy specializing in bespoke,
              high-end services. We are dedicated to the end-to-end planning,
              management, design, and production of exquisite weddings and
              events, both locally and worldwide.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-4xl mx-auto">
            <div className="flex-1 flex flex-col items-center max-w-xs">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-md">
                <img
                  alt="Our Team"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT4bue-d7wp0kh9AibkGvgi0o8dnETzkL1xXhEo_yeJg3VuBRIwEL3g9QniMUs6W9rF0jZVom1yClXA-eUYYZ6LKwMMCAf7bS_f5whqfNGw9q4Pv7Swlq1AIx0Enypf6QdHX7c-0NKSlQMunXTtI3iVXEOI4tJ_1PPJf_pdmOy6qMb9w-7_dFra3EJdnal9jgIBZ1pNpjGFTuWmKNPubRh1Wxpx6xvMScTweFBT_JWXDescfofg9G6XA"
                />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-3">
                Our Incredible Team
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Behind each &amp; every beautiful moment is our talented and
                passionate team. We all have unique perspectives &amp;
                expertise.
              </p>
              <a
                className="text-brand text-xs font-semibold uppercase tracking-wider hover:underline"
                href="#"
              >
                Learn more
              </a>
            </div>

            <div className="flex-1 flex flex-col items-center max-w-xs">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-md opacity-70">
                <img
                  alt="Global Taste Local Expertise"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMs_LZAMAm4l6SzX10_-cmeoi4YbyhlEs0SPNdJao0E08xwvkHvEN0XxuU3by8PUcvzABksPEzwQAC-t0FVOROo-kqiWRRpfPUD7ZYjGIEfbMj54FjKV1BEGaIgPQRVsqEy9SLf-6OZL9BkGmZ6AAFaneIR-KkDA5OJRFVj6_-yRo5gNdj9iI3CqFhf-LtMmisuWA9Z8tIaHYOiLgn2E8AbmFkuAoJV-yT_qyF8dYvOdO08yZKFBwkzA"
                />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-3">
                Global Taste,
                <br />
                Local Expertise
              </h3>
              <p className="text-sm text-gray-400 mb-4 italic">
                Our vision is to create memories that last for a lifetime while
                staying relevant to cultural and current trends.
              </p>
              <a
                className="text-gray-400 text-xs font-semibold uppercase tracking-wider hover:text-brand transition-colors"
                href="#"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 overflow-hidden relative">
          <div className="text-center absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <h2 className="font-serif text-5xl md:text-7xl text-white drop-shadow-lg mix-blend-overlay">
              Recent
              <br />
              <span className="italic font-light">Works</span>
            </h2>
          </div>
          <div className="diagonal-grid-container h-[600px] bg-gray-900">
            <div className="diagonal-grid-inner h-[120%] -mt-[10%] w-[110%] -ml-[5%] grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVsoLaiTQ0CIEBDLYL3ZJJkUBnUHX0-M1rgO7IGsiqS9RqkPkBbNTV2M22Mvkrzzb8ImS6UJb5_xPLMqWyrYc-vmLyCh_2WCeh_HsE3dq0K7ONdEQ3lfy-rNqMuDgj1WKB6C4T6fsVxeffNrq_BxAhcVgFGIlA7xBhC44dl5ZaertvBYsRb0dcWAuT3XeYj13UYcAi3K20D8H-IGLfTWV8zaLO6ZFtaev-aiIZoQqKOab69tlrHj3T6w"
              />
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity row-span-2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKAF0LC88CUSBg2RiUqvaJ5m83Wg2wz6iWYGjNqBv2iV5rebYmTxmjLB1IVTgssbQFFrdM3uIG_qopqW8dhzODPLBk4CO4Fr9WaKcuIgw56UGY_tRlkKlrX7biWLDXIQJfhbLcGtfIc-FfVRX9hlkZvbKMq7Du7W2tro-1rfe7l2IQsarQTKAbZg-FlKbx0TZ5Epcv9SsgfbMqfYcIet3K12PJtXugniL77BRzIgLxR3OmgaQ3gISd7w"
              />
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity col-span-2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFWmW76FaYGar8b5VF1zMUSSnJ_FuX-zEEgmAjv214uPQK22j-4YNmCYTpag9cqdDQgIp0Vum46jI5v20iGU8fPt6cjGtNmXdxkkhOm-VZCpi6f5eqJiATHbzPf_LRaKIzQvQSs7Mi0qWZf7FKDEIn9FtSKxJYBq1PLngc1AlPNJ0WAwdFvaM5akwTYR1keC_WRQpIgshosrjZqnqvFjVCri5FTUX4LiK13-rIIdOBBIce_pq_tLV4pg"
              />
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs9C3s9hXciGAbtT1PrgYaCtK8aH2pMBwSKD-NXHejumylnL-KZbiMNXOA7SXUB_Xk8mG8mVIqlolOviVGtcT8bZy66EmwxQpDHObds2xAZPyaJQtYyH-YimP3KBbHARryk_8ggSyS6Pk5aua44oJjI753IUD6WZcPvD8fEOZpHXJ01fwbeZdG1L55Anpb9WlO80fyrzDbyLHUm-9yvfroJVytyu0EkT1O3P9EWII39a0UQRnHcj-r8Q"
              />
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity row-span-2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfEuU-5Vgwq91RnzyeylZhr318vCNPIeeeIryYlQwMkMQwcLGVru-Sau2KYuzC7c31NaYKqMWVERw6idSYytIxsMwB15Y8qsy95OWg0PgAL9OyeRC-DOQe6rRkPCQsnCHGzmPa2bvluoGT1v_PUop9v0VWhnlvppuszldbVkNtUReZIjb6bP-Zci0JfCBjWeGyMFdmH5jeTG63kJuyRxVOyTP4rzyCOrRxfc8-kpH_7RJzO5Hsu_63FA"
              />
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAFNqO0XxyqT3X1mSjckDL_ML4U8Iv5bn-PRN5chZQHpU2T8GforKOSy57QSL92w6i9Flfx4A3Fi0btCwVIZbj0HBk0XVTYCukztYLEOIkodhAXUJhmrmtxaxdVhI8qm7hCdRx9GGvp8aWBz2iHVdDaFaIFgRINakpx8_Cp5aNt7CE12p_o_3co8Gtz4Iq5Tjgk1Uoeym0D_UDKNDx1415IjoQCzbXIDgECPSfFFrybixg-Y5subC61w"
              />
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-cS4YQBFEnETh3505TmOIfJUx4DiV3D__zX6vQtVxRVJn5cWP0BUP_XsUWJWLqGkZz13BF8rnl6Cgvng8fLQQu7oig7uNh0LVGU4HoAZEdXmomCM9U5lr4PLMFUDTHn2nyDK5z3STydZ_wFzsCnxLRu1FrTQUgntNZcN_f-LISlgMmJaeQTcqYXGNFREBVHlkPrBAaz3F-3JxFI-Moosu1mIHTjmD6YH7BvTsKjG2ZJ7qKFAJDObjBQ"
              />
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity col-span-2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-nF15Q-F41MdSkQ-8Nj3yXQtIuk42tj16g7MfgKe6wATRAxaecCFyduE7OFc4Llkt8lbFPXIcO9JnokxFBs8uXvu5Nfdf8ftYxqmys2FRhptRN453qUDyOngvHuL6_W2gEXmlitrImo2Mz-lzVjpoQYQEpxsEPWNH5M34VKo6ZYEAwxAqLf9kTe31Ve1_fR4b0aCllTvZey7TzfrGqytzaUf5LAmPAv-qerfStVxEUOolHK9Of_F9QQ"
              />
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATWlOIBhFDfjcpTyhq0q7GsNjFz6JxOBNVnwn976i6C5Sv-tWgdKTa5igvzlAq65w6Tn-h7gwC3Lh_OFCBYugUPA9u-qgpveSVmGGeAb4JlAITVlKw9vMbmtkzDafJe7kkprsTjK1rZpz88mcGv2zxYDzvhCoIKN7xRRPP8pVv6Y_PleEuh4KVbJWdrre8uoSeic80tgBcqgIYUSqte7jWDW_MmESwhqpo4LgRRD2rYdyvAnlb6aVFpA"
              />
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity col-span-2 row-span-2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyXNDrknApUZ-YQb3VB03lSmpY4sUIrU6F5VbUfEixVGWB8quT4mzlGZXRUsHnPWiYxOhb9vXXPcD900PhqjZalO3J35R7QWH-x3C3SBFPNxOJOUEhJ6w68n6Qpi-mnURkk7RR4uHf2DkV-uPRv77WrSl5hqmXs_kJ3Gnz0M839oX99iBB6zh6O0fel-1mDOmD5wJh9JNIYx8vxVxP09L_FTiUntGzx6t_0Mwgd3ao1IdXJ6GZVx_dpw"
              />
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmd1i4cT5pctMJfrtVVutgB7XpYtaAm03Fk2l2Jjmcdm1WL0g-8fRt1kDbTdd2yT6BNT-AvS8T7cOb2IXpLkVR0DzgkxI3LAVjFY8xVkx3Jkbg7eiTJtDQbF-q4hrLCPk62esfbHnjE9WkGdWmREP3RtrvU9SWYLHp-gcgJ9G_z8aT_wFysvpwTTQQcgF5QTvwl8l3MgCoS43Sug0TPZTryoHwdxJ1l3-r89I1GsWW5T1a0nasDhPnOg"
              />
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOdfz556ZaVecfYcrKcW7tNSPW_SXsvqQYXKlQcE5fvrP6r49iga_vNHn85on9Z7unfIRQ1gJkhn0ZVdHl0c60OuLBnDFT8XIaRktwZQjDR8gCA_S-xG5V98NL3NVUqHA7tOvY-ZtlMLvORz45Up8gRTSkE0j3C4fl2E2HizThXNQ8waHUirQFWPBohZQAUegjj0zIJAodQPbr0uLc-UiiUQaSpsqHiGn5KnUjAsohCsJzfLmIz-kNqQ"
              />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-8 flex justify-end">
            <a
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand transition-colors uppercase tracking-wider font-medium"
              href="#"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              View all our Works
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-1">
              <a
                className="font-serif text-3xl font-bold tracking-tighter text-brand"
                href="#"
              >
                F<span className="text-xl">L</span>
              </a>
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold mb-4">
                Our Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    Traditional Ceremony
                  </a>
                </li>
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    City Wedding
                  </a>
                </li>
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    Destination Event
                  </a>
                </li>
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    Decoration
                  </a>
                </li>
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    Anniversary
                  </a>
                </li>
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    Our Portfolio
                  </a>
                </li>
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    Blogs
                  </a>
                </li>
                <li>
                  <a className="hover:text-brand transition-colors" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold mb-4">Address</h4>
              <p className="text-sm text-gray-500 mb-4">
                Hanoi, Vietnam
                <br />
                Ho Chi Minh City, Vietnam
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold mb-4">
                Inquiries
              </h4>
              <p className="text-sm text-brand mb-2">(+84) 38 595 0033</p>
              <a
                className="text-sm text-gray-500 hover:text-brand transition-colors block mb-6"
                href="mailto:info@theflab.co"
              >
                info@theflab.co
              </a>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-900">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                <a
                  className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center hover:bg-brand-hover transition-colors"
                  href="#"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center hover:bg-brand-hover transition-colors"
                  href="#"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 mt-8 text-xs text-gray-400">
            © 2024 The F Lab Company Limited. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
