const steps = [
  { num: "01", title: "Tu Van Ban Dau", desc: "Gap go va lang nghe cau chuyen tinh yeu cua ban, hieu ro mong muon va tam nhin cho ngay trong dai." },
  { num: "02", title: "Thiet Ke Concept", desc: "Xay dung concept doc quyen voi mood board, bang mau, va phong cach phu hop voi tinh cach cua doi ban." },
  { num: "03", title: "Len Ke Hoach Chi Tiet", desc: "Timeline, ngan sach, va tat ca cac vendor duoc lua chon ky luong, khong bo qua bat ky chi tiet nao." },
  { num: "04", title: "Ngay Trong Dai", desc: "Doi ngu cua chung toi co mat tu sang den dem, dam bao moi thu dien ra hoan hao nhu mo." },
];
export default function Process() {
  return (
    <section className="bg-on-surface py-20 lg:py-32 section" id="process">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-gold font-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">Quy Trinh</p>
          <h2 className="text-white text-[40px] md:text-[56px] font-serif font-light leading-[1.1] mb-7">Hanh Trinh Cua<br /><em className="italic text-gold">Chung Ta</em></h2>
        </div>
        <div className="flex flex-col lg:flex-row items-stretch gap-0" id="process-steps">
          {steps.map((s, i) => (
            <div key={s.num} className="contents lg:flex items-center flex-1">
              <div className={`flex-1 p-10 lg:p-12 border border-white/10 bg-white/[0.03] transition-all duration-400 group hover:bg-white/5 hover:border-[#80002066] reveal revealDelay${i+1}`} id={`step-${i+1}`}>
                <div className="font-serif text-[52px] font-normal text-primary opacity-40 leading-none mb-5 transition-opacity duration-400 group-hover:opacity-80">{s.num}</div>
                <div>
                  <h3 className="font-serif text-[20px] font-medium text-white mb-3">{s.title}</h3>
                  <p className="font-sans text-[14px] font-light leading-[1.7] text-white/55">{s.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && <span className="hidden lg:block text-primary text-[16px] opacity-60 px-1 shrink-0 self-center" aria-hidden>✦</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
