import React from 'react'
import { Heart, Star, Award } from 'lucide-react'

const virtues = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Hospitalidade Genuína',
    description: 'Acolhe com amor e faz qualquer um sentir-se em casa.',
    color: 'from-amber-400/20 to-amber-600/10',
    borderColor: 'rgba(245, 158, 11, 0.3)',
    iconColor: '#f59e0b',
    bgIcon: 'rgba(245, 158, 11, 0.15)',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Espírito Trabalhador no Serviço',
    description: 'Disposição sincera no LDC, na manutenção e nas reuniões.',
    color: 'from-sky-400/20 to-sky-600/10',
    borderColor: 'rgba(56, 189, 248, 0.3)',
    iconColor: '#38bdf8',
    bgIcon: 'rgba(56, 189, 248, 0.15)',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Fé & Perseverança Inabalável',
    description: 'Uma filha amada e aprovada por Jeová.',
    color: 'from-amber-300/20 to-yellow-600/10',
    borderColor: 'rgba(251, 191, 36, 0.3)',
    iconColor: '#fbbf24',
    bgIcon: 'rgba(251, 191, 36, 0.15)',
  },
]

export const GratitudeLetter: React.FC = () => {
  return (
    <section className="relative px-4 py-20 overflow-hidden" id="carta">
      {/* Background ambient */}
      <div
        className="ambient-glow w-[500px] h-[500px] opacity-10"
        style={{
          background: 'radial-gradient(ellipse, #f59e0b 0%, transparent 65%)',
          top: '10%',
          right: '-10%',
        }}
      />
      <div
        className="ambient-glow w-[400px] h-[400px] opacity-10"
        style={{
          background: 'radial-gradient(ellipse, #38bdf8 0%, transparent 65%)',
          bottom: '10%',
          left: '-10%',
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <div className="flex flex-col items-center mb-12 gap-3">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
            <span className="text-xs font-sans tracking-widest uppercase text-amber-400/80 font-medium">
              Com Carinho
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
          <h2 className="section-title text-3xl sm:text-4xl gradient-text text-center">
            Do Meu Coração para o Teu
          </h2>
        </div>

        {/* Letter card */}
        <div
          className="relative rounded-3xl p-6 sm:p-10 overflow-hidden"
          style={{
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(245, 158, 11, 0.22)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 50px rgba(245, 158, 11, 0.06)',
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
            className="absolute bottom-0 left-0 w-48 h-48 opacity-12 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at bottom left, #38bdf8, transparent 70%)',
            }}
          />

          {/* Letter content */}
          <div className="relative space-y-5">
            <p className="text-body text-base sm:text-lg leading-relaxed text-slate-200">
              <span className="section-title text-2xl sm:text-3xl gradient-text block mb-4">
                Olá, Isabel Kinanga.
              </span>
              Talvez fiques surpresa por receber esta mensagem, até porque admito que não tenho
              estado tão presente neste momento difícil da tua vida. Mas quero que tenhas a certeza
              absoluta de que estás sempre no meu coração.
            </p>

            <p className="text-body text-base sm:text-lg leading-relaxed text-slate-200">
              Várias vezes tenho mencionado nas minhas orações que Jeová te ajude a lidar com esta
              situação, que te conceda verdadeira paz mental e que te ajude a encontrar alegria
              sincera, independentemente das dificuldades que estejas a enfrentar.
            </p>

            <p className="text-body text-base sm:text-lg leading-relaxed text-slate-200">
              Por isso, queria que parasses por um momento e pensasses no quanto és importante — não
              só para mim, mas com certeza para muitas outras pessoas. Às vezes, no meio de uma
              situação difícil, podemos esquecer o nosso próprio valor e o quanto somos queridos.
              Mas espero que nunca te esqueças disso.{' '}
              <span role="img" aria-label="heart">❤️</span>
            </p>

            <p className="text-body text-base sm:text-lg leading-relaxed text-slate-200">
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
                background: 'rgba(245, 158, 11, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at top right, #fbbf24, transparent 70%)',
                }}
              />
              <p className="text-xs font-sans tracking-widest uppercase text-amber-400 font-semibold mb-3">
                Marcos 1:11
              </p>
              <p className="text-body text-base sm:text-lg leading-relaxed text-slate-200 relative">
                Lembro-me com carinho das palavras que Jeová dirigiu a Jesus em Marcos 1:11:{' '}
                <blockquote className="inline-block not-italic">
                  <em className="section-title text-lg gradient-text-gold font-semibold">
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

            <p className="text-body text-base sm:text-lg leading-relaxed text-slate-200">
              Tem a plena certeza de que esta situação não vai durar para sempre. Vai passar. Até
              lá, continua a confiar em Jeová e a viver um dia de cada vez.
            </p>

            {/* Signature */}
            <div className="pt-4 border-t border-slate-800">
              <p className="text-slate-400 text-sm font-sans italic mb-1">Com todo o amor,</p>
              <p className="section-title text-2xl gradient-text">Arminda</p>
            </div>
          </div>
        </div>

        {/* Virtues cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {virtues.map((virtue, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              style={{
                background: 'rgba(15, 23, 42, 0.7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: `1px solid ${virtue.borderColor}`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: virtue.bgIcon,
                  color: virtue.iconColor,
                }}
              >
                {virtue.icon}
              </div>
              <h3 className="font-serif font-semibold text-base text-slate-100 leading-snug">
                {virtue.title}
              </h3>
              <p className="text-sm font-sans text-slate-300/80 leading-relaxed">
                {virtue.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
