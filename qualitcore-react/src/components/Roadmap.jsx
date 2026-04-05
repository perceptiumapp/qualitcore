import { useEffect, useRef, useState } from 'react'
import './Roadmap.css'

const VISIBLE_COUNT = 4

const waves = [
  {
    headerClass: '',
    label: 'Onda 1 · 0–90 dias',
    name: 'Núcleo Duro',
    timeline: 'MVP: gestão de qualidade ativa',
    modules: [
      'Notificações e Incidentes',
      'Investigação e Causa Raiz',
      'Plano de Ação / CAPA',
      'Gestão de Riscos',
      'Indicadores e Dashboards',
      'Cockpit Executivo básico',
      'Governança e Cadastro Mestre',
      'Segurança e RBAC',
    ],
  },
  {
    headerClass: 'wave2',
    label: 'Onda 2 · 91–180 dias',
    name: 'Governança Hospitalar',
    timeline: 'MMP: hospital auditável',
    modules: [
      'Documentos e Controle Documental',
      'Treinamentos e Capacitação',
      'Comissões e Reuniões',
      'SAC / Ouvidoria 360°',
      'Auditorias e ONA',
      'Privacidade e LGPD',
      'Apresentações Automáticas',
      'Contratos e Fornecedores',
    ],
  },
  {
    headerClass: 'wave3',
    label: 'Onda 3 · 181–365 dias',
    name: 'Inteligência Total',
    timeline: 'Enterprise: IA e integração total',
    modules: [
      'Integração Tasy / HIS Oracle',
      'Integração GLPI Helpdesk',
      'BI e Analytics avançado',
      'IA on-premise (Ollama + LLaMA 3)',
      'RAG sobre base documental',
      'Planejamento Orçamentário',
      'Cockpit Executivo completo',
      'Rastreabilidade Operacional',
    ],
  },
]

function WaveCard({ wave, index }) {
  const [expanded, setExpanded] = useState(false)
  const cardRef = useRef(null)
  const hasExtra = wave.modules.length > VISIBLE_COUNT
  const visibleModules = expanded ? wave.modules : wave.modules.slice(0, VISIBLE_COUNT)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('wave-card--visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  const slideDirection = index % 2 === 0 ? 'wave-card--from-left' : 'wave-card--from-right'

  return (
    <div
      className={`wave-card ${slideDirection}`}
      ref={cardRef}
    >
      <div className={`wave-header ${wave.headerClass}`}>
        <div className="wave-label">{wave.label}</div>
        <div className="wave-name">{wave.name}</div>
        <div className="wave-timeline">{wave.timeline}</div>
      </div>
      <div className="wave-body">
        {visibleModules.map((m, j) => (
          <div className="wave-module" key={j}>
            {m}
          </div>
        ))}
        {hasExtra && !expanded && (
          <button
            className="wave-expand-btn"
            onClick={() => setExpanded(true)}
          >
            ver mais ({wave.modules.length - VISIBLE_COUNT})
          </button>
        )}
        {hasExtra && expanded && (
          <button
            className="wave-expand-btn"
            onClick={() => setExpanded(false)}
          >
            ver menos
          </button>
        )}
      </div>
    </div>
  )
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="roadmap-section">
      <div className="section-label">Roadmap de Implantação</div>
      <h2 className="section-title">
        Três ondas de entrega.
        <br />
        Valor desde o dia um.
      </h2>
      <p className="section-desc">
        Estratégia modular que garante retorno rápido sem comprometer a visão de plataforma completa.
      </p>
      <div className="waves-container">
        {/* Vertical timeline line (mobile) */}
        <div className="waves-timeline" aria-hidden="true">
          {waves.map((_, i) => (
            <div className="waves-timeline-dot" key={i} />
          ))}
        </div>
        <div className="waves-cards">
          {waves.map((w, i) => (
            <WaveCard wave={w} index={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
