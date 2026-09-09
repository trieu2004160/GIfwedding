import Image from "next/image";

export default function About() {
  return (
    <section className="bg-cream section" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal order-last lg:order-first">
            <p className="sectionLabel text-secondary font-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">Ve Chung Toi</p>
            <h2 className="sectionTitle text-[40px] md:text-[56px] font-serif font-light leading-[1.1] text-on-surface mb-7">Nghe Thuat Tao Nen<br /><em className="italic text-gold">Ky Niem</em></h2>
            <p className="font-sans text-[16px] font-light leading-[1.8] text-[#5a5550] mb-5">The F Lab la studio chuyen biet ve to chuc dam cuoi cao cap, noi moi chi tiet duoc cham chut nhu mot tac pham nghe thuat. Voi hon 10 nam kinh nghiem va hon 500 dam cuoi thanh cong, chung toi hieu rang ngay trong dai cua ban xung dang duoc hoan hao theo dung nghia.</p>
            <p className="font-sans text-[16px] font-light leading-[1.8] text-[#5a5550] mb-5">Tu lua chon hoa tuoi den am nhac, tu thuc don den tung khoanh khac chup anh — chung toi dong hanh voi ban trong moi buoc.</p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 my-12 py-8 border-y border-black/10" id="about-stats">
              {[["500+","Dam Cuoi Thanh Cong"],["10+","Nam Kinh Nghiem"],["98%","Khach Hang Hai Long"]].map(([num, label]) => (
                <div className="flex flex-col gap-1" key={label}>
                  <span className="font-serif text-[40px] font-medium text-primary leading-none">{num}</span>
                  <span className="font-ui text-[12px] font-normal text-secondary tracking-[0.05em]">{label}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btnPrimary inline-flex" id="about-cta">Tu Van Mien Phi</a>
          </div>
          <div className="reveal revealDelay2 relative order-first lg:order-last" id="about-visual">
            <div className="relative rounded-sm overflow-hidden aspect-video lg:aspect-[3/4] shadow-lg">
              <Image src="/gallery_1.jpg" alt="Luxury wedding reception" fill className="object-cover" sizes="(max-width:991px) 100vw, 50vw" />
              {/* Pseudo element replacement using an absolute div */}
              <div className="absolute inset-[-2px] border border-gold rounded-sm translate-x-4 translate-y-4 -z-10"></div>
              <div className="absolute bottom-4 lg:bottom-8 left-4 lg:-left-8 bg-white py-5 px-7 shadow-md flex flex-col items-center gap-1 z-10">
                <span className="font-serif text-[34px] font-medium text-primary leading-none">2014</span>
                <span className="font-ui text-[11px] font-medium tracking-[0.15em] uppercase text-secondary">Founded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
