import React, { useState, useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react'

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(9, 7, 15, 0.95)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110"
        style={{
          background: 'rgba(244, 114, 182, 0.15)',
          border: '1px solid rgba(244, 114, 182, 0.3)',
        }}
        onClick={onClose}
        aria-label="Fechar"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Prev button */}
      <button
        className="absolute left-2 sm:left-6 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110"
        style={{
          background: 'rgba(244, 114, 182, 0.15)',
          border: '1px solid rgba(244, 114, 182, 0.3)',
        }}
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      {/* Next button */}
      <button
        className="absolute right-2 sm:right-6 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110"
        style={{
          background: 'rgba(244, 114, 182, 0.15)',
          border: '1px solid rgba(244, 114, 182, 0.3)',
        }}
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Próxima"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Content */}
      <div
        className="flex flex-col items-center max-w-2xl w-full gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.title}
          className="w-full max-h-[60vh] object-cover rounded-2xl"
          style={{ border: '1px solid rgba(244, 114, 182, 0.2)' }}
        />
        <div className="text-center px-4">
          <h3 className="section-title text-xl gradient-text mb-2">{photo.title}</h3>
          <p className="text-body text-sm text-white/70 leading-relaxed">{photo.caption}</p>
          <p className="text-white/30 text-xs mt-3 font-sans">
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
      className={`relative group cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${className}`}
      style={{
        border: '1px solid rgba(244, 114, 182, 0.15)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      }}
      onClick={onClick}
    >
      <img
        src={photo.src}
        alt={photo.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-4 sm:p-5"
        style={{
          background: 'linear-gradient(to top, rgba(9, 7, 15, 0.92) 0%, rgba(9, 7, 15, 0.3) 60%, transparent 100%)',
        }}
      >
        <h3 className="section-title text-base sm:text-lg gradient-text leading-tight">
          {photo.title}
        </h3>
        <p className="text-white/70 text-xs mt-1 line-clamp-2 font-sans leading-relaxed">
          {photo.caption}
        </p>
      </div>

      {/* Camera icon on hover */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(244, 114, 182, 0.2)', backdropFilter: 'blur(8px)' }}
        >
          <Camera className="w-4 h-4 text-rose-300" />
        </div>
      </div>

      {/* Featured badge */}
      {photo.featured && (
        <div
          className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-sans font-medium"
          style={{
            background: 'rgba(251, 191, 36, 0.15)',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            color: '#fde68a',
            backdropFilter: 'blur(8px)',
          }}
        >
          ✦ Destaque
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
      {/* Ambient */}
      <div
        className="ambient-glow w-[400px] h-[400px] opacity-8"
        style={{
          background: 'radial-gradient(circle, #f472b6 0%, transparent 65%)',
          top: '20%',
          left: '-5%',
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 gap-3">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-gold opacity-50" />
            <span className="text-xs font-sans tracking-widest uppercase text-white/40">Memórias</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-gold opacity-50" />
          </div>
          <h2 className="section-title text-3xl sm:text-4xl gradient-text text-center">
            Momentos com a Nossa Morena
          </h2>
          <p className="text-body text-sm text-white/50 text-center max-w-sm">
            Toca em cada foto para ver em ecrã completo ✦
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
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

          {/* Photo 6 — Wide */}
          <PhotoCard
            photo={photos[5]}
            onClick={() => openLightbox(5)}
            className="col-span-1 sm:col-span-1"
          />

          {/* Photo 7 — Wide */}
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
