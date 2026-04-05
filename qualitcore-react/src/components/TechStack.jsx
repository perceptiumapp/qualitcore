import './TechStack.css'

export default function TechStack() {
  const groups = [
    { label: 'Frontend', items: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Turborepo'] },
    { label: 'Backend', items: ['NestJS', 'Prisma ORM', 'PostgreSQL 16', 'Redis', 'BullMQ'] },
    {
      label: 'IA e Integra\u00e7\u00f5es',
      items: ['Anthropic API', 'Ollama + LLaMA 3', 'LangChain', 'RAG on-premise', 'MS Graph API'],
    },
    {
      label: 'Infraestrutura',
      items: ['Docker Compose', 'MinIO S3', 'GitHub Actions', 'PptxGenJS', 'JWT + MFA'],
    },
  ]

  return (
    <section id="tech" className="tech-section">
      {/* Code-editor top bar decoration */}
      <div className="tech-editor-bar" aria-hidden="true">
        <span className="tech-dot red"></span>
        <span className="tech-dot yellow"></span>
        <span className="tech-dot green"></span>
        <span className="tech-bar-title">stack.config.ts</span>
      </div>

      <div className="section-label">Stack Tecnol&oacute;gica</div>
      <h2 className="section-title">
        Enterprise. Moderno.
        <br />
        Pronto para on-premise ou cloud.
      </h2>
      <p className="section-desc">
        Arquitetura modular escal&aacute;vel, constru&iacute;da sobre tecnologias open-source de
        mercado, com suporte a deploy on-premise conforme exig&ecirc;ncias de privacidade de dados
        de sa&uacute;de.
      </p>

      <div className="tech-grid">
        {groups.map((g, i) => (
          <div className="tech-group" key={i}>
            <div className="tech-group-label">{g.label}</div>
            <div className="tech-pills-scroll">
              {g.items.map((item, j) => (
                <span className="tech-pill" key={j}>
                  <span className="tp-dot"></span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
