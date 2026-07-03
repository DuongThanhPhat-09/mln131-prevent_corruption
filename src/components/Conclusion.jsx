import Slide from './Slide.jsx'
import PartHead from './PartHead.jsx'
import { conclusion } from '../data/content.js'

export default function Conclusion() {
  return (
    <Slide id="ket-luan" nav="ket-luan" variant="section--dark section--conclusion">
      <div className="section-content conclusion-content">
        <PartHead num="05" kicker="" title={conclusion.title} />

        <div className="conclusion-summary reveal">
          <p className="conclusion-text">{conclusion.text}</p>
        </div>

        <section className="conclusion-diagram reveal">
          <div className="conclusion-flow">
            {conclusion.diagram.steps.map((step, i) => (
              <article className="conclusion-flow-step" key={step.label}>
                <span className="conclusion-flow-num mono">0{i + 1}</span>
                <strong>{step.label}</strong>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <p className="conclusion-emphasis reveal">{conclusion.emphasis}</p>
      </div>
    </Slide>
  )
}
