export default function Footer() {
  return (
    <footer className="bg-surface pt-20 pb-10" id="footer">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-16 pb-16 border-b border-white/5">
          <div id="footer-brand">
            <span className="font-serif text-[20px] font-semibold tracking-[0.22em] text-white mb-4 block">THE F LAB</span>
            <p className="font-sans text-[15px] font-light leading-[1.7] text-white/50 mb-7">
              Kien tao nhung dam cuoi<br />dep nhu tranh ve.
            </p>
            <div className="flex gap-4" id="footer-socials">
              {[["IG","Instagram"],["FB","Facebook"],["PT","Pinterest"]].map(([abbr,label])=>(
                <a 
                  href="#" 
                  aria-label={label} 
                  key={abbr} 
                  id={`social-${abbr.toLowerCase()}`}
                  className="flex items-center justify-center w-9 h-9 border border-white/15 rounded-full font-ui text-[11px] font-medium text-white/60 transition-all duration-400 hover:border-primary hover:text-white hover:bg-primary"
                >
                  {abbr}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-20" id="footer-links">
            <div className="flex flex-col gap-3">
              <h4 className="font-ui text-[11px] font-semibold tracking-[0.2em] uppercase text-white/35 mb-2">Dich Vu</h4>
              {["Wedding Planning","Floral Design","Venue Styling","Photography"].map(l=><a href="#services" key={l} className="font-sans text-[14px] font-light text-white/60 transition-colors duration-400 hover:text-white">{l}</a>)}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-ui text-[11px] font-semibold tracking-[0.2em] uppercase text-white/35 mb-2">Cong Ty</h4>
              {[["#about","Ve Chung Toi"],["#gallery","Portfolio"],["#testimonials","Danh Gia"],["#contact","Lien He"]].map(([h,l])=><a href={h} key={l} className="font-sans text-[14px] font-light text-white/60 transition-colors duration-400 hover:text-white">{l}</a>)}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-ui text-[11px] font-semibold tracking-[0.2em] uppercase text-white/35 mb-2">Ket Noi</h4>
              {["Instagram","Facebook","Pinterest","TikTok"].map(l=><a href="#" key={l} className="font-sans text-[14px] font-light text-white/60 transition-colors duration-400 hover:text-white">{l}</a>)}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left" id="footer-bottom">
          <p className="font-ui text-[13px] font-light text-white/35">© 2024 The F Lab. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="font-ui text-[13px] font-light text-white/35 transition-colors duration-400 hover:text-white/70">Chinh Sach Bao Mat</a>
            <a href="#" className="font-ui text-[13px] font-light text-white/35 transition-colors duration-400 hover:text-white/70">Dieu Khoan Su Dung</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
