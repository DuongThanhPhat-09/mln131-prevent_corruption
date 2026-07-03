import Slide from './Slide.jsx'
import PartHead from './PartHead.jsx'
import { part2 } from '../data/content.js'

function ArgumentCard({ arg }) {
  return (
    <article className={`argument reveal${arg.highlight ? ' argument--highlight' : ''}`}>
      <header className="argument-head">
        <span className="argument-letter">{arg.letter}</span>
        <h3>{arg.title}</h3>
        {arg.badge && <span className="tag tag--red">{arg.badge}</span>}
      </header>
      <div className="argument-steps">
        {arg.steps.map((step, i) => (
          <div className="step" key={i}>
            <span className="step-label mono">{step.label}</span>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

export default function Part2() {
  return (
    <Slide id="bien-chung" nav="bien-chung">
      <div className="section-content">
        <PartHead
          num={part2.num}
          kicker={part2.kicker}
          title={part2.title}
          subtitle={part2.subtitle}
        />

        <div className="content-cluster">
          <div className="arguments arguments--landing">
            {part2.args.map((arg) => (
              <ArgumentCard arg={arg} key={arg.letter} />
            ))}
          </div>
        </div>

        <div className="content-cluster content-cluster--quiet">
          <blockquote className="quote-major reveal">
            <p>{part2.quote}</p>
            <cite className="mono">{part2.quoteSource}</cite>
          </blockquote>
          <p className="transition reveal">{part2.transition}</p>
        </div>
      </div>
    </Slide>
  )
}
