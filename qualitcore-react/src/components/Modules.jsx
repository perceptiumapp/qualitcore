import { useState, useRef, useEffect, useCallback } from 'react'
import Acronym from './Acronym'
import './Modules.css'

const modules = [
  { icon: '\u{1F6A8}', name: 'Notificações e Incidentes', desc: 'Registro rápido de ocorrências, triagem, escalonamento e rastreamento completo do ciclo de vida do evento.', tags: ['RDC 36','NSP','ONA'] },
  { icon: '\u{1F50D}', name: 'Investigação e Causa Raiz', desc: '5 Porquês, Ishikawa, árvore causal, fatores contribuintes e recomendações estruturadas por equipe.', tags: ['RCA','Análise sistêmica'] },
  { icon: '✅', name: 'Plano de Ação / CAPA', desc: 'Ações corretivas, preventivas e de contenção com dono, prazo, evidência obrigatória e avaliação de eficácia.', tags: ['CAPA','Eficácia','Kanban'] },
  { icon: '⚠️', name: 'Gestão de Riscos', desc: 'Matriz de riscos com probabilidade, impacto, detectabilidade, valor financeiro, heatmap e plano de contingência.', tags: ['ISO 31000','Heatmap'] },
  { icon: '\u{1F4C8}', name: 'Indicadores e Analytics', desc: 'Motor de indicadores assistenciais, operacionais e de TI com metas, alertas, tendências e drill-down.', tags: ['BSC','KPI','Dashboard'] },
  { icon: '\u{1F4C4}', name: 'Documentos e Evidências', desc: 'Controle documental com versionamento, workflow de aprovação, ciência eletrônica e QR Code.', tags: ['Versionamento','Workflow'] },
  { icon: '\u{1F393}', name: 'Treinamentos e Capacitação', desc: 'Trilhas de capacitação, ciência de documentos, avaliações, certificados e controle de vencimentos.', tags: ['LMS','Ciência','Certificado'] },
  { icon: '\u{1F4AC}', name: 'SAC / Ouvidoria 360°', desc: 'Canal multicanal para reclamações, elogios, denúncias e sugestões com SLA, NPS e rastreabilidade completa.', tags: ['NPS','Multicanal','SLA'] },
  { icon: '\u{1F3DB}', name: 'Auditorias e ONA', desc: 'Planos de auditoria, checklists por dimensão ONA, achados, evidências e painel de prontidão para acreditação.', tags: ['ONA','Checklist','Evidências'] },
  { icon: '\u{1F4C5}', name: 'Comissões e Reuniões', desc: 'Gestão de comissões, pautas automáticas, atas estruturadas, deliberações rastreáveis e pendências integradas.', tags: ['Atas','Deliberações','ONA'] },
  { icon: '\u{1F3AF}', name: 'Cockpit Executivo', desc: 'Visão consolidada para diretoria com KPIs, alertas críticos, top riscos, ações atrasadas e mapa por unidade.', tags: ['Executivo','Drill-down','Alertas'] },
  { icon: '\u{1F4CA}', name: 'Apresentações Automáticas', desc: 'Geração automática de PPT e PDF institucionais para reuniões gerenciais, ONA, NSP e diretoria — sem trabalho manual.', tags: ['PPT','PDF','IA'] },
  { icon: '\u{1F512}', name: 'Privacidade e LGPD', desc: 'Incidentes de privacidade, solicitações de titulares, inventário de dados sensíveis e controle de base legal.', tags: ['LGPD','DPO','Incidentes'] },
  { icon: '\u{1F517}', name: 'Integrações', desc: 'API gateway desacoplada com Tasy/HIS, GLPI, AD/Azure AD, e-mail, WhatsApp e BI. Logs e retry automático.', tags: ['Tasy','GLPI','API'] },
  { icon: '\u{1F3D7}', name: 'Governança e Cadastro Mestre', desc: 'Base estrutural: unidades, setores, processos, taxonomias, comissões, SLAs, perfis e parâmetros institucionais.', tags: ['RBAC','Base','Parametrização'] },
  { icon: '\u{1F6E1}', name: 'Segurança e Auditoria', desc: 'Trilha imutável de auditoria, MFA, logs funcionais e técnicos, impersonation controlada e pseudonimização.', tags: ['Auditoria','MFA','LGPD'] },
  { icon: '\u{1F4CB}', name: 'Contratos e Fornecedores', desc: 'Gestão de 78+ contratos ativos com vencimentos, avaliação de fornecedores, savings e alertas automáticos.', tags: ['Contratos','SLA','Avaliação'] },
  { icon: '\u{1F3E6}', name: 'Planejamento Orçamentário', desc: 'P.O. digital com BSC, 4 perspectivas, 17 objetivos estratégicos, 40 indicadores e análises trimestrais por IA.', tags: ['P.O.','BSC','IA'] },
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
          <div className="section-label">Módulos</div>
          <h2 className="section-title">18 módulos integrados.<br />Uma plataforma só.</h2>
        </div>
        <p className="section-desc">
          Cada módulo conversa com os demais. Um incidente pode gerar uma investigação, que gera um CAPA, que aparece em reunião, que vai para o relatório da diretoria &mdash; automaticamente.
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
                    <span className="mod-tag" key={j}><Acronym>{t}</Acronym></span>
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
                aria-label={`Ir para módulo ${i + 1}`}
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
                  <span className="mod-tag" key={j}><Acronym>{t}</Acronym></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
