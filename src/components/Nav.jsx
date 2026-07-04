import { Fragment, useEffect, useState } from 'react'
import { navItems } from '../data/content.js'

export default function Nav() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('mo-dau')

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Slide nào đang chiếm giữa màn hình thì phần tương ứng được tô sáng.
  useEffect(() => {
    const sections = [...document.querySelectorAll('.landing-section[data-nav]')]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.dataset.nav)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  // Cuộn tới slide đầu của phần, bù chiều cao nav cố định.
  const jumpTo = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const navH =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),
      ) || 54
    const target = el.getBoundingClientRect().top + window.scrollY - navH
    window.scrollTo({ top: Math.max(0, Math.round(target)), behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <a className="nav-brand" href="#mo-dau" onClick={(e) => jumpTo(e, 'mo-dau')}>
        <span className="nav-flag" aria-hidden="true" />
        <span>GIẶC NỘI XÂM</span>
      </a>
      <div className="nav-links">
        {navItems.map((item, i) => (
          <Fragment key={item.id}>
            {i > 0 && <span className="nav-sep" aria-hidden="true" />}
            <a
              href={`#${item.id}`}
              onClick={(e) => jumpTo(e, item.id)}
              className={active === item.id ? 'is-active' : ''}
            >
              {item.label}
            </a>
          </Fragment>
        ))}
      </div>
      <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} />
    </nav>
  )
}
