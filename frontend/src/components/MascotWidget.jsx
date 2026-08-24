import { useState, useEffect } from 'react'
import DraggableWindow from './DraggableWindow'
import { soundFx } from '../utils/audio'

const OVERSEER_QUOTES = [
  'TIP: Press ⌘K (or Ctrl+K) to open the Command Palette.',
  'TIP: Press [P] to launch the music player — real tracks, real artists.',
  'TIP: Press [S] to open Analytics — sleep, code commits, and fitness data.',
  'TIP: Press [T] to open the Terminal — run commands against your life feed.',
  'TIP: Click any feed card to inspect its raw data stream.',
]

export default function MascotWidget({
  onOpenTerminal,
  onOpenIPod,
  onOpenCommandPalette,
}) {
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [isGlitching, setIsGlitching] = useState(false)
  const [showBubble, setShowBubble] = useState(true)
  const [showDialogueWindow, setShowDialogueWindow] = useState(false)
  const [overseerResponse, setOverseerResponse] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % OVERSEER_QUOTES.length)
    }, 12000)
    return () => clearInterval(interval)
  }, [])

  const handleMascotClick = () => {
    soundFx.playBeep(880, 'square', 0.1)
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 500)
    setShowDialogueWindow(true)
  }

  const handleChoice = (optionId) => {
    soundFx.playExec()
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 400)

    switch (optionId) {
      case 'interrogate':
        setOverseerResponse(
          'This dashboard aggregates GitHub commits, Oura sleep, Strava workouts, Spotify listening history, and RescueTime productivity into a single retro life feed.'
        )
        break
      case 'shortcuts':
        setOverseerResponse(
          'Shortcuts: [T] Terminal · [S] Stats · [P] iPod · [C] Sources · [M] Mute · [D] Demo · ⌘K Command Palette'
        )
        break
      case 'palette':
        if (onOpenCommandPalette) onOpenCommandPalette()
        setShowDialogueWindow(false)
        break
      case 'ipod':
        if (onOpenIPod) onOpenIPod()
        setShowDialogueWindow(false)
        break
      default:
        break
    }
  }

  return (
    <>
      {/* Floating Widget Avatar & Speech Bubble */}
      <div className="fixed bottom-12 right-6 z-40 flex flex-col items-end pointer-events-auto max-w-[280px]">
        {/* Speech Bubble */}
        {showBubble && !showDialogueWindow && (
          <div className="endacopia-clay-card p-2.5 mb-2 max-w-[240px] bg-[#1a1a22] text-[#f4f1de] font-code-terminal text-[11px] border-2 border-[#363545] shadow-lg relative">
            <div className="flex justify-between items-center border-b border-[#363545] pb-1 mb-1 text-[9px] text-[#81b29a] font-bold">
              <span>SYSTEM // DASHBOARD TIPS</span>
              <button
                onClick={() => setShowBubble(false)}
                className="text-gray-400 hover:text-white font-bold"
              >
                ✕
              </button>
            </div>
            <p className={isGlitching ? 'glitch-text text-white' : ''}>
              &gt; {OVERSEER_QUOTES[quoteIndex]}
            </p>

            <div className="mt-2 flex gap-1.5 flex-wrap">
              <button
                onClick={() => setShowDialogueWindow(true)}
                className="endacopia-clay-button text-[9px] px-2 py-0.5"
              >
                💬 HELP
              </button>
              <button
                onClick={() => {
                  soundFx.playClick()
                  if (onOpenCommandPalette) onOpenCommandPalette()
                }}
                className="endacopia-clay-button text-[9px] px-2 py-0.5"
              >
                ⌘K Commands
              </button>
            </div>
          </div>
        )}

        {/* Mascot Avatar Button - Fixed 64x64px Dimensions */}
        <button
          onClick={handleMascotClick}
          className={`relative group w-16 h-16 min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-lg bg-[#1a1a22] border-2 border-[#363545] p-0.5 cursor-pointer transform hover:scale-105 active:scale-95 transition-all overflow-hidden shadow-md flex-shrink-0 ${
            isGlitching ? 'ring-2 ring-[#d4a373]' : ''
          }`}
          title="THE OVERSEER Mascot - Click to Interrogate"
        >
          <img
            src="/overseer.jpg"
            alt="THE OVERSEER Mascot"
            className="w-full h-full object-cover rounded"
          />
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#81b29a] border border-black animate-ping" />
        </button>
      </div>

      {/* Point-and-Click Endacopia Interactive Dialogue Modal Window */}
      {showDialogueWindow && (
        <DraggableWindow
          id="overseer-dialogue"
          title="ENDACOPIA INTERACTIVE PROTOCOL - [THE OVERSEER]"
          isOpen={showDialogueWindow}
          onClose={() => setShowDialogueWindow(false)}
          zIndex={90}
          width="max-w-lg"
          titleBg="bg-[#242330]"
          headerIcon="psychology"
          initialPosition={{ x: 60, y: 50 }}
        >
          <div className="bg-[#1a1a22] text-[#81b29a] p-4 font-code-terminal text-[12px] space-y-4 border-2 border-[#363545] rounded-b-lg">
            <div className="flex gap-4 items-center border-b border-[#363545] pb-3">
              <div className="w-16 h-16 min-w-[64px] max-w-[64px] border-2 border-[#d4a373] bg-black overflow-hidden flex-shrink-0 rounded">
                <img
                  src="/overseer.jpg"
                  alt="Overseer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-bold text-white text-[14px]">
                  THE OVERSEER
                </p>
                <p className="text-[11px] text-gray-400">ENDACOPIA DIGITAL ARCHAEOLOGY MONITOR</p>
                <p className="text-[10px] text-[#81b29a] font-bold">
                  STATUS: SYNCHRONIZED
                </p>
              </div>
            </div>

            {/* Dialogue Response Output */}
            <div className="bg-[#0a0a0d] p-3 border border-[#363545] rounded min-h-[60px] text-white">
              {overseerResponse ? (
                <p className="text-[#81b29a] font-bold">&gt; {overseerResponse}</p>
              ) : (
                <p className="text-gray-300">
                  &gt; THE OVERSEER FIXATES UPON YOU. "WHAT IS YOUR WILL, USER?"
                </p>
              )}
            </div>

            {/* Endacopia Branching Dialogue Options */}
            <div className="space-y-1.5 pt-1">
              <p className="text-gray-400 font-bold text-[10px]">&gt; CHOOSE OPTION:</p>

              <button
                onClick={() => handleChoice('interrogate')}
                className="w-full text-left endacopia-clay-button text-white font-bold p-2 text-[11px]"
              >
                [1] WHAT DOES THIS DASHBOARD DO?
              </button>

              <button
                onClick={() => handleChoice('shortcuts')}
                className="w-full text-left endacopia-clay-button text-[#81b29a] font-bold p-2 text-[11px]"
              >
                [2] SHOW ALL KEYBOARD SHORTCUTS
              </button>

              <button
                onClick={() => handleChoice('palette')}
                className="w-full text-left endacopia-clay-button text-[#d4a373] font-bold p-2 text-[11px]"
              >
                [3] OPEN COMMAND PALETTE (⌘K)
              </button>

              <button
                onClick={() => handleChoice('ipod')}
                className="w-full text-left endacopia-clay-button text-white font-bold p-2 text-[11px]"
              >
                [4] LAUNCH MUSIC PLAYER
              </button>
            </div>
          </div>
        </DraggableWindow>
      )}
    </>
  )
}
