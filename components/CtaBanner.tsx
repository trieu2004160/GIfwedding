import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="relative h-auto md:h-[600px] py-24 md:py-0 flex items-center overflow-hidden" id="cta-banner">
      <div className="absolute inset-0">
        <Image src="/gallery_3.jpg" alt="Wedding ceremony" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-[#80002080]"></div>
      </div>
      <div className="relative z-10 text-center w-full container mx-auto px-4 md:px-8" id="cta-content">
        <p className="text-gold-light font-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-4" id="cta-label">San Sang Bat Dau?</p>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-normal text-white leading-[1.1] mb-12" id="cta-title">Hay De Chung Toi<br /><em className="italic text-gold">Tao Nen Dieu Ky Dieu</em></h2>
        <a href="#contact" className="btnPrimary px-10 py-5 text-[14px]" id="cta-btn">Dat Lich Tu Van Ngay</a>
      </div>
    </section>
  );
}
