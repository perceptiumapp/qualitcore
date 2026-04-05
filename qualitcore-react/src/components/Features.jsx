import { useState, useRef, useEffect, useCallback } from 'react'
import './Features.css'

const featureSections = [
  {
    id: 'indicadores',
    tab: 'Indicadores',
    title: <>Indicadores que se<br/>atualizam sozinhos.</>,
    desc: 'Motor de indicadores com coleta automática via integrações, coleta manual estruturada e fórmulas versionáveis. Alertas por faixa de meta, tendências e drill-down por setor.',
    items: [
      { icon: '📡', title: 'Coleta automatizada via GLPI e Tasy', desc: 'Integração direta com sistemas hospitalares para eliminar lançamento manual de dados.' },
      { icon: '🎯', title: 'Metas por período e faixa semafórica', desc: 'Verde, amarelo e vermelho configuráveis por indicador. Alertas automáticos fora da meta.' },
      { icon: '🔗', title: 'Indicador fora da meta abre CAPA automaticamente', desc: 'Regra de negócio configurável que conecta resultado ruim à ação corretiva imediata.' },
    ],
    reverse: false,
    mockup: 'indicators',
  },
  {
    id: 'riscos',
    tab: 'Riscos',
    title: <>Riscos que o hospital<br/>enxerga antes de acontecer.</>,
    desc: 'Matriz de riscos integrada com incidentes, auditorias e ouvidoria. Cada risco tem valor financeiro estimado, risco residual calculado e plano de contingência vinculado.',
    items: [
      { icon: '💰', title: 'Valor financeiro por risco', desc: 'Estimativa de impacto financeiro para priorização e comunicação com a diretoria.' },
      { icon: '🔄', title: 'Risco residual recalculado após ação', desc: 'Score atualizado automaticamente após conclusão do plano de mitigação.' },
      { icon: '🆘', title: 'Plano de contingência digital', desc: 'Ciclo completo com QR code de presença, questionários e CAPA automática em caso de falha.' },
    ],
    reverse: true,
    mockup: 'riskMatrix',
  },
  {
    id: 'apresentações',
    tab: 'Relatórios',
    title: <>Relatório executivo<br/>pronto em 1 clique.</>,
    desc: 'O sistema gera automaticamente apresentações PPT e PDF com identidade visual institucional para reuniões gerenciais, ONA, NSP e diretoria — sem trabalho manual, sem planilha paralela.',
    items: [
      { icon: '🤖', title: 'Resumo executivo escrito por IA', desc: 'Análise narrativa do período gerada automaticamente com os pontos críticos e tendências.' },
      { icon: '🎨', title: 'Templates com identidade institucional', desc: 'Paleta de cores, tipografia e layouts institucionais aplicados automaticamente em todos os slides.' },
      { icon: '📐', title: 'Filtros por período, unidade e comitê', desc: 'Gestores personalizam o escopo da apresentação; o sistema monta tudo com os dados oficiais.' },
    ],
    reverse: false,
    mockup: 'reportCard',
  },
]

const indicators = [
  { dot: 'g', name: 'Disponibilidade sistemas críticos', val: '99,7%', trend: 'up', trendText: '↑ 0,2%' },
  { dot: 'g', name: 'SLA helpdesk <8h', val: '91,4%', trend: 'up', trendText: '↑ 4,1%' },
  { dot: 'y', name: 'Tempo médio resolução', val: '5,2h', trend: 'down', trendText: '↓ meta 4h' },
  { dot: 'g', name: 'Backup diário executado', val: '100%', trend: 'up', trendText: '✓ Meta' },
  { dot: 'r', name: 'Incidentes de segurança', val: '3', trend: 'down', trendText: '↑ CAPA aberta' },
]

const riskRows = [
  { label: 'Muito Alto', cells: [['rc-med','Mod.'],['rc-high','Alto'],['rc-crit','Crít.'],['rc-crit','Crít.'],['rc-crit','Crít.']] },
  { label: 'Alto', cells: [['rc-low','Baixo'],['rc-med','Mod.'],['rc-high','Alto'],['rc-crit','Crít.'],['rc-crit','Crít.']] },
  { label: 'Médio', cells: [['rc-low','Baixo'],['rc-low','Baixo'],['rc-med','Mod.'],['rc-high','Alto'],['rc-crit','Crít.']] },
  { label: 'Baixo', cells: [['rc-none','Neg.'],['rc-low','Baixo'],['rc-low','Baixo'],['rc-med','Mod.'],['rc-high','Alto']] },
]

const riskLegend = [
  { cls: 'legend-low', label: 'Baixo (4)' },
  { cls: 'legend-mod', label: 'Moderado (7)' },
  { cls: 'legend-high', label: 'Alto (5)' },
  { cls: 'legend-crit', label: 'Crítico (3)' },
]

function IndicatorsMockup() {
  return (
    <div className="feat-mockup feat-mockup--scanline">
      <div className="feat-mockup-top">
        <div className="fmock-dots"><span></span><span></span><span></span></div>
        <div className="fmock-tab">indicadores / ti / abr-2026</div>
      </div>
      <div className="feat-mockup-body">
        <div className="fmock-section-label">Indicadores de TI — Abril 2026</div>
        {indicators.map((ind, i) => (
          <div className="ind-row" key={i}>
            <div className={`ind-dot ${ind.dot}`}></div>
            <div className="ind-name">{ind.name}</div>
            <div className="ind-val">{ind.val}</div>
            <div className={`ind-trend ${ind.trend}`}>{ind.trendText}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RiskMatrixMockup() {
  return (
    <div className="feat-mockup feat-mockup--scanline">
      <div className="feat-mockup-top">
        <div className="fmock-dots"><span></span><span></span><span></span></div>
        <div className="fmock-tab">riscos / matriz / heatmap</div>
      </div>
      <div className="feat-mockup-body">
        <div className="fmock-section-label">Matriz de Riscos — Probabilidade x Impacto</div>
        {riskRows.map((row, i) => (
          <div key={i} className="risk-row">
            <div className="risk-row-label">{row.label}</div>
            <div className="risk-matrix">
              {row.cells.map(([cls, text], j) => (
                <div className={`risk-cell ${cls}`} key={j}>{text}</div>
              ))}
            </div>
          </div>
        ))}
        <div className="risk-axis-label">← Baixo · · · Probabilidade · · · Muito Alto →</div>
        <div className="risk-legend">
          {riskLegend.map((l, i) => (
            <span className={`risk-legend-pill ${l.cls}`} key={i}>● {l.label}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ReportCardMockup() {
  return (
    <div className="report-card feat-mockup--scanline">
      <div className="report-card-header">
        <div className="report-card-brand">QualitCore</div>
        <div className="report-card-title">Relatório Gerencial</div>
        <div className="report-card-sub">Gestão da Qualidade · Abril 2026</div>
        <div className="report-card-stats">
          {[{val:'47',label:'Notificações'},{val:'89%',label:'CAPA OK'},{val:'3',label:'Riscos Crít.'}].map((s, i) => (
            <div key={i} className="report-card-stat">
              <div className="report-card-stat-val">{s.val}</div>
              <div className="report-card-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="report-card-causes">
        <div className="report-card-causes-title">Top Causas Raiz do Período</div>
        <div className="report-card-cause">1. Falha de comunicação entre turnos</div>
        <div className="report-card-cause">2. Ausência de protocolo padronizado</div>
        <div className="report-card-cause">3. Treinamento insuficiente — equipe nova</div>
      </div>
      <div className="report-card-actions">
        <div className="report-card-btn primary">⬇ Baixar PPT</div>
        <div className="report-card-btn secondary">⬇ Baixar PDF</div>
      </div>
    </div>
  )
}

const mockupMap = {
  indicators: IndicatorsMockup,
  riskMatrix: RiskMatrixMockup,
  reportCard: ReportCardMockup,
}

function FeatureItems({ items, expandedIndex, onToggle }) {
  return (
    <div className="feat-list">
      {items.map((item, i) => {
        const isOpen = expandedIndex === i
        return (
          <div className={`feat-item ${isOpen ? 'feat-item--open' : ''}`} key={i} onClick={() => onToggle(i)}>
            <div className="feat-bullet">{item.icon}</div>
            <div className="feat-item-content">
              <div className="feat-item-title">
                {item.title}
                <span className="feat-item-chevron">{isOpen ? '−' : '+'}</span>
              </div>
              <div className="feat-item-desc">{item.desc}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)
  const [expandedItems, setExpandedItems] = useState({})
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const contentRef = useRef(null)

  const minSwipeDistance = 50

  const handleTouchStart = useCallback((e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }, [])

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }, [])

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (Math.abs(distance) < minSwipeDistance) return

    if (distance > 0 && activeTab < featureSections.length - 1) {
      setActiveTab(prev => prev + 1)
      setExpandedItems({})
    } else if (distance < 0 && activeTab > 0) {
      setActiveTab(prev => prev - 1)
      setExpandedItems({})
    }
  }, [touchStart, touchEnd, activeTab])

  const toggleItem = useCallback((sectionIdx, itemIdx) => {
    setExpandedItems(prev => {
      const key = `${sectionIdx}-${itemIdx}`
      return { ...prev, [key]: !prev[key] }
    })
  }, [])

  const section = featureSections[activeTab]
  const MockupComponent = mockupMap[section.mockup]

  return (
    <section id="features">
      <div className="features-header">
        <div className="section-label">Funcionalidades</div>
        <h2 className="section-title">Cada detalhe pensado<br/>para o ambiente hospitalar.</h2>
      </div>

      {/* Mobile tab indicators */}
      <div className="features-tabs">
        {featureSections.map((s, i) => (
          <button
            key={s.id}
            className={`features-tab ${i === activeTab ? 'features-tab--active' : ''}`}
            onClick={() => { setActiveTab(i); setExpandedItems({}) }}
          >
            {s.tab}
          </button>
        ))}
      </div>

      {/* Mobile swipeable content */}
      <div
        className="features-swipe-container"
        ref={contentRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="features-swipe-track" style={{ transform: `translateX(-${activeTab * 100}%)` }}>
          {featureSections.map((sec, sIdx) => {
            const Mockup = mockupMap[sec.mockup]
            return (
              <div className="features-swipe-slide" key={sec.id}>
                <div className="features-split-mobile-border"></div>
                <div className="feat-visual">
                  <Mockup />
                </div>
                <div className="features-text-block">
                  <h3 className="features-split-title">{sec.title}</h3>
                  <p className="features-split-desc">{sec.desc}</p>
                  <FeatureItems
                    items={sec.items}
                    expandedIndex={expandedItems[`section-${sIdx}`]}
                    onToggle={(itemIdx) => {
                      setExpandedItems(prev => ({
                        ...prev,
                        [`section-${sIdx}`]: prev[`section-${sIdx}`] === itemIdx ? null : itemIdx,
                      }))
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Desktop splits (unchanged layout) */}
      <div className="features-desktop">
        {/* Feature 1: Indicadores */}
        <div className="features-split" style={{marginTop:'60px'}}>
          <div>
            <h3 className="features-split-title">
              Indicadores que se<br/>atualizam sozinhos.
            </h3>
            <p className="features-split-desc">
              Motor de indicadores com coleta automática via integrações, coleta manual estruturada e fórmulas versionáveis. Alertas por faixa de meta, tendências e drill-down por setor.
            </p>
            <div className="feat-list">
              {featureSections[0].items.map((item, i) => (
                <div className="feat-item" key={i}>
                  <div className="feat-bullet">{item.icon}</div>
                  <div>
                    <div className="feat-item-title">{item.title}</div>
                    <div className="feat-item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="feat-visual">
            <IndicatorsMockup />
          </div>
        </div>

        {/* Feature 2: Risk matrix */}
        <div className="features-split reverse" style={{marginTop:'80px'}}>
          <div className="feat-visual">
            <RiskMatrixMockup />
          </div>
          <div>
            <h3 className="features-split-title">
              Riscos que o hospital<br/>enxerga antes de acontecer.
            </h3>
            <p className="features-split-desc">
              Matriz de riscos integrada com incidentes, auditorias e ouvidoria. Cada risco tem valor financeiro estimado, risco residual calculado e plano de contingência vinculado.
            </p>
            <div className="feat-list">
              {featureSections[1].items.map((item, i) => (
                <div className="feat-item" key={i}>
                  <div className="feat-bullet">{item.icon}</div>
                  <div>
                    <div className="feat-item-title">{item.title}</div>
                    <div className="feat-item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature 3: Apresentações */}
        <div className="features-split" style={{marginTop:'80px'}}>
          <div>
            <h3 className="features-split-title">
              Relatório executivo<br/>pronto em 1 clique.
            </h3>
            <p className="features-split-desc">
              O sistema gera automaticamente apresentações PPT e PDF com identidade visual institucional para reuniões gerenciais, ONA, NSP e diretoria — sem trabalho manual, sem planilha paralela.
            </p>
            <div className="feat-list">
              {featureSections[2].items.map((item, i) => (
                <div className="feat-item" key={i}>
                  <div className="feat-bullet">{item.icon}</div>
                  <div>
                    <div className="feat-item-title">{item.title}</div>
                    <div className="feat-item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="feat-visual">
            <ReportCardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
