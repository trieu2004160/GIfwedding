
export default function PortfolioHero() {
  return (
    <section className="portfolio-hero">
      <div className="portfolio-hero-inner">
        <p className="portfolio-hero-label">Our Portfolio</p>

        <h1 className="portfolio-hero-title">
          Những Câu Chuyện
          <br />
          <em>Chúng Tôi Đã Kể</em>
        </h1>

        <p className="portfolio-hero-description">
          Mỗi đám cưới là một câu chuyện riêng.
          <br className="hidden md:block" />
          Chúng tôi lưu giữ những khoảnh khắc ấy bằng những thước phim
          chân thật và đầy cảm xúc.
        </p>
      </div>
    </section>
  );
}
