import { useState } from 'react'
import { format } from 'date-fns'
import TypewriterText from './TypewriterText'
import { soundFx } from '../utils/audio'

const eventTypeConfig = {
  sleep: {
    icon: 'bed',
    label: 'SLEEP_CYCLE',
    color: 'bg-[#d4a373]',
    cols: 'md:col-span-6',
  },
  workout: {
    icon: 'directions_run',
    label: 'MOVEMENT',
    color: 'bg-[#81b29a]',
    cols: 'md:col-span-6',
  },
  commit: {
    icon: 'code',
    label: 'KNOWLEDGE_COMMITS',
    color: 'bg-[#e07a5f]',
    cols: 'md:col-span-12',
    hasWarning: true,
    hasInput: true,
  },
  pull_request: {
    icon: 'merge',
    label: 'CODE_MERGE',
    color: 'bg-[#81b29a]',
    cols: 'md:col-span-6',
  },
  issue: {
    icon: 'bug_report',
    label: 'ISSUE_LOG',
    color: 'bg-[#e07a5f]',
    cols: 'md:col-span-6',
  },
  music: {
    icon: 'music_note',
    label: 'AUDIO_STREAM',
    color: 'bg-[#d4a373]',
    cols: 'md:col-span-6',
  },
  time_tracking: {
    icon: 'schedule',
    label: 'TIME_ANALYSIS',
    color: 'bg-[#81b29a]',
    cols: 'md:col-span-6',
  },
  default: {
    icon: 'circle',
    label: 'DATA_ENTRY',
    color: 'bg-[#d4a373]',
    cols: 'md:col-span-6',
  },
}

export default function LifeEventCard({
  event,
  index,
  onExecuteCommand,
  onOpenIPodWithTrack,
  forceExpand = null,
}) {
  // First 2 logs are expanded by default to show rich telemetry, rest are collapsed for cleanliness
  const [isExpanded, setIsExpanded] = useState(index < 2)
  const [cmdInput, setCmdInput] = useState('')
  const [showRaw, setShowRaw] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const effectiveExpanded = forceExpand !== null ? forceExpand : isExpanded

  const config = eventTypeConfig[event.type] || eventTypeConfig.default
  const rotation =
    index % 3 === 0
      ? 'md:translate-x-[2px]'
      : index % 3 === 1
      ? 'md:translate-y-[4px] md:-translate-x-[2px]'
      : 'md:translate-y-[2px]'

  if (dismissed) return null

  const handleExec = () => {
    if (!cmdInput.trim()) return
    soundFx.playExec()
    if (onExecuteCommand) {
      onExecuteCommand(cmdInput.trim())
    }
    setCmdInput('')
  }

  const toggleExpand = () => {
    soundFx.playClick()
    setIsExpanded(!isExpanded)
  }

  // Get a quick summary string for the collapsed single-line view
  const getSummaryText = () => {
    switch (event.type) {
      case 'commit':
        return event.data.message || 'Updated codebase telemetry'
      case 'pull_request':
        return `#${event.data.number || 'PR'}: ${event.data.title || 'Code Merge'}`
      case 'issue':
        return `#${event.data.number || 'ISS'}: ${event.data.title || 'Issue Log'}`
      case 'music':
        return `"${event.data.track_name || event.data.title}" by ${event.data.artist || 'Unknown'}`
      case 'workout':
        return `${event.data.sport_type || 'Activity'} · ${event.data.distance ? `${(event.data.distance / 1000).toFixed(1)} km` : ''} · ${Math.floor((event.data.moving_time || 0) / 60)} mins`
      case 'sleep':
        return `Sleep: ${Math.floor((event.data.duration || 0) / 3600)}h ${Math.floor(((event.data.duration || 0) % 3600) / 60)}m (Score: ${event.data.score || 88})`
      case 'time_tracking':
        return `${event.data.activity || 'Development'} · ${event.data.category || 'Productivity'}`
      default:
        return 'Telemetry data event recorded'
    }
  }

  return (
    <article
      className={`endacopia-clay-card p-1 ${effectiveExpanded ? config.cols : 'col-span-12'} transform ${rotation} relative transition-all duration-200`}
    >
      {/* Collapsed Single-Line Row View */}
      {!effectiveExpanded ? (
        <div
          onClick={toggleExpand}
          className="flex items-center justify-between p-2 sm:p-2.5 bg-[#14141a] hover:bg-[#1c1b24] text-[#f4f1de] font-code-terminal rounded cursor-pointer transition-colors border border-[#2e2d3e] gap-2 flex-wrap sm:flex-nowrap"
        >
          {/* Tag & Log Number */}
          <div className="flex items-center gap-2 min-w-0">
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleExpand()
              }}
              className="endacopia-clay-button px-1.5 py-0.5 text-[10px] font-bold text-[#81b29a] flex-shrink-0"
              title="Expand Log"
            >
              [+]
            </button>
            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded text-black flex-shrink-0 ${config.color}`}>
              LOG_{String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-[10px] text-[#81b29a] font-bold hidden sm:inline flex-shrink-0">
              {format(new Date(event.timestamp), 'MMM dd, HH:mm')}
            </span>
            <span className="text-[11px] text-[#e0ddcf] truncate font-mono">
              &gt; {getSummaryText()}
            </span>
          </div>

          {/* Source & Actions */}
          <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
            {event.type === 'music' && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  soundFx.playClick()
                  if (onOpenIPodWithTrack) onOpenIPodWithTrack(event.data)
                }}
                className="endacopia-clay-button px-2 py-0.5 text-[10px] font-bold text-[#00ff00] hover:text-white"
                title="Stream on iPod"
              >
                ▶ PLAY
              </button>
            )}
            <span className="bg-[#242330] text-[#d4a373] text-[9px] px-1.5 py-0.5 uppercase font-bold rounded border border-[#363545]">
              {event.source}
            </span>
          </div>
        </div>
      ) : (
        /* Expanded Rich Telemetry View */
        <>
          {config.hasWarning && (
            <div className="absolute -top-2.5 -left-2.5 w-8 h-8 bg-[#e07a5f] border border-[#f4f1de] flex items-center justify-center z-50 transform rotate-6 shadow-md rounded">
              <span className="material-symbols-outlined text-[#0f0f13] text-lg font-bold">warning</span>
            </div>
          )}

          {/* Header Bar */}
          <div className={`flex justify-between items-center px-3 py-1.5 rounded-t ${config.color} text-[#0f0f13] font-bold`}>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleExpand}
                className="endacopia-clay-button px-1.5 h-5 flex items-center justify-center text-[10px] font-bold"
                title="Collapse Log"
              >
                [-]
              </button>
              <span className="font-code-terminal text-[12px] tracking-wider uppercase font-extrabold">
                LOG_{String(index + 1).padStart(2, '0')}: {config.label}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {event.type === 'music' && (
                <button
                  onClick={() => {
                    soundFx.playClick()
                    if (onOpenIPodWithTrack) onOpenIPodWithTrack(event.data)
                  }}
                  className="endacopia-clay-button w-5 h-5 flex items-center justify-center text-[11px]"
                  title="Stream on iPod"
                >
                  ▶
                </button>
              )}
              <button
                onClick={() => {
                  soundFx.playClick()
                  setShowRaw(!showRaw)
                }}
                className="endacopia-clay-button px-1.5 h-5 flex items-center justify-center text-[9px] font-bold"
                title="Inspect Telemetry JSON"
              >
                {showRaw ? 'JSON' : '{ }'}
              </button>
              <button
                onClick={() => {
                  soundFx.playClick()
                  setDismissed(true)
                }}
                className="endacopia-clay-button w-5 h-5 flex items-center justify-center text-[11px]"
                title="Dismiss Card"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Card Content Area */}
          <div className="p-3.5 flex flex-col bg-[#14141a] gap-2.5 rounded-b text-[#f4f1de] font-code-terminal">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#81b29a] text-[18px]">
                {config.icon}
              </span>
              <span className="text-[10px] font-bold text-[#81b29a] uppercase">
                {format(new Date(event.timestamp), 'MMM dd, HH:mm')}
              </span>
              <span className="bg-[#242330] text-[#d4a373] text-[9px] px-2 py-0.5 uppercase ml-auto font-bold rounded border border-[#363545]">
                {event.source}
              </span>
            </div>

            {showRaw ? (
              <pre className="font-code-terminal text-[10px] bg-[#0a0a0d] text-[#81b29a] p-2 border border-[#363545] rounded overflow-auto max-h-[160px]">
                {JSON.stringify(event, null, 2)}
              </pre>
            ) : (
              <EventContent
                event={event}
                onOpenIPodWithTrack={onOpenIPodWithTrack}
              />
            )}

            {config.hasInput && (
              <div className="mt-auto pt-2 flex gap-2">
                <input
                  className="bg-[#0a0a0d] text-[#81b29a] border border-[#363545] font-code-terminal px-2.5 py-1 w-full focus:outline-none text-[11px] rounded"
                  placeholder="ENTER COMMAND (e.g. help, stats, mail)"
                  type="text"
                  value={cmdInput}
                  onChange={(e) => setCmdInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleExec()
                  }}
                />
                <button
                  onClick={handleExec}
                  className="endacopia-clay-button px-3 text-[11px] cursor-pointer"
                >
                  EXEC
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </article>
  )
}

function EventContent({ event, onOpenIPodWithTrack }) {
  switch (event.type) {
    case 'sleep':
      return (
        <>
          <p className="font-bold text-[14px] text-white">
            Duration: {Math.floor(event.data.duration / 3600)}h{' '}
            {Math.floor((event.data.duration % 3600) / 60)}m
          </p>
          {event.data.efficiency && (
            <p className="text-[11px] text-[#81b29a]">
              &gt; <TypewriterText text={`Rest Efficiency: ${event.data.efficiency}% · Recovery Score: ${event.data.score || 88}/100`} delay={18} />
            </p>
          )}
          {event.data.deep_sleep && (
            <p className="text-[10px] text-gray-400">
              Deep Rest: {Math.floor(event.data.deep_sleep / 60)} mins · REM Rest:{' '}
              {Math.floor(event.data.rem_sleep / 60)} mins
            </p>
          )}
        </>
      )

    case 'workout':
      return (
        <>
          <p className="font-bold text-[14px] text-white">
            {event.data.sport_type || 'Activity'}: {event.data.name}
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] text-[#81b29a]">
            {event.data.distance > 0 && (
              <span>&gt; Dist: {(event.data.distance / 1000).toFixed(2)} km</span>
            )}
            <span>&gt; Moving: {Math.floor(event.data.moving_time / 60)} mins</span>
            {event.data.calories && <span>&gt; Energy: {event.data.calories} kcal</span>}
          </div>
        </>
      )

    case 'commit':
      return (
        <>
          <p className="font-bold text-[13px] text-white">
            Repo: {event.data.repo}
          </p>
          <p className="text-[12px] text-[#81b29a] font-bold">
            &gt; <TypewriterText text={event.data.message} delay={20} />
          </p>
          {event.data.hash && (
            <p className="text-[10px] text-gray-500 font-mono">
              HASH: {event.data.hash.substring(0, 10)}
            </p>
          )}
        </>
      )

    case 'pull_request':
      return (
        <>
          <p className="font-bold text-[13px] text-white">
            PR #{event.data.number}: {event.data.title}
          </p>
          <p className="text-[11px] text-[#81b29a]">
            Repo: {event.data.repo} · <span className="uppercase text-[#d4a373]">{event.data.state}</span>
          </p>
        </>
      )

    case 'issue':
      return (
        <>
          <p className="font-bold text-[13px] text-white">
            Issue #{event.data.number}: {event.data.title}
          </p>
          <p className="text-[11px] text-[#81b29a]">
            Repo: {event.data.repo} · <span className="uppercase text-[#e07a5f]">{event.data.state}</span>
          </p>
        </>
      )

    case 'music':
      return (
        <>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[13px] text-white">
              {event.data.track_name || event.data.title}
            </span>
          </div>
          <p className="text-[11px] text-[#81b29a]">
            Artist: {event.data.artist}
          </p>
          {event.data.album && (
            <p className="text-[10px] text-gray-400">
              Album: {event.data.album}
            </p>
          )}
        </>
      )

    case 'time_tracking':
      return (
        <>
          <p className="font-bold text-[13px] text-white">
            {event.data.activity}
          </p>
          <p className="text-[11px] text-[#81b29a]">
            Category: {event.data.category} · Duration: {Math.floor(event.data.duration / 60)}m
          </p>
          {event.data.productivity_score && (
            <p className="text-[10px] text-[#d4a373]">
              &gt; Productivity Index: {event.data.productivity_score}%
            </p>
          )}
        </>
      )

    default:
      return (
        <p className="text-[12px] text-white">
          {event.data.description || JSON.stringify(event.data)}
        </p>
      )
  }
}
