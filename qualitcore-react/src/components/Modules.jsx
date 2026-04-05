import { useState, useRef, useEffect, useCallback } from 'react'
import './Modules.css'

const modules = [
  { icon: '\u{1F6A8}', name: 'Notifica\u00e7\u00f5es e Incidentes', desc: 'Registro r\u00e1pido de ocorr\u00eancias, triagem, escalonamento e rastreamento completo do ciclo de vida do evento.', tags: ['RDC 36','NSP','ONA'] },
  { icon: '\u{1F50D}', name: 'Investiga\u00e7\u00e3o e Causa Raiz', desc: '5 Porqu\u00eas, Ishikawa, \u00e1rvore causal, fatores contribuintes e recomenda\u00e7\u00f5es estruturadas por equipe.', tags: ['RCA','An\u00e1lise sist\u00eamica'] },
  { icon: '\u2705', name: 'Plano de A\u00e7\u00e3o / CAPA', desc: 'A\u00e7\u00f5es corretivas, preventivas e de conten\u00e7\u00e3o com dono, prazo, evid\u00eancia obrigat\u00f3ria e avalia\u00e7\u00e3o de efic\u00e1cia.', tags: ['CAPA','Efic\u00e1cia','Kanban'] },
  { icon: '\u26A0\uFE0F', name: 'Gest\u00e3o de Riscos', desc: 'Matriz de riscos com probabilidade, impacto, detectabilidade, valor financeiro, heatmap e plano de conting\u00eancia.', tags: ['ISO 31000','Heatmap'] },
  { icon: '\u{1F4C8}', name: 'Indicadores e Analytics', desc: 'Motor de indicadores assistenciais, operacionais e de TI com metas, alertas, tend\u00eancias e drill-down.', tags: ['BSC','KPI','Dashboard'] },
  { icon: '\u{1F4C4}', name: 'Documentos e Evid\u00eancias', desc: 'Controle documental com versionamento, workflow de aprova\u00e7\u00e3o, ci\u00eancia eletr\u00f4nica e QR Code.', tags: ['Versionamento','Workflow'] },
  { icon: '\u{1F393}', name: 'Treinamentos e Capacita\u00e7\u00e3o', desc: 'Trilhas de capacita\u00e7\u00e3o, ci\u00eancia de documentos, avalia\u00e7\u00f5es, certificados e controle de vencimentos.', tags: ['LMS','Ci\u00eancia','Certificado'] },
  { icon: '\u{1F4AC}', name: 'SAC / Ouvidoria 360\u00b0', desc: 'Canal multicanal para reclama\u00e7\u00f5es, elogios, den\u00fancias e sugest\u00f5es com SLA, NPS e rastreabilidade completa.', tags: ['NPS','Multicanal','SLA'] },
  { icon: '\u{1F3DB}', name: 'Auditorias e ONA', desc: 'Planos de auditoria, checklists por dimens\u00e3o ONA, achados, evid\u00eancias e painel de prontid\u00e3o para acredita\u00e7\u00e3o.', tags: ['ONA','Checklist','Evid\u00eancias'] },
  { icon: '\u{1F4C5}', name: 'Comiss\u00f5es e Reuni\u00f5es', desc: 'Gest\u00e3o de comiss\u00f5es, pautas autom\u00e1ticas, atas estruturadas, delibera\u00e7\u00f5es rastre\u00e1veis e pend\u00eancias integradas.', tags: ['Atas','Delibera\u00e7\u00f5es','ONA'] },
  { icon: '\u{1F3AF}', name: 'Cockpit Executivo', desc: 'Vis\u00e3o consolidada para diretoria com KPIs, alertas cr\u00edticos, top riscos, a\u00e7\u00f5es atrasadas e mapa por unidade.', tags: ['Executivo','Drill-down','Alertas'] },
  { icon: '\u{1F4CA}', name: 'Apresenta\u00e7\u00f5es Autom\u00e1ticas', desc: 'Gera\u00e7\u00e3o autom\u00e1tica de PPT e PDF institucionais para reuni\u00f5es gerenciais, ONA, NSP e diretoria \u2014 sem trabalho manual.', tags: ['PPT','PDF','IA'] },
  { icon: '\u{1F512}', name: 'Privacidade e LGPD', desc: 'Incidentes de privacidade, solicita\u00e7\u00f5es de titulares, invent\u00e1rio de dados sens\u00edveis e controle de base legal.', tags: ['LGPD','DPO','Incidentes'] },
  { icon: '\u{1F517}', name: 'Integra\u00e7\u00f5es', desc: 'API gateway desacoplada com Tasy/HIS, GLPI, AD/Azure AD, e-mail, WhatsApp e BI. Logs e retry autom\u00e1tico.', tags: ['Tasy','GLPI','API'] },
  { icon: '\u{1F3D7}', name: 'Governan\u00e7a e Cadastro Mestre', desc: 'Base estrutural: unidades, setores, processos, taxonomias, comiss\u00f5es, SLAs, perfis e par\u00e2metros institucionais.', tags: ['RBAC','Base','Parametriza\u00e7\u00e3o'] },
  { icon: '\u{1F6E1}', name: 'Seguran\u00e7a e Auditoria', desc: 'Trilha imut\u00e1vel de auditoria, MFA, logs funcionais e t\u00e9cnicos, impersonation controlada e pseudonimiza\u00e7\u00e3o.', tags: ['Auditoria','MFA','LGPD'] },
  { icon: '\u{1F4CB}', name: 'Contratos e Fornecedores', desc: 'Gest\u00e3o de 78+ contratos ativos com vencimentos, avalia\u00e7\u00e3o de fornecedores, savings e alertas autom\u00e1ticos.', tags: ['Contratos','SLA','Avalia\u00e7\u00e3o'] },
  { icon: '\u{1F3E6}', name: 'Planejamento Or\u00e7ament\u00e1rio', desc: 'P.O. digital com BSC, 4 perspectivas, 17 objetivos estrat\u00e9gicos, 40 indicadores e an\u00e1lises trimestrais por IA.', tags: ['P.O.','BSC','IA'] },
]

const GRADIENT_COLORS = [
  'linear-gradient(180deg, var(--teal-main), var(--teal-light))',
  'linear-gradient(180deg, var(--navy), var(--teal-mid))',
  'linear-gradient(180deg, var(--orange), var(--yellow))',
  'linear-gradient(180deg, var(--rose), var(--orange))',
  'linear-gradient(180deg, var(--teal-deep), var(--teal-main))',
  'linear-gradient(180deg, var(--navy-deep), var(--navy))',
]

export default function Modules() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const scrollLeft = el.scrollLeft
    const cardWidth = el.offsetWidth * 0.82
    const idx = Math.round(scrollLeft / cardWidth)
    setActiveIndex(Math.min(idx, modules.length - 1))
  }, [])

  const scrollToIndex = useCallback((idx) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.offsetWidth * 0.82
    el.scrollTo({ left: idx * cardWidth, behavior: 'smooth' })
  }, [])

  return (
    <section id="modules" className="modules-section">
      {isMobile && <div className="modules-dot-grid" aria-hidden="true" />}

      <div className="modules-header">
        <div>
          <div className="section-label">M\u00f3dulos</div>
          <h2 className="section-title">18 m\u00f3dulos integrados.<br />Uma plataforma s\u00f3.</h2>
        </div>
        <p className="section-desc">
          Cada m\u00f3dulo conversa com os demais. Um incidente pode gerar uma investiga\u00e7\u00e3o, que gera um CAPA, que aparece em reuni\u00e3o, que vai para o relat\u00f3rio da diretoria &mdash; automaticamente.
        </p>
      </div>

      {isMobile ? (
        <>
          <div
            className="modules-carousel"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {modules.map((m, i) => (
              <div
                className="module-card module-card--mobile"
                key={i}
                style={{
                  '--card-gradient': GRADIENT_COLORS[i % GRADIENT_COLORS.length],
                }}
              >
                <div className="mod-icon mod-icon--mobile">{m.icon}</div>
                <div className="mod-name">{m.name}</div>
                <div className="mod-desc">{m.desc}</div>
                <div className="mod-tags mod-tags--mobile">
                  {m.tags.map((t, j) => (
                    <span className="mod-tag" key={j}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="modules-dots">
            {modules.map((_, i) => (
              <button
                key={i}
                className={`modules-dot${i === activeIndex ? ' modules-dot--active' : ''}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir para m\u00f3dulo ${i + 1}`}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="modules-grid">
          {modules.map((m, i) => (
            <div
              className="module-card"
              key={i}
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <div className="mod-icon">{m.icon}</div>
              <div className="mod-name">{m.name}</div>
              <div className="mod-desc">{m.desc}</div>
              <div className="mod-tags">
                {m.tags.map((t, j) => (
                  <span className="mod-tag" key={j}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
