import DraggableWindow from './DraggableWindow'
import { soundFx } from '../utils/audio'

export default function SourceManagerWindow({
  isOpen,
  isMinimized,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
  sources = [],
  isDemo,
  onToggleDemo,
  onRefreshSources,
}) {
  return (
    <DraggableWindow
      id="sources"
      title="SYSTEM CONNECTIONS - [API SOURCE MANAGER]"
      isOpen={isOpen}
      isMinimized={isMinimized}
      onClose={onClose}
      onMinimize={onMinimize}
      onFocus={onFocus}
      zIndex={zIndex}
      width="max-w-xl"
      titleBg="bg-[#800080]"
      headerIcon="hub"
      initialPosition={{ x: 80, y: 70 }}
    >
      <div className="space-y-4 font-code-terminal text-[13px]">
        {/* Synthetic Demo Mode Toggle */}
        <div className="bg-black text-white p-3 win-bevel-outset flex justify-between items-center">
          <div>
            <span className="text-secondary-container font-bold">&gt; SYNTHETIC DEMO MODE</span>
            <p className="text-[11px] text-gray-400">Generate rich sample streams when APIs are unconfigured</p>
          </div>
          <button
            onClick={() => {
              soundFx.playClick()
              onToggleDemo(!isDemo)
            }}
            className={`win-bevel-button px-4 py-1 font-bold ${
              isDemo ? 'bg-secondary-container text-black' : 'bg-gray-300 text-black'
            }`}
          >
            {isDemo ? 'ENABLED' : 'DISABLED'}
          </button>
        </div>

        {/* Registered Sources */}
        <div className="bg-white p-3 win-bevel-outset space-y-3">
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <span className="font-bold text-black">&gt; INTEGRATED SOURCES STATUS</span>
            <button
              onClick={() => {
                soundFx.playClick()
                onRefreshSources()
              }}
              className="win-bevel-button bg-gray-200 text-black px-2 py-1 text-[11px] font-bold hover:bg-gray-300"
            >
              PING API STATUS
            </button>
          </div>

          <div className="space-y-2">
            {sources.length === 0 ? (
              <p className="text-gray-500 italic">&gt; Querying sources...</p>
            ) : (
              sources.map((source) => (
                <div
                  key={source.name}
                  className="flex items-center justify-between p-2 bg-gray-100 win-bevel-inset text-[12px]"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full border border-black ${
                        source.healthy
                          ? 'bg-secondary-container'
                          : source.enabled
                          ? 'bg-yellow-400'
                          : 'bg-red-500'
                      }`}
                    />
                    <span className="font-bold uppercase text-black">{source.name}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-gray-600">
                      ENV: {source.enabled ? 'CONFIGURED' : 'NOT SET'}
                    </span>
                    <span
                      className={`px-2 py-0.5 font-bold text-[10px] uppercase ${
                        source.healthy
                          ? 'bg-black text-secondary-container'
                          : 'bg-red-800 text-white'
                      }`}
                    >
                      {source.healthy ? 'HEALTHY' : 'OFFLINE'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Configuration Guide */}
        <div className="p-3 bg-[#e0e0e0] win-bevel-inset text-[11px] text-black space-y-1">
          <p className="font-bold text-[#000080]">&gt; HOW TO CONNECT REAL API TOKENS:</p>
          <p>&bull; GitHub: Set GITHUB_TOKEN & GITHUB_USERNAME in .env</p>
          <p>&bull; Spotify: Set SPOTIFY_ACCESS_TOKEN with user-read-recently-played scope</p>
          <p>&bull; Strava: Set STRAVA_ACCESS_TOKEN in .env</p>
          <p>&bull; Oura: Set OURA_ACCESS_TOKEN in .env</p>
          <p>&bull; RescueTime: Set RESCUETIME_API_KEY in .env</p>
        </div>
      </div>
    </DraggableWindow>
  )
}
