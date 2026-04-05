import { useEffect, useRef } from 'react'
import './CTA.css'

export default function CTA() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const createParticles = () => {
      particles = []
      const count = Math.floor((canvas.width * canvas.height) / 12000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2 + 0.5,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
          alpha: Math.random() * 0.4 + 0.1,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(79,170,172,${p.alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    createParticles()
    draw()

    window.addEventListener('resize', () => {
      resize()
      createParticles()
    })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="cta" className="cta-section">
      <canvas ref={canvasRef} className="cta-particles" aria-hidden="true" />
      <div className="cta-inner">
        <span className="cta-eyebrow">
          Pronto para transformar a gest&atilde;o do seu hospital?
        </span>
        <h2 className="cta-title">
          Comece com o que
          <br />
          mais impacta. Agora.
        </h2>
        <p className="cta-desc">
          Do primeiro incidente registrado ao relat&oacute;rio de diretoria gerado automaticamente.
          O QualitCore foi constru&iacute;do para o hospital que leva qualidade a s&eacute;rio.
        </p>
        <div className="cta-actions">
          <a href="mailto:contato@qualitcore.com.br" className="cta-btn-primary btn-primary btn-large">
            Solicitar demonstra&ccedil;&atilde;o &rarr;
          </a>
          <a href="#modules" className="btn-outline-large">
            Ver todos os m&oacute;dulos
          </a>
        </div>
      </div>
    </section>
  )
}
