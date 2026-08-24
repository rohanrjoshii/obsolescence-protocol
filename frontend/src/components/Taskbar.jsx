import { useState, useEffect } from 'react'
import { soundFx } from '../utils/audio'

export default function Taskbar({
  windows = [],
  activeWindowId,
  onToggleWindow,
  onOpenWindow,
  onToggleAudio,
  isMuted,
  isDemo,
  onToggleDemo,
  onOpenCommandPalette,
}) {
  const [startOpen, setStartOpen] = useState(false)
  const [timeStr, setTimeStr] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const d = new Date()
      setTimeStr(
        d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-[#c0c0c0] border-t-2 border-white win-bevel-outset flex justify-between items-center h-10 px-1 font-code-terminal text-code-terminal">
      {/* Start Button & Task Buttons */}
      <div className="flex items-center gap-1">
        {/* Start Button */}
        <div className="relative">
          <button
            onClick={() => {
              soundFx.playClick()
              setStartOpen(!startOpen)
            }}
            className={`win-bevel-button px-3 py-1 font-bold flex items-center gap-1.5 text-[12px] text-black ${
              startOpen ? 'bg-gray-400 border-black' : 'bg-gray-300'
            }`}
          >
            <span
              className="material-symbols-outlined text-[18px] text-[#000080]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              grid_view
            </span>
            <span>Start</span>
          </button>

          {/* Start Menu Popup */}
          {startOpen && (
            <div
              className="absolute bottom-11 left-0 w-64 bg-[#c0c0c0] win-bevel-outset shadow-[8px_8px_0px_rgba(0,0,0,0.8)] z-50 p-[2px]"
              onClick={() => setStartOpen(false)}
            >
              <div className="flex">
                <div className="w-8 bg-[#000080] text-white font-bold flex items-end justify-center pb-4 tracking-widest text-[12px] [writing-mode:vertical-lr] transform rotate-180">
                  OBSOLESCENCE OS
                </div>
                <div className="flex-1 p-1 space-y-1 text-black font-code-terminal text-[12px]">
                  <button
                    onClick={() => onOpenWindow('terminal')}
                    className="w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">terminal</span>
                    <span>Terminal CLI</span>
                  </button>

                  <button
                    onClick={() => onOpenWindow('stats')}
                    className="w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">analytics</span>
                    <span>Analytics Dashboard</span>
                  </button>

                  <button
                    onClick={() => onOpenWindow('sources')}
                    className="w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">hub</span>
                    <span>API Connections</span>
                  </button>

                  <button
                    onClick={() => onOpenWindow('profile')}
                    className="w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">person</span>
                    <span>LinkedIn & LeetCode</span>
                  </button>

                  <button
                    onClick={() => onOpenWindow('directives')}
                    className="w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">checklist</span>
                    <span>Directives & Goals</span>
                  </button>

                  <button
                    onClick={() => onOpenWindow('ipod')}
                    className="w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">graphic_eq</span>
                    <span>Music Player</span>
                  </button>

                  <button
                    onClick={() => onOpenWindow('memory')}
                    className="w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">photo_library</span>
                    <span>Memory & GIF Cache</span>
                  </button>

                  <button
                    onClick={() => onOpenWindow('transmission')}
                    className="w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">mark_email_read</span>
                    <span>Contact &amp; Dispatch Relay</span>
                  </button>

                  <hr className="border-gray-400 my-1" />

                  <button
                    onClick={() => onToggleDemo(!isDemo)}
                    className="w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">science</span>
                    <span>Synthetic Demo: {isDemo ? 'ON' : 'OFF'}</span>
                  </button>

                  <button
                    onClick={onToggleAudio}
                    className="w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {isMuted ? 'volume_off' : 'volume_up'}
                    </span>
                    <span>Audio Synth: {isMuted ? 'MUTED' : 'ACTIVE'}</span>
                  </button>

                  {onOpenCommandPalette && (
                    <button
                      onClick={onOpenCommandPalette}
                      className="w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[16px]">search</span>
                      <span>Command Palette (⌘K)</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Window Task Buttons */}
        <div className="hidden sm:flex items-center gap-1 overflow-x-auto max-w-2xl">
          {windows.map((win) => {
            const isActive = activeWindowId === win.id && !win.isMinimized
            return (
              <button
                key={win.id}
                onClick={() => {
                  soundFx.playClick()
                  onToggleWindow(win.id)
                }}
                className={`win-bevel-button px-2 py-1 text-[11px] font-bold truncate max-w-[130px] flex items-center gap-1 text-black ${
                  isActive ? 'bg-gray-400 border-black' : 'bg-gray-300'
                }`}
              >
                <span className="material-symbols-outlined text-[14px]">
                  {win.icon || 'window'}
                </span>
                <span className="truncate">{win.title}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* System Tray */}
      <div className="flex items-center gap-2 px-2 py-1 win-bevel-inset bg-gray-200 text-black text-[12px] font-bold">
        {/* Command Palette shortcut — always visible */}
        {onOpenCommandPalette && (
          <button
            onClick={onOpenCommandPalette}
            className="win-bevel-button bg-gray-300 px-2 py-0.5 text-[10px] font-bold flex items-center gap-1 hover:bg-white text-[#000080] whitespace-nowrap"
            title="Open Command Palette (⌘K / Ctrl+K)"
          >
            <span className="material-symbols-outlined text-[13px]">search</span>
            <span className="hidden sm:inline">⌘K</span>
          </button>
        )}
        <button
          onClick={onToggleAudio}
          className="hover:text-[#000080] flex items-center"
          title={isMuted ? 'Unmute Synth' : 'Mute Synth'}
        >
          <span className="material-symbols-outlined text-[16px]">
            {isMuted ? 'volume_off' : 'volume_up'}
          </span>
        </button>
        {isDemo && (
          <span className="bg-primary-container text-black text-[9px] px-1 font-bold animate-pulse">
            DEMO
          </span>
        )}
        <span>{timeStr}</span>
      </div>
    </footer>
  )
}
