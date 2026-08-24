import { useState } from 'react'
import LifeEventCard from './LifeEventCard'
import { soundFx } from '../utils/audio'

export default function FeedWindow({
  feed = [],
  selectedSource,
  onSelectSource,
  selectedType,
  onSelectType,
  searchQuery,
  onSearchChange,
  onExport,
  onExecuteCommand,
  onOpenIPodWithTrack,
}) {
  const [forceExpand, setForceExpand] = useState(null) // null | true | false

  const sources = [
    { id: 'all', label: 'ALL SOURCES' },
    { id: 'github', label: 'GITHUB' },
    { id: 'spotify', label: 'SPOTIFY' },
    { id: 'strava', label: 'STRAVA' },
    { id: 'oura', label: 'OURA SLEEP' },
    { id: 'rescuetime', label: 'RESCUETIME' },
  ]

  const eventTypes = [
    { value: '', label: 'ALL EVENT TYPES' },
    { value: 'commit', label: 'COMMITS' },
    { value: 'pull_request', label: 'PULL REQUESTS' },
    { value: 'issue', label: 'ISSUES' },
    { value: 'music', label: 'MUSIC STREAMS' },
    { value: 'workout', label: 'WORKOUTS' },
    { value: 'sleep', label: 'SLEEP CYCLES' },
    { value: 'time_tracking', label: 'PRODUCTIVITY' },
  ]

  return (
    <div className="space-y-4">
      {/* Control Bar Window */}
      <div className="win-window win-bevel-outset p-[2px] w-full shadow-[4px_4px_0px_rgba(0,0,0,0.6)]">
        <div className="win-titlebar flex justify-between items-center px-2 py-1 bg-[#000080]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-white">tune</span>
            <span className="font-code-terminal text-[13px] font-bold text-white tracking-wide">
              STREAM.CONTROLS &amp; SEARCH
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-gray-300 font-code-terminal">
            <span>{feed.length} EVENTS LOADED</span>
            <div className="flex gap-1 ml-2">
              <button
                onClick={() => {
                  soundFx.playClick()
                  setForceExpand(true)
                }}
                className="win-bevel-button px-1.5 py-0.5 bg-gray-200 hover:bg-white text-black font-bold text-[9px]"
                title="Expand all log cards"
              >
                + EXPAND ALL
              </button>
              <button
                onClick={() => {
                  soundFx.playClick()
                  setForceExpand(false)
                }}
                className="win-bevel-button px-1.5 py-0.5 bg-gray-200 hover:bg-white text-black font-bold text-[9px]"
                title="Collapse all log cards"
              >
                - COLLAPSE ALL
              </button>
            </div>
          </div>
        </div>

        <div className="p-3 bg-[#c0c0c0] font-code-terminal text-code-terminal space-y-2.5">
          {/* Top Row: Search Input & Export Actions */}
          <div className="flex flex-wrap gap-2 items-center justify-between">
            <div className="flex items-center gap-2 flex-1 min-w-[240px]">
              <span className="font-bold text-black text-[12px]">&gt; SEARCH:</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search commits, tracks, workouts..."
                className="win-bevel-inset bg-white text-black font-code-terminal text-[12px] px-2 py-1 flex-1 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedType || ''}
                onChange={(e) => {
                  soundFx.playClick()
                  onSelectType(e.target.value)
                }}
                className="win-bevel-inset bg-white text-black font-code-terminal text-[12px] px-2 py-1 focus:outline-none"
              >
                {eventTypes.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>

              <button
                onClick={() => {
                  soundFx.playClick()
                  onExport('json')
                }}
                className="win-bevel-button bg-gray-300 text-black font-bold text-[11px] px-2.5 py-1 hover:bg-white cursor-pointer"
                title="Export Feed as JSON"
              >
                JSON
              </button>

              <button
                onClick={() => {
                  soundFx.playClick()
                  onExport('csv')
                }}
                className="win-bevel-button bg-gray-300 text-black font-bold text-[11px] px-2.5 py-1 hover:bg-white cursor-pointer"
                title="Export Feed as CSV"
              >
                CSV
              </button>
            </div>
          </div>

          {/* Bottom Row: Source Filter Pills */}
          <div className="flex flex-wrap gap-1.5 items-center pt-2 border-t border-gray-400">
            <span className="font-bold text-black text-[11px] mr-1">&gt; FILTER:</span>
            {sources.map((s) => {
              const active = (selectedSource === null && s.id === 'all') || selectedSource === s.id
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    soundFx.playClick()
                    onSelectSource(s.id === 'all' ? null : s.id)
                  }}
                  className={`win-bevel-button text-[11px] font-bold px-2.5 py-0.5 cursor-pointer ${
                    active ? 'bg-black text-secondary-container' : 'bg-gray-200 text-black hover:bg-white'
                  }`}
                >
                  {s.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Feed Cards Grid */}
      {!feed || feed.length === 0 ? (
        <div className="win-window win-bevel-outset p-[2px] mx-auto mt-8 max-w-lg">
          <div className="win-titlebar flex justify-between items-center px-2 py-1 bg-error-container">
            <span className="font-code-terminal text-[14px] font-bold tracking-wide text-white">
              NO MATCHING LIFE EVENTS
            </span>
          </div>
          <div className="p-window-padding font-code-terminal text-code-terminal">
            <p className="font-bold text-black">&gt; NO EVENTS FOUND FOR GIVEN FILTER PARAMETERS.</p>
            <p className="text-gray-700 mt-1">&gt; TRY CLEARING SEARCH OR TOGGLING DEMO MODE.</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 relative">
          {feed.map((event, index) => (
            <LifeEventCard
              key={event.id}
              event={event}
              index={index}
              onExecuteCommand={onExecuteCommand}
              onOpenIPodWithTrack={onOpenIPodWithTrack}
              forceExpand={forceExpand}
            />
          ))}
        </div>
      )}
    </div>
  )
}
