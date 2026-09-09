const items = ["Tinh Yeu Vinh Cuu","Luxury Wedding","Khoanh Khac Dep Nhat","The F Lab","Fine Floral Design","Ngay Trong Dai"];
export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-on-surface py-4.5 overflow-hidden whitespace-nowrap" id="marquee-strip" aria-hidden="true">
      <div className="inline-flex items-center gap-10 animate-[scroll_30s_linear_infinite]">
        {doubled.map((item, i) => (
          <span key={`item-${i}`} className="font-serif text-[15px] font-normal italic text-tertiary shrink-0">
            {item}
            <span className="text-primary not-italic text-[12px] ml-10">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
