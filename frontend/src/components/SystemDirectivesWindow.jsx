import { useState } from 'react'
import DraggableWindow from './DraggableWindow'
import TypewriterText from './TypewriterText'
import { soundFx } from '../utils/audio'

const INITIAL_DIRECTIVES = [
  {
    id: 1,
    status: 'DONE',
    category: 'SYSTEM',
    title: 'Architect Obsolescence Protocol Reverse Gateway',
    desc: 'Fault-isolated proxy aggregating 5+ live telemetry APIs with in-memory TTL caching.',
    date: 'Aug 2026',
  },
  {
    id: 2,
    status: 'DONE',
    category: 'PRODUCTION',
    title: 'Ship Production Matrimonial Platform @ ICM',
    desc: 'Engineered Supabase PostgreSQL RLS backend and 15+ responsive React screens.',
    date: 'Dec 2025',
  },
  {
    id: 3,
    status: 'DONE',
    category: 'SYSTEM',
    title: 'Build Nimbus macOS Dynamic Island Clone',
    desc: 'Sourced telemetry directly from raw kernel APIs (host_processor_info, IOKit) in Swift/AppKit.',
    date: 'June 2026',
  },
  {
    id: 4,
    status: 'DONE',
    category: 'ALGORITHM',
    title: 'Maintain 39d LeetCode Daily Streak & 196+ Solved',
    desc: 'Verified problem solving benchmark across Easy, Medium, and Hard tiers.',
    date: 'Ongoing',
  },
  {
    id: 5,
    status: 'PEND',
    category: 'ACADEMIC',
    title: 'Graduate BCA @ PES University (RR Campus)',
    desc: 'Complete Bachelor of Computer Applications degree in Bengaluru, India.',
    date: 'May 2026',
  },
  {
    id: 6,
    status: 'PEND',
    category: 'ALGORITHM',
    title: 'Target 500+ LeetCode Solved & Knight Tier Benchmark',
    desc: 'Scale algorithmic mastery across dynamic programming, graphs, and system design.',
    date: 'Q4 2026',
  },
  {
    id: 7,
    status: 'PEND',
    category: 'CAREER',
    title: 'Secure High-Impact Full-Stack / Distributed SWE Role',
    desc: 'Join engineering team building resilient distributed systems and low-latency APIs.',
    date: 'Active',
  },
  {
    id: 8,
    status: 'PEND',
    category: 'OPEN_SOURCE',
    title: 'Open-Source Retro Telemetry OS Component Framework',
    desc: 'Package window state engine, Web Audio oscillators, and Three.js CRT visualizer.',
    date: 'Queued',
  },
]

export default function SystemDirectivesWindow({
  isOpen,
  isMinimized,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
}) {
  const [directives, setDirectives] = useState(INITIAL_DIRECTIVES)
  const [filter, setFilter] = useState('ALL') // 'ALL' | 'ACTIVE' | 'DONE'
  const [reloadKey, setReloadKey] = useState(0)

  const handleToggle = (id) => {
    soundFx.playClick()
    setDirectives((prev) =>
      prev.map((d) =>
        d.id === id
          ? { ...d, status: d.status === 'DONE' ? 'PEND' : 'DONE' }
          : d
      )
    )
  }

  const handleResetTypewriter = () => {
    soundFx.playExec()
    setReloadKey((k) => k + 1)
  }

  const filtered = directives.filter((d) => {
    if (filter === 'ACTIVE') return d.status === 'PEND'
    if (filter === 'DONE') return d.status === 'DONE'
    return true
  })

  const completedCount = directives.filter((d) => d.status === 'DONE').length
  const totalCount = directives.length
  const pct = Math.round((completedCount / totalCount) * 100)

  return (
    <DraggableWindow
      id="directives"
      title="SYSTEM_DIRECTIVES // GOALS & FUTURE PROTOCOLS"
      isOpen={isOpen}
      isMinimized={isMinimized}
      onClose={() => onClose('directives')}
      onMinimize={onMinimize}
      onFocus={onFocus}
      zIndex={zIndex}
      width="max-w-2xl"
      titleBg="bg-[#000080]"
      headerIcon="checklist"
      initialPosition={{ x: 60, y: 50 }}
    >
      <div className="bg-[#141419] text-[#f4f1de] font-code-terminal p-4 space-y-3.5 text-[12px]">
        {/* Header HUD */}
        <div className="bg-black text-white p-3 win-bevel-inset flex justify-between items-center flex-wrap gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold text-[13px]">&gt; ACTIVE SYSTEM DIRECTIVES:</span>
              <span className="text-amber-300 font-mono text-[11px] font-bold">
                {completedCount}/{totalCount} EXECUTED ({pct}%)
              </span>
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5">
              Personal engineering roadmap &amp; long-term protocol directives.
            </p>
          </div>

          <button
            onClick={handleResetTypewriter}
            className="win-bevel-button bg-[#242330] hover:bg-[#343340] text-gray-300 px-2 py-1 text-[10px] font-bold cursor-pointer"
            title="Re-run Typewriter Stream"
          >
            ↻ RE-STREAM
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="flex items-center justify-between gap-2 border-b border-[#2e2d3e] pb-2 flex-wrap">
          <div className="flex gap-1 text-[10px]">
            {['ALL', 'ACTIVE', 'DONE'].map((f) => (
              <button
                key={f}
                onClick={() => {
                  soundFx.playClick()
                  setFilter(f)
                }}
                className={`px-2 py-0.5 win-bevel-outset font-bold cursor-pointer ${
                  filter === f
                    ? 'bg-[#000080] text-white'
                    : 'bg-[#242330] text-gray-400 hover:text-white'
                }`}
              >
                {f === 'ACTIVE' ? 'ACTIVE (PENDING)' : f === 'DONE' ? 'EXECUTED (DONE)' : 'ALL DIRECTIVES'}
              </button>
            ))}
          </div>

          <span className="text-[10px] text-gray-400 font-mono">
            CLICK [ ] TO TOGGLE STATUS
          </span>
        </div>

        {/* Directives List */}
        <div key={reloadKey} className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
          {filtered.map((d, index) => {
            const isDone = d.status === 'DONE'
            return (
              <div
                key={d.id}
                onClick={() => handleToggle(d.id)}
                className={`p-2.5 win-bevel-inset border border-[#2e2d3e] cursor-pointer transition-all hover:border-[#81b29a] ${
                  isDone ? 'bg-[#181822]/80 opacity-85' : 'bg-[#1e1e2c]'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {/* Status checkbox box */}
                  <span
                    className={`font-mono text-[14px] font-bold leading-none select-none flex-shrink-0 mt-0.5 ${
                      isDone ? 'text-emerald-400' : 'text-amber-400'
                    }`}
                  >
                    [{isDone ? 'X' : ' '}]
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[12px] font-bold tracking-wide ${
                          isDone ? 'text-emerald-300 line-through' : 'text-white'
                        }`}
                      >
                        <TypewriterText
                          text={d.title}
                          delay={16}
                          startDelay={index * 220}
                          showCursor={!isDone}
                        />
                      </span>
                      <span className="text-[9px] bg-[#121218] text-gray-400 px-1.5 py-0.5 win-bevel-outset font-mono flex-shrink-0">
                        {d.category}
                      </span>
                    </div>

                    <p className="text-[11px] text-gray-400 mt-0.5 font-mono">
                      &gt; {d.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400">
          <span>DIRECTIVE PROTOCOL: ENGAGED</span>
          <span className="text-[#81b29a] font-bold">TYPE &quot;directives&quot; IN CLI TO OPEN</span>
        </div>
      </div>
    </DraggableWindow>
  )
}
