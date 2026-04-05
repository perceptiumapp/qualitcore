import { useEffect, useRef } from 'react'
import './Problems.css'

const problems = [
  { icon: '\u{1F4C2}', title: 'Dados fragmentados', desc: 'Incidentes no e-mail, riscos na planilha, CAPA no Word, indicadores em outro sistema. Ninguem enxerga o todo.' },
  { icon: '\u{1F517}', title: 'Sem rastreabilidade', desc: 'Impossivel conectar um incidente a sua causa raiz, ao plano de acao, a evidencia e ao indicador de resultado.' },
  { icon: '\u23F1', title: 'Auditoria manual', desc: 'Preparacao para ONA exige semanas de consolidacao manual de evidencias que deveriam estar a um clique.' },
  { icon: '\u{1F4CA}', title: 'Relatorios que levam horas', desc: 'Gestores perdem tempo montando apresentacoes mensais ao inves de agir com base nos dados ja disponiveis.' },
  { icon: '\u{1F465}', title: 'Subnotificacao cultural', desc: 'Sistemas complexos inibem a notificacao. Quem deveria registrar incidentes desiste por dificuldade operacional.' },
  { icon: '\u{1F512}', title: 'Risco de nao conformidade', desc: 'Sem controle centralizado, o hospital fica vulneravel a falhas de LGPD, ONA e regulamentacoes de seguranca.' },
]

export default function Problems() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="problems" className="problems-section">
      <div className="problems-bg-gradient" aria-hidden="true" />
      <div className="section-label" style={{ color: 'var(--teal-light)' }}>
        O Problema
      </div>
      <h2 className="section-title" style={{ color: 'white' }}>
        O hospital moderno nao cabe
        <br />
        mais em planilhas e e-mails.
      </h2>
      <div className="problems-grid">
        {problems.map((p, i) => (
          <div
            className="problem-card"
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="problem-icon">{p.icon}</div>
            <div className="problem-title">{p.title}</div>
            <div className="problem-desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
