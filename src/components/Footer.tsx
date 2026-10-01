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
        background: 'linear-gradient(to top, #020617 0%, rgba(15, 23, 42, 0.75) 60%, transparent 100%)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="ambient-glow w-96 h-96 opacity-15"
        style={{
          background: 'radial-gradient(circle, #f59e0b 0%, transparent 65%)',
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
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6), 0 0 35px rgba(245, 158, 11, 0.1)',
            }}
          >
            <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
              Feito com muito coração,
            </p>
            <p className="text-amber-200/90 font-sans text-sm sm:text-base leading-relaxed mt-1 font-medium">
              pela filha do teu pai Mitange,
            </p>
            <p className="section-title text-2xl sm:text-3xl mt-2 gradient-text font-serif font-semibold">
              Arminda.
            </p>
          </div>
        </div>

        {/* Bible verse closing */}
        <p className="text-slate-400 text-xs sm:text-sm font-sans text-center italic max-w-sm leading-relaxed">
          "Pois eu, Jeová, teu Deus, seguro a tua mão direita e te digo: ‘Não tenhas medo. Eu te ajudarei.’" — Isaías 41:13
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
          style={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
          }}
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-sans text-amber-300">Voltar ao Topo</span>
        </button>

        {/* Copyright */}
        <p className="text-slate-500 text-xs font-sans text-center">
          © 2024 — Com amor, de Arminda para Isabel
        </p>
      </div>
    </footer>
  )
}
