
export default function Footer() {
  return (
    <footer
      className="bg-white pt-20 pb-10"
      id="footer"
    >
      <div className="container mx-auto px-4 md:px-8">

        {/* Footer Main */}
        <div
          className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-16 pb-16 border-b border-black/10"
        >

          {/* Brand */}
          <div id="footer-brand">
            <span className="font-serif text-[20px] font-semibold tracking-[0.22em] text-[#111111] mb-4 block">
              GIF WEDDING
            </span>

            <p className="font-sans text-[15px] font-light leading-[1.7] text-[#666666] mb-7">
              Lưu giữ những khoảnh khắc
              <br />
              đẹp nhất trong ngày cưới.
            </p>

            {/* Social */}
            <div className="flex gap-4" id="footer-socials">
              {[
                ["IG", "Instagram"],
                ["FB", "Facebook"],
                ["TT", "TikTok"],
              ].map(([abbr, label]) => (
                <a
                  href="#"
                  aria-label={label}
                  key={abbr}
                  id={`social-${abbr.toLowerCase()}`}
                  className="
                    flex
                    items-center
                    justify-center
                    w-9
                    h-9
                    border
                    border-black/15
                    rounded-full
                    font-ui
                    text-[11px]
                    font-medium
                    text-[#666666]
                    transition-all
                    duration-400
                    hover:border-primary
                    hover:text-white
                    hover:bg-primary
                  "
                >
                  {abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div
            className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-20"
            id="footer-links"
          >

            {/* Services */}
            <div className="flex flex-col gap-3">
              <h4 className="font-ui text-[11px] font-semibold tracking-[0.2em] uppercase text-[#999999] mb-2">
                Dịch Vụ
              </h4>

              {[
                "Phóng Sự Cưới",
                "Wedding Film",
                "Pre-Wedding",
                "Highlight Wedding",
              ].map((l) => (
                <a
                  href="#services"
                  key={l}
                  className="font-sans text-[14px] font-light text-[#666666] transition-colors duration-400 hover:text-[#111111]"
                >
                  {l}
                </a>
              ))}
            </div>

            {/* GIF Wedding */}
            <div className="flex flex-col gap-3">
              <h4 className="font-ui text-[11px] font-semibold tracking-[0.2em] uppercase text-[#999999] mb-2">
                GIF Wedding
              </h4>

              {[
                ["#about", "Về GIF Wedding"],
                ["#gallery", "Phóng Sự Cưới"],
                ["#testimonials", "Khách Hàng"],
                ["#contact", "Liên Hệ"],
              ].map(([h, l]) => (
                <a
                  href={h}
                  key={l}
                  className="font-sans text-[14px] font-light text-[#666666] transition-colors duration-400 hover:text-[#111111]"
                >
                  {l}
                </a>
              ))}
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-3">
              <h4 className="font-ui text-[11px] font-semibold tracking-[0.2em] uppercase text-[#999999] mb-2">
                Kết Nối
              </h4>

              {["Instagram", "Facebook", "TikTok"].map((l) => (
                <a
                  href="#"
                  key={l}
                  className="font-sans text-[14px] font-light text-[#666666] transition-colors duration-400 hover:text-[#111111]"
                >
                  {l}
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
          id="footer-bottom"
        >
          <p className="font-ui text-[13px] font-light text-[#999999]">
            © 2026 GIF Wedding. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a
              href="#"
              className="font-ui text-[13px] font-light text-[#999999] transition-colors duration-400 hover:text-black/70"
            >
              Chính Sách Bảo Mật
            </a>

            <a
              href="#"
              className="font-ui text-[13px] font-light text-[#999999] transition-colors duration-400 hover:text-black/70"
            >
              Điều Khoản Sử Dụng
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

