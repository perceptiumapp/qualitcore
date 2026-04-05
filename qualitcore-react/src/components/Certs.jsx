import { useEffect, useRef } from 'react'
import './Certs.css'

const certs = [
  { icon: '\u{1F3E5}', text: 'ONA Nivel 3', sub: 'Acreditacao com Excelencia', bg: null },
  { icon: '\u{1F512}', text: 'LGPD Compliant', sub: 'Privacidade desde a concepcao', bg: 'var(--navy-deep)' },
  { icon: '\u2699\uFE0F', text: 'ISO 31000', sub: 'Gestao de riscos', bg: 'var(--orange)' },
  { icon: '\u2764\uFE0F', text: 'PNSP / RDC 36', sub: 'Seguranca do Paciente', bg: 'var(--rose)' },
  { icon: '\u{1F4D0}', text: 'ISO 9001', sub: 'Qualidade de processos', bg: '#2E2E33' },
  { icon: '\u{1F916}', text: 'ISO/IEC 42001', sub: 'Governanca de IA', bg: 'var(--navy)' },
]

export default function Certs() {
  const scrollRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    const container = containerRef.current
    if (!el || !container) return

    const updateGradients = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el
      const atStart = scrollLeft <= 4
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 4
      container.classList.toggle('scroll-start', atStart)
      container.classList.toggle('scroll-end', atEnd)
    }

    updateGradients()
    el.addEventListener('scroll', updateGradients, { passive: true })
    window.addEventListener('resize', updateGradients)

    return () => {
      el.removeEventListener('scroll', updateGradients)
      window.removeEventListener('resize', updateGradients)
    }
  }, [])

  return (
    <div id="certs" ref={containerRef} className="scroll-start">
      <div className="certs-inner" ref={scrollRef}>
        {certs.map((c, i) => (
          <div className="cert-item" key={i}>
            <div
              className="cert-icon"
              style={c.bg ? { background: c.bg } : {}}
            >
              {c.icon}
            </div>
            <div>
              <div className="cert-text">{c.text}</div>
              <div className="cert-sub">{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
