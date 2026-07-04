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
  const { ai, appendix, refs } = aiUsage
  const toolsByName = new Map(ai.tools.map((tool) => [tool.name, tool]))

  return (
    <Slide id="ai-usage" nav="ai-usage">
      <div style={{ width: '100%' }}>
        <header className={`section-head reveal${aiUsage.kicker ? '' : ' section-head--plain'}`}>
          <span className="section-num mono">AI</span>
          <div>
            {aiUsage.kicker && <p className="section-kicker mono">{aiUsage.kicker}</p>}
            <div className="ai-title-row">
              <h2 className="section-title">{aiUsage.title}</h2>
              <a className="ai-appendix-link mono" href={appendix.url} target="_blank" rel="noreferrer">
                {appendix.label}
              </a>
            </div>
          </div>
        </header>

        <div className="ai-layout">
          <article className="ai-tools-panel reveal">
            <span className="ai-eyebrow mono">CÔNG CỤ AI ĐÃ SỬ DỤNG</span>
            <div className="ai-tool-grid">
              {ai.tools.map((tool) => (
                <article className="ai-tool-card" key={tool.id}>
                  <span className={`ai-tool-icon ai-tool-icon--${tool.id}`} aria-hidden="true">
                    <img src={tool.logo} alt="" />
                  </span>
                  <strong>{tool.name}</strong>
                  <span>{tool.detail}</span>
                </article>
              ))}
            </div>
          </article>

          <section className="ai-ledger reveal">
            <header className="ai-col-head">
              <span className="mono">NHẬT KÝ SỬ DỤNG AI</span>
              <strong>Công cụ · mục đích · prompt chính · kết quả · chỉnh sửa</strong>
            </header>
            <div className="ai-ledger-list">
              {ai.ledger.map((item) => {
                const tool = toolsByName.get(item.tool)

                return (
                  <article className="ai-ledger-card" key={item.tool}>
                    <header>
                      <span className="ai-ledger-tool">
                        {tool && <img src={tool.logo} alt="" aria-hidden="true" />}
                        <span className="mono">{item.tool}</span>
                      </span>
                      <h3>{item.purpose}</h3>
                    </header>
                    <dl>
                      <div>
                        <dt>Prompt chính</dt>
                        <dd>{item.prompt}</dd>
                      </div>
                      <div>
                        <dt>Kết quả</dt>
                        <dd>{item.result}</dd>
                      </div>
                      <div>
                        <dt>Phần chỉnh sửa</dt>
                        <dd>{item.edits}</dd>
                      </div>
                    </dl>
                  </article>
                )
              })}
            </div>
          </section>

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
      </div>
    </Slide>
  )
}
