"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/hero_wedding.jpg", alt: "Couple in garden arch", label: "Garden Romance", cls: "col-span-2 row-span-2" },
  { src: "/gallery_1.jpg", alt: "Wedding reception dinner", label: "Grand Reception", cls: "col-span-1 row-span-1" },
  { src: "/gallery_2.jpg", alt: "Bridal bouquet", label: "Floral Artistry", cls: "col-span-1 row-span-1" },
  { src: "/gallery_3.jpg", alt: "Cathedral ceremony", label: "Cathedral Ceremony", cls: "col-span-2 row-span-1" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section className="bg-surface py-20 lg:py-32 section" id="gallery">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <p className="sectionLabel text-gold font-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">Portfolio</p>
          <h2 className="sectionTitle text-[40px] md:text-[56px] font-serif font-light leading-[1.1] text-white mb-7">Nhung Khoanh Khac<br /><em className="italic text-gold">Dang Nho</em></h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 auto-rows-[300px]" id="gallery-grid">
        {images.map((img, i) => (
          <div key={i} className={`relative overflow-hidden cursor-pointer group ${img.cls}`} id={`gal-${i+1}`} onClick={() => setLightbox(img.src)}>
            <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:767px) 100vw, (max-width:991px) 50vw, 25vw" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
              <span className="font-serif text-[24px] font-light italic text-white tracking-[0.05em] translate-y-4 group-hover:translate-y-0 transition-transform duration-400">{img.label}</span>
            </div>
          </div>
        ))}
      </div>
      {lightbox && (
        <div onClick={() => setLightbox(null)} className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center cursor-zoom-out p-4">
          <div className="relative w-full max-w-[1200px] h-[90vh]">
            <Image src={lightbox} alt="Gallery" fill className="object-contain rounded-sm" />
          </div>
        </div>
      )}
    </section>
  );
}
