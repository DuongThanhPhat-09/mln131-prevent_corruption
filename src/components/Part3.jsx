import { useEffect, useRef, useState } from 'react'
import Slide from './Slide.jsx'
import PartHead from './PartHead.jsx'
import Figure from './Figure.jsx'
import { part3 } from '../data/content.js'

function Counter({ to, suffix }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const duration = 1200
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          setValue(Math.round(to * (1 - Math.pow(1 - t, 3))))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to])

  return (
    <span ref={ref} className="stat-value">
      {value}
      <em>{suffix}</em>
    </span>
  )
}

export default function Part3() {
  const { s1, s2 } = part3

  return (
    <Slide id="thuc-tien" nav="thuc-tien">
      <div className="section-content">
        <PartHead num={part3.num} kicker={part3.kicker} title={part3.title} />

        <div className="practice-layout content-cluster">
          <div>
            <h3 className="block-heading reveal">{s1.heading}</h3>
            <div className="principle reveal">
              <span className="principle-label mono">{s1.principleLabel}</span>
              <p>{s1.principle}</p>
            </div>
            <div className="stat-row reveal">
              <Counter to={s1.stat.value} suffix={s1.stat.suffix} />
              <div className="stat-side">
                <p className="stat-label">{s1.stat.label}</p>
                <ul className="action-list">
                  {s1.actions.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="goal-row goal-row--landing practice-goal">
            <div className="reveal">
              <Figure image={s1.image} variant="figure--portrait" />
            </div>
            <div className="goal-main">
              <p className="block-intro reveal">{s1.goal.intro}</p>
              <div className="goal-grid">
                <div className="goal-box goal-box--wrong reveal">
                  <span className="mono goal-label">{s1.goal.wrongLabel}</span>
                  <p>{s1.goal.wrong}</p>
                </div>
                <div className="goal-box goal-box--right reveal">
                  <span className="mono goal-label">{s1.goal.rightLabel}</span>
                  <p>{s1.goal.right}</p>
                </div>
              </div>
              <p className="goal-source mono reveal">{s1.goal.source}</p>
            </div>
          </div>
        </div>

        <div className="content-cluster">
          <h3 className="block-heading reveal">{s2.heading}</h3>
          <div className="case-grid">
            {s2.cases.map((c, i) => (
              <article className="case reveal" key={i}>
                <div className="case-img">
                  <img src={c.image.src} alt={c.image.alt} loading="lazy" />
                </div>
                <header className="case-head">
                  <span className="case-tag mono">{c.tag}</span>
                  <h4>{c.name}</h4>
                </header>
                <p className="case-body">{c.text}</p>
                <p className="case-damage">
                  <span className="mono">{c.damageLabel}</span>
                  {c.damage}
                </p>
                <p className="case-source mono">{c.source}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="content-cluster content-cluster--quiet">
          <div className="meaning reveal">
            <span className="mono meaning-label">{s2.meaningLabel}</span>
            <p>{s2.meaning}</p>
          </div>
          <p className="transition reveal">{part3.transition}</p>
        </div>
      </div>
    </Slide>
  )
}
