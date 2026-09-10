
const services = [
  {
    icon: "◎",
    title: "Phóng Sự Cưới",
    desc: "Ghi lại trọn vẹn những khoảnh khắc tự nhiên, chân thật và đầy cảm xúc trong ngày trọng đại của hai bạn.",
  },
  {
    icon: "✦",
    title: "Wedding Film",
    desc: "Kể lại câu chuyện tình yêu của hai bạn qua một bộ phim cưới mang dấu ấn riêng, giàu cảm xúc và tinh tế.",
  },
  {
    icon: "◇",
    title: "Highlight Wedding",
    desc: "Chắt lọc những khoảnh khắc đáng nhớ nhất để tạo nên một thước phim ngắn gọn, cảm xúc và đầy ấn tượng.",
  },
  {
    icon: "✿",
    title: "Pre-Wedding",
    desc: "Lưu giữ những khoảnh khắc trước ngày cưới bằng những thước phim tự nhiên, nhẹ nhàng và mang câu chuyện riêng của hai bạn.",
  },
  {
    icon: "◈",
    title: "Cinematic Wedding",
    desc: "Sử dụng ngôn ngữ hình ảnh điện ảnh để biến những khoảnh khắc đời thường thành một câu chuyện tình yêu đáng nhớ.",
  },
  {
    icon: "♪",
    title: "Chỉnh Màu & Âm Nhạc",
    desc: "Hoàn thiện bộ phim với màu sắc, âm nhạc và âm thanh được lựa chọn phù hợp để truyền tải trọn vẹn cảm xúc ngày cưới.",
  },
];

export default function Services() {
  return (
    <section
      className="bg-white py-20 lg:py-32 section"
      id="services"
    >
      <div className="container mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-24">

          <h2 className="text-[#111111] text-[40px] md:text-[56px] font-serif font-light leading-[1.1] mb-7">
            Chúng Tôi Lưu Giữ
            <br />
            <em className="italic text-gold">
              Câu Chuyện
            </em>
          </h2>
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          id="services-grid"
        >
          {services.map((s, i) => (
            <div
              key={s.title}
              id={`svc-${i + 1}`}
              className="
                group
                relative
                overflow-hidden
                p-10
                lg:p-12
                bg-white
                border
                border-[#e5e5e5]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:bg-[#d4af37]
                hover:border-[#d4af37]
                hover:shadow-[0_15px_45px_rgba(0,0,0,0.10)]
              "
            >
              {/* Icon */}
              <span
                className="
                  block
                  text-[28px]
                  mb-6
                  text-gold
                  transition-colors
                  duration-500
                  group-hover:text-white
                "
              >
                {s.icon}
              </span>

              {/* Title */}
              <h3
                className="
                  font-serif
                  text-[22px]
                  font-medium
                  mb-3.5
                  leading-[1.3]
                  text-[#111111]
                  transition-colors
                  duration-500
                  group-hover:text-white
                "
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                className="
                  font-sans
                  text-[14px]
                  font-light
                  leading-[1.7]
                  mb-7
                  text-[#666666]
                  transition-colors
                  duration-500
                  group-hover:text-white/90
                "
              >
                {s.desc}
              </p>

              {/* Link */}
              <a
                href="#contact"
                id={`svc-${i + 1}-link`}
                className="
                  font-ui
                  text-[13px]
                  font-medium
                  tracking-[0.05em]
                  text-gold
                  transition-all
                  duration-500
                  hover:tracking-[0.1em]
                  group-hover:text-white
                "
              >
                Tìm hiểu thêm →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
