import { useEffect, useRef } from 'react'
import './index.css'

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      document.getElementById('main-nav')?.classList.toggle('scrolled', window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="main-nav">
      <a href="#" className="nav-logo">
        <div className="nav-logo-mark">QC</div>
        <div className="nav-logo-text">Qualit<span>Core</span></div>
      </a>
      <ul className="nav-links">
        <li><a href="#modules">Módulos</a></li>
        <li><a href="#features">Funcionalidades</a></li>
        <li><a href="#regulatory">Regulatório</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#tech">Tecnologia</a></li>
      </ul>
      <a href="#cta" className="nav-cta">Solicitar demonstração</a>
    </nav>
  )
}

function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-badge">Plataforma de Gestão da Qualidade · ONA Nível 3</div>
        <h1 className="hero-title">
          Gestão de qualidade
          <span className="accent line2">hospitalar integrada,</span>
          do incidente à evidência.
        </h1>
        <p className="hero-desc">
          QualitCore é a plataforma enterprise que centraliza incidentes, CAPA, riscos, indicadores, documentos, ouvidoria, reuniões e apresentações executivas em um único sistema rastreável e auditável.
        </p>
        <div className="hero-actions">
          <a href="#cta" className="btn-primary btn-large">Ver demonstração →</a>
          <a href="#modules" className="btn-secondary">Explorar módulos</a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">18</div>
            <div className="hero-stat-label">Módulos integrados</div>
          </div>
          <div>
            <div className="hero-stat-num">96,7%</div>
            <div className="hero-stat-label">Conformidade ONA</div>
          </div>
          <div>
            <div className="hero-stat-num">360°</div>
            <div className="hero-stat-label">Rastreabilidade</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-float-badge badge-2">
          <div className="badge-icon teal">📊</div>
          <div>
            <div>Indicadores</div>
            <div style={{fontSize:'10px',color:'var(--gray-mid)',fontWeight:400}}>Atualizados em tempo real</div>
          </div>
        </div>

        <div className="hero-screen">
          <div className="screen-topbar">
            <div className="screen-dots"><span></span><span></span><span></span></div>
            <div className="screen-title-bar">app.qualitcore.com.br / cockpit-executivo</div>
          </div>

          <div className="screen-grid">
            <div className="screen-card">
              <div className="scard-label">Incidentes Abertos</div>
              <div className="scard-value warn">14</div>
              <div className="scard-delta down">↓ 3 vs mês anterior</div>
            </div>
            <div className="screen-card">
              <div className="scard-label">CAPA Concluídas</div>
              <div className="scard-value good">87%</div>
              <div className="scard-delta up">↑ 12% este mês</div>
            </div>
            <div className="screen-card">
              <div className="scard-label">Riscos Críticos</div>
              <div className="scard-value danger">3</div>
              <div className="scard-delta down">↓ 1 tratado hoje</div>
            </div>
            <div className="screen-card">
              <div className="scard-label">ONA Score</div>
              <div className="scard-value good">96,7%</div>
              <div className="scard-delta up">↑ Nível 3 mantido</div>
            </div>
          </div>

          <div style={{marginTop:'10px',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.05)',borderRadius:'10px',padding:'12px'}}>
            <div className="sbar-label">Desempenho por Setor</div>
            <div className="sbar-row"><span className="sbar-name">UTI</span><div className="sbar-track"><div className="sbar-fill" style={{width:'91%'}}></div></div><span className="sbar-pct">91%</span></div>
            <div className="sbar-row"><span className="sbar-name">Farmácia</span><div className="sbar-track"><div className="sbar-fill" style={{width:'84%'}}></div></div><span className="sbar-pct">84%</span></div>
            <div className="sbar-row"><span className="sbar-name">Enfermagem</span><div className="sbar-track"><div className="sbar-fill orange" style={{width:'71%'}}></div></div><span className="sbar-pct">71%</span></div>
            <div className="sbar-row"><span className="sbar-name">CME</span><div className="sbar-track"><div className="sbar-fill" style={{width:'96%'}}></div></div><span className="sbar-pct">96%</span></div>
          </div>

          <div className="screen-incidents">
            <div className="sinc-header">
              <div className="sinc-title">Últimas Notificações</div>
              <div className="sinc-badge">LIVE</div>
            </div>
            <div className="sinc-row">
              <div className="sinc-dot high"></div>
              <div className="sinc-text">Evento sentinela — UTI Adult.</div>
              <div className="sinc-status open">Aberto</div>
            </div>
            <div className="sinc-row">
              <div className="sinc-dot med"></div>
              <div className="sinc-text">Quase falha — Farmácia</div>
              <div className="sinc-status prog">Em triagem</div>
            </div>
            <div className="sinc-row">
              <div className="sinc-dot low"></div>
              <div className="sinc-text">Melhoria processo — CME</div>
              <div className="sinc-status done">Concluído</div>
            </div>
          </div>
        </div>

        <div className="hero-float-badge badge-1">
          <div className="badge-icon green">✅</div>
          <div>
            <div>RCA concluída</div>
            <div style={{fontSize:'10px',color:'var(--gray-mid)',fontWeight:400}}>CAPA gerada automaticamente</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Certs() {
  const certs = [
    { icon: '🏥', text: 'ONA Nível 3', sub: 'Acreditação com Excelência', bg: null },
    { icon: '🔒', text: 'LGPD Compliant', sub: 'Privacidade desde a concepção', bg: 'var(--navy-deep)' },
    { icon: '⚙️', text: 'ISO 31000', sub: 'Gestão de riscos', bg: 'var(--orange)' },
    { icon: '❤️', text: 'PNSP / RDC 36', sub: 'Segurança do Paciente', bg: 'var(--rose)' },
    { icon: '📐', text: 'ISO 9001', sub: 'Qualidade de processos', bg: '#2E2E33' },
    { icon: '🤖', text: 'ISO/IEC 42001', sub: 'Governança de IA', bg: 'var(--navy)' },
  ]
  return (
    <div id="certs">
      <div className="certs-inner">
        {certs.map((c, i) => (
          <div className="cert-item" key={i}>
            <div className="cert-icon" style={c.bg ? {background: c.bg} : {}}>{c.icon}</div>
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

function Problems() {
  const problems = [
    { icon: '📂', title: 'Dados fragmentados', desc: 'Incidentes no e-mail, riscos na planilha, CAPA no Word, indicadores em outro sistema. Ninguém enxerga o todo.' },
    { icon: '🔗', title: 'Sem rastreabilidade', desc: 'Impossível conectar um incidente à sua causa raiz, ao plano de ação, à evidência e ao indicador de resultado.' },
    { icon: '⏱', title: 'Auditoria manual', desc: 'Preparação para ONA exige semanas de consolidação manual de evidências que deveriam estar a um clique.' },
    { icon: '📊', title: 'Relatórios que levam horas', desc: 'Gestores perdem tempo montando apresentações mensais ao invés de agir com base nos dados já disponíveis.' },
    { icon: '👥', title: 'Subnotificação cultural', desc: 'Sistemas complexos inibem a notificação. Quem deveria registrar incidentes desiste por dificuldade operacional.' },
    { icon: '🔒', title: 'Risco de não conformidade', desc: 'Sem controle centralizado, o hospital fica vulnerável a falhas de LGPD, ONA e regulamentações de segurança.' },
  ]
  return (
    <section id="problems">
      <div className="section-label" style={{color:'var(--teal-light)'}}>O Problema</div>
      <h2 className="section-title" style={{color:'white'}}>O hospital moderno não cabe<br/>mais em planilhas e e-mails.</h2>
      <div className="problems-grid">
        {problems.map((p, i) => (
          <div className="problem-card" key={i}>
            <div className="problem-icon">{p.icon}</div>
            <div className="problem-title">{p.title}</div>
            <div className="problem-desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { num: '01', title: 'Registrar', desc: 'Qualquer colaborador notifica um incidente, risco ou manifestação em poucos cliques, com formulário simplificado.' },
    { num: '02', title: 'Investigar', desc: 'RCA estruturada com 5 Porquês, Ishikawa e árvore causal. Sistema apoia a equipe investigadora com dados integrados.' },
    { num: '03', title: 'Tratar', desc: 'CAPA gerada a partir da investigação. Plano de ação com responsáveis, prazos, evidências e avaliação de eficácia.' },
    { num: '04', title: 'Aprender', desc: 'Indicadores retroalimentados, riscos recalculados, apresentações geradas automaticamente e memória institucional construída.' },
  ]
  return (
    <section id="how">
      <div className="section-label">Como Funciona</div>
      <h2 className="section-title">Do registro ao aprendizado,<br/>tudo conectado e rastreável.</h2>
      <div className="how-steps">
        {steps.map((s, i) => (
          <div className="how-step" key={i}>
            <div className="how-step-num">{s.num}</div>
            <div className="how-step-title">{s.title}</div>
            <div className="how-step-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Modules() {
  const modules = [
    { icon: '🚨', name: 'Notificações e Incidentes', desc: 'Registro rápido de ocorrências, triagem, escalonamento e rastreamento completo do ciclo de vida do evento.', tags: ['RDC 36','NSP','ONA'] },
    { icon: '🔍', name: 'Investigação e Causa Raiz', desc: '5 Porquês, Ishikawa, árvore causal, fatores contribuintes e recomendações estruturadas por equipe.', tags: ['RCA','Análise sistêmica'] },
    { icon: '✅', name: 'Plano de Ação / CAPA', desc: 'Ações corretivas, preventivas e de contenção com dono, prazo, evidência obrigatória e avaliação de eficácia.', tags: ['CAPA','Eficácia','Kanban'] },
    { icon: '⚠️', name: 'Gestão de Riscos', desc: 'Matriz de riscos com probabilidade, impacto, detectabilidade, valor financeiro, heatmap e plano de contingência.', tags: ['ISO 31000','Heatmap'] },
    { icon: '📈', name: 'Indicadores e Analytics', desc: 'Motor de indicadores assistenciais, operacionais e de TI com metas, alertas, tendências e drill-down.', tags: ['BSC','KPI','Dashboard'] },
    { icon: '📄', name: 'Documentos e Evidências', desc: 'Controle documental com versionamento, workflow de aprovação, ciência eletrônica e QR Code.', tags: ['Versionamento','Workflow'] },
    { icon: '🎓', name: 'Treinamentos e Capacitação', desc: 'Trilhas de capacitação, ciência de documentos, avaliações, certificados e controle de vencimentos.', tags: ['LMS','Ciência','Certificado'] },
    { icon: '💬', name: 'SAC / Ouvidoria 360°', desc: 'Canal multicanal para reclamações, elogios, denúncias e sugestões com SLA, NPS e rastreabilidade completa.', tags: ['NPS','Multicanal','SLA'] },
    { icon: '🏛', name: 'Auditorias e ONA', desc: 'Planos de auditoria, checklists por dimensão ONA, achados, evidências e painel de prontidão para acreditação.', tags: ['ONA','Checklist','Evidências'] },
    { icon: '📅', name: 'Comissões e Reuniões', desc: 'Gestão de comissões, pautas automáticas, atas estruturadas, deliberações rastreáveis e pendências integradas.', tags: ['Atas','Deliberações','ONA'] },
    { icon: '🎯', name: 'Cockpit Executivo', desc: 'Visão consolidada para diretoria com KPIs, alertas críticos, top riscos, ações atrasadas e mapa por unidade.', tags: ['Executivo','Drill-down','Alertas'] },
    { icon: '📊', name: 'Apresentações Automáticas', desc: 'Geração automática de PPT e PDF institucionais para reuniões gerenciais, ONA, NSP e diretoria — sem trabalho manual.', tags: ['PPT','PDF','IA'] },
    { icon: '🔒', name: 'Privacidade e LGPD', desc: 'Incidentes de privacidade, solicitações de titulares, inventário de dados sensíveis e controle de base legal.', tags: ['LGPD','DPO','Incidentes'] },
    { icon: '🔗', name: 'Integrações', desc: 'API gateway desacoplada com Tasy/HIS, GLPI, AD/Azure AD, e-mail, WhatsApp e BI. Logs e retry automático.', tags: ['Tasy','GLPI','API'] },
    { icon: '🏗', name: 'Governança e Cadastro Mestre', desc: 'Base estrutural: unidades, setores, processos, taxonomias, comissões, SLAs, perfis e parâmetros institucionais.', tags: ['RBAC','Base','Parametrização'] },
    { icon: '🛡', name: 'Segurança e Auditoria', desc: 'Trilha imutável de auditoria, MFA, logs funcionais e técnicos, impersonation controlada e pseudonimização.', tags: ['Auditoria','MFA','LGPD'] },
    { icon: '📋', name: 'Contratos e Fornecedores', desc: 'Gestão de 78+ contratos ativos com vencimentos, avaliação de fornecedores, savings e alertas automáticos.', tags: ['Contratos','SLA','Avaliação'] },
    { icon: '🏦', name: 'Planejamento Orçamentário', desc: 'P.O. digital com BSC, 4 perspectivas, 17 objetivos estratégicos, 40 indicadores e análises trimestrais por IA.', tags: ['P.O.','BSC','IA'] },
  ]
  return (
    <section id="modules">
      <div className="modules-header">
        <div>
          <div className="section-label">Módulos</div>
          <h2 className="section-title">18 módulos integrados.<br/>Uma plataforma só.</h2>
        </div>
        <p className="section-desc">Cada módulo conversa com os demais. Um incidente pode gerar uma investigação, que gera um CAPA, que aparece em reunião, que vai para o relatório da diretoria — automaticamente.</p>
      </div>
      <div className="modules-grid">
        {modules.map((m, i) => (
          <div className="module-card" key={i} style={{transitionDelay: `${(i % 3) * 60}ms`}}>
            <div className="mod-icon">{m.icon}</div>
            <div className="mod-name">{m.name}</div>
            <div className="mod-desc">{m.desc}</div>
            <div className="mod-tags">
              {m.tags.map((t, j) => <span className="mod-tag" key={j}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features">
      <div className="section-label">Funcionalidades</div>
      <h2 className="section-title">Cada detalhe pensado<br/>para o ambiente hospitalar.</h2>

      {/* Feature 1: Indicadores */}
      <div className="features-split" style={{marginTop:'60px'}}>
        <div>
          <h3 style={{fontSize:'28px',fontWeight:800,color:'var(--navy-deep)',marginBottom:'14px'}}>
            Indicadores que se<br/>atualizam sozinhos.
          </h3>
          <p style={{fontSize:'16px',color:'var(--gray-dark)',lineHeight:1.7}}>
            Motor de indicadores com coleta automática via integrações, coleta manual estruturada e fórmulas versionáveis. Alertas por faixa de meta, tendências e drill-down por setor.
          </p>
          <div className="feat-list">
            <div className="feat-item">
              <div className="feat-bullet">📡</div>
              <div>
                <div className="feat-item-title">Coleta automatizada via GLPI e Tasy</div>
                <div className="feat-item-desc">Integração direta com sistemas hospitalares para eliminar lançamento manual de dados.</div>
              </div>
            </div>
            <div className="feat-item">
              <div className="feat-bullet">🎯</div>
              <div>
                <div className="feat-item-title">Metas por período e faixa semafórica</div>
                <div className="feat-item-desc">Verde, amarelo e vermelho configuráveis por indicador. Alertas automáticos fora da meta.</div>
              </div>
            </div>
            <div className="feat-item">
              <div className="feat-bullet">🔗</div>
              <div>
                <div className="feat-item-title">Indicador fora da meta abre CAPA automaticamente</div>
                <div className="feat-item-desc">Regra de negócio configurável que conecta resultado ruim à ação corretiva imediata.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="feat-visual">
          <div className="feat-mockup">
            <div className="feat-mockup-top">
              <div className="fmock-dots"><span></span><span></span><span></span></div>
              <div className="fmock-tab">indicadores / ti / abr-2025</div>
            </div>
            <div className="feat-mockup-body">
              <div style={{fontSize:'12px',textTransform:'uppercase',letterSpacing:'0.8px',color:'var(--gray-mid)',marginBottom:'14px',fontFamily:"'JetBrains Mono',monospace"}}>Indicadores de TI — Abril 2025</div>
              {[
                { dot: 'g', name: 'Disponibilidade sistemas críticos', val: '99,7%', trend: 'up', trendText: '↑ 0,2%' },
                { dot: 'g', name: 'SLA helpdesk <8h', val: '91,4%', trend: 'up', trendText: '↑ 4,1%' },
                { dot: 'y', name: 'Tempo médio resolução', val: '5,2h', trend: 'down', trendText: '↓ meta 4h' },
                { dot: 'g', name: 'Backup diário executado', val: '100%', trend: 'up', trendText: '✓ Meta' },
                { dot: 'r', name: 'Incidentes de segurança', val: '3', trend: 'down', trendText: '↑ CAPA aberta' },
              ].map((ind, i) => (
                <div className="ind-row" key={i}>
                  <div className={`ind-dot ${ind.dot}`}></div>
                  <div className="ind-name">{ind.name}</div>
                  <div className="ind-val">{ind.val}</div>
                  <div className={`ind-trend ${ind.trend}`}>{ind.trendText}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2: Risk matrix */}
      <div className="features-split reverse" style={{marginTop:'80px'}}>
        <div className="feat-visual">
          <div className="feat-mockup">
            <div className="feat-mockup-top">
              <div className="fmock-dots"><span></span><span></span><span></span></div>
              <div className="fmock-tab">riscos / matriz / heatmap</div>
            </div>
            <div className="feat-mockup-body">
              <div style={{fontSize:'12px',textTransform:'uppercase',letterSpacing:'0.8px',color:'var(--gray-mid)',marginBottom:'16px',fontFamily:"'JetBrains Mono',monospace"}}>Matriz de Riscos — Probabilidade × Impacto</div>
              {[
                { label: 'Muito Alto', cells: [['rc-med','Mod.'],['rc-high','Alto'],['rc-crit','Crít.'],['rc-crit','Crít.'],['rc-crit','Crít.']] },
                { label: 'Alto', cells: [['rc-low','Baixo'],['rc-med','Mod.'],['rc-high','Alto'],['rc-crit','Crít.'],['rc-crit','Crít.']] },
                { label: 'Médio', cells: [['rc-low','Baixo'],['rc-low','Baixo'],['rc-med','Mod.'],['rc-high','Alto'],['rc-crit','Crít.']] },
                { label: 'Baixo', cells: [['rc-none','Neg.'],['rc-low','Baixo'],['rc-low','Baixo'],['rc-med','Mod.'],['rc-high','Alto']] },
              ].map((row, i) => (
                <div key={i} style={{display:'flex',gap:'6px',marginBottom:'6px',alignItems:'center'}}>
                  <div style={{width:'60px',fontSize:'10px',color:'var(--gray-mid)',textAlign:'right'}}>{row.label}</div>
                  <div className="risk-matrix" style={{flex:1}}>
                    {row.cells.map(([cls, text], j) => (
                      <div className={`risk-cell ${cls}`} key={j}>{text}</div>
                    ))}
                  </div>
                </div>
              ))}
              <div style={{fontSize:'11px',color:'var(--gray-mid)',textAlign:'center'}}>← Baixo · · · Probabilidade · · · Muito Alto →</div>
              <div style={{marginTop:'16px',display:'flex',gap:'8px',flexWrap:'wrap'}}>
                <span style={{fontSize:'10px',padding:'3px 10px',borderRadius:'4px',background:'rgba(40,202,65,0.12)',color:'green'}}>● Baixo (4)</span>
                <span style={{fontSize:'10px',padding:'3px 10px',borderRadius:'4px',background:'rgba(255,204,41,0.15)',color:'#8a7000'}}>● Moderado (7)</span>
                <span style={{fontSize:'10px',padding:'3px 10px',borderRadius:'4px',background:'rgba(245,134,52,0.15)',color:'var(--orange)'}}>● Alto (5)</span>
                <span style={{fontSize:'10px',padding:'3px 10px',borderRadius:'4px',background:'rgba(240,89,115,0.12)',color:'var(--rose)'}}>● Crítico (3)</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 style={{fontSize:'28px',fontWeight:800,color:'var(--navy-deep)',marginBottom:'14px'}}>
            Riscos que o hospital<br/>enxerga antes de acontecer.
          </h3>
          <p style={{fontSize:'16px',color:'var(--gray-dark)',lineHeight:1.7}}>
            Matriz de riscos integrada com incidentes, auditorias e ouvidoria. Cada risco tem valor financeiro estimado, risco residual calculado e plano de contingência vinculado.
          </p>
          <div className="feat-list">
            <div className="feat-item">
              <div className="feat-bullet">💰</div>
              <div>
                <div className="feat-item-title">Valor financeiro por risco</div>
                <div className="feat-item-desc">Estimativa de impacto financeiro para priorização e comunicação com a diretoria.</div>
              </div>
            </div>
            <div className="feat-item">
              <div className="feat-bullet">🔄</div>
              <div>
                <div className="feat-item-title">Risco residual recalculado após ação</div>
                <div className="feat-item-desc">Score atualizado automaticamente após conclusão do plano de mitigação.</div>
              </div>
            </div>
            <div className="feat-item">
              <div className="feat-bullet">🆘</div>
              <div>
                <div className="feat-item-title">Plano de contingência digital</div>
                <div className="feat-item-desc">Ciclo completo com QR code de presença, questionários e CAPA automática em caso de falha.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 3: Apresentações */}
      <div className="features-split" style={{marginTop:'80px'}}>
        <div>
          <h3 style={{fontSize:'28px',fontWeight:800,color:'var(--navy-deep)',marginBottom:'14px'}}>
            Relatório executivo<br/>pronto em 1 clique.
          </h3>
          <p style={{fontSize:'16px',color:'var(--gray-dark)',lineHeight:1.7}}>
            O sistema gera automaticamente apresentações PPT e PDF com identidade visual institucional para reuniões gerenciais, ONA, NSP e diretoria — sem trabalho manual, sem planilha paralela.
          </p>
          <div className="feat-list">
            <div className="feat-item">
              <div className="feat-bullet">🤖</div>
              <div>
                <div className="feat-item-title">Resumo executivo escrito por IA</div>
                <div className="feat-item-desc">Análise narrativa do período gerada automaticamente com os pontos críticos e tendências.</div>
              </div>
            </div>
            <div className="feat-item">
              <div className="feat-bullet">🎨</div>
              <div>
                <div className="feat-item-title">Templates com identidade institucional</div>
                <div className="feat-item-desc">Paleta de cores, tipografia e layouts institucionais aplicados automaticamente em todos os slides.</div>
              </div>
            </div>
            <div className="feat-item">
              <div className="feat-bullet">📐</div>
              <div>
                <div className="feat-item-title">Filtros por período, unidade e comitê</div>
                <div className="feat-item-desc">Gestores personalizam o escopo da apresentação; o sistema monta tudo com os dados oficiais.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="feat-visual">
          <div style={{background:'var(--navy-deep)',borderRadius:'20px',padding:'24px',boxShadow:'0 24px 60px rgba(14,55,79,0.2)'}}>
            <div style={{background:'linear-gradient(135deg,var(--teal-deep),var(--teal-main))',borderRadius:'12px',padding:'20px',marginBottom:'12px'}}>
              <div style={{fontSize:'10px',color:'rgba(255,255,255,0.6)',letterSpacing:'1px',textTransform:'uppercase',fontFamily:"'JetBrains Mono',monospace",marginBottom:'8px'}}>QualitCore</div>
              <div style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:'18px',color:'white',marginBottom:'4px'}}>Relatório Gerencial</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>Gestão da Qualidade · Abril 2025</div>
              <div style={{marginTop:'16px',display:'flex',gap:'12px'}}>
                {[{val:'47',label:'Notificações'},{val:'89%',label:'CAPA OK'},{val:'3',label:'Riscos Crít.'}].map((s, i) => (
                  <div key={i} style={{background:'rgba(255,255,255,0.15)',borderRadius:'8px',padding:'10px 14px',textAlign:'center',flex:1}}>
                    <div style={{fontSize:'22px',fontWeight:800,color:'white'}}>{s.val}</div>
                    <div style={{fontSize:'10px',color:'rgba(255,255,255,0.6)'}}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'10px',padding:'14px',marginBottom:'8px'}}>
              <div style={{fontSize:'10px',color:'rgba(203,233,231,0.4)',textTransform:'uppercase',letterSpacing:'0.8px',marginBottom:'10px',fontFamily:"'JetBrains Mono',monospace"}}>Top Causas Raiz do Período</div>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,0.7)',marginBottom:'6px'}}>1. Falha de comunicação entre turnos</div>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,0.7)',marginBottom:'6px'}}>2. Ausência de protocolo padronizado</div>
              <div style={{fontSize:'12px',color:'rgba(255,255,255,0.7)'}}>3. Treinamento insuficiente — equipe nova</div>
            </div>
            <div style={{display:'flex',gap:'8px'}}>
              <div style={{background:'rgba(1,113,123,0.3)',border:'1px solid rgba(79,170,172,0.3)',borderRadius:'8px',padding:'8px 14px',fontSize:'11px',color:'var(--teal-light)',fontFamily:"'JetBrains Mono',monospace",cursor:'pointer',flex:1,textAlign:'center'}}>⬇ Baixar PPT</div>
              <div style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'8px',padding:'8px 14px',fontSize:'11px',color:'rgba(255,255,255,0.6)',cursor:'pointer',flex:1,textAlign:'center'}}>⬇ Baixar PDF</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Regulatory() {
  const regs = [
    { badge: 'ona', label: 'ONA', title: 'Acreditação ONA', desc: 'Módulo de auditoria mapeado nas dimensões ONA. Central de evidências por requisito. Painel de prontidão para visita. Score de conformidade em tempo real.' },
    { badge: 'lgpd', label: 'LGPD', title: 'Lei Geral de Proteção de Dados', desc: 'Pseudonimização obrigatória antes de qualquer chamada de IA. Acesso a dados sensíveis auditado. Solicitações de titulares com SLA. Incidentes de privacidade com workflow próprio.' },
    { badge: 'iso', label: 'ISO 31000', title: 'Gestão de Riscos', desc: 'Ciclo completo: identificar, analisar, avaliar, tratar, monitorar e comunicar. Risco residual calculável. Apetite de risco configurável. Comunicação integrada.' },
    { badge: 'pnsp', label: 'PNSP', title: 'Segurança do Paciente', desc: 'NSP integrado. Plano de Segurança do Paciente digital. Notificação de incidentes com RDC 36. Evento sentinela com fluxo prioritário e investigação obrigatória.' },
  ]
  return (
    <section id="regulatory">
      <div className="section-label">Conformidade Regulatória</div>
      <h2 className="section-title">Construído sobre os<br/>padrões que o hospital exige.</h2>
      <p className="section-desc">Cada módulo foi projetado com as obrigações regulatórias do setor hospitalar brasileiro como requisito de negócio, não como adaptação posterior.</p>
      <div className="reg-grid">
        {regs.map((r, i) => (
          <div className="reg-card" key={i}>
            <div className={`reg-badge ${r.badge}`}>{r.label}</div>
            <div className="reg-card-title">{r.title}</div>
            <div className="reg-card-desc">{r.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Stats() {
  const statsRef = useRef(null)

  useEffect(() => {
    const animateCount = (el, target, suffix = '', prefix = '') => {
      const duration = 1800
      const start = performance.now()
      const update = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const val = typeof target === 'number' ? Math.floor(eased * target) : target
        el.innerHTML = `${prefix}${val}<span>${suffix}</span>`
        if (progress < 1) requestAnimationFrame(update)
      }
      requestAnimationFrame(update)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const nums = e.target.querySelectorAll('.stat-num')
          nums.forEach(n => {
            const text = n.textContent
            if (text.includes('96')) animateCount(n, 96, ',7%')
            else if (text.includes('18')) animateCount(n, 18, '+')
            else if (text.includes('78')) animateCount(n, 78, '+')
            else if (text.includes('0')) animateCount(n, 0, 'h')
          })
          observer.disconnect()
        }
      })
    }, { threshold: 0.4 })

    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" ref={statsRef}>
      <div className="section-label" style={{color:'var(--teal-light)'}}>QualitCore em Números</div>
      <h2 className="section-title" style={{color:'white'}}>Resultados reais,<br/>hospital real.</h2>
      <div className="stats-grid">
        <div className="stat-block"><div className="stat-num">96<span>,7%</span></div><div className="stat-desc">Conformidade ONA — auditoria fev/2025</div></div>
        <div className="stat-block"><div className="stat-num">18<span>+</span></div><div className="stat-desc">Módulos integrados em uma plataforma</div></div>
        <div className="stat-block"><div className="stat-num">78<span>+</span></div><div className="stat-desc">Contratos ativos gerenciados</div></div>
        <div className="stat-block"><div className="stat-num">0<span>h</span></div><div className="stat-desc">Para gerar apresentação executiva completa</div></div>
      </div>
    </section>
  )
}

function Roadmap() {
  const waves = [
    { headerClass: '', label: 'Onda 1 · 0–90 dias', name: 'Núcleo Duro', timeline: 'MVP: gestão de qualidade ativa', modules: ['Notificações e Incidentes','Investigação e Causa Raiz','Plano de Ação / CAPA','Gestão de Riscos','Indicadores e Dashboards','Cockpit Executivo básico','Governança e Cadastro Mestre','Segurança e RBAC'] },
    { headerClass: 'wave2', label: 'Onda 2 · 91–180 dias', name: 'Governança Hospitalar', timeline: 'MMP: hospital auditável', modules: ['Documentos e Controle Documental','Treinamentos e Capacitação','Comissões e Reuniões','SAC / Ouvidoria 360°','Auditorias e ONA','Privacidade e LGPD','Apresentações Automáticas','Contratos e Fornecedores'] },
    { headerClass: 'wave3', label: 'Onda 3 · 181–365 dias', name: 'Inteligência Total', timeline: 'Enterprise: IA e integração total', modules: ['Integração Tasy / HIS Oracle','Integração GLPI Helpdesk','BI e Analytics avançado','IA on-premise (Ollama + LLaMA 3)','RAG sobre base documental','Planejamento Orçamentário','Cockpit Executivo completo','Rastreabilidade Operacional'] },
  ]
  return (
    <section id="roadmap">
      <div className="section-label">Roadmap de Implantação</div>
      <h2 className="section-title">Três ondas de entrega.<br/>Valor desde o dia um.</h2>
      <p className="section-desc">Estratégia modular que garante retorno rápido sem comprometer a visão de plataforma completa.</p>
      <div className="waves-container">
        {waves.map((w, i) => (
          <div className="wave-card" key={i}>
            <div className={`wave-header ${w.headerClass}`}>
              <div className="wave-label">{w.label}</div>
              <div className="wave-name">{w.name}</div>
              <div className="wave-timeline">{w.timeline}</div>
            </div>
            <div className="wave-body">
              {w.modules.map((m, j) => <div className="wave-module" key={j}>{m}</div>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Highlight() {
  return (
    <section id="highlight">
      <div className="ona-badge-large">
        🏆 <span>ONA Nível 3</span> — Acreditado com Excelência · Fevereiro 2025
      </div>
      <div className="highlight-quote">
        "O QualitCore transformou a gestão da qualidade hospitalar de um processo <span className="hl">manual e reativo</span> para um sistema <span className="hl">integrado, auditável e preditivo</span> — pronto para a acreditação de excelência."
      </div>
      <div className="highlight-source">
        <div className="hl-avatar">QC</div>
        <div>
          <div className="hl-name">Equipe QualitCore</div>
          <div className="hl-role">Coordenação de TI e Inovação</div>
        </div>
      </div>
    </section>
  )
}

function TechStack() {
  const groups = [
    { label: 'Frontend', items: ['Next.js 14','TypeScript','Tailwind CSS','Turborepo'] },
    { label: 'Backend', items: ['NestJS','Prisma ORM','PostgreSQL 16','Redis','BullMQ'] },
    { label: 'IA e Integrações', items: ['Anthropic API','Ollama + LLaMA 3','LangChain','RAG on-premise','MS Graph API'] },
    { label: 'Infraestrutura', items: ['Docker Compose','MinIO S3','GitHub Actions','PptxGenJS','JWT + MFA'] },
  ]
  return (
    <section id="tech">
      <div className="section-label">Stack Tecnológica</div>
      <h2 className="section-title">Enterprise. Moderno.<br/>Pronto para on-premise ou cloud.</h2>
      <p className="section-desc">Arquitetura modular escalável, construída sobre tecnologias open-source de mercado, com suporte a deploy on-premise conforme exigências de privacidade de dados de saúde.</p>
      <div className="tech-grid">
        {groups.map((g, i) => (
          <div className="tech-group" key={i}>
            <div className="tech-group-label">{g.label}</div>
            {g.items.map((item, j) => (
              <span className="tech-pill" key={j}><span className="tp-dot"></span>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="cta">
      <div className="cta-inner">
        <span className="cta-eyebrow">Pronto para transformar a gestão do seu hospital?</span>
        <h2 className="cta-title">Comece com o que<br/>mais impacta. Agora.</h2>
        <p className="cta-desc">
          Do primeiro incidente registrado ao relatório de diretoria gerado automaticamente. O QualitCore foi construído para o hospital que leva qualidade a sério.
        </p>
        <div className="cta-actions">
          <a href="mailto:contato@qualitcore.com.br" className="btn-primary btn-large">Solicitar demonstração →</a>
          <a href="#modules" className="btn-outline-large">Ver todos os módulos</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">Qualit<span>Core</span></div>
          <div className="footer-desc">
            Plataforma de gestão integrada da qualidade hospitalar. ONA Nível 3 com Excelência.
          </div>
          <div style={{marginTop:'20px',display:'flex',gap:'8px',flexWrap:'wrap'}}>
            <span className="footer-badge-pill">ONA N3</span>
            <span className="footer-badge-pill">LGPD</span>
            <span className="footer-badge-pill">ISO 31000</span>
            <span className="footer-badge-pill">PNSP</span>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Módulos</div>
          <a href="#modules" className="footer-link">Incidentes e Notificações</a>
          <a href="#modules" className="footer-link">Investigação RCA</a>
          <a href="#modules" className="footer-link">CAPA e Planos de Ação</a>
          <a href="#modules" className="footer-link">Gestão de Riscos</a>
          <a href="#modules" className="footer-link">Indicadores</a>
          <a href="#modules" className="footer-link">Apresentações Automáticas</a>
        </div>
        <div>
          <div className="footer-col-title">Plataforma</div>
          <a href="#how" className="footer-link">Como funciona</a>
          <a href="#regulatory" className="footer-link">Conformidade</a>
          <a href="#tech" className="footer-link">Stack técnica</a>
          <a href="#roadmap" className="footer-link">Roadmap</a>
          <a href="#stats" className="footer-link">Resultados</a>
        </div>
        <div>
          <div className="footer-col-title">Contato</div>
          <a href="mailto:contato@qualitcore.com.br" className="footer-link">contato@qualitcore.com.br</a>
          <a href="http://www.qualitcore.com.br" className="footer-link">www.qualitcore.com.br</a>
          <a href="#" className="footer-link">QualitCore</a>
          <a href="#" className="footer-link">Brasil</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2025 QualitCore. Todos os direitos reservados.</div>
        <div className="footer-badges">
          <span className="footer-badge-pill">v3.0 · Enterprise</span>
          <span className="footer-badge-pill">On-Premise Ready</span>
        </div>
      </div>
    </footer>
  )
}

function useFadeUp() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.12 })

    document.querySelectorAll('h2, .module-card, .problem-card, .wave-card, .reg-card, .stat-block, .how-step, .feat-item').forEach(el => {
      el.classList.add('fade-up')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

function App() {
  useFadeUp()

  return (
    <>
      <Navbar />
      <Hero />
      <Certs />
      <Problems />
      <HowItWorks />
      <Modules />
      <Features />
      <Regulatory />
      <Stats />
      <Roadmap />
      <Highlight />
      <TechStack />
      <CTA />
      <Footer />
    </>
  )
}

export default App
