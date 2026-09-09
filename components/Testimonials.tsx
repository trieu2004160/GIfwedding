const reviews = [
  { init:"A", text:"The F Lab da bien giac mo cua chung toi thanh hien thuc. Moi chi tiet nho deu hoan hao den muc chung toi khong the tin duoc. Day la dam cuoi dep nhat ma khach moi cua chung toi tung tham du.", name:"Anh & Linh", date:"Thang 4, 2024 · Ha Noi", featured: false },
  { init:"M", text:"Chung toi chon The F Lab vi muon su tinh te va dang cap. Ket qua vuot xa mong doi — khong khi lang man, hoa cuoi tuyet voi, va doi ngu luon san sang ho tro. Cam on The F Lab da cho chung toi ngay dep nhat cuoc doi!", name:"Minh & Thao", date:"Thang 11, 2023 · TP. HCM", featured: true },
  { init:"H", text:"Tu buoi tu van dau tien, chung toi biet minh da chon dung. The F Lab khong chi la dich vu — ho la nhung nguoi ban dong hanh tuyet voi trong hanh trinh dac biet nhat cua cuoc doi.", name:"Hung & Phuong", date:"Thang 2, 2024 · Da Nang", featured: false },
];
export default function Testimonials() {
  return (
    <section className="bg-cream py-20 lg:py-32 section" id="testimonials">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-secondary font-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">Khach Hang Noi Gi</p>
          <h2 className="text-on-surface text-[40px] md:text-[56px] font-serif font-light leading-[1.1] mb-7">Nhung Trai Tim<br /><em className="italic text-gold">Hanh Phuc</em></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" id="testi-grid">
          {reviews.map((r, i) => (
            <div className={`p-10 rounded-sm shadow-sm transition-transform duration-400 relative hover:shadow-md hover:-translate-y-1 ${r.featured ? "bg-on-surface" : "bg-white"} reveal revealDelay${i+1}`} key={i} id={`testi-${i+1}`}>
              <div className={`absolute top-6 right-8 font-serif text-[80px] leading-none content-['“'] ${r.featured ? "text-white/[0.08]" : "text-tertiary"}`}>“</div>
              <div className="text-gold text-[14px] tracking-[2px] mb-5">★★★★★</div>
              <p className={`font-serif text-[16px] italic font-normal leading-[1.8] mb-8 ${r.featured ? "text-white/85" : "text-on-surface"}`}>"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center font-serif text-[18px] text-white shrink-0" id={`tav-${i+1}`}>{r.init}</div>
                <div>
                  <p className={`font-ui text-[14px] font-semibold ${r.featured ? "text-white" : "text-on-surface"}`}>{r.name}</p>
                  <p className="font-ui text-[12px] font-light text-secondary">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
