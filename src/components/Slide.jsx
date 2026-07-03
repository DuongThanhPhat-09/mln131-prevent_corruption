// Shared landing-page section frame. Each section keeps a full-height rhythm.
export default function Slide({ id, nav, variant = '', children }) {
  return (
    <section className={`landing-section ${variant}`.trim()} id={id} data-nav={nav}>
      <div className="section-shell">{children}</div>
    </section>
  )
}
