import React from 'react'
import { Heart, Star, Award } from 'lucide-react'

const virtues = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Hospitalidade Genuína',
    description: 'Acolhe com amor e faz qualquer um sentir-se em casa.',
    color: 'from-rose-400/20 to-pink-600/10',
    borderColor: 'rgba(244, 114, 182, 0.2)',
    iconColor: '#f472b6',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Espírito Trabalhador no Serviço',
    description: 'Disposição sincera no LDC, na manutenção e nas reuniões.',
    color: 'from-amber-400/20 to-yellow-600/10',
    borderColor: 'rgba(251, 191, 36, 0.2)',
    iconColor: '#fbbf24',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Fé & Perseverança Inabalável',
    description: 'Uma filha amada e aprovada por Jeová.',
    color: 'from-purple-400/20 to-violet-600/10',
    borderColor: 'rgba(192, 132, 252, 0.2)',
    iconColor: '#c084fc',
  },
]

export const GratitudeLetter: React.FC = () => {
  return (
    <section className="relative px-4 py-20 overflow-hidden" id="carta">
      {/* Background ambient */}
      <div
        className="ambient-glow w-[500px] h-[500px] opacity-8"
        style={{
          background: 'radial-gradient(ellipse, #c084fc 0%, transparent 65%)',
          top: '10%',
          right: '-10%',
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <div className="flex flex-col items-center mb-12 gap-3">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-gold opacity-50" />
            <span className="text-xs font-sans tracking-widest uppercase text-white/40">
              Com Carinho
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-gold opacity-50" />
          </div>
          <h2 className="section-title text-3xl sm:text-4xl gradient-text text-center">
            Do Meu Coração para o Teu
          </h2>
        </div>

        {/* Letter card */}
        <div
          className="relative rounded-3xl p-6 sm:p-10 overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(244, 114, 182, 0.15)',
            boxShadow: '0 0 60px rgba(244, 114, 182, 0.05), 0 0 120px rgba(192, 132, 252, 0.03)',
          }}
        >
          {/* Decorative corner glow */}
          <div
            className="absolute top-0 right-0 w-48 h-48 opacity-15 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at top right, #fbbf24, transparent 70%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 opacity-10 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at bottom left, #f472b6, transparent 70%)',
            }}
          />

          {/* Letter content */}
          <div className="relative space-y-5">
            <p className="text-body text-base sm:text-lg leading-relaxed">
              <span className="section-title text-2xl sm:text-3xl gradient-text block mb-4">
                Olá, Isabel Kinanga.
              </span>
              Talvez fiques surpresa por receber esta mensagem, até porque admito que não tenho
              estado tão presente neste momento difícil da tua vida. Mas quero que tenhas a certeza
              absoluta de que estás sempre no meu coração.
            </p>

            <p className="text-body text-base sm:text-lg leading-relaxed text-white/80">
              Várias vezes tenho mencionado nas minhas orações que Jeová te ajude a lidar com esta
              situação, que te conceda verdadeira paz mental e que te ajude a encontrar alegria
              sincera, independentemente das dificuldades que estejas a enfrentar.
            </p>

            <p className="text-body text-base sm:text-lg leading-relaxed text-white/80">
              Por isso, queria que parasses por um momento e pensasses no quanto és importante — não
              só para mim, mas com certeza para muitas outras pessoas. Às vezes, no meio de uma
              situação difícil, podemos esquecer o nosso próprio valor e o quanto somos queridos.
              Mas espero que nunca te esqueças disso.{' '}
              <span role="img" aria-label="heart">❤️</span>
            </p>

            <p className="text-body text-base sm:text-lg leading-relaxed text-white/80">
              Acredito firmemente que tudo o que tens feito, apesar do que estás a passar, tem sido
              uma grande fonte de encorajamento, tanto para mim como para quem te rodeia. E tenho a
              certeza de que Jeová se alegra profundamente ao ver que continuas ativa
              espiritualmente, a fazer o teu máximo para permanecer alegre e a dar o teu melhor,
              mesmo numa fase tão desafiadora.
            </p>

            {/* Marcos 1:11 highlight block */}
            <div
              className="rounded-2xl p-5 sm:p-7 my-6 relative overflow-hidden"
              style={{
                background: 'rgba(251, 191, 36, 0.06)',
                border: '1px solid rgba(251, 191, 36, 0.18)',
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at top right, #fbbf24, transparent 70%)',
                }}
              />
              <p className="text-xs font-sans tracking-widest uppercase text-white/40 mb-3">
                Marcos 1:11
              </p>
              <p className="text-body text-base sm:text-lg leading-relaxed text-white/80 relative">
                Lembro-me com carinho das palavras que Jeová dirigiu a Jesus em Marcos 1:11:{' '}
                <blockquote className="inline-block not-italic">
                  <em className="section-title text-lg gradient-text-gold">
                    "Tu és meu Filho, o amado; eu te aprovo."
                  </em>
                </blockquote>{' '}
                Podes ter a certeza de que, quando Jeová olha para ti, Ele também diz com ternura:{' '}
                <em className="gradient-text font-semibold">
                  "Esta é a minha filha amada, a quem eu aprovo."
                </em>{' '}
                Jeová vê cada detalhe do que tens feito, vê o teu esforço diário, a tua
                perseverança e o quanto lutas para continuar a dar-lhe o teu melhor. E Ele dá um
                valor imenso a tudo isso.{' '}
                <span role="img" aria-label="heart">❤️</span>
              </p>
            </div>

            <p className="text-body text-base sm:text-lg leading-relaxed text-white/80">
              Tem a plena certeza de que esta situação não vai durar para sempre. Vai passar. Até
              lá, continua a confiar em Jeová e a viver um dia de cada vez.
            </p>

            {/* Signature */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/50 text-sm font-sans italic mb-1">Com todo o amor,</p>
              <p className="section-title text-xl gradient-text">Arminda</p>
            </div>
          </div>
        </div>

        {/* Virtues cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {virtues.map((virtue, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: `1px solid ${virtue.borderColor}`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: `rgba(${virtue.iconColor === '#f472b6' ? '244,114,182' : virtue.iconColor === '#fbbf24' ? '251,191,36' : '192,132,252'}, 0.12)`,
                  color: virtue.iconColor,
                }}
              >
                {virtue.icon}
              </div>
              <h3 className="font-serif font-semibold text-base text-white/90 leading-snug">
                {virtue.title}
              </h3>
              <p className="text-sm font-sans text-white/60 leading-relaxed">
                {virtue.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
