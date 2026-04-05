import './Regulatory.css'

const regs = [
  { badge: 'ona', label: 'ONA', title: 'Acreditacao ONA', desc: 'Modulo de auditoria mapeado nas dimensoes ONA. Central de evidencias por requisito. Painel de prontidao para visita. Score de conformidade em tempo real.' },
  { badge: 'lgpd', label: 'LGPD', title: 'Lei Geral de Protecao de Dados', desc: 'Pseudonimizacao obrigatoria antes de qualquer chamada de IA. Acesso a dados sensiveis auditado. Solicitacoes de titulares com SLA. Incidentes de privacidade com workflow proprio.' },
  { badge: 'iso', label: 'ISO 31000', title: 'Gestao de Riscos', desc: 'Ciclo completo: identificar, analisar, avaliar, tratar, monitorar e comunicar. Risco residual calculavel. Apetite de risco configuravel. Comunicacao integrada.' },
  { badge: 'pnsp', label: 'PNSP', title: 'Seguranca do Paciente', desc: 'NSP integrado. Plano de Seguranca do Paciente digital. Notificacao de incidentes com RDC 36. Evento sentinela com fluxo prioritario e investigacao obrigatoria.' },
]

export default function Regulatory() {
  return (
    <section id="regulatory" className="regulatory-section">
      <div className="section-label">Conformidade Regulatoria</div>
      <h2 className="section-title">Construido sobre os<br/>padroes que o hospital exige.</h2>
      <p className="section-desc">Cada modulo foi projetado com as obrigacoes regulatorias do setor hospitalar brasileiro como requisito de negocio, nao como adaptacao posterior.</p>
      <div className="reg-grid">
        {regs.map((r, i) => (
          <div className={`reg-card reg-card--${r.badge}`} key={i}>
            <div className={`reg-badge ${r.badge}`}>{r.label}</div>
            <div className="reg-card-title">{r.title}</div>
            <div className="reg-card-desc">{r.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
