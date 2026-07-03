import { hero, site } from '../data/content.js'
import Slide from './Slide.jsx'
import Figure from './Figure.jsx'

export default function Hero() {
  return (
    <>
      <Slide id="mo-dau" nav="mo-dau" variant="section--intro">
        <div className="intro-panel reveal">
          <div className="hero-meta intro-meta">
            <span className="tag tag--red">{site.badge}</span>
            <span className="mono hero-course">{site.course}</span>
          </div>

          <div className="intro-copy">
            <h1 className="hero-title">
              {site.title[0]} <span className="text-red">{site.title[1]}</span>
            </h1>
            <p className="hero-subtitle">{site.subtitle}</p>
          </div>

          <div className="intro-footer">
            <p className="intro-topic">
              <span className="intro-topic-kicker mono">Trọng tâm ▸</span>
              <span className="intro-topic-main">Phòng, chống tham nhũng</span>
            </p>
          </div>
        </div>
      </Slide>

      <Slide nav="mo-dau" variant="section--opening">
        <div className="opening-content">
          <div className="hero-aside reveal">
            <Figure image={hero.image} variant="figure--portrait" />
            <blockquote className="hero-quote">
              <p>{hero.quote}</p>
              {hero.quoteCite && <cite className="mono">{hero.quoteCite}</cite>}
            </blockquote>
          </div>

          <div className="hero-questions">
            <div className="qcards">
              {hero.questions.map((q, i) => (
                <div className="qcard reveal" key={i}>
                  <span className="qcard-num mono">0{i + 1}</span>
                  <p>{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>
    </>
  )
}
