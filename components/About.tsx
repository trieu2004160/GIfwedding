import Image from "next/image";

export default function About() {
return ( <section className="bg-white section" id="about"> <div className="container mx-auto px-4 md:px-8"> <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

      {/* Content */}
      <div className="order-last lg:order-first">

        <p className="sectionLabel text-secondary font-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
          Về GIF Wedding
        </p>

        <h2 className="sectionTitle text-[40px] md:text-[56px] font-serif font-light leading-[1.1] text-on-surface mb-7">
          Kể Lại Câu Chuyện
          <br />
          <em className="italic text-gold">Của Hai Người</em>
        </h2>

        <p className="font-sans text-[16px] font-light leading-[1.8] text-[#5a5550] mb-5">
          GIF Wedding Film là ekip chuyên quay phim cưới và phóng sự cưới
          tại Quy Nhơn. Chúng tôi không chỉ ghi lại những gì diễn ra trong
          ngày trọng đại, mà tìm kiếm những cảm xúc chân thật nhất để kể
          lại câu chuyện tình yêu của mỗi cặp đôi.
        </p>

        <p className="font-sans text-[16px] font-light leading-[1.8] text-[#5a5550] mb-5">
          Từ ánh mắt, nụ cười, cái nắm tay cho đến những khoảnh khắc rất
          nhỏ giữa cô dâu, chú rể và gia đình — tất cả đều được ekip ghi
          lại một cách tự nhiên, tinh tế và đầy cảm xúc.
        </p>

        <p className="font-sans text-[16px] font-light leading-[1.8] text-[#5a5550] mb-5">
          Với đội ngũ quay phim và dựng phim giàu kinh nghiệm, GIF Wedding
          luôn hướng đến những thước phim trong trẻo, hiện đại và giàu
          cảm xúc — để nhiều năm sau, khi xem lại, bạn vẫn có thể sống lại
          ngày hôm ấy.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="btnPrimary inline-flex"
          id="about-cta"
        >
          Đặt Lịch Ngay
        </a>

      </div>

      {/* Visual */}
      <div
        className="relative order-first lg:order-last"
        id="about-visual"
      >
        <div className="relative rounded-sm overflow-hidden aspect-video lg:aspect-[3/4] shadow-lg w-full max-w-[520px] ml-auto">

          <Image
            src="/gallery_1.jpg"
            alt="GIF Wedding Film - Phóng sự cưới"
            fill
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              hover:scale-[1.03]
              hover:-translate-y-1
            "
            sizes="(max-width: 991px) 100vw, 50vw"
          />

          {/* Decorative border */}
          <div className="absolute inset-[-2px] border border-gold rounded-sm translate-x-4 translate-y-4 -z-10" />

          {/* Founded badge */}
          <div className="absolute bottom-4 lg:bottom-8 left-4 lg:-left-8 bg-white py-5 px-7 shadow-md flex flex-col items-center gap-1 z-10">
            <span className="font-serif text-[34px] font-medium text-primary leading-none">
              GIF
            </span>

            <span className="font-ui text-[11px] font-medium tracking-[0.15em] uppercase text-secondary">
              Wedding Film
            </span>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

);
}
