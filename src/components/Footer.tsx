import React, { useCallback } from 'react'
import { Heart, ArrowUp } from 'lucide-react'

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
        {/* Decorative divider */}
        <div className="flex items-center gap-4 w-full max-w-xs">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400 opacity-60" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
        </div>

        {/* Main message */}
        <div className="text-center flex flex-col gap-3">
          <p className="text-white/40 text-sm font-sans font-light tracking-wide">
            Feito com muito
          </p>
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
          </div>
          <div
            className="glass-card px-8 py-5 text-center"
          >
            <p
              className="section-title text-lg sm:text-xl leading-relaxed"
              style={{
                background: 'linear-gradient(135deg, #fde68a, #f472b6, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Feito com muito ❤️ por...
            </p>
            <p className="text-white/70 font-sans text-sm mt-2 leading-relaxed">
              Da filha do teu pai Mitange,
            </p>
            <p
              className="section-title text-2xl sm:text-3xl mt-1 gradient-text"
            >
              Arminda.
            </p>
          </div>
        </div>

        {/* Bible verse closing */}
        <p className="text-white/30 text-xs font-sans text-center italic max-w-xs leading-relaxed">
          "O próprio Jeová te guardará de todo o mal." — Sl. 121:7
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
          © 2024 — Com amor, de Arminda para Isabel ✦
        </p>
      </div>
    </footer>
  )
}
