import './Hero.css'
import Acronym from './Acronym'

function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-gradient" />

      <div className="hero-content">
        <div className="hero-badge">Plataforma de Gestão da Qualidade &middot; <Acronym>ONA</Acronym> Nível 3</div>
        <h1 className="hero-title">
          Gestão da qualidade
          <span className="accent line2">hospitalar integrada,</span>
          do incidente à evidência.
        </h1>
        <p className="hero-desc">
          QualitCore é a plataforma enterprise que centraliza incidentes, CAPA, riscos, indicadores, documentos, ouvidoria, reuniões e apresentações executivas em um único sistema rastreável e auditável.
        </p>
        <div className="hero-actions">
          <a href="#cta" className="btn-primary btn-large">Solicitar demonstração &rarr;</a>
          <a href="#modules" className="btn-secondary">Conhecer os módulos</a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">18</div>
            <div className="hero-stat-label">Módulos integrados</div>
          </div>
          <div>
            <div className="hero-stat-num">96,7%</div>
            <div className="hero-stat-label">Conformidade <Acronym>ONA</Acronym></div>
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
          <div className="mini-dash-label"><Acronym>ONA</Acronym> Score</div>
        </div>
        <div className="mini-dash-card">
          <div className="mini-dash-icon warn">!</div>
          <div className="mini-dash-value warn">14</div>
          <div className="mini-dash-label">Incidentes</div>
        </div>
        <div className="mini-dash-card">
          <div className="mini-dash-icon good">&#x2713;</div>
          <div className="mini-dash-value good">87%</div>
          <div className="mini-dash-label"><Acronym>CAPA</Acronym></div>
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
              <div className="scard-delta down">&darr; 3 vs mês anterior</div>
            </div>
            <div className="screen-card">
              <div className="scard-label"><Acronym>CAPA</Acronym> Concluídas</div>
              <div className="scard-value good">87%</div>
              <div className="scard-delta up">&uarr; 12% este mês</div>
            </div>
            <div className="screen-card">
              <div className="scard-label">Riscos Críticos</div>
              <div className="scard-value danger">3</div>
              <div className="scard-delta down">&darr; 1 tratado hoje</div>
            </div>
            <div className="screen-card">
              <div className="scard-label"><Acronym>ONA</Acronym> Score</div>
              <div className="scard-value good">96,7%</div>
              <div className="scard-delta up">&uarr; Nível 3 vigente</div>
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
              <span className="sbar-name">Farmácia</span>
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
              <div className="sinc-title">Últimas Notificações</div>
              <div className="sinc-badge">LIVE</div>
            </div>
            <div className="sinc-row">
              <div className="sinc-dot high"></div>
              <div className="sinc-text">Evento sentinela — UTI Adulto</div>
              <div className="sinc-status open">Aberto</div>
            </div>
            <div className="sinc-row">
              <div className="sinc-dot med"></div>
              <div className="sinc-text">Near miss — Farmácia</div>
              <div className="sinc-status prog">Em triagem</div>
            </div>
            <div className="sinc-row">
              <div className="sinc-dot low"></div>
              <div className="sinc-text">Melhoria de processo — CME</div>
              <div className="sinc-status done">Concluído</div>
            </div>
          </div>
        </div>

        <div className="hero-float-badge badge-1">
          <div className="badge-icon green">&#x2705;</div>
          <div>
            <div>RCA concluída</div>
            <div style={{ fontSize: '10px', color: 'var(--gray-mid)', fontWeight: 400 }}>
              <Acronym>CAPA</Acronym> gerada automaticamente
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
