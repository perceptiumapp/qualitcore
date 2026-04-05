import { useEffect, useRef } from 'react'
import './Stats.css'

const statsData = [
  { target: 96, suffix: ',7%', prefix: '', desc: 'Conformidade ONA — auditoria fev/2025' },
  { target: 18, suffix: '+', prefix: '', desc: 'Módulos integrados em uma plataforma' },
  { target: 78, suffix: '+', prefix: '', desc: 'Contratos ativos gerenciados' },
  { target: 0, suffix: 'h', prefix: '', desc: 'Para gerar apresentação executiva completa' },
]

function animateCount(el, target, suffix = '', prefix = '') {
  const duration = 1800
  const start = performance.now()
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const val = Math.floor(eased * target)
    el.innerHTML = `${prefix}${val}<span>${suffix}</span>`
    if (progress < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

export default function Stats() {
  const statsRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const nums = e.target.querySelectorAll('.stat-num')
            nums.forEach((n) => {
              const text = n.textContent
              if (text.includes('96')) animateCount(n, 96, ',7%')
              else if (text.includes('18')) animateCount(n, 18, '+')
              else if (text.includes('78')) animateCount(n, 78, '+')
              else if (text.includes('0')) animateCount(n, 0, 'h')
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )

    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" className="stats-section" ref={statsRef}>
      <div className="stats-bg-animated" />
      <div className="stats-content">
        <div className="section-label" style={{ color: 'var(--teal-light)' }}>
          QualitCore em Números
        </div>
        <h2 className="section-title" style={{ color: 'white' }}>
          Resultados reais,
          <br />
          hospital real.
        </h2>
        <div className="stats-grid">
          {statsData.map((s, i) => (
            <div className="stat-block" key={i}>
              <div className="stat-num-wrapper">
                <div className="stat-glow" />
                <div className="stat-num">
                  {s.target}
                  <span>{s.suffix}</span>
                </div>
              </div>
              <div className="stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
