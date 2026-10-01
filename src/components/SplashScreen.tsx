import React, { useCallback, useRef, useState } from 'react'
import confetti from 'canvas-confetti'
import { Sparkles } from 'lucide-react'

interface SplashScreenProps {
  onEnter: () => void
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const fireConfetti = useCallback(() => {
    const colors = ['#f472b6', '#fb7185', '#fde68a', '#fbbf24', '#c084fc', '#ffffff', '#fda4af']

    const count = 180
    const defaults = {
      origin: { y: 0.6 },
      colors,
      ticks: 200,
      gravity: 0.8,
      scalar: 0.9,
      shapes: ['circle', 'square'] as confetti.Shape[],
    }

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      })
    }

    fire(0.25, { spread: 26, startVelocity: 55 })
    fire(0.2, { spread: 60 })
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
    fire(0.1, { spread: 120, startVelocity: 45 })
  }, [])

  const handleEnter = useCallback(() => {
    fireConfetti()
    setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => {
        onEnter()
      }, 800)
    }, 600)
  }, [fireConfetti, onEnter])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ${
        isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
      style={{ background: '#09070F' }}
    >
      {/* Ambient background glows */}
      <div
        className="ambient-glow w-96 h-96 opacity-20"
        style={{
          background: 'radial-gradient(circle, #f472b6 0%, transparent 70%)',
          top: '10%',
          left: '15%',
          animation: 'pulse 6s ease-in-out infinite',
        }}
      />
      <div
        className="ambient-glow w-80 h-80 opacity-15"
        style={{
          background: 'radial-gradient(circle, #fbbf24 0%, transparent 70%)',
          bottom: '15%',
          right: '10%',
          animation: 'pulse 8s ease-in-out infinite reverse',
        }}
      />
      <div
        className="ambient-glow w-64 h-64 opacity-10"
        style={{
          background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)',
          top: '50%',
          right: '25%',
          animation: 'pulse 7s ease-in-out infinite',
        }}
      />

      {/* Decorative particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-40"
            style={{
              background: i % 3 === 0 ? '#f472b6' : i % 3 === 1 ? '#fbbf24' : '#c084fc',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Central content */}
      <div className="flex flex-col items-center gap-8 px-6 text-center relative z-10">
        {/* Decorative top ornament */}
        <div className="flex items-center gap-3 opacity-60">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-gold" />
          <Sparkles className="w-4 h-4 text-champagne" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-gold" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p
            className="text-sm tracking-widest uppercase font-sans text-white/40 font-light"
          >
            Uma mensagem especial
          </p>
          <h1
            className="section-title text-3xl sm:text-4xl gradient-text"
            style={{ textShadow: '0 0 40px rgba(244, 114, 182, 0.3)' }}
          >
            Para a Irmã Isabel
          </h1>
        </div>

        {/* Main CTA Button */}
        <button
          ref={buttonRef}
          onClick={handleEnter}
          className="btn-glow relative px-10 py-5 rounded-2xl font-serif text-xl sm:text-2xl font-semibold tracking-wide cursor-pointer select-none"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            animation: 'pulse 3s ease-in-out infinite',
          }}
        >
          {/* Inner shimmer effect */}
          <div
            className="absolute inset-0 rounded-2xl opacity-30"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s linear infinite',
            }}
          />

          <span className="relative gradient-text flex items-center gap-2">
            Olá Morena
            <span role="img" aria-label="sparkles">✨</span>
          </span>
        </button>

        <p className="text-white/30 font-sans text-sm font-light animate-pulse">
          Toca para abrir ✦
        </p>
      </div>
    </div>
  )
}
