import Slide from './Slide.jsx'
import { aiUsage } from '../data/content.js'

function RefLink({ item }) {
  if (typeof item === 'string') return item

  return (
    <a href={item.url} target="_blank" rel="noreferrer">
      {item.label}
    </a>
  )
}

export default function AiUsage() {
  const { ai, refs } = aiUsage

  return (
    <Slide id="ai-usage" nav="ai-usage">
      <div style={{ width: '100%' }}>
        <header className={`section-head reveal${aiUsage.kicker ? '' : ' section-head--plain'}`}>
          <span className="section-num mono">AI</span>
          <div>
            {aiUsage.kicker && <p className="section-kicker mono">{aiUsage.kicker}</p>}
            <h2 className="section-title">{aiUsage.title}</h2>
            <p className="section-subtitle">{aiUsage.intro}</p>
          </div>
        </header>

        <div className="ai-layout">
          <article className="ai-col ai-col--main reveal">
            <header className="ai-col-head">
              <span className="mono">{ai.label}</span>
              <strong>{ai.heading}</strong>
            </header>
            <div className="ai-chips">
              {ai.tools.map((t, i) => (
                <span className="ai-chip mono" key={i}>
                  {t}
                </span>
              ))}
            </div>
            <ul>
              {ai.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>

          <div className="ai-refs">
            <article className="ai-col ai-col--sub reveal">
              <header className="ai-col-head">
                <span className="mono">{refs.sourcesLabel}</span>
                <strong>{refs.sourcesTitle}</strong>
              </header>
              <ol className="ref-list">
                {refs.sources.map((s, i) => (
                  <li key={i}>
                    <RefLink item={s} />
                  </li>
                ))}
              </ol>
            </article>

            <article className="ai-col ai-col--sub reveal">
              <header className="ai-col-head">
                <span className="mono">{refs.imagesLabel}</span>
                <strong>{refs.imagesTitle}</strong>
              </header>
              <ol className="ref-list">
                {refs.images.map((s, i) => (
                  <li key={i}>
                    <RefLink item={s} />
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </div>

        <p className="ai-note mono reveal">{aiUsage.note}</p>
      </div>
    </Slide>
  )
}
