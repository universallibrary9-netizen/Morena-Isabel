import React, { useCallback } from 'react'
import { ArrowUp } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <footer
      className="relative px-4 py-16 overflow-hidden"
      style={{
        background: 'linear-gradient(to top, rgba(18, 12, 24, 1) 0%, rgba(9, 7, 15, 0) 100%)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="ambient-glow w-96 h-96 opacity-10"
        style={{
          background: 'radial-gradient(circle, #f472b6 0%, transparent 65%)',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8 relative z-10">
        {/* Main dedication card */}
        <div className="text-center flex flex-col items-center gap-3 w-full">
          <div
            className="glass-card px-8 py-7 text-center max-w-md w-full"
            style={{
              border: '1px solid rgba(244, 114, 182, 0.22)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 0 30px rgba(244, 114, 182, 0.08)',
            }}
          >
            <p className="text-white/80 font-sans text-sm sm:text-base leading-relaxed">
              Feito com muito coração,
            </p>
            <p className="text-rose-200/90 font-sans text-sm sm:text-base leading-relaxed mt-1">
              pela filha do teu pai Mitange,
            </p>
            <p className="section-title text-2xl sm:text-3xl mt-2 gradient-text font-serif font-semibold">
              Arminda.
            </p>
          </div>
        </div>

        {/* Bible verse closing */}
        <p className="text-white/40 text-xs sm:text-sm font-sans text-center italic max-w-sm leading-relaxed">
          "Pois eu, Jeová, teu Deus, seguro a tua mão direita e te digo: ‘Não tenhas medo. Eu te ajudarei.’" — Isaías 41:13
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
          style={{
            background: 'rgba(244, 114, 182, 0.08)',
            border: '1px solid rgba(244, 114, 182, 0.2)',
          }}
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-4 h-4 text-rose-300" />
          <span className="text-sm font-sans text-rose-300/80">Voltar ao Topo</span>
        </button>

        {/* Copyright */}
        <p className="text-white/20 text-xs font-sans text-center">
          © 2024 — Com amor, de Arminda para Isabel
        </p>
      </div>
    </footer>
  )
}
