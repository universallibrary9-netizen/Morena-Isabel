import React, { useState, useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Photo {
  src: string
  title: string
  caption: string
  featured?: boolean
}

const photos: Photo[] = [
  {
    src: '/assets/foto-1.jpeg',
    title: 'Laços que o Tempo Não Apaga',
    caption:
      'Já fomos da mesma congregação e recebeste-nos de braços tão abertos. Foste um exemplo genuíno de hospitalidade e, mesmo hoje em congregações diferentes, continuamos tão próximas. As tuas visitas trazem sempre uma enorme alegria à nossa congregação.',
    featured: true,
  },
  {
    src: '/assets/foto-2.jpeg',
    title: 'Ombro a Ombro no Serviço Sagrado',
    caption:
      'Encontramo-nos em várias modalidades de serviço — como quando apoiámos juntas no LDC e na manutenção do SALS. Ver-te lá a dar o teu melhor a Jeová é inspirador. Guardo com muito carinho cada recordação do tempo em que servíamos juntas.',
  },
  {
    src: '/assets/foto-3.jpeg',
    title: 'A Tua Bondade e Atenção',
    caption:
      'Lembro-me com tanta ternura de quando me deste o link para assistir à dedicação do salão. Fiquei tão feliz por te teres lembrado de mim! Esse é o teu dom: lembrar-te dos outros e fazê-los sentirem-se sempre incluídos, especiais e amados.',
  },
  {
    src: '/assets/foto-4.jpeg',
    title: 'Espiritualidade que Inspira',
    caption:
      'Sempre que estás connosco, é comum ouvir todos elogiarem a tua alegria contagiante, a tua força e a tua profunda espiritualidade. Não são apenas palavras: a tua personalidade transmite exatamente a beleza de quem serve a Jeová de todo o coração.',
  },
  {
    src: '/assets/foto-5.jpeg',
    title: 'Morena Radiante',
    caption:
      'Continua a ser sempre essa morena radiante, iluminada e cheia de doçura 🙂🥰.',
  },
  {
    src: '/assets/foto-6.jpeg',
    title: 'Isabel Kinanga',
    caption: 'Isabel Kinanga, a nossa morena tão querida e insubstituível.',
  },
  {
    src: '/assets/foto-7.jpeg',
    title: 'Amizade & Ternura Cristã',
    caption:
      'A beleza de uma amizade sincera e de sorrisos que aquecem a alma, em todas as estações da vida.',
  },
]

interface LightboxProps {
  photos: Photo[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const Lightbox: React.FC<LightboxProps> = ({ photos, currentIndex, onClose, onPrev, onNext }) => {
  const photo = photos[currentIndex]

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      style={{ background: 'rgba(2, 6, 23, 0.96)', backdropFilter: 'blur(16px)' }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center z-20 transition-all hover:scale-110 active:scale-95"
        style={{
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(245, 158, 11, 0.35)',
        }}
        onClick={onClose}
        aria-label="Fechar"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Prev button */}
      <button
        className="absolute left-2 sm:left-6 w-11 h-11 rounded-full flex items-center justify-center z-20 transition-all hover:scale-110 active:scale-95"
        style={{
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(245, 158, 11, 0.35)',
        }}
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Next button */}
      <button
        className="absolute right-2 sm:right-6 w-11 h-11 rounded-full flex items-center justify-center z-20 transition-all hover:scale-110 active:scale-95"
        style={{
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(245, 158, 11, 0.35)',
        }}
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Próxima"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Content */}
      <div
        className="flex flex-col items-center max-w-4xl w-full max-h-[92vh] gap-3 overflow-y-auto px-2 py-4 my-auto select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center w-full">
          <img
            src={photo.src}
            alt={photo.title}
            className="max-h-[62vh] sm:max-h-[72vh] max-w-full w-auto object-contain rounded-2xl mx-auto"
            style={{
              border: '1px solid rgba(245, 158, 11, 0.3)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(245, 158, 11, 0.15)',
            }}
          />
        </div>
        <div className="text-center px-4 max-w-2xl mx-auto">
          <h3 className="section-title text-lg sm:text-2xl gradient-text mb-1.5 font-serif font-semibold">{photo.title}</h3>
          <p className="text-body text-xs sm:text-base text-slate-200 leading-relaxed font-sans">{photo.caption}</p>
          <p className="text-amber-400/60 text-xs mt-2 font-sans tracking-widest">
            {currentIndex + 1} / {photos.length}
          </p>
        </div>
      </div>
    </div>
  )
}

interface PhotoCardProps {
  photo: Photo
  onClick: () => void
  className?: string
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick, className = '' }) => {
  return (
    <div
      className={`relative group cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-slate-800 hover:border-amber-500/40 ${className}`}
      style={{
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
      }}
      onClick={onClick}
    >
      <img
        src={photo.src}
        alt={photo.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay: Always visible on mobile, appears on hover on computer */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-3.5 sm:p-5 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(to top, rgba(2, 6, 23, 0.96) 0%, rgba(2, 6, 23, 0.82) 42%, rgba(2, 6, 23, 0.25) 75%, transparent 100%)',
        }}
      >
        <h3 className="section-title text-sm sm:text-base md:text-lg gradient-text leading-tight line-clamp-1 font-semibold">
          {photo.title}
        </h3>
        <p className="text-slate-200/90 text-xs sm:text-sm mt-1 font-sans leading-relaxed line-clamp-2 sm:line-clamp-3">
          {photo.caption}
        </p>
      </div>

      {/* Featured badge */}
      {photo.featured && (
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-sans font-medium pointer-events-none"
          style={{
            background: 'rgba(245, 158, 11, 0.2)',
            border: '1px solid rgba(245, 158, 11, 0.45)',
            color: '#fde68a',
            backdropFilter: 'blur(8px)',
          }}
        >
          Destaque
        </div>
      )}
    </div>
  )
}

export const GallerySection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null))
  }, [])

  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null))
  }, [])

  return (
    <section className="relative px-4 py-20 overflow-hidden" id="galeria">
      {/* Ambient glows */}
      <div
        className="ambient-glow w-[400px] h-[400px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #f59e0b 0%, transparent 65%)',
          top: '20%',
          left: '-5%',
        }}
      />
      <div
        className="ambient-glow w-[350px] h-[350px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #38bdf8 0%, transparent 65%)',
          bottom: '10%',
          right: '-5%',
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 gap-3">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
            <span className="text-xs font-sans tracking-widest uppercase text-amber-400/80 font-medium">Memórias</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
          <h2 className="section-title text-3xl sm:text-4xl gradient-text text-center">
            Momentos com a Nossa Morena
          </h2>
          <p className="text-body text-sm text-slate-300 text-center max-w-sm flex items-center justify-center gap-1.5 font-sans">
            <span role="img" aria-label="foto">🖼️</span> Toca em cada foto para ver em ecrã completo
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 auto-rows-[220px] sm:auto-rows-[240px] md:auto-rows-[260px]">
          {/* Photo 1 — Featured large */}
          <PhotoCard
            photo={photos[0]}
            onClick={() => openLightbox(0)}
            className="col-span-2 row-span-2"
          />

          {/* Photo 2 */}
          <PhotoCard photo={photos[1]} onClick={() => openLightbox(1)} />

          {/* Photo 3 */}
          <PhotoCard photo={photos[2]} onClick={() => openLightbox(2)} />

          {/* Photo 4 */}
          <PhotoCard photo={photos[3]} onClick={() => openLightbox(3)} />

          {/* Photo 5 */}
          <PhotoCard photo={photos[4]} onClick={() => openLightbox(4)} />

          {/* Photo 6 */}
          <PhotoCard
            photo={photos[5]}
            onClick={() => openLightbox(5)}
            className="col-span-2 sm:col-span-1"
          />

          {/* Photo 7 — Wide panorama */}
          <PhotoCard
            photo={photos[6]}
            onClick={() => openLightbox(6)}
            className="col-span-2 sm:col-span-2"
          />
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </section>
  )
}
