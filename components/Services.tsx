const services = [
  { icon: "❋", title: "Wedding Planning", desc: "Lap ke hoach toan dien tu A den Z, dam bao moi chi tiet hoan hao dung theo mong muon cua ban.", featured: false },
  { icon: "✿", title: "Floral Design", desc: "Thiet ke hoa cuoi doc quyen voi nhung loai hoa tuoi nhat, tao nen khong gian vua lang man vua dang cap.", featured: true },
  { icon: "◈", title: "Venue Styling", desc: "Trang tri va thiet ke khong gian tiec cuoi theo phong cach rieng, tu bang mau den tung goc chup anh.", featured: false },
  { icon: "◎", title: "Photography", desc: "Chup anh cuoi phong cach editorial — luu giu tung cam xuc chan thuc va dep de nhat cua ngay trong dai.", featured: false },
  { icon: "♪", title: "Music & Entertainment", desc: "Curation am nhac va entertainment cao cap, tu live band den DJ sets tao nen khong khi hoan hao.", featured: false },
  { icon: "◇", title: "Catering & Cuisine", desc: "Thuc don cao cap duoc thiet ke rieng theo van hoa va so thich cua doi ban, phuc vu theo tieu chuan 5 sao.", featured: false },
];
export default function Services() {
  return (
    <section className="bg-surface py-20 lg:py-32 section" id="services">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-gold font-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">Dich Vu</p>
          <h2 className="text-white text-[40px] md:text-[56px] font-serif font-light leading-[1.1] mb-7">Chung Toi Lo<br /><em className="italic text-gold">Toan Bo</em></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5" id="services-grid">
          {services.map((s, i) => (
            <div className={`p-10 lg:p-12 transition-transform duration-400 relative overflow-hidden group hover:-translate-y-1 ${s.featured ? "bg-primary border-primary hover:bg-primary-light" : "bg-white/[0.03] border border-white/5 hover:bg-white/5"} reveal revealDelay${Math.min(i+1,5)}`} key={s.title} id={`svc-${i+1}`}>
              {!s.featured && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"></div>}
              <span className={`text-[28px] mb-6 block ${s.featured ? "text-white/70" : "text-gold"}`}>{s.icon}</span>
              <h3 className="font-serif text-[22px] font-medium text-white mb-3.5 leading-[1.3]">{s.title}</h3>
              <p className={`font-sans text-[14px] font-light leading-[1.7] mb-7 ${s.featured ? "text-white/85" : "text-white/60"}`}>{s.desc}</p>
              <a href="#contact" className={`font-ui text-[13px] font-medium tracking-[0.05em] transition-all duration-400 hover:tracking-[0.1em] ${s.featured ? "text-white/90" : "text-gold hover:text-gold-light"}`} id={`svc-${i+1}-link`}>Tim hieu them →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
