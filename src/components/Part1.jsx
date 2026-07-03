import Slide from './Slide.jsx'
import PartHead from './PartHead.jsx'
import { part1 } from '../data/content.js'

export default function Part1() {
  const { s1, s2 } = part1

  return (
    <Slide id="ly-luan" nav="ly-luan">
      <div className="section-content">
        <PartHead num={part1.num} kicker={part1.kicker} title={part1.title} hideKicker />

        <div className="theory-layout">
          <div className="content-cluster">
            <h3 className="block-heading reveal">{s1.heading}</h3>
            <p className="block-intro reveal">{s1.intro}</p>
            <div className="feature-grid">
              {s1.features.map((f, i) => (
                <article className="card reveal" key={i}>
                  <span className="card-num mono">0{i + 1}</span>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
            <p className="transition reveal">{s1.transition}</p>
          </div>

          <div className="content-cluster">
            <h3 className="block-heading reveal">{s2.heading}</h3>
            <div className="definition-layout">
              <div className="definition reveal">
                <div className="definition-head mono">
                  <span>{s2.defLabel}</span>
                  <span className="definition-src">{s2.defSource}</span>
                </div>
                <p className="definition-body">{s2.definition}</p>
              </div>

              <div>
                <p className="traits-heading mono reveal">{s2.traitsHeading}</p>
                <div className="traits-grid traits-grid--compact">
                  {s2.traits.map((t, i) => (
                    <article className="card reveal" key={i}>
                      <span className="tag tag--red">{t.label}</span>
                      <p className="card-trait-text">{t.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <p className="transition reveal">{s2.transition}</p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
