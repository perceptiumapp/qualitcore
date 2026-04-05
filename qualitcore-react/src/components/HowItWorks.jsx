import { useEffect, useRef, useState } from 'react'
import './HowItWorks.css'
import Acronym from './Acronym'

const steps = [
  {
    num: '01',
    title: 'Registrar',
    desc: <>Qualquer colaborador do hospital registra um incidente, risco ou manifestação da ouvidoria em poucos cliques. Formulários simplificados com classificação automática conforme <Acronym>RDC 36</Acronym> e protocolos do <Acronym>NSP</Acronym>.</>
  },
  {
    num: '02',
    title: 'Investigar',
    desc: <>A equipe de qualidade conduz a investigação de causa raiz (<Acronym>RCA</Acronym>) com ferramentas como 5 Porquês, Diagrama de Ishikawa e árvore causal. O sistema cruza dados de incidentes, riscos (<Acronym>ISO 31000</Acronym>) e indicadores para apoiar a análise.</>
  },
  {
    num: '03',
    title: 'Tratar',
    desc: <>A partir da investigação, o sistema gera automaticamente um plano de ação corretiva e preventiva (<Acronym>CAPA</Acronym>). Cada ação tem responsável, prazo, evidência obrigatória e avaliação de eficácia — tudo rastreável para auditoria <Acronym>ONA</Acronym>.</>
  },
  {
    num: '04',
    title: 'Aprender',
    desc: <>Os indicadores (<Acronym>KPI</Acronym>) são retroalimentados com os resultados. A matriz de riscos é recalculada automaticamente, apresentações gerenciais são geradas por <Acronym>IA</Acronym> e a memória institucional é construída para a melhoria contínua.</>
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])
  const lineRef = useRef(null)
  const [visibleSteps, setVisibleSteps] = useState(new Set())
  const [lineProgress, setLineProgress] = useState(0)

  useEffect(() => {
    const observers = []

    // Observer for each step card (stagger animation)
    stepsRef.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Stagger delay based on index
            setTimeout(() => {
              setVisibleSteps(prev => new Set([...prev, i]))
            }, i * 150)
            obs.unobserve(entry.target)
          }
        },
        { threshold: 0.2 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    // Observer for the timeline line progress (mobile)
    const lineObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const ratio = entry.intersectionRatio
          setLineProgress(Math.min(ratio * 1.5, 1))
        }
      },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 20) }
    )

    if (sectionRef.current) {
      lineObs.observe(sectionRef.current)
      observers.push(lineObs)
    }

    // Scroll-based line animation for mobile
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowH = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height

      if (sectionTop < windowH && rect.bottom > 0) {
        const scrolled = windowH - sectionTop
        const progress = Math.min(Math.max(scrolled / (sectionHeight + windowH * 0.3), 0), 1)
        setLineProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observers.forEach(obs => obs.disconnect())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="how" className="hiw-section" ref={sectionRef}>
      <div className="section-label">Como Funciona</div>
      <h2 className="section-title">
        Do registro ao aprendizado,<br />tudo conectado e rastreável.
      </h2>

      <div className="hiw-steps">
        {/* Vertical timeline line (mobile only) */}
        <div className="hiw-timeline-track" aria-hidden="true">
          <div
            className="hiw-timeline-line"
            ref={lineRef}
            style={{ '--line-progress': lineProgress }}
          />
        </div>

        {steps.map((s, i) => (
          <div
            className={`hiw-step ${visibleSteps.has(i) ? 'hiw-step--visible' : ''}`}
            key={i}
            ref={el => (stepsRef.current[i] = el)}
            style={{ '--step-index': i }}
          >
            <div className="hiw-step-num-wrap">
              <div className="hiw-step-num">
                <span>{s.num}</span>
                <div className="hiw-pulse" />
              </div>
            </div>
            <div className="hiw-step-content">
              <div className="hiw-step-title">{s.title}</div>
              <div className="hiw-step-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop horizontal connector line (rendered via CSS ::before on .hiw-steps) */}
    </section>
  )
}
