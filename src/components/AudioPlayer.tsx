import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Music, Pause, Volume2, VolumeX } from 'lucide-react'

/**
 * Synthesizes a peaceful ambient chord progression using the Web Audio API.
 * Key: F major / D minor — creates a feeling of warmth, consolation, and serenity.
 */
export const useAmbientAudio = () => {
  const ctxRef = useRef<AudioContext | null>(null)
  const masterGainRef = useRef<GainNode | null>(null)
  const isPlayingRef = useRef(false)
  const nodesRef = useRef<AudioNode[]>([])

  // F major chord frequencies (F3, A3, C4) and Dm (D3, F3, A3) alternating
  const CHORD_PROGRESSIONS = [
    [174.61, 220.0, 261.63], // F Major
    [146.83, 174.61, 220.0], // D Minor
    [130.81, 164.81, 196.0], // C Major (G2,E3,G3 sub)
    [174.61, 220.0, 293.66], // F Major 2nd pos
  ]

  const createChord = useCallback(
    (ctx: AudioContext, masterGain: GainNode, freqs: number[], time: number, duration: number) => {
      freqs.forEach((freq) => {
        // Sine oscillator for softness
        const osc = ctx.createOscillator()
        const gainNode = ctx.createGain()
        const filter = ctx.createBiquadFilter()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, time)

        filter.type = 'lowpass'
        filter.frequency.setValueAtTime(800, time)
        filter.Q.setValueAtTime(0.5, time)

        // Soft envelope: slow attack, long sustain, fade
        gainNode.gain.setValueAtTime(0, time)
        gainNode.gain.linearRampToValueAtTime(0.06, time + 2)
        gainNode.gain.setValueAtTime(0.06, time + duration - 2)
        gainNode.gain.linearRampToValueAtTime(0, time + duration)

        osc.connect(filter)
        filter.connect(gainNode)
        gainNode.connect(masterGain)

        osc.start(time)
        osc.stop(time + duration)

        nodesRef.current.push(osc, gainNode, filter)
      })
    },
    []
  )

  const startAudio = useCallback(async () => {
    if (isPlayingRef.current) return

    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
      ctxRef.current = ctx

      if (ctx.state === 'suspended') {
        await ctx.resume()
      }

      const masterGain = ctx.createGain()
      masterGain.gain.setValueAtTime(0, ctx.currentTime)
      masterGain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 3)
      masterGain.connect(ctx.destination)
      masterGainRef.current = masterGain

      // Reverb-like delay for warmth
      const delay = ctx.createDelay(2)
      delay.delayTime.setValueAtTime(0.4, ctx.currentTime)
      const delayGain = ctx.createGain()
      delayGain.gain.setValueAtTime(0.2, ctx.currentTime)
      delay.connect(delayGain)
      delayGain.connect(masterGain)
      masterGain.connect(delay)

      isPlayingRef.current = true

      // Loop chords
      const CHORD_DURATION = 8
      const schedule = (startTime: number) => {
        if (!isPlayingRef.current) return
        CHORD_PROGRESSIONS.forEach((chord, i) => {
          createChord(ctx, masterGain, chord, startTime + i * CHORD_DURATION, CHORD_DURATION + 1)
        })
        const nextLoop = startTime + CHORD_PROGRESSIONS.length * CHORD_DURATION - 1
        const timeUntilReschedule = (nextLoop - ctx.currentTime) * 1000 - 500
        setTimeout(() => {
          if (isPlayingRef.current) schedule(nextLoop)
        }, Math.max(0, timeUntilReschedule))
      }

      schedule(ctx.currentTime)
    } catch (e) {
      console.error('Audio error:', e)
    }
  }, [createChord])

  const stopAudio = useCallback(() => {
    isPlayingRef.current = false
    if (masterGainRef.current && ctxRef.current) {
      masterGainRef.current.gain.linearRampToValueAtTime(0, ctxRef.current.currentTime + 1.5)
      setTimeout(() => {
        ctxRef.current?.close()
        ctxRef.current = null
        masterGainRef.current = null
        nodesRef.current = []
      }, 2000)
    }
  }, [])

  return { startAudio, stopAudio }
}

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const { startAudio, stopAudio } = useAmbientAudio()

  const toggle = useCallback(async () => {
    if (isPlaying) {
      stopAudio()
      setIsPlaying(false)
    } else {
      await startAudio()
      setIsPlaying(true)
    }
  }, [isPlaying, startAudio, stopAudio])

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev)
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAudio()
    }
  }, [stopAudio])

  return (
    <div className="flex items-center gap-2">
      {/* Mute/Unmute (only when playing) */}
      {isPlaying && (
        <button
          onClick={toggleMute}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-60 hover:opacity-100"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          aria-label={isMuted ? 'Ligar som' : 'Silenciar'}
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-white/60" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-white/60" />
          )}
        </button>
      )}

      {/* Play/Pause button */}
      <button
        onClick={toggle}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300"
        style={{
          background: isPlaying
            ? 'rgba(244, 114, 182, 0.15)'
            : 'rgba(255, 255, 255, 0.06)',
          border: `1px solid ${isPlaying ? 'rgba(244, 114, 182, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`,
        }}
        aria-label={isPlaying ? 'Pausar música' : 'Tocar música ambiente'}
      >
        {isPlaying ? (
          <Pause className="w-3.5 h-3.5 text-rose-300" />
        ) : (
          <Music className="w-3.5 h-3.5 text-white/60" />
        )}
        <span className="text-xs font-sans font-medium hidden sm:block" style={{ color: isPlaying ? '#f9a8d4' : 'rgba(255,255,255,0.5)' }}>
          {isPlaying ? 'Pausar' : 'Música'}
        </span>
        {isPlaying && (
          <span className="flex gap-0.5 items-end h-3">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className="w-0.5 rounded-full bg-rose-400"
                style={{
                  height: `${4 + i * 2}px`,
                  animation: `pulse ${0.6 + i * 0.15}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </span>
        )}
      </button>
    </div>
  )
}
