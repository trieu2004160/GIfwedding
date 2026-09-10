export type PortfolioCategory =
  | "wedding"
  | "pre-wedding"
  | "phong-su-cuoi";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  image: string;
  slug: string;

  // Thông tin dùng cho trang chi tiết album
  location?: string;
  date?: string;

  // Toàn bộ ảnh trong album
  images: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Minh & An",
    description:
      "Một ngày cưới nhẹ nhàng, nơi từng ánh nhìn, nụ cười và cái nắm tay đều kể nên câu chuyện của hai người.",
    category: "wedding",
    image: "/hero_wedding.jpg",
    slug: "minh-and-an",

    location: "Quy Nhon, Vietnam",
    date: "2026",

    images: [
      "/hero_wedding.jpg",
      "/gallery_1.jpg",
      "/gallery_2.jpg",
      "/gallery_3.jpg",
      "/gallery_4.jpg",
      "/gallery_5.jpg",
      "/gallery_6.jpg",
      "/gallery_7.jpg",
      "/gallery_8.jpg",
    ],
  },

  {
    id: "2",
    title: "Linh & Nam",
    description:
      "Những khoảnh khắc tự nhiên và chân thật được ghi lại trong ngày đặc biệt nhất của một tình yêu.",
    category: "wedding",
    image: "/gallery_4.jpg",
    slug: "linh-and-nam",

    location: "Quy Nhon, Vietnam",
    date: "2026",

    images: [
      "/gallery_4.jpg",
      "/gallery_5.jpg",
      "/gallery_6.jpg",
      "/gallery_7.jpg",
      "/gallery_8.jpg",
      "/gallery_9.jpg",
    ],
  },

  {
    id: "3",
    title: "Thảo & Khang",
    description:
      "Một hành trình trước ngày cưới, nơi tình yêu được kể bằng những khoảnh khắc giản dị giữa hai người.",
    category: "pre-wedding",
    image: "/hero_wedding_2.jpg",
    slug: "thao-and-khang",

    location: "Quy Nhon, Vietnam",
    date: "2026",

    images: [
      "/hero_wedding_2.jpg",
      "/gallery_4.jpg",
      "/gallery_5.jpg",
      "/gallery_6.jpg",
      "/gallery_7.jpg",
      "/gallery_8.jpg",
    ],
  },

  {
    id: "4",
    title: "Mai & Huy",
    description:
      "Một câu chuyện tình yêu mang hơi thở của biển, của những buổi chiều và những khoảnh khắc rất riêng.",
    category: "pre-wedding",
    image: "/gallery_7.jpg",
    slug: "mai-and-huy",

    location: "Quy Nhon, Vietnam",
    date: "2026",

    images: [
      "/gallery_7.jpg",
      "/gallery_8.jpg",
      "/gallery_9.jpg",
      "/hero_wedding_3.jpg",
      "/gallery_10.jpg",
      "/gallery_11.jpg",
    ],
  },

  {
    id: "5",
    title: "Vy & Long",
    description:
      "Không sắp đặt, không diễn. Chỉ đơn giản là những khoảnh khắc thật diễn ra trong ngày cưới.",
    category: "phong-su-cuoi",
    image: "/hero_wedding_3.jpg",
    slug: "vy-and-long",

    location: "Quy Nhon, Vietnam",
    date: "2026",

    images: [
      "/hero_wedding_3.jpg",
      "/gallery_10.jpg",
      "/gallery_11.jpg",
      "/gallery_12.jpg",
      "/gallery_1.jpg",
      "/gallery_2.jpg",
    ],
  },

  {
    id: "6",
    title: "Trang & Phúc",
    description:
      "Từ những phút chuẩn bị đầu tiên cho đến khoảnh khắc cuối ngày, mọi cảm xúc đều được lưu giữ trọn vẹn.",
    category: "phong-su-cuoi",
    image: "/gallery_10.jpg",
    slug: "trang-and-phuc",

    location: "Quy Nhon, Vietnam",
    date: "2026",

    images: [
      "/gallery_10.jpg",
      "/gallery_11.jpg",
      "/gallery_12.jpg",
      "/hero_wedding_4.jpg",
      "/gallery_3.jpg",
      "/gallery_4.jpg",
    ],
  },
];

export function getPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}