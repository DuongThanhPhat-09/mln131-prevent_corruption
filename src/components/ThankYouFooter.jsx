import { conclusion, footer } from '../data/content.js'

export default function ThankYouFooter() {
  return (
    <footer className="thank-footer" aria-label="Lời cảm ơn cuối bài">
      <div className="thank-footer-inner">
        <p className="thank-footer-kicker mono">MLN131 / HOÀN TẤT</p>
        <div className="thank-footer-title-row">
          <span className="thank-footer-star" aria-hidden="true">
            ★
          </span>
          <p className="thank-footer-title">{footer.headline}</p>
          <span className="thank-footer-star" aria-hidden="true">
            ★
          </span>
        </div>
        <p className="thank-footer-copy">{conclusion.thanks}</p>
        <div className="thank-footer-bottom">
          <span className="tag tag--gold">{conclusion.qna}</span>
          <span className="thank-footer-credit mono">{footer.credit}</span>
        </div>
      </div>
    </footer>
  )
}
