
const reviews = [
  {
    init: "A",
    text: "GIF Wedding đã giúp chúng tôi lưu giữ trọn vẹn những khoảnh khắc đẹp nhất trong ngày cưới. Từng thước phim đều rất tự nhiên và cảm xúc, khiến mỗi lần xem lại chúng tôi như được sống lại ngày hôm đó.",
    name: "Anh & Linh",
    date: "Tháng 4, 2024 · Quy Nhơn",
  },
  {
    init: "M",
    text: "Điều chúng tôi thích nhất ở GIF Wedding là cách ekip bắt được những khoảnh khắc rất đời thường mà chúng tôi thậm chí không nhận ra trong ngày cưới. Bộ phim cưới thật sự vượt xa mong đợi và là món quà ý nghĩa nhất dành cho hai đứa.",
    name: "Minh & Thảo",
    date: "Tháng 11, 2023 · Quy Nhơn",
  },
  {
    init: "H",
    text: "Ngay từ buổi tư vấn đầu tiên, GIF Wedding đã rất nhiệt tình lắng nghe câu chuyện của chúng tôi. Ekip làm việc chuyên nghiệp, thân thiện và đặc biệt là không khiến chúng tôi cảm thấy gượng gạo trước máy quay.",
    name: "Hùng & Phương",
    date: "Tháng 2, 2024 · Đà Nẵng",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-white py-20 lg:py-32 section"
      id="testimonials"
    >
      <div className="container mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-secondary font-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
            Khách Hàng Nói Gì
          </p>

          <h2 className="text-[#111111] text-[40px] md:text-[56px] font-serif font-light leading-[1.1] mb-7">
            Về cảm xúc để lại khi 
            <br />
            <em className="italic text-gold">
              Làm việc với GIF Wedding
            </em>
          </h2>
        </div>

        {/* Reviews */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          id="testi-grid"
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              id={`testi-${i + 1}`}
              className="group relative p-10 rounded-sm bg-white border border-black/10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-[#d4af37] hover:border-[#d4af37] hover:shadow-[0_15px_45px_rgba(0,0,0,0.12)]"
            >

              {/* Quote */}
              <div className="absolute top-6 right-8 font-serif text-[80px] leading-none text-black/10 group-hover:text-white/20 transition-colors duration-500">
                “
              </div>

              {/* Stars */}
              <div className="text-gold text-[14px] tracking-[2px] mb-5 group-hover:text-white transition-colors duration-500">
                ★★★★★
              </div>

              {/* Review */}
              <p className="font-serif text-[16px] italic font-normal leading-[1.8] mb-8 text-[#111111] group-hover:text-white transition-colors duration-500">
                "{r.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center gap-4">

                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-full bg-[#d4af37] text-white flex items-center justify-center font-serif text-[18px] shrink-0 group-hover:bg-white group-hover:text-[#d4af37] transition-all duration-500"
                  id={`tav-${i + 1}`}
                >
                  {r.init}
                </div>

                {/* Customer Info */}
                <div>
                  <p className="font-ui text-[14px] font-semibold text-[#111111] group-hover:text-white transition-colors duration-500">
                    {r.name}
                  </p>

                  <p className="font-ui text-[12px] font-light text-[#666666] group-hover:text-white/75 transition-colors duration-500">
                    {r.date}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
