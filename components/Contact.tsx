"use client";
import { useState, FormEvent } from "react";

const contactItems = [
  { icon: "☎", label: "Dien Thoai", value: "+84 28 1234 5678" },
  { icon: "✉", label: "Email", value: "hello@theflab.co" },
  { icon: "◉", label: "Dia Chi", value: "123 Duong Hoa, Quan 1\nTP. Ho Chi Minh" },
];

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => { setSuccess(false); (e.target as HTMLFormElement).reset(); }, 4000);
  };
  return (
    <section className="bg-white py-20 lg:py-32 section" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          <div className="reveal" id="contact-info">
            <p className="sectionLabel text-secondary font-ui text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">Lien He</p>
            <h2 className="sectionTitle text-[40px] md:text-[56px] font-serif font-light leading-[1.1] text-on-surface mb-12">Bat Dau<br /><em className="italic text-gold">Cau Chuyen</em><br />Cua Ban</h2>
            <div className="flex flex-col gap-7" id="contact-details">
              {contactItems.map(item => (
                <div className="flex items-start gap-5" key={item.label}>
                  <span className="text-[20px] text-primary shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-ui text-[11px] font-medium tracking-[0.15em] uppercase text-secondary mb-1">{item.label}</p>
                    <p className="font-sans text-[16px] font-normal text-on-surface leading-[1.5] whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="flex flex-col gap-5 reveal revealDelay2" id="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name-bride" className="font-ui text-[12px] font-medium tracking-[0.1em] uppercase text-secondary">Ten Co Dau</label>
                <input type="text" id="name-bride" name="bride" placeholder="Nguyen Thi Lan" required className="font-sans text-[15px] font-light text-on-surface bg-cream border border-black/10 rounded px-4 py-3.5 outline-none transition-all duration-400 w-full focus:border-primary focus:bg-white focus:ring-[3px] focus:ring-[#80002014]" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name-groom" className="font-ui text-[12px] font-medium tracking-[0.1em] uppercase text-secondary">Ten Chu Re</label>
                <input type="text" id="name-groom" name="groom" placeholder="Tran Van Minh" required className="font-sans text-[15px] font-light text-on-surface bg-cream border border-black/10 rounded px-4 py-3.5 outline-none transition-all duration-400 w-full focus:border-primary focus:bg-white focus:ring-[3px] focus:ring-[#80002014]" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="wedding-date" className="font-ui text-[12px] font-medium tracking-[0.1em] uppercase text-secondary">Ngay Cuoi Du Kien</label>
                <input type="date" id="wedding-date" name="date" required className="font-sans text-[15px] font-light text-on-surface bg-cream border border-black/10 rounded px-4 py-3.5 outline-none transition-all duration-400 w-full focus:border-primary focus:bg-white focus:ring-[3px] focus:ring-[#80002014]" />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="guest-count" className="font-ui text-[12px] font-medium tracking-[0.1em] uppercase text-secondary">So Luong Khach</label>
                <select id="guest-count" name="guests" className="font-sans text-[15px] font-light text-on-surface bg-cream border border-black/10 rounded px-4 py-3.5 pr-11 outline-none transition-all duration-400 w-full appearance-none focus:border-primary focus:bg-white focus:ring-[3px] focus:ring-[#80002014]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238E9194'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", backgroundSize: "20px" }}>
                  <option value="">Chon so luong</option>
                  <option>Duoi 50 nguoi</option>
                  <option>50 – 150 nguoi</option>
                  <option>150 – 300 nguoi</option>
                  <option>Tren 300 nguoi</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="font-ui text-[12px] font-medium tracking-[0.1em] uppercase text-secondary">Email Lien He</label>
              <input type="email" id="contact-email" name="email" placeholder="email@example.com" required className="font-sans text-[15px] font-light text-on-surface bg-cream border border-black/10 rounded px-4 py-3.5 outline-none transition-all duration-400 w-full focus:border-primary focus:bg-white focus:ring-[3px] focus:ring-[#80002014]" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-ui text-[12px] font-medium tracking-[0.1em] uppercase text-secondary">Chia Se Ve Dam Cuoi Mo Uoc</label>
              <textarea id="message" name="message" rows={4} placeholder="Hay ke cho chung toi nghe ve cau chuyen cua ban..." className="font-sans text-[15px] font-light text-on-surface bg-cream border border-black/10 rounded px-4 py-3.5 outline-none transition-all duration-400 w-full min-h-[120px] resize-y focus:border-primary focus:bg-white focus:ring-[3px] focus:ring-[#80002014]" />
            </div>
            <button
              type="submit"
              className={`btnPrimary w-full justify-center transition-colors duration-400 ${success ? "!bg-[#2d6a4f] hover:!bg-[#2d6a4f]" : ""}`}
              id="form-submit"
              disabled={success}
            >
              {success ? "✓ Da gui! Chung toi se lien he som." : "Gui Thong Tin →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
