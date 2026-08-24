// Procedural Web Audio 8-Bit / Synthwave Engine & Audio Stream Player
// 100% Region-Free, Zero-Geo-Blocking, Instant Playback Everywhere

class ProceduralSynthAudio {
  constructor() {
    this.ctx = null
    this.isPlaying = false
    this.currentTrackId = null
    this.timerId = null
    this.gainNode = null
    this.analyser = null
    this.noteIndex = 0
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
        this.analyser = this.ctx.createAnalyser()
        this.analyser.fftSize = 64
        this.gainNode = this.ctx.createGain()
        this.gainNode.gain.setValueAtTime(0.15, this.ctx.currentTime)
        this.gainNode.connect(this.ctx.destination)
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  // Melodic sequences for iconic tracks (frequencies in Hz)
  getMelody(trackId) {
    switch (trackId) {
      case 'GET_LUCKY':
        // Daft Punk - Get Lucky disco groove chords (Bm7 - D - F#m7 - E)
        return [
          { freq: 246.94, dur: 220, type: 'sawtooth' }, // B
          { freq: 293.66, dur: 220, type: 'sawtooth' }, // D
          { freq: 369.99, dur: 220, type: 'sawtooth' }, // F#
          { freq: 440.0, dur: 220, type: 'sawtooth' },  // A
          { freq: 293.66, dur: 220, type: 'sawtooth' }, // D
          { freq: 369.99, dur: 220, type: 'sawtooth' }, // F#
          { freq: 440.0, dur: 220, type: 'sawtooth' },  // A
          { freq: 554.37, dur: 220, type: 'sawtooth' }, // C#
          { freq: 369.99, dur: 220, type: 'sawtooth' }, // F#
          { freq: 440.0, dur: 220, type: 'sawtooth' },  // A
          { freq: 554.37, dur: 220, type: 'sawtooth' }, // C#
          { freq: 659.25, dur: 220, type: 'sawtooth' }, // E
          { freq: 329.63, dur: 220, type: 'sawtooth' }, // E
          { freq: 415.3, dur: 220, type: 'sawtooth' },  // G#
          { freq: 493.88, dur: 220, type: 'sawtooth' }, // B
          { freq: 659.25, dur: 220, type: 'sawtooth' }, // E
        ]

      case 'BLINDING_LIGHTS':
        // The Weeknd - Blinding Lights synth lead (F - D# - F - G - D# - C - D#)
        return [
          { freq: 349.23, dur: 180, type: 'square' }, // F4
          { freq: 349.23, dur: 180, type: 'square' },
          { freq: 311.13, dur: 180, type: 'square' }, // Eb4
          { freq: 349.23, dur: 280, type: 'square' }, // F4
          { freq: 392.0, dur: 280, type: 'square' },  // G4
          { freq: 311.13, dur: 280, type: 'square' }, // Eb4
          { freq: 261.63, dur: 320, type: 'square' }, // C4
          { freq: 311.13, dur: 360, type: 'square' }, // Eb4
          { freq: 349.23, dur: 220, type: 'square' },
          { freq: 392.0, dur: 220, type: 'square' },
          { freq: 466.16, dur: 320, type: 'square' }, // Bb4
          { freq: 392.0, dur: 320, type: 'square' },
        ]

      case 'STARBOY':
        // The Weeknd ft Daft Punk - Starboy dark bass arpeggio
        return [
          { freq: 110.0, dur: 200, type: 'triangle' }, // A2
          { freq: 220.0, dur: 200, type: 'sawtooth' }, // A3
          { freq: 261.63, dur: 200, type: 'sawtooth' },// C4
          { freq: 329.63, dur: 200, type: 'sawtooth' },// E4
          { freq: 98.0, dur: 200, type: 'triangle' },  // G2
          { freq: 196.0, dur: 200, type: 'sawtooth' }, // G3
          { freq: 246.94, dur: 200, type: 'sawtooth' },// B3
          { freq: 293.66, dur: 200, type: 'sawtooth' },// D4
          { freq: 87.31, dur: 200, type: 'triangle' },  // F2
          { freq: 174.61, dur: 200, type: 'sawtooth' },// F3
          { freq: 220.0, dur: 200, type: 'sawtooth' }, // A3
          { freq: 261.63, dur: 200, type: 'sawtooth' },// C4
        ]

      case 'APOCALYPSE':
        // Cigarettes After Sex - Apocalypse dreamy ambient guitar chords
        return [
          { freq: 196.0, dur: 450, type: 'sine' },  // G3
          { freq: 246.94, dur: 450, type: 'sine' }, // B3
          { freq: 293.66, dur: 500, type: 'sine' }, // D4
          { freq: 392.0, dur: 600, type: 'sine' },  // G4
          { freq: 174.61, dur: 450, type: 'sine' }, // F3
          { freq: 220.0, dur: 450, type: 'sine' },  // A3
          { freq: 261.63, dur: 500, type: 'sine' }, // C4
          { freq: 349.23, dur: 600, type: 'sine' }, // F4
        ]

      default:
        // Cyberpunk Synthwave arpeggio
        return [
          { freq: 130.81, dur: 180, type: 'sawtooth' }, // C3
          { freq: 196.0, dur: 180, type: 'sawtooth' },  // G3
          { freq: 261.63, dur: 180, type: 'sawtooth' }, // C4
          { freq: 311.13, dur: 180, type: 'sawtooth' }, // Eb4
          { freq: 392.0, dur: 180, type: 'sawtooth' },  // G4
          { freq: 466.16, dur: 180, type: 'sawtooth' }, // Bb4
          { freq: 523.25, dur: 240, type: 'sawtooth' }, // C5
          { freq: 392.0, dur: 180, type: 'sawtooth' },
        ]
    }
  }

  playTrack(trackId) {
    this.stop()
    this.init()
    this.isPlaying = true
    this.currentTrackId = trackId
    this.noteIndex = 0

    const melody = this.getMelody(trackId)

    const step = () => {
      if (!this.isPlaying || !this.ctx) return

      const note = melody[this.noteIndex % melody.length]
      this.noteIndex++

      try {
        const osc = this.ctx.createOscillator()
        const noteGain = this.ctx.createGain()
        const filter = this.ctx.createBiquadFilter()

        filter.type = 'lowpass'
        filter.frequency.setValueAtTime(1400, this.ctx.currentTime)

        osc.type = note.type || 'sawtooth'
        osc.frequency.setValueAtTime(note.freq, this.ctx.currentTime)

        // Envelope
        const durSec = note.dur / 1000
        noteGain.gain.setValueAtTime(0.001, this.ctx.currentTime)
        noteGain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 0.02)
        noteGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + durSec)

        osc.connect(filter)
        filter.connect(noteGain)
        if (this.analyser) {
          noteGain.connect(this.analyser)
        }
        noteGain.connect(this.gainNode)

        osc.start()
        osc.stop(this.ctx.currentTime + durSec)
      } catch (e) {
        console.warn('Synth note error:', e)
      }

      this.timerId = setTimeout(step, note.dur)
    }

    step()
  }

  stop() {
    this.isPlaying = false
    if (this.timerId) {
      clearTimeout(this.timerId)
      this.timerId = null
    }
  }

  togglePlay(trackId) {
    if (this.isPlaying) {
      this.stop()
      return false
    } else {
      this.playTrack(trackId || this.currentTrackId || 'GET_LUCKY')
      return true
    }
  }
}

export const synthAudioEngine = new ProceduralSynthAudio()
