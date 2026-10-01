import React from 'react'
import { Sparkles } from 'lucide-react'
import { AudioPlayer } from './AudioPlayer'

export const Navbar: React.FC = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 px-4 py-3"
      style={{
        background: 'rgba(9, 7, 15, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(244, 114, 182, 0.08)',
      }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-rose-gold opacity-80" />
          <span
            className="font-serif text-sm font-medium tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #f472b6, #fde68a)',
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
