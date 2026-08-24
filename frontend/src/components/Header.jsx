import { soundFx } from '../utils/audio'

export default function Header({
  onOpenWindow,
  onToggleAudio,
  onOpenContact,
  isMuted,
  isDemo,
}) {
  return (
    <header
      className="fixed top-0 w-full z-40 border-b-4 border-r-4 border-white bg-surface-container-highest text-primary font-code-terminal text-code-terminal flex justify-between items-center px-3 sm:px-margin-edge h-16"
      style={{
        boxShadow:
          'inset 2px 2px 0px 0px rgba(255,255,255,0.2), inset -2px -2px 0px 0px rgba(0,0,0,0.5)',
      }}
    >
      <div className="flex items-center gap-2 sm:gap-gutter min-w-0">
        <div className="h-9 w-9 sm:h-10 sm:w-10 border-2 border-primary-container rounded-sm bg-black flex items-center justify-center flex-shrink-0">
          <span
            className="material-symbols-outlined text-primary-container text-xl sm:text-2xl"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            query_stats
          </span>
        </div>
        <div className="flex flex-col min-w-0">
          <h1
            className="font-display-lg text-[18px] sm:text-display-lg text-primary uppercase tracking-tighter hidden sm:block glitch-text truncate"
            data-text="OBSOLESCENCE PROTOCOL"
          >
            OBSOLESCENCE PROTOCOL
          </h1>
          <h1
            className="font-display-lg text-[16px] leading-none text-primary uppercase tracking-tighter sm:hidden glitch-text truncate"
            data-text="OBS. PROTOCOL"
          >
            OBS. PROTOCOL
          </h1>
        </div>

        {isDemo && (
          <span className="hidden md:inline-block ml-2 bg-primary-container text-black font-label-sm text-[10px] px-2 py-0.5 win-bevel-outset uppercase font-bold animate-pulse flex-shrink-0">
            DEMO MODE
          </span>
        )}
      </div>

      {/* Control Buttons & Recruiter Direct CTA */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
        {/* Recruiter Direct Contact Button */}
        <button
          onClick={() => {
            soundFx.playClick()
            if (onOpenContact) onOpenContact()
          }}
          className="win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white px-2.5 py-1 flex items-center gap-1.5 text-[11px] sm:text-[12px] font-bold shadow-[2px_2px_0px_rgba(0,0,0,0.6)] cursor-pointer"
          title="Direct Contact & Inquiries"
        >
          <span className="material-symbols-outlined text-[15px] text-amber-300">mail</span>
          <span>CONTACT</span>
        </button>

        <button
          onClick={() => {
            soundFx.playClick()
            onOpenWindow('stats')
          }}
          className="win-bevel-button bg-gray-300 text-black px-2 py-1 flex items-center gap-1 text-[11px] sm:text-[12px] font-bold hover:bg-white"
          title="Open Analytics Dashboard [S]"
        >
          <span className="material-symbols-outlined text-[15px]">analytics</span>
          <span className="hidden md:inline">Stats</span>
        </button>

        <button
          onClick={() => {
            soundFx.playClick()
            onOpenWindow('terminal')
          }}
          className="win-bevel-button bg-gray-300 text-black px-2 py-1 flex items-center gap-1 text-[11px] sm:text-[12px] font-bold hover:bg-white"
          title="Open CLI Terminal [T]"
        >
          <span className="material-symbols-outlined text-[15px]">terminal</span>
          <span className="hidden md:inline">Terminal</span>
        </button>

        <button
          onClick={() => {
            soundFx.playClick()
            onOpenWindow('ipod')
          }}
          className="win-bevel-button bg-gray-300 text-black px-2 py-1 flex items-center gap-1 text-[11px] sm:text-[12px] font-bold hover:bg-white text-purple-950 hidden sm:flex"
          title="Open Retro iPod Music Player [P]"
        >
          <span className="material-symbols-outlined text-[15px]">graphic_eq</span>
          <span className="hidden md:inline">iPod</span>
        </button>

        <button
          onClick={() => {
            onToggleAudio()
          }}
          className="win-bevel-button bg-gray-300 text-black px-2 py-1 flex items-center gap-1 text-[11px] sm:text-[12px] font-bold hover:bg-white"
          title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
        >
          <span className="material-symbols-outlined text-[15px]">
            {isMuted ? 'volume_off' : 'volume_up'}
          </span>
        </button>
      </div>
    </header>
  )
}
