import Slide from './Slide.jsx'
import PartHead from './PartHead.jsx'
import Figure from './Figure.jsx'
import { part4 } from '../data/content.js'

export default function Part4() {
  const { s1, s2 } = part4

  return (
    <Slide id="giai-phap" nav="giai-phap">
      <div className="section-content">
        <PartHead num={part4.num} kicker={part4.kicker} title={part4.title} />

        <div className="content-cluster">
          <h3 className="block-heading reveal">
            {s1.heading} <span className="heading-src mono">({s1.source})</span>
          </h3>
          <p className="solution-subheading mono reveal">{s1.summaryLabel}</p>
          <div className="traits-grid">
            {s1.solutions.map((sol, i) => (
              <article className="card reveal" key={i}>
                <span className="card-num mono">0{i + 1}</span>
                <h4>{sol.title}</h4>
                <p>{sol.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="solution-layout">
          <div className="content-cluster">
            <h3 className="block-heading reveal">
              {s2.heading} <span className="heading-src mono">({s2.source})</span>
            </h3>
            <div className="goal-row goal-row--landing student-duty-row">
              <div className="reveal">
                <Figure image={s2.image} variant="figure--portrait" />
              </div>
              <div className="duties-col">
                {s2.duties.map((d, i) => (
                  <article className="card reveal" key={i}>
                    <span className="card-num mono">0{i + 1}</span>
                    <h4>{d.title}</h4>
                    <p>{d.text}</p>
                  </article>
                ))}
                <div className="sixdan reveal">
                  {s2.sixDan.map((d, i) => (
                    <span className="sixdan-chip" key={i}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="content-cluster content-cluster--quiet">
            <div className="cage reveal">
              <p className="cage-lead">{s2.cage.lead}</p>
              <div className="cage-grid">
                {s2.cage.items.map((item, i) => (
                  <span className="cage-cell" key={i}>
                    {item}
                  </span>
                ))}
              </div>
              <p className="cage-tail">{s2.cage.tail}</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
