import './Hero.css'

function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-gradient" />

      <div className="hero-content">
        <div className="hero-badge">Plataforma de Gestao da Qualidade &middot; ONA Nivel 3</div>
        <h1 className="hero-title">
          Gestao de qualidade
          <span className="accent line2">hospitalar integrada,</span>
          do incidente a evidencia.
        </h1>
        <p className="hero-desc">
          QualitCore e a plataforma enterprise que centraliza incidentes, CAPA, riscos, indicadores, documentos, ouvidoria, reunioes e apresentacoes executivas em um unico sistema rastreavel e auditavel.
        </p>
        <div className="hero-actions">
          <a href="#cta" className="btn-primary btn-large">Ver demonstracao &rarr;</a>
          <a href="#modules" className="btn-secondary">Explorar modulos</a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">18</div>
            <div className="hero-stat-label">Modulos integrados</div>
          </div>
          <div>
            <div className="hero-stat-num">96,7%</div>
            <div className="hero-stat-label">Conformidade ONA</div>
          </div>
          <div>
            <div className="hero-stat-num">360&deg;</div>
            <div className="hero-stat-label">Rastreabilidade</div>
          </div>
        </div>
      </div>

      {/* Mobile mini-dashboard — visible only on small screens */}
      <div className="hero-mini-dashboard">
        <div className="mini-dash-card">
          <div className="mini-dash-icon good">&#x2713;</div>
          <div className="mini-dash-value good">96,7%</div>
          <div className="mini-dash-label">ONA Score</div>
        </div>
        <div className="mini-dash-card">
          <div className="mini-dash-icon warn">!</div>
          <div className="mini-dash-value warn">14</div>
          <div className="mini-dash-label">Incidentes</div>
        </div>
        <div className="mini-dash-card">
          <div className="mini-dash-icon good">&#x2713;</div>
          <div className="mini-dash-value good">87%</div>
          <div className="mini-dash-label">CAPA</div>
        </div>
      </div>

      {/* Desktop dashboard visual */}
      <div className="hero-visual">
        <div className="hero-float-badge badge-2">
          <div className="badge-icon teal">&#x1F4CA;</div>
          <div>
            <div>Indicadores</div>
            <div style={{ fontSize: '10px', color: 'var(--gray-mid)', fontWeight: 400 }}>
              Atualizados em tempo real
            </div>
          </div>
        </div>

        <div className="hero-screen">
          <div className="screen-topbar">
            <div className="screen-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="screen-title-bar">app.qualitcore.com.br / cockpit-executivo</div>
          </div>

          <div className="screen-grid">
            <div className="screen-card">
              <div className="scard-label">Incidentes Abertos</div>
              <div className="scard-value warn">14</div>
              <div className="scard-delta down">&darr; 3 vs mes anterior</div>
            </div>
            <div className="screen-card">
              <div className="scard-label">CAPA Concluidas</div>
              <div className="scard-value good">87%</div>
              <div className="scard-delta up">&uarr; 12% este mes</div>
            </div>
            <div className="screen-card">
              <div className="scard-label">Riscos Criticos</div>
              <div className="scard-value danger">3</div>
              <div className="scard-delta down">&darr; 1 tratado hoje</div>
            </div>
            <div className="screen-card">
              <div className="scard-label">ONA Score</div>
              <div className="scard-value good">96,7%</div>
              <div className="scard-delta up">&uarr; Nivel 3 mantido</div>
            </div>
          </div>

          <div
            style={{
              marginTop: '10px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '10px',
              padding: '12px',
            }}
          >
            <div className="sbar-label">Desempenho por Setor</div>
            <div className="sbar-row">
              <span className="sbar-name">UTI</span>
              <div className="sbar-track">
                <div className="sbar-fill" style={{ width: '91%' }}></div>
              </div>
              <span className="sbar-pct">91%</span>
            </div>
            <div className="sbar-row">
              <span className="sbar-name">Farmacia</span>
              <div className="sbar-track">
                <div className="sbar-fill" style={{ width: '84%' }}></div>
              </div>
              <span className="sbar-pct">84%</span>
            </div>
            <div className="sbar-row">
              <span className="sbar-name">Enfermagem</span>
              <div className="sbar-track">
                <div className="sbar-fill orange" style={{ width: '71%' }}></div>
              </div>
              <span className="sbar-pct">71%</span>
            </div>
            <div className="sbar-row">
              <span className="sbar-name">CME</span>
              <div className="sbar-track">
                <div className="sbar-fill" style={{ width: '96%' }}></div>
              </div>
              <span className="sbar-pct">96%</span>
            </div>
          </div>

          <div className="screen-incidents">
            <div className="sinc-header">
              <div className="sinc-title">Ultimas Notificacoes</div>
              <div className="sinc-badge">LIVE</div>
            </div>
            <div className="sinc-row">
              <div className="sinc-dot high"></div>
              <div className="sinc-text">Evento sentinela — UTI Adult.</div>
              <div className="sinc-status open">Aberto</div>
            </div>
            <div className="sinc-row">
              <div className="sinc-dot med"></div>
              <div className="sinc-text">Quase falha — Farmacia</div>
              <div className="sinc-status prog">Em triagem</div>
            </div>
            <div className="sinc-row">
              <div className="sinc-dot low"></div>
              <div className="sinc-text">Melhoria processo — CME</div>
              <div className="sinc-status done">Concluido</div>
            </div>
          </div>
        </div>

        <div className="hero-float-badge badge-1">
          <div className="badge-icon green">&#x2705;</div>
          <div>
            <div>RCA concluida</div>
            <div style={{ fontSize: '10px', color: 'var(--gray-mid)', fontWeight: 400 }}>
              CAPA gerada automaticamente
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
