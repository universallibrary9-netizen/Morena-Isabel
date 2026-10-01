import React from 'react'
import { BookOpen } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Ambient radial glows */}
      <div
        className="ambient-glow w-[600px] h-[600px] opacity-15"
        style={{
          background: 'radial-gradient(ellipse, #f472b6 0%, transparent 65%)',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <div
        className="ambient-glow w-[400px] h-[400px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #fbbf24 0%, transparent 65%)',
          bottom: '5%',
          left: '10%',
        }}
      />
      <div
        className="ambient-glow w-[300px] h-[300px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #c084fc 0%, transparent 65%)',
          top: '30%',
          right: '5%',
        }}
      />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(244,114,182,0.08) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-8">
        {/* Hebreus 6:10 — Opening verse */}
        <div className="glass-card px-6 py-4 flex items-start gap-3 w-full max-w-xl animate-fade-in-up">
          <BookOpen className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
          <p className="text-body text-sm leading-relaxed text-left italic">
            <span className="gradient-text-gold font-semibold not-italic font-sans text-xs tracking-widest uppercase block mb-1">
              Hebreus 6:10
            </span>
            "Porque Deus não é injusto para esquecer a vossa obra e o amor que tendes demonstrado pelo seu nome, depois de haverdes servido os santos e continuardes a servir."
          </p>
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-medium tracking-wider uppercase animate-fade-in"
          style={{
            background: 'rgba(244, 114, 182, 0.08)',
            border: '1px solid rgba(244, 114, 182, 0.2)',
            color: 'rgba(253, 230, 138, 0.9)',
            animationDelay: '0.2s',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-gold animate-pulse" />
          Uma Mensagem Especial do Coração &nbsp;•&nbsp; Para a Irmã Isabel Kinanga
        </div>

        {/* Main title */}
        <div className="flex flex-col gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h1
            className="section-title text-4xl sm:text-5xl md:text-6xl gradient-text leading-tight"
            style={{ textShadow: '0 0 60px rgba(244, 114, 182, 0.2)' }}
          >
            Tu és Preciosa,<br />
            Forte e Muito Amada
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="text-body text-base sm:text-lg max-w-xl leading-relaxed text-white/70 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          Um lembrete sincero de quem guarda o teu sorriso nas orações e no coração,
          celebrando a tua amizade e o teu exemplo de fé.
        </p>

        {/* Bible verse card */}
        <div
          className="glass-card-light w-full max-w-xl px-6 py-6 relative overflow-hidden animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          {/* Decorative glow inside card */}
          <div
            className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #fbbf24, transparent)',
              filter: 'blur(15px)',
            }}
          />
          <div className="relative">
            <p className="font-sans text-xs tracking-widest uppercase text-white/40 mb-3">
              Palavra de Encorajamento
            </p>
            <blockquote
              className="section-title text-lg sm:text-xl text-white/90 leading-relaxed italic"
            >
              "Não tenhas medo, pois estou contigo. Não fiques ansioso, pois eu sou o teu Deus. Vou fortalecer-te, sim, vou ajudar-te. Vou segurar-te firmemente com a minha mão direita de justiça."
            </blockquote>
            <cite className="block mt-3 text-sm font-sans gradient-text-gold not-italic font-medium">
              — Isaías 41:10
            </cite>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 mt-4 animate-bounce opacity-40">
          <p className="text-xs font-sans text-white/50 tracking-widest uppercase">Continua a ler</p>
          <div className="w-px h-8 bg-gradient-to-b from-rose-gold to-transparent" />
        </div>
      </div>
    </section>
  )
}
