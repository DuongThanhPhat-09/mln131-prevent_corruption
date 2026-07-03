// Tiêu đề phần. `compact` = nhãn ngữ cảnh nhỏ cho slide nối tiếp cùng một phần.
export default function PartHead({ num, kicker, title, subtitle, compact, hideKicker = false }) {
  if (compact) {
    return (
      <p className="cont-kicker">
        <span>{num}</span>
        {kicker}
      </p>
    )
  }

  const showKicker = !hideKicker && Boolean(kicker)

  // Có kicker: xếp kicker + tiêu đề + phụ đề trong một cột bên phải badge.
  if (showKicker) {
    return (
      <header className="section-head">
        <span className="section-num mono">{num}</span>
        <div>
          <p className="section-kicker mono">{kicker}</p>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      </header>
    )
  }

  // Không kicker: badge căn giữa theo tiêu đề (hàng 1); phụ đề nằm dưới, thụt theo tiêu đề.
  return (
    <header className="section-head--plain">
      <span className="section-num mono">{num}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  )
}
