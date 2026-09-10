const steps = [
  {
    num: "01",
    title: "Tư Vấn & Tìm Hiểu",
    desc: "Lắng nghe câu chuyện tình yêu của hai bạn, tìm hiểu phong cách và những khoảnh khắc mà bạn muốn lưu giữ trong ngày trọng đại.",
  },
  {
    num: "02",
    title: "Xây Dựng Concept",
    desc: "Cùng nhau định hướng phong cách hình ảnh, cách kể chuyện và những khoảnh khắc đặc biệt để tạo nên một bộ phim mang dấu ấn riêng.",
  },
  {
    num: "03",
    title: "Ghi Lại Khoảnh Khắc",
    desc: "Đội ngũ GIF Wedding đồng hành trong ngày cưới, ghi lại những cảm xúc chân thật và những khoảnh khắc tự nhiên nhất của hai bạn.",
  },
  {
    num: "04",
    title: "Dựng Phim & Trao Tay",
    desc: "Chọn lọc và dựng lại những khoảnh khắc đẹp nhất thành một câu chuyện trọn vẹn, để mọi cảm xúc của ngày cưới được sống lại theo thời gian.",
  },
];

export default function Process() {
  return (
    <section
      className="bg-white py-20 lg:py-32 section"
      id="process"
    >
      <div className="container mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-gold font-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
            Quy Trình
          </p>

          <h2 className="text-[#111111] text-[40px] md:text-[56px] font-serif font-light leading-[1.1] mb-7">
            Hành Trình Của
            <br />
            <em className="italic text-gold">
              Câu Chuyện
            </em>
          </h2>
        </div>

        {/* Steps */}
        <div
          className="flex flex-col lg:flex-row items-stretch gap-0"
          id="process-steps"
        >
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="flex lg:flex-1 items-center"
            >

              {/* Step Card */}
              <div
                className="flex-1 p-8 lg:p-10 border border-black/10 bg-white transition-all duration-400 group hover:border-[#d4af37] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
                id={`step-${i + 1}`}
              >

                {/* Number */}
                <div className="font-serif text-[52px] font-normal text-primary opacity-40 leading-none mb-5 transition-opacity duration-400 group-hover:opacity-100">
                  {s.num}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif text-[20px] font-medium text-[#111111] mb-3">
                    {s.title}
                  </h3>

                  <p className="font-sans text-[14px] font-light leading-[1.7] text-[#666666]">
                    {s.desc}
                  </p>
                </div>

              </div>

              {/* Separator */}
              {i < steps.length - 1 && (
                <span
                  className="hidden lg:block text-gold text-[16px] opacity-60 px-2 shrink-0 self-center"
                  aria-hidden
                >
                  ✦
                </span>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}