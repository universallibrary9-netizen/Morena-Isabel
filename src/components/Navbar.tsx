import React from 'react'
import { Heart } from 'lucide-react'
import { AudioPlayer } from './AudioPlayer'

export const Navbar: React.FC = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 px-4 py-3"
      style={{
        background: 'rgba(2, 6, 23, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(245, 158, 11, 0.15)',
      }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400 opacity-90" />
          <span
            className="font-serif text-sm sm:text-base font-medium tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Isabel Kinanga
          </span>
        </div>

        {/* Audio Player */}
        <AudioPlayer />
      </div>
    </header>
  )
}
