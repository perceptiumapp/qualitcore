import { useEffect, useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import './Certs.css'

const certs = [
  {
    icon: '\u{1F3E5}',
    text: 'ONA Nível 3',
    sub: 'Acreditação com Excelência',
    bg: null,
    detail: 'A ONA (Organização Nacional de Acreditação) é o principal selo de qualidade para hospitais no Brasil. O Nível 3 — Acreditado com Excelência — é o mais alto, concedido a hospitais que demonstram maturidade na gestão, resultados consistentes e cultura de melhoria contínua. Menos de 5% dos hospitais brasileiros alcançam esse nível.'
  },
  {
    icon: '\u{1F512}',
    text: 'LGPD Compliant',
    sub: 'Privacidade desde a concepção',
    bg: 'var(--navy-deep)',
    detail: 'A LGPD (Lei Geral de Proteção de Dados) é a lei brasileira que protege os dados pessoais de pacientes e colaboradores. Ser "compliant" significa que o sistema foi construído desde o início para proteger informações sensíveis de saúde — com criptografia, controle de acesso, anonimização e registro de quem acessou cada dado.'
  },
  {
    icon: '\u2699\uFE0F',
    text: 'ISO 31000',
    sub: 'Gestão de riscos',
    bg: 'var(--orange)',
    detail: 'A ISO 31000 é a norma internacional que define como organizações devem identificar, analisar e tratar riscos. No contexto hospitalar, isso significa mapear tudo que pode dar errado — desde falhas em equipamentos até erros de medicação — e criar planos para prevenir ou minimizar cada risco antes que ele se torne um problema real.'
  },
  {
    icon: '\u2764\uFE0F',
    text: 'PNSP / RDC 36',
    sub: 'Segurança do Paciente',
    bg: 'var(--rose)',
    detail: 'O PNSP (Programa Nacional de Segurança do Paciente) e a RDC 36 da Anvisa são as diretrizes que todo hospital brasileiro deve seguir para garantir a segurança dos pacientes. Isso inclui prevenir quedas, erros de medicação, infecções e outros eventos adversos. Cada incidente deve ser registrado, investigado e tratado com ações corretivas.'
  },
  {
    icon: '\u{1F4D0}',
    text: 'ISO 9001',
    sub: 'Qualidade de processos',
    bg: '#2E2E33',
    detail: 'A ISO 9001 é a norma internacional mais reconhecida de gestão da qualidade. Ela garante que o hospital tem processos padronizados, documentados e auditáveis — desde o atendimento ao paciente até a manutenção de equipamentos. O objetivo é entregar resultados consistentes e melhorar continuamente cada atividade.'
  },
  {
    icon: '\u{1F916}',
    text: 'ISO/IEC 42001',
    sub: 'Governança de IA',
    bg: 'var(--navy)',
    detail: 'A ISO/IEC 42001 é a norma internacional para governança de Inteligência Artificial. Ela define como organizações devem usar IA de forma ética, transparente e segura. No QualitCore, isso garante que toda análise feita por IA — como resumos executivos e classificação de riscos — segue padrões de privacidade, explicabilidade e supervisão humana.'
  },
]

export default function Certs() {
  const scrollRef = useRef(null)
  const containerRef = useRef(null)
  const [activePopup, setActivePopup] = useState(null)

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

  const openPopup = useCallback((index) => {
    setActivePopup(index)
    document.body.style.overflow = 'hidden'
  }, [])

  const closePopup = useCallback(() => {
    setActivePopup(null)
    document.body.style.overflow = ''
  }, [])

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closePopup()
    }
    if (activePopup !== null) {
      window.addEventListener('keydown', handleKey)
      return () => window.removeEventListener('keydown', handleKey)
    }
  }, [activePopup, closePopup])

  return (
    <>
      <div id="certs" ref={containerRef} className="scroll-start">
        <div className="certs-inner" ref={scrollRef}>
          {certs.map((c, i) => (
            <div
              className="cert-item"
              key={i}
              onClick={() => openPopup(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openPopup(i)}
            >
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
              <div className="cert-info-hint" aria-hidden="true">i</div>
            </div>
          ))}
        </div>
      </div>

      {activePopup !== null && createPortal(
        <div className="cert-popup-overlay" onClick={closePopup}>
          <div className="cert-popup" onClick={(e) => e.stopPropagation()}>
            <button className="cert-popup-close" onClick={closePopup} aria-label="Fechar">×</button>
            <div className="cert-popup-icon" style={certs[activePopup].bg ? { background: certs[activePopup].bg } : {}}>
              {certs[activePopup].icon}
            </div>
            <h3 className="cert-popup-title">{certs[activePopup].text}</h3>
            <p className="cert-popup-sub">{certs[activePopup].sub}</p>
            <p className="cert-popup-detail">{certs[activePopup].detail}</p>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
