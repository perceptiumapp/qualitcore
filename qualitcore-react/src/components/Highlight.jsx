import { useEffect, useRef } from 'react'
import './Highlight.css'

export default function Highlight() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('hl-visible')
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="highlight" ref={sectionRef} className="highlight-section">
      {/* Animated floating quotation marks */}
      <span className="hl-deco-quote hl-deco-open" aria-hidden="true">&ldquo;</span>
      <span className="hl-deco-quote hl-deco-close" aria-hidden="true">&rdquo;</span>

      <div className="ona-badge-large">
        <span role="img" aria-label="trophy">&#127942;</span>{' '}
        <span>ONA N&iacute;vel 3</span> &mdash; Acreditado com Excel&ecirc;ncia &middot; Fevereiro 2025
      </div>

      <div className="highlight-quote">
        &ldquo;O QualitCore transformou a gest&atilde;o da qualidade hospitalar de um processo{' '}
        <span className="hl">manual e reativo</span> para um sistema{' '}
        <span className="hl">integrado, audit&aacute;vel e preditivo</span> &mdash; pronto para a
        acredita&ccedil;&atilde;o de excel&ecirc;ncia.&rdquo;
      </div>

      <div className="highlight-source">
        <div className="hl-avatar">QC</div>
        <div className="hl-source-info">
          <div className="hl-name">Equipe QualitCore</div>
          <div className="hl-role">Coordena&ccedil;&atilde;o de TI e Inova&ccedil;&atilde;o</div>
        </div>
      </div>
    </section>
  )
}
