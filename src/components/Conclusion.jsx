import Slide from './Slide.jsx'
import { conclusion } from '../data/content.js'

export default function Conclusion() {
  return (
    <Slide id="ket-luan" nav="ket-luan" variant="section--dark">
      <div style={{ width: '100%' }}>
        <p className="conclusion-kicker mono reveal">{conclusion.kicker}</p>
        <p className="conclusion-text reveal">{conclusion.text}</p>
        <p className="conclusion-emphasis reveal">{conclusion.emphasis}</p>
        <div className="conclusion-end reveal">
          <span className="conclusion-star">★</span>
          <p>{conclusion.thanks}</p>
          <span className="tag tag--gold">{conclusion.qna}</span>
        </div>
      </div>
    </Slide>
  )
}
