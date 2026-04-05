import { useState, useCallback } from 'react'
import './Footer.css'
import Acronym from './Acronym'

const footerColumns = [
  {
    title: 'Módulos',
    links: [
      { label: 'Incidentes e Notificações', href: '#modules' },
      { label: 'Investigação RCA', href: '#modules' },
      { label: 'CAPA e Planos de Ação', href: '#modules' },
      { label: 'Gestão de Riscos', href: '#modules' },
      { label: 'Indicadores', href: '#modules' },
      { label: 'Apresentações Automáticas', href: '#modules' },
    ],
  },
  {
    title: 'Plataforma',
    links: [
      { label: 'Como funciona', href: '#how' },
      { label: 'Conformidade', href: '#regulatory' },
      { label: 'Stack técnica', href: '#tech' },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'Resultados', href: '#stats' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: 'contato@qualitcore.com.br', href: 'mailto:contato@qualitcore.com.br' },
      { label: 'www.qualitcore.com.br', href: 'http://www.qualitcore.com.br' },
      { label: 'QualitCore', href: '#' },
      { label: 'Brasil', href: '#' },
    ],
  },
]

export default function Footer() {
  const [openCol, setOpenCol] = useState(null)

  const toggle = useCallback((idx) => {
    setOpenCol((prev) => (prev === idx ? null : idx))
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      {/* Grid pattern background */}
      <div className="footer-grid-bg" aria-hidden="true" />

      <div className="footer-grid">
        {/* Brand column -- always visible */}
        <div className="footer-brand">
          <div className="footer-brand-name">
            Qualit<span>Core</span>
          </div>
          <div className="footer-desc">
            Plataforma de gest&atilde;o integrada da qualidade hospitalar. <Acronym>ONA</Acronym> N&iacute;vel 3 com
            Excel&ecirc;ncia.
          </div>
          <div className="footer-brand-badges">
            <span className="footer-badge-pill"><Acronym>ONA</Acronym> N3</span>
            <span className="footer-badge-pill"><Acronym>LGPD</Acronym></span>
            <span className="footer-badge-pill"><Acronym>ISO</Acronym> 31000</span>
            <span className="footer-badge-pill"><Acronym>PNSP</Acronym></span>
          </div>
        </div>

        {/* Link columns -- collapsible on mobile */}
        {footerColumns.map((col, i) => (
          <div className={`footer-col ${openCol === i ? 'open' : ''}`} key={i}>
            <button
              className="footer-col-title"
              onClick={() => toggle(i)}
              aria-expanded={openCol === i}
            >
              {col.title}
              <span className="footer-col-chevron" aria-hidden="true" />
            </button>
            <div className="footer-col-body">
              {col.links.map((link, j) => (
                <a href={link.href} className="footer-link" key={j}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div className="footer-copy">&copy; 2026 QualitCore. Todos os direitos reservados.</div>
        </div>
        <div className="footer-bottom-right">
          <div className="footer-badges">
            <span className="footer-badge-pill">v3.0 &middot; Enterprise</span>
            <span className="footer-badge-pill">On-Premise Ready</span>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button className="footer-back-top" onClick={scrollToTop} aria-label="Voltar ao topo">
        <span aria-hidden="true">&uarr;</span>
      </button>
    </footer>
  )
}
