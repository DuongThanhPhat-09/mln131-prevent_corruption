import './App.css'
import { useReveal } from './hooks/useReveal.js'
import { marquees } from './data/content.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Part1 from './components/Part1.jsx'
import Part2 from './components/Part2.jsx'
import Part3 from './components/Part3.jsx'
import Part4 from './components/Part4.jsx'
import Conclusion from './components/Conclusion.jsx'
import AiUsage from './components/AiUsage.jsx'
import ThankYouFooter from './components/ThankYouFooter.jsx'

function App() {
  const pageRef = useReveal()

  return (
    <div ref={pageRef}>
      <Nav />
      <main>
        <Hero />
        <Part1 />
        <div className="marquee-band" aria-hidden="true">
          <Marquee items={marquees.one} variant="marquee--red" />
        </div>
        <Part2 />
        <Part3 />
        <div className="marquee-band" aria-hidden="true">
          <Marquee items={marquees.two} variant="marquee--red" />
        </div>
        <Part4 />
        <Conclusion />
        <AiUsage />
        <ThankYouFooter />
      </main>
    </div>
  )
}

export default App
