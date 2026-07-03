export default function Marquee({ items, variant = 'marquee--red' }) {
  // Lặp nội dung nhiều lần để mỗi nửa dải luôn rộng hơn màn hình,
  // tránh lộ khoảng trống khi animation chạy gần hết vòng.
  const loop = Array.from({ length: 4 }, () => items).flat()
  return (
    <div className={`marquee ${variant}`} aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {loop.map((text, i) => (
              <span key={i}>
                {text}
                <b>★</b>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
